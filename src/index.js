(function () {
    // polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.oMatchesSelector;
    }

    Element.prototype.delegator = function (eventType, selector, listener, useCapture = false) {
        let listenerHandler = function (selector, listener, event) {
            // recursive matcher
            const recurseMatch = function (element, selector) {
                if (element.nodeType === Node.DOCUMENT_NODE || element.nodeType === Node.DOCUMENT_TYPE_NODE) return false;
                return element.matches(selector) ? element : (element.parentElement != null) ? recurseMatch(element.parentElement, selector) : false;
            };

            let elementDelegate = recurseMatch(event.target, selector);
            if (elementDelegate) {
                listener.call(elementDelegate, event);
            }
        }.bind(this, selector, listener);

        document.addEventListener(eventType, listenerHandler, useCapture);

        return {
            off: function (useCapture) {
                document.removeEventListener(eventType, listenerHandler, useCapture);
                listenerHandler = null;
            }.bind(this, useCapture)
        }
    }
})();