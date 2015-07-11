'use strict';
var assert = require('assert');

module.exports = function (error) {

  assert(error, 'error cannot be undefined');
  assert(error.code, 'error.code cannot be undefined');
  assert(error.code === 11000, 'error should be a duplicate key error with code 11000');

  var field = error.message.split('.$')[1];
  field = field.split(' dup key')[0];
  field = field.substring(0, field.lastIndexOf('_'));
  return field;
};
