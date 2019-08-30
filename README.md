# mongoose-plugin-date-format

Change the date field default output in your mongoose schemas

[![Build Status](https://travis-ci.org/oktapodia/mongoose-plugin-date-format.svg?branch=master)](https://travis-ci.org/oktapodia/mongoose-plugin-date-format)
[![Coverage Status](https://coveralls.io/repos/oktapodia/mongoose-plugin-date-format/badge.svg?branch=master)](https://coveralls.io/r/oktapodia/mongoose-plugin-date-format?branch=master)

**Note:** This plugin will *only* work with mongoose >= 4.0. Do NOT use
this plugin with mongoose 3.x. You have been warned.

# Usage

The `mongoose-plugin-date-format` module exposes a single function that you can
pass to [Mongoose schema's `plugin()` function](https://mongoosejs.com/docs/api.html#schema_Schema-plugin).

```javascript
const schema = new mongoose.Schema({
  birthdate: Date,
});
schema.plugin(require('mongoose-plugin-date-format')('YYYY-MM-DDTHH:mm:ss[Z]'));
```
