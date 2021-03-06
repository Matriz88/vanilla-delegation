const _getMatchedElement = require('./_getMatchedElement');

/**
 * create internal handler
 * @param attachedElement
 * @param selector
 * @param handler
 */
const _createInternalHandler = function (attachedElement, selector, handler) {

  return function (selector, handler, event) {

    let matchedElement = _getMatchedElement(this, event.target, selector);

    if (matchedElement) {
      // save Element to which the event was originally attached (jQuery-like)
      event.delegateTarget = this;
      handler.call(matchedElement, event);

    }
  }.bind(attachedElement, selector, handler);
};

module.exports = _createInternalHandler;
