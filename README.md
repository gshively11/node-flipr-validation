node-flipr-validation
============

Validation for flipr config data.  Use this to catch bad configs before they go live.

![node-flipr-validation](/flipr.png?raw=true "node-flipr-validation")

#Usage
```javascript
var fliprValidation = require('flipr-validation');
var errors = fliprValidation({
  config: myConfigObject,
  rules: myRulesArray
});
```
The errors array returned by fliprValidation will be empty if there are no validation errors.  If there are validation errors, the errors array will contain one or more Error objects.

## Flipr Validation Options
* `config` - _required_ - object: This is the config object you want to validate.
* `rules` - _optional_ - array: The array of rules you will use against this config.  If you have rules but don't provide them, some of the validation will be skipped.  It's a good idea to pass the rules if you have them.

# Would you like to know [more](http://i.imgur.com/IOvYPfT.jpg)?
* [Validating a good config](/sample/validate-good-config.js)
* [Validating a bad config](/sample/validate-bad-config.js)