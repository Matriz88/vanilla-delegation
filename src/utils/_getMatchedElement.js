/**
 * apply polyfill
 */

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
/**
 * matcher
 * @param attachedElement
 * @param element
 * @param selector
 * @returns {boolean|Element}
 */
const _getMatchedElement = function (attachedElement, element, selector) {
  // node.ELEMENT_NODE;
  const ELEMENT_NODE = 1;

  for (let el = element; el && el.nodeType === ELEMENT_NODE && el !== attachedElement; el = el.parentElement) {
    if (el.matches(selector)) return el;
  }

  return attachedElement.nodeType === ELEMENT_NODE && attachedElement.matches(selector) ? attachedElement : false;
};

module.exports = _getMatchedElement;

