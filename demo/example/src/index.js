require('../../../event-delegation.js');

(function () {
    /**
     * bind event on single element
     */

    window.bodyHandler = function bodyHandler(e) {
        e.preventDefault();
        console.log('listen body; delegate a', this, e);
    };
    document.querySelector('body').addDelegateListener('click', 'a', bodyHandler);

    /**
     * bind event on multiple elements
     */
    window.divHandler = function divHandler(e) {
        console.log('listen div; delegate p', this, e);
    };
    document.querySelectorAll('div').addDelegateListener('click', 'p', divHandler);

    console.log('window.bodyHandler and window.divHandler have been respectively registered on <body> and <div> elements in this page');
    console.log(`to remove these handlers use document.querySelector('body').removeDelegateListener('click', 'a', window.bodyHandler)`);
    console.log(`you can use removeDelegateListener() on single Element nodes only`);
})();