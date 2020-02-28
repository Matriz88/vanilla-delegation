/* eslint-disable */
import '../../../vanilla-delegation';
// const delegate = require('delegate'); //npm install delegate -D

(function () {
  const prepareDom = function () {
    let counter = 0;
    const max = 1000;
    const recursAppend = function (el) {
      if (counter === max) return false;
      const newEl = document.createElement(counter === max - 1
        ? 'span'
        : 'p');
      el.appendChild(newEl);
      counter++;
      recursAppend(newEl);
    };

    const section = document.querySelector('section');
    recursAppend(section);
  };

  prepareDom();


  const spanElement = document.querySelector('span');
  let t0;
  let t1;


  // delegate test
  //
  // delegate(document.querySelector('body'), 'section', 'click', (e) => {
  //   t1 = performance.now();
  //   console.log(t1 - t0);
  // }, false);

  // jQuery test
  //
  // $('body').
  //   on('click', 'section', (e) => {
  //     t1 = performance.now();
  //     console.log(t1 - t0);
  //   });

  // vanilla-delegation test
  //
  // document.querySelector('body').
  //   addDelegateListener('click', 'section', (e) => {
  //     t1 = performance.now();
  //     console.log(t1 - t0);
  //   });

  // run 100 clicks
  let i = 100;
  while (i--) {
    t0 = performance.now();
    spanElement.click();
  }
}());
