# Event delegation
Light vanilla event delegation.

* [How to use](#how-to-use)
* [Add listener](#add-listener)
* [Remove listener](#remove-listener)
* [How listener delegation works](/extras/how-delegation-lookup-works.md) :arrow_upper_right:
* [Performance tests](/extras/performance-test.md) :arrow_upper_right:

## How to use

The scripts creates new methods on `Element` and `NodeList` prototypes with following signature.
```text
Add:
Element.prototype.addDelegateListener(eventType, selector, handler)
NodeList.prototype.addDelegateListener(eventType, selector, handler)

Remove:
Element.prototype.removeDelegateListener(eventType, selector, handler)
```

- **eventType**: [string] event type, for example "click", "focus", etc...
- **selector**: [string] css child selector, must be a child of Element.
- **handler**: [function] callback function, original event obj is passed as argument ([more details here](#handler-function)).<br />
Be sure to pass a named function so you can remove it with `removeDelegateListener()` if needed. In case you're using uglify-js be sure to set `keep_fnames: true` in your `uglifyOptions` ([more details here](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/#uglifyoptions))

## Add listener

```javascript
require('vanilla-delegation.js');

// get single element
const body = document.querySelector('body');

// bind listener with delegation
body.addDelegateListener('click', 'a', function handlerFn(event) {
    event.preventDefault();
    alert('link clicked!');
});
```
Also can be used with `querySelectorAll`
```javascript
require('vanilla-delegation.js');

// get multiple elements
const div = document.querySelectorAll('div');

// bind listener with delegation on every element in NodeList
div.addDelegateListener('click', 'a', function handlerFn(event) {
    event.preventDefault();
    alert('link clicked!');
});
```

## Remove listener
In order to remove a listener be sure to pass a named function to `removeDelegateListener()`
```javascript
const div = document.querySelector('div');
div.removeDelegateListener('click', 'a', handlerFn);
```

`removeDelegateListener()` can be used on single Element nodes only

---

#### Handler function
`Event` is passed to handler function as argument.

`this` is the element matching `selector`.

`event.delegateTarget` is Element to which the event was originally attached (jQuery-like)

### Polyfill (IE9+ support)

A global polyfill is set by default:

See https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill

### Support
- (latest 2 versions)
- IE 11
