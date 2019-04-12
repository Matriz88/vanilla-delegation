require('../../../dist/event-delegation.js');

(function () {
    /**
     * bind event on single element
     */
    window.myhandler1 = function myhandler1(e) {
        e.preventDefault();
        console.log('listen body; delegate a', this, e);
    };
    window.singleEvent = document.querySelector('body').addDelegateListener('click', 'a', myhandler1);

    /**
     * bind event on multiple elements
     */
    window.myhandler2 = function myhandler2(e) {
        console.log('listen div; delegate p', this, e);
    };
    window.multipleEvents = document.querySelectorAll('div').addDelegateListener('click', 'p', myhandler2);

    console.log('use singleEvent.off() to remove the listener');
    console.log('use multipleEvents.forEach(element => element.off()) to remove all multiple listeners');
})();