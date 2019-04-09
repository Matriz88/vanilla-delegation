# Event delegation

### How it works
The scripts creates a new method on `Element` prototype with following signature.
```text
Element.prototype.delegator(eventType, selector, listener, useCapture)
```

- **eventType**: [string] event type, for example "click", "focus", etc...
- **selector**: [string] css child selector, must be a child of Element.
- **listener**: [function] callback function, original event obj is passed as argument.
- **useCapture**: [bool|optional] Default: `false`; Indicates whether events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree. See [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).

### How to use
```javascript
require('delegator.js');

// get an element
let body = document.querySelector('body');

// bind event with delegation
let myDelegatedHandler = body.delegator('click', 'a', function (e) {
    e.preventDefault();
    alert('link clicked!');
});

// remove the listener
myDelegatedHandler.off();
```

### Support
- IE 11+
- Edge 12+
- Firefox 34+
- Chrome 4+
- Safari 5+
- Opera 21+
