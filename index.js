'use strict';
module.exports = function (error) {
  var field = error.message.split('.$')[1];
  field = field.split(' dup key')[0];
  field = field.substring(0, field.lastIndexOf('_'));
  return field;
};
