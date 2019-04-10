require('../../../dist/event-delegation.js');
const delegate = require('delegate');
(function () {
    const NESTED_CHILDREN = 1000;
    let DOMBlocks = 5;
    const prepareDom = function () {
        let counter = 0;

        const recursAppend = function (el) {
            if (counter === NESTED_CHILDREN) return false;
            let newEl = document.createElement((counter === NESTED_CHILDREN - 1) ? 'span' : "p");
            el.appendChild(newEl);
            counter++;
            recursAppend(newEl);
        };

        let section = document.querySelector('section');
        recursAppend(section);

    };

    /**
     * prepare dom blocks N times
     * recursively inject nested <p> inside section, last child will be <span> (colored green to make clickable)
     */

    while (--DOMBlocks) {
        prepareDom();
    }

    /**
     * de-comment the one you want to test
     * 1) delegate (https://www.npmjs.com/package/delegate)
     * 2) event-delegation
     */

    /**
     * 1)
     */
    // delegate(document.querySelector('body'), 'section', 'click', function (e) {
    //     //console.log("clicked!");
    // }, false);

    /**
     * 2)
     */
    // document.querySelector('body').addDelegateListener('click', 'section', function (e) {
    //     //console.log("clicked!");
    // });

    /**
     * results:
     * at first hit, event-delegation is faster (~10% faster).
     * When objects are cached in memory both are equally fast.
     */

})();