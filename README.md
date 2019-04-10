# Event delegation
Light vanilla event delegation.

### How it works
The scripts creates a new method on `Element` prototype with following signature.
```text
Element.prototype.addDelegateListener(eventType, selector, handler)
NodeList.prototype.addDelegateListener(eventType, selector, handler)
```

- **eventType**: [string] event type, for example "click", "focus", etc...
- **selector**: [string] css child selector, must be a child of Element.
- **handler**: [function] callback function, original event obj is passed as argument.

### How to use
```javascript
require('event-delegation.js');

// get an element
let body = document.querySelector('body');

// bind event with delegation
let myDelegatedHandler = body.addDelegateListener('click', 'a', function (event) {
    event.preventDefault();
    alert('link clicked!');
});

// remove the listener
myDelegatedHandler.off();
```

#### Handler
`Event` is passed to handler function as argument.

`this` is the element matching `selector`.

`event.delegateTarget` is Element to which the event was originally attached (jQuery-like)

### Polyfill (IE9+ support)

A global polyfill is set by default:

See https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill

### Support
- (latest 2 versions)
- IE 11+