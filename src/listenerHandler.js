const getMatchedElement = require('./getMatchedElement');

/**
 * create listener handler
 * @param originalElement
 * @param selector
 * @param listener
 */
const listenerHandler = function (originalElement, selector, listener) {
    return function (selector, listener, event) {
        let t0 = performance.now();

        // find the matched element
        // can be Element or false
        let elDelegate = getMatchedElement(this, event.target, selector);

        if (elDelegate) {
            let t1 = performance.now();
            console.log(t1 - t0);
            listener.call(elDelegate, event);
        }
    }.bind(originalElement, selector, listener);
};

module.exports = listenerHandler;