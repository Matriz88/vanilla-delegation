(function () {
    // polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector;
    }

    Element.prototype.delegator = function (eventType, selector, _callback) {
        document.addEventListener(eventType, function (event) {
            // recursive matcher defined locally to improve GC clean-up
            const recurseMatch = function (element, selector) {
                return element.matches(selector) || (element.parentElement != null && recurseMatch(element.parentElement, selector))
            };

            if (recurseMatch(event.target, selector)) {
                _callback(event);
            }
        });
    };
}());