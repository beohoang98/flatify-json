## Using

```javascript
const {flatify} = require('@beohoang98/flatify-json');
// or in ES6
import flatify from '@beohoang98/flatify-json';

flatify({
    something: 'here',
    root: {
        leap: "any",
        otherLeap: null,
    },
    array: [
        {
            nested: 'array',
        },
        {
            nested_object: {
                a: 1,
                b: 2,
            }
        }
    ],
});
```

**Output**:

```json
{
    "something": "here",
    "root.leap": "any",
    "root.otherLeap": null,
    "array": [
        {"nested": "array"},
        {"nested_object.a": 1},
        {"nested_object.b": 2},
    ]
}
```