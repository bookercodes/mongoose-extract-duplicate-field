'use strict';

var sut = require('./');
var chai   = require('chai');
/*jshint unused:false*/
var should = chai.should();

it('should return correct field name', function () {
  var error = {
    'name': 'MongoError',
    'message': 'insertDocument :: caused by :: 11000 E11000 duplicate key error index: authentication.users.$username_1  dup key: { : \'alex\' }',
    'index': 0,
    'code': 11000,
    'errmsg': 'insertDocument :: caused by :: 11000 E11000 duplicate key error index: authentication.users.$username_1  dup key: { : \'alex\' }'
  };
  var key = sut(error);
  key.should.equal('username');
});

it('should throw if error is invalid', function () {
  (function () {
    sut();
  }).should.Throw(Error, 'error cannot be undefined');
  (function () {
    sut({});
  }).should.Throw(Error, 'error.code cannot be undefined');
  (function () {
    sut({code: 10});
  }).should.Throw(Error, 'error should be a duplicate key error with code 11000');
  (function () {
    sut({
      code: 11000
    });
  }).should.Throw(Error, 'error.message cannot be undefined');
});
