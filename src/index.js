(function () {
    Element.prototype.delegator = function (eventType, selector, listener, useCapture = false) {
        /**
         * create listener handler
         * @param {string} selector
         * @param {EventListener} listener
         * @param {Event} event
         */
        let listenerHandler = function (selector, listener, event) {

            /**
             * recursive matcher
             * @param {Element} element
             * @param {string} selector
             */
            const recurseMatch = (element, selector) => {
                const matchesSelector = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector;
                if (element === this) return element;
                if (element.nodeType === Node.DOCUMENT_NODE || element.nodeType === Node.DOCUMENT_TYPE_NODE) return false;
                return matchesSelector.call(element, selector) ? element : (element.parentElement != null) ? recurseMatch(element.parentElement, selector) : false;
            };

            let elDelegate = recurseMatch(event.target, selector);
            
            if (elDelegate) {
                listener.call(elDelegate, event);
            }
        }.bind(this, selector, listener);


        this.addEventListener(eventType, listenerHandler, useCapture);

        return {
            off: () => {
                this.removeEventListener(eventType, listenerHandler, useCapture);
                listenerHandler = null;
            }
        }
    }
})();