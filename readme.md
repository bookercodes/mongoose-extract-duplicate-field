#Mongoose Extract Duplicate Field

_This module extracts the name of a duplicate field from the Mongoose "duplicate key" error message object._

##Installation

```
npm install --save mongoose-extract-duplicate-field
```

##Usage

```javascript
var extractDuplicateField = require('mongoose-extract-duplicate-field');

var user = ...
user.save(function (error)
  if (error) {
    var field = extractDuplicateField(error);
    req.flash('errors', [{msg:'An account with this ' + field + ' already exists.'}]);
    res.redirect('/join');
    return;
  }
  req.flash('message', 'Your account has been created. You can now login.');
  res.redirect('/');
});
```
