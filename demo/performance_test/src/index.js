require('../../../dist/event-delegation.js');
const delegate = require('delegate');
(function () {
    const prepareDom = function () {
        let counter = 0;
        let max = 1000;
        const recursAppend = function (el) {
            if (counter === max) return false;
            let newEl = document.createElement((counter === max - 1) ? 'span' : "p");
            el.appendChild(newEl);
            counter++;
            recursAppend(newEl);
        };

        let section = document.querySelector('section');
        recursAppend(section);

    };

    prepareDom();
    prepareDom();
    prepareDom();
    prepareDom();
    prepareDom();

    // delegate(document.querySelector('section'), 'body', 'click', function (e) {
    //     //console.log("clicked!");
    //     return true;
    // }, false);

    document.querySelector('body').addDelegateListener('click', 'section', function (e) {
        //console.log("clicked!");
        return true;
    });


})();