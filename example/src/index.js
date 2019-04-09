require('../../dist/delegator.js');

(function () {
    let body = document.querySelector('body');

    // bind event with delegation
    window.myevent = body.delegator('click', 'a', function (e) {
        e.preventDefault();
        console.log('link clicked!');
        console.log(this);
    });
    console.log('type: myevent.off() to remove the listener')
})();