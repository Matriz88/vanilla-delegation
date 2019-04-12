const createHandler = require('./createInternalHandler');
//const crypto = require('crypto');

(function () {
    /**
     *
     * @param {string} text
     * @returns {string}
     */
    const createHash = function (text) {
        return text;
        // const hash = crypto.createHash('sha1');
        //
        // hash.update(text);
        // return hash.digest('hex');
    };

    /**
     * addDelegateListenerInternal
     * @param {Event} eventType
     * @param {string} selector
     * @param {function} handler
     * @returns {boolean}
     */
    const addDelegateListenerInternal = function (eventType, selector, handler) {

        const handlerHash = createHash(handler.name + selector);

        if (this.delegatedListenersList && handler.name in this.delegatedListenersList) {
            console.warn('Cannot bind event. Handler and selector already registered');
            return false;
        }

        let internalHandler = createHandler(this, selector, handler);

        this.addEventListener(eventType, internalHandler, false);

        if (!this.delegatedListenersList)
            this.delegatedListenersList = [];

        this.delegatedListenersList[handlerHash] = {
            eventType,
            internalHandler
        }
    };

    /**
     * addDelegateListener
     * @param {Event} eventType
     * @param {string} selector
     * @param {function} handler
     */
    const addDelegateListener = function (eventType, selector, handler) {
        if (typeof eventType !== 'string') {
            console.warn('Cannot bind event. EventType must be a string.');
            return;
        }

        if (typeof selector !== 'string') {
            console.warn('Cannot bind event. Selector must be a string.');
            return;
        }

        if (typeof handler !== 'function' || handler.name === '') {
            console.warn('Cannot bind event. Handler must be a named function in order to safely remove it later.');
            return;
        }

        if (this instanceof NodeList) {
            const length = this.length;
            for (let i = 0; i < length; ++i) {
                addDelegateListenerInternal.call(this[i], eventType, selector, handler);
            }
            return;
        }

        if (this instanceof Element) {
            addDelegateListenerInternal.call(this, eventType, selector, handler);
            return;
        }

        console.warn('Cannot bind event on non-Element objects');
    };

    /**
     *
     * @param {Event} eventType
     * @param {string} selector
     * @param {function} handler
     */
    const removeDelegateListener = function (eventType, selector, handler) {
        if (typeof eventType !== 'string') {
            console.warn('Cannot remove event. EventType must be a string.');
            return;
        }

        if (typeof selector !== 'string') {
            console.warn('Cannot remove event. Selector must be a string.');
            return;
        }

        if (typeof handler !== 'function' || handler.name === '') {
            console.warn('Cannot remove event. Handler must be a named function in order to safely remove it later.');
            return;
        }

        const key = createHash(handler.name + selector);

        if (this.delegatedListenersList && key in this.delegatedListenersList) {
            this.removeEventListener(this.delegatedListenersList[key].eventType, this.delegatedListenersList[key].internalHandler, false);
            delete this.delegatedListenersList[key];
        }
    };

    Element.prototype.addDelegateListener = addDelegateListener;
    Element.prototype.removeDelegateListener = removeDelegateListener;
    NodeList.prototype.addDelegateListener = addDelegateListener;
})();