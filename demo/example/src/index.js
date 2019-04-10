require('../../../dist/event-delegation.js');

(function () {
    // bind event with delegation
    window.myevent = document.querySelector('body').addDelegateListener('click', 'a', function (e) {
        e.preventDefault();
        console.log('listen body; delegate a', this, e);
    });
    window.myevent2 = document.querySelectorAll('div').addDelegateListener('click', 'p', function (e) {
        console.log('listen div; delegate p', this, e);
    });
    // window.myevent3 = document.querySelector('pre').addDelegateListener('click', 'code', function (e) {
    //     console.log('listen pre; delegate code', this, e);
    // });
    // window.myevent4 = document.querySelector('section').addDelegateListener('click', 'section', function (e) {
    //     console.log('listen section; delegate section', this, e);
    // });
    // window.myevent5 = document.querySelector('section').addDelegateListener('click', 'body', function (e) {
    //     console.log('listen section; delegate body', this, e);
    // });

    console.log('use myevent.off() to remove the listener')
})();