const DOCUMENT_NODE = 9;

if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector;
}
/**
 * matcher
 * @param attachedElement
 * @param element
 * @param selector
 * @returns {boolean|{matches}}
 */
const getMatchedElement = function (attachedElement, element, selector) {
    for (let el = element; el && el.nodeType !== DOCUMENT_NODE && el !== attachedElement; el = el.parentElement) {
        if (el.matches(selector))
            return el;
    }

    return attachedElement.matches(selector) ? attachedElement : false;
};

module.exports = getMatchedElement;