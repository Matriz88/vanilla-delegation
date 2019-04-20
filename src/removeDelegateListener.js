const {_isValidString, _createKey} = require('./utils/utils');

/**
 *
 * @param {string} eventType
 * @param {string} selector
 * @param {function} handler
 * @param {boolean} useCapture
 */
const removeDelegateListener = function removeDelegateListener (eventType, selector, handler, useCapture = false) {
  if (!_isValidString(eventType) || !_isValidString(selector) || typeof handler !== 'function' || handler.name === '') {
    console.warn('Cannot remove event. Wrong arguments types or handler is anonymous. Cannot unbind anonymous functions.');
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

module.exports = removeDelegateListener;
