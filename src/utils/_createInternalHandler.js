import getMatchedElement from './_getMatchedElement';

/**
 * create internal handler
 * @param attachedElement
 * @param selector
 * @param handler
 */
export default function createInternalHandler(attachedElement, selector, handler) {
  return function createInternalSubHandler(selectorInput, handlerInput, eventInput) {
    const matchedElement = getMatchedElement(this, eventInput.target, selectorInput);

    if (matchedElement) {
      // save Element to which the event was originally attached (jQuery-like)
      eventInput.delegateTarget = this;
      handlerInput.call(matchedElement, eventInput);
    }
  }.bind(attachedElement, selector, handler);
}
