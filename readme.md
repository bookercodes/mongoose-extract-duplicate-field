#Mongoose Extract Duplicate Field

![](https://www.colourbox.com/preview/4874723-mongoose-or-herpestidae-vintage-engraved-illustration-dictionary-of-words-and-things-larive-and-fleury-1895.jpg)

_This simple module extracts the name of a duplicate field from the Mongoose "duplicate
key" error message object._

You can install it using npm:

```bash
npm install --save mongoose-extract-duplicate-field
```

The module exports a _function_. Once installed, you can import this function:


```javascript
var extractDuplicateField = require('mongoose-extract-duplicate-field');
```

And call it, like so:

```javascript
foo.save(function (error)
  if (error && error.code === 11000) {
    var field = extractDuplicateField(error);

  }
});
```

The `extractDuplicateField` function you imported extracts the name of the
duplicate field and returns it synchronously. Simple but useful stuff.
