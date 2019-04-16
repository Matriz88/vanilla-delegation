const _createHandler = require('./src/createInternalHandler')

;(function () {
  /**
   * in case string alteration needed in the future
   * @param {string} text
   * @returns {string}
   */
  const _createKey = function (text) {
    return text
  };

  /**
   * _addDelegateListenerInternal
   * @param {string} eventType
   * @param {string} selector
   * @param {function} handler
   * @returns {boolean}
   */
  const _addDelegateListenerInternal = function (eventType, selector, handler) {
    if (this.delegatedListenersList && handler.name in this.delegatedListenersList) {
      console.warn('Cannot bind event. Handler and selector already registered');
      return false
    }

    let internalHandler = _createHandler(this, selector, handler);

    this.addEventListener(eventType, internalHandler, false);

    if (!this.delegatedListenersList) this.delegatedListenersList = [];

    if (handler.name === '') return true;

    const handlerHash = _createKey(handler.name + selector);
    this.delegatedListenersList[handlerHash] = {
      eventType,
      internalHandler,
    }
  };

  /**
   * addDelegateListener
   * @param {string} eventType
   * @param {string} selector
   * @param {function} handler
   */
  const addDelegateListener = function (eventType, selector, handler) {
    if (typeof eventType !== 'string' || typeof selector !== 'string' || typeof handler !== 'function') {
      console.warn('Cannot bind event. Wrong arguments types');
      return false
    }

    if (this instanceof NodeList) {
      const length = this.length;
      for (let i = 0; i < length; ++i) {
        _addDelegateListenerInternal.call(this[i], eventType, selector, handler)
      }
      return true
    }

    if (this instanceof Element) {
      _addDelegateListenerInternal.call(this, eventType, selector, handler);
      return true
    }

    console.warn('Cannot bind event on non-Element objects');
    return false
  };

  /**
   *
   * @param {string} eventType
   * @param {string} selector
   * @param {function} handler
   */
  const removeDelegateListener = function (eventType, selector, handler) {
    if (typeof eventType !== 'string' || typeof selector !== 'string' || typeof handler !== 'function' || handler.name === '') {
      console.warn('Cannot remove event. Wrong arguments types');
      return
    }

    const key = _createKey(handler.name + selector);

    if (this.delegatedListenersList && key in this.delegatedListenersList) {
      this.removeEventListener(this.delegatedListenersList[key].eventType, this.delegatedListenersList[key].internalHandler, false);
      delete this.delegatedListenersList[key]
    }
  };

  window.Element.prototype.addDelegateListener = addDelegateListener;
  window.Element.prototype.removeDelegateListener = removeDelegateListener;
  window.NodeList.prototype.addDelegateListener = addDelegateListener
})();
