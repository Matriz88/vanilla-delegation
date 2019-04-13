# Event delegation
Light vanilla event delegation.

* [How to use](#how-to-use)
* [Add listener](#add-listener)
* [Remove listener](#remove-listener)
* [How listener delegation works](/demo/how-delegation-lookup-works.md)

## How to use

The scripts creates a new method on `Element` prototype with following signature.
```text
Element.prototype.addDelegateListener(eventType, selector, handler)
NodeList.prototype.addDelegateListener(eventType, selector, handler)
```

- **eventType**: [string] event type, for example "click", "focus", etc...
- **selector**: [string] css child selector, must be a child of Element.
- **handler**: [function] callback function, original event obj is passed as argument.

## Add listener

```javascript
require('event-delegation.js');

// get single element
const body = document.querySelector('body');

// bind event with delegation
body.addDelegateListener('click', 'a', function (event) {
    event.preventDefault();
    alert('link clicked!');
});

// remove the listener later
listener.off();
```
Also can be used with `querySelectorAll`
```javascript
require('event-delegation.js');

// get multiple elements
const div = document.querySelectorAll('div');

// bind event with delegation on every element in NodeList
div.addDelegateListener('click', 'a', function (event) {
    event.preventDefault();
    alert('link clicked!');
});

// remove all listeners
listeners.forEach(listener => listener.off());
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