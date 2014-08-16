'use strict';

var _ = require('lodash');
var validateValuesByRule = require('./validate-values-by-rule');

module.exports = validateValuesByRules;

function validateValuesByRules(rules, item, key) {
  var values = item && item.values;
  if(!_.isArray(values) 
    || !_.isArray(rules) 
    || rules.length === 0)
    return;
  return _.map(rules, _.partial(validateValuesByRule, key, values));
}