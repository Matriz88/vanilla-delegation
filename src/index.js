(function () {
    // polyfill IE9+
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector;
    }

    Element.prototype.delegator = function (eventType, selector, _callback) {
        document.addEventListener(eventType, function (selector, _callback, event) {
            // recursive matcher
            const recurseMatch = function (element, selector) {
                return element.matches(selector) || (element.parentElement != null && recurseMatch(element.parentElement, selector))
            };

            if (recurseMatch(event.target, selector)) {
                _callback(event);
            }
        }.bind(this, selector, _callback));
    };
})();
