const listenerHandlerBuilder = require('./listenerHandler');

(function () {
    Element.prototype.addDelegateListener = function (eventType, selector, listener, useCapture = false) {

        let listenerHandler = listenerHandlerBuilder(this, selector, listener);

        this.addEventListener(eventType, listenerHandler, useCapture);

        return {
            off: () => {
                this.removeEventListener(eventType, listenerHandler, useCapture);
                listenerHandler = null;
            }
        }
    }
})();