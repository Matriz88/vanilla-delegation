const _createHandler = require('./src/createInternalHandler')

;(function () {
  /**
   * in case string alteration needed in the future
   * @param {Array} text
   * @returns {string}
   */
  const _createKey = function (text) {
    return text.join('')
  };

  const isValidString = function (eventType) {
    return typeof eventType === 'string' && eventType !== '';
  };

  /**
   * _addDelegateListenerInternal
   * @param {string} eventType
   * @param {string} selector
   * @param {function} handler
   * @param {boolean} useCapture
   * @returns {undefined}
   */
  const _addDelegateListenerInternal = function (eventType, selector, handler, useCapture) {
    const handlerHash = _createKey([
      handler.name,
      selector,
      useCapture
    ]);

    if (this.delegatedListenersList && handlerHash in this.delegatedListenersList) {
      console.warn('Cannot bind event. A listener with same arguments is already registered. ' +
        'If you need to register multiple listeners with same arguments consider to pass an anonymous function as handler, ' +
        'but be aware that you won\'t be able to remove the listener in the future.');
      return;
    }

    let internalHandler = _createHandler(this, selector, handler);

    this.addEventListener(eventType, internalHandler, useCapture);

    if (!this.delegatedListenersList) this.delegatedListenersList = [];

    if (handler.name === '') return;

    this.delegatedListenersList[handlerHash] = {
      eventType,
      internalHandler,
    };
  };

  /**
   * addDelegateListener
   * @param {string} eventType
   * @param {string} selector
   * @param {function} handler
   * @param {boolean} useCapture
   * @returns {undefined}
   */
  const addDelegateListener = function (eventType, selector, handler, useCapture = false) {
    if (!isValidString(eventType) || !isValidString(selector) || typeof handler !== 'function') {
      console.warn('Cannot bind event. Wrong arguments types');
      return;
    }

    if (this instanceof NodeList) {
      const length = this.length;
      for (let i = 0; i < length; ++i) {
        _addDelegateListenerInternal.call(this[i], eventType, selector, handler, useCapture)
      }
      return;
    }

    if (this instanceof Element) {
      _addDelegateListenerInternal.call(this, eventType, selector, handler, useCapture);
      return;
    }

    console.warn('Cannot bind event on non-Element objects');
  };

  /**
   *
   * @param {string} eventType
   * @param {string} selector
   * @param {function} handler
   * @param {boolean} useCapture
   */
  const removeDelegateListener = function (eventType, selector, handler, useCapture = false) {
    if (!isValidString(eventType) || !isValidString(selector) || typeof handler !== 'function' || handler.name === '') {
      console.warn('Cannot remove event. Wrong arguments types');
      return
    }

    const key = _createKey([
      handler.name,
      selector,
      useCapture
    ]);

    if (this.delegatedListenersList && key in this.delegatedListenersList) {
      this.removeEventListener(this.delegatedListenersList[key].eventType, this.delegatedListenersList[key].internalHandler, false);
      delete this.delegatedListenersList[key]
    }
  };

  window.Element.prototype.addDelegateListener = addDelegateListener;
  window.Element.prototype.removeDelegateListener = removeDelegateListener;
  window.NodeList.prototype.addDelegateListener = addDelegateListener
})();
