## How delegation lookup works

Given the following registration:

```javascript
function divHandler(e) {
    e.preventDefault();
}
document.querySelector('div').addDelegateListener('click', 'a', divHandler);
```

and following HTML snippet:
```html
<body>
    <div>
        <a>
            <span>click me!</span>
        </a>
    </div>
</body>
```

If a `click` event is triggered on `<span>` the event propagates up to the `<div>` where the listener has been attached.

`event-delegation` will look from `event.target` (which is `<span>`) up to all parent elements until one matches the given `selector` (`a` in this case).

If none was found until the lookup process reaches the element on which event was originally attached to (`div` in this case) it stops and handler function is not triggered.

---

### Not matching example


```javascript
function divHandler(e) {
    e.preventDefault();
}
document.querySelector('div').addDelegateListener('click', '.myclass', divHandler);
```
applied to the following HTML snippet:
```html
<body>
    <section>
        <article>
            <div>
                <a>
                    <span>click me!</span>
                </a>
            </div>
        </article>
    </section>
</body>
```

If a `click` event is triggered on `<span>` the lookup process won't find any element matching with the given selector `.myclass`.

NOTICE that lookup will stops on `div` element, which is the one on which the listener is attached to, none of `div`'s parents will be considered and checked for matching.

**This improves performances and prevents any unwanted behaviour.**