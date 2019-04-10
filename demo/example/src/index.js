require('../../../dist/event-delegation.js');

(function () {
    /**
     * bind event on single element
     */
    window.singleEvent = document.querySelector('body').addDelegateListener('click', 'a', function (e) {
        e.preventDefault();
        console.log('listen body; delegate a', this, e);
    });

    /**
     * bind event on multiple elements
     */
    window.multipleEvents = document.querySelectorAll('div').addDelegateListener('click', 'p', function (e) {
        console.log('listen div; delegate p', this, e);
    });

    console.log('use singleEvent.off() to remove the listener');
    console.log('use multipleEvents.forEach(element => element.off()) to remove all multiple listeners');
})();