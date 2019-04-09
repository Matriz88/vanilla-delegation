(function () {
    Element.prototype.addDelegateListener = function (eventType, selector, listener, useCapture = false) {
        /**
         * create listener handler
         * @param selector
         * @param listener
         * @param event
         */
        let listenerHandler = function (selector, listener, event) {

            /**
             * recursive matcher
             * @param element
             * @param selector
             * @returns {boolean|{matches}}
             */
            const getMatchedElement = (element, selector) => {
                const matchesSelector = element.matches
                    || element.webkitMatchesSelector
                    || element.mozMatchesSelector
                    || element.msMatchesSelector;

                if (element.nodeType === Node.DOCUMENT_NODE) return false;

                return matchesSelector.call(element, selector)
                    ? element
                    : (element.parentElement != null && element !== this) ? getMatchedElement(element.parentElement, selector) : false;
            };

            // find the matched element
            // can be Element or false
            let elDelegate = getMatchedElement(event.target, selector);

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