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
      // save Element to which the event was originally attached (jQuery-like)
      event.delegateTarget = this;
      handler.call(matchedElement, event);
    }
  };
};

module.exports = createInternalHandler;
