# Vanilla-delegation

[![npm version](https://badge.fury.io/js/vanilla-delegation.svg)](https://badge.fury.io/js/vanilla-delegation) [![Build Status](https://travis-ci.org/Matriz88/vanilla-delegation.svg?branch=master)](https://travis-ci.org/Matriz88/vanilla-delegation) ![David](https://img.shields.io/david/Matriz88/vanilla-delegation) ![NPM](https://img.shields.io/npm/l/vanilla-delegation) ![](https://github.com/Matriz88/vanilla-delegation/workflows/Build%20%26%20Tests/badge.svg)

Light vanilla event delegation.

* [How to install](#-how-to-install)
* [How to use](#️-how-to-use)
   * [Add listener](#-add-listener)
   * [Remove listener](#-remove-listener)
* [Handler function details](#handler-function)
* [Global polyfill](#global-polyfill-ie9-support)

Extras
* [📚 How listener delegation works](/extras/how-delegation-lookup-works.md)
* [⚡ Performance tests](/extras/performance-test.md)
* [✔️ Tests coverage](https://matriz88.github.io/vanilla-delegation/extras/coverage_reports/lcov-report/index.html)
* [📄 Github pages](https://matriz88.github.io/vanilla-delegation/)

---

## 🔧 How to install

Install from npm and require it in your script.

```
$ npm install vanilla-delegation --save
```
```javascript
require('vanilla-delegation');
```
or import the script in your html document:
```html
<script rel="https://unpkg.com/vanilla-delegation/dist/vanilla-delegation.min.js" />
```
## ✏️ How to use
The script implements new methods on `Element`, `NodeList` and `HTMLCollection`.
```javascript
// Add
Element.addDelegateListener(eventType, selector, handler, useCapture = false)
NodeList.addDelegateListener(eventType, selector, handler, useCapture = false)
HTMLCollection.addDelegateListener(eventType, selector, handler, useCapture = false)

// Remove
Element.removeDelegateListener(eventType, selector, handler, useCapture = false)
```

- **eventType**: [string] A case-sensitive string representing the event type to listen for.
- **selector**: [string] css child selector, must be a child of Element.
- **handler**: [function] callback function, original event obj is passed as argument ([more details here](#handler-function)).<br />
Be sure to pass a named function so you can remove it with `removeDelegateListener()` if needed. Be aware in case you're using a minifier like uglify-js be sure to set `keep_fnames: true` in your `uglifyOptions` ([more details here](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/#uglifyoptions))
- **useCapture**: [boolean] native useCapture parameter (default `false`). See [here](https://developer.mozilla.org/it/docs/Web/API/Element/addEventListener) for more details.

### ➕ Add listener

```javascript
// get single element
const body = document.querySelector('body');

// bind listener with delegation
body.addDelegateListener('click', 'a', function handlerFn(event) {
    event.preventDefault();
    alert('link clicked!');
});
```
Also can be used with `querySelectorAll`, `getElementsByClassName`, `getElementsByTagName`, `getElementsByTagNameNS`
```javascript
// get multiple elements
const div = document.querySelectorAll('div');

// bind listener with delegation on every element in NodeList (or HTMLCollection)
div.addDelegateListener('click', 'a', function handlerFn(event) {
    event.preventDefault();
    alert('link clicked!');
});
```

### ➖ Remove listener
In order to remove a listener be sure to pass a named function to `removeDelegateListener()`
```javascript
const div = document.querySelector('div');
div.removeDelegateListener('click', 'a', handlerFn);
```

`removeDelegateListener()` can be used on single Element nodes only

## Handler function
`Event` is passed to handler function as argument.

`this` is the element matching `selector`.

`event.delegateTarget` is the Element to which the event was originally attached (jQuery-like)

---

### Global polyfill (IE9+ support)

A global polyfill is included by default with vanilla-delegation:

See https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill

### Support
- (latest 2 versions)
- IE 11
