# Performance test

Comparison between this project and most downloaded event delegation library on npm ([here](https://www.npmjs.com/package/delegate)).


| event-delegation |             |                     |  delegate   |             |                     |
|------------------|-------------|---------------------|-------------|-------------|---------------------|
| hits             | avg         | avg (first 10 hits) | hits        | avg         | avg (first 10 hits) |
| 0,319999992      | 0,126512342 | 0,294999989         | 0,404999999 | 0,122006177 | 0,301666661         |
| 0,300000014      |             |                     | 0,324999972 |             |                     |
| 0,244999945      |             |                     | 0,250000041 |             |                     |
| 0,249999983      |             |                     | 0,264999981 |             |                     |
| 0,254999963      |             |                     | 0,255000021 |             |                     |
| 0,245000003      |             |                     | 0,260000001 |             |                     |
| 0,254999963      |             |                     | 0,274999999 |             |                     |
| 0,260000001      |             |                     | 0,569999975 |             |                     |
| 0,525000039      |             |                     | 0,109999964 |             |                     |
| 0,119999982      |             |                     | 0,110000023 |             |                     |
| 0,120000041      |             |                     | 0,110000023 |             |                     |
| 0,115000003      |             |                     | 0,115000003 |             |                     |
| 0,120000041      |             |                     | 0,110000023 |             |                     |
| 0,115000003      |             |                     | 0,109999964 |             |                     |
| 0,119999982      |             |                     | 0,115000003 |             |                     |
| 0,110000023      |             |                     | 0,109999964 |             |                     |
| 0,115000003      |             |                     | 0,110000023 |             |                     |

### Scenario

Given 1000 nested `<p>`.
```html
<body>
    <p>
        <p>
            ...
                <p>
                    <span></span>
                </p>
            ...
        </p>
    </p>
</body>
```

Listener has been attached to the `<body>` and delegated selector was `'body'`.

Clicks were fired on `<span>` so when the events propagated up to the body the listeners are triggered and both libraries had to look from up `<span>` through 999 parents to find the `body`.

Each library has been tested separately.