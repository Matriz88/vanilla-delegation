const { isValidString, createKey } = require('./utils/utils');
const createInternalHandler = require('./utils/_createInternalHandler');

/**
 * _addDelegateListenerInternal
 * @param {string} eventType
 * @param {string} selector
 * @param {function} handler
 * @param {boolean} useCapture
 */
const addDelegateListenerInternal = function _addDelegateListenerInternal(eventType, selector, handler, useCapture) {
  const handlerHash = createKey([
    handler.name,
    selector,
    useCapture,
  ]);

  if (this.delegatedListenersList && handlerHash in this.delegatedListenersList) {
    console.warn('Cannot bind event. A listener with same arguments is already registered. '
      + 'If you need to register multiple listeners with same arguments consider to pass an anonymous function as handler, '
      + 'but be aware that you won\'t be able to remove the listener in the future.');
    return;
  }

  const internalHandler = createInternalHandler(this, selector, handler);

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
 */
const addDelegateListener = function addDelegateListener(
  eventType,
  selector,
  handler,
  useCapture = false,
) {
  if (!isValidString(eventType) || !isValidString(selector) || typeof handler !== 'function') {
    console.warn('Cannot bind event. Wrong arguments types');
    return;
  }

  if (this instanceof NodeList || this instanceof HTMLCollection) {
    const { length } = this;
    for (let i = 0; i < length; i += 1) {
      addDelegateListenerInternal.call(this[i], eventType, selector, handler, useCapture);
    }
    return;
  }

  if (this instanceof Element) {
    addDelegateListenerInternal.call(this, eventType, selector, handler, useCapture);
    return;
  }

  console.warn('Cannot bind event on non-Element objects');
};

module.exports = addDelegateListener;
