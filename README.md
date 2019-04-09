# Event delegation

### How it works
The scripts creates a new method on `Element` prototype with following signature.
```text
Element.prototype.delegator(eventType, selector, _callback)
```

- **eventType**: [string] event type, for example "click", "focus", etc...
- **selector**: [string] css child selector, must be a child of Element.
- **_callback**: [function] callback function, original event obj is passed as argument.

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
