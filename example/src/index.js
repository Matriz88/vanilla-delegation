require('../../dist/event-delegation.js');

(function () {
    // bind event with delegation
    window.myevent = document.querySelector('body').addDelegateListener('click', 'a', function (e) {
        e.preventDefault();
        console.log('listen body; delegate a',this);
    });

    window.myevent2 = document.querySelector('section').addDelegateListener('click', 'p', function (e) {
        e.preventDefault();
        console.log('listen section; delegate p', this);
    });

    window.myevent3 = document.querySelector('pre').addDelegateListener('click', 'code', function (e) {
        e.preventDefault();
        console.log('listen pre; delegate code', this);
    });

    window.myevent4 = document.querySelector('section').addDelegateListener('click', 'section', function (e) {
        e.preventDefault();
        console.log('listen section; delegate section', this);
    });

    window.myevent5 = document.querySelector('section').addDelegateListener('click', 'body', function (e) {
        e.preventDefault();
        console.log('listen section; delegate body', this);
    });

    console.log('use myevent.off() to remove the listener')
})();