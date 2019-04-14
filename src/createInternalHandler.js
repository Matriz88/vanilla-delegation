const _getMatchedElement = require('./getMatchedElement');

/**
 * create internal handler
 * @param attachedElement
 * @param selector
 * @param handler
 */
const createInternalHandler = function (attachedElement, selector, handler) {
  return function () {

    let matchedElement = _getMatchedElement(this, event.target, selector);

    if (matchedElement) {
      event.delegateTarget = this; // save Element to which the event was originally attached (jQuery-like)
      handler.call(matchedElement, event);
    }
  };
};

module.exports = createInternalHandler;
