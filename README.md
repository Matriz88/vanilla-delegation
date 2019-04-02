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
let myBodyElement = document.querySelector("body");
myBodyElement.delegator("click", "a", function(e) {
    e.preventDefault();
    console.log("link clicked!");
});
```

### Support
- IE 9+
- Edge 12+
- Firefox 34+
- Chrome 4+
- Safari 5+
- Opera 21+
