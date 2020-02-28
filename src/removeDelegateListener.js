import { isValidString, createKey } from './utils/utils';

/**
 *
 * @param {string} eventType
 * @param {string} selector
 * @param {function} handler
 * @param {boolean} useCapture
 */
export default function removeDelegateListener(eventType, selector, handler, useCapture = false) {
  if (!isValidString(eventType) || !isValidString(selector) || typeof handler !== 'function' || handler.name === '') {
    console.warn('Cannot remove event. Wrong arguments types or handler is anonymous. Cannot unbind anonymous functions.');
    return;
  }

  const key = createKey([
    handler.name,
    selector,
    useCapture,
  ]);

  if (this.delegatedListenersList && key in this.delegatedListenersList) {
    this.removeEventListener(this.delegatedListenersList[key].eventType, this.delegatedListenersList[key].internalHandler, false);
    delete this.delegatedListenersList[key];
  }
}
