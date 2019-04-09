const DOCUMENT_NODE = 9;

if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector;
}
/**
 * recursive matcher
 * @param orig
 * @param element
 * @param selector
 * @returns {boolean|{matches}}
 */
const getMatchedElement = function (orig, element, selector) {
    for (let el = element; el && el.nodeType !== DOCUMENT_NODE; el = el.parentElement) {
        if (el.matches(selector))
            return el;
    }

    // while(element && element.nodeType !== DOCUMENT_NODE){
    //     if(element.matches(selector))
    //         return element;
    //     element = element.parentElement;
    // }
};

module.exports = getMatchedElement;