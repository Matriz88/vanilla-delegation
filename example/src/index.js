require('../../dist/delegator.js');

(function () {
    let section = document.querySelector("section");

    // bind event with delegation
    section.delegator("click", "a", function (e) {
        e.preventDefault();
        alert("link clicked!");
    });
})();