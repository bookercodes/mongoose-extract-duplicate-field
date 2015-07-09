'use strict';
var sut = require('./');
var chai   = require("chai");
var should = chai.should();

it('should return correct field name', function () {
  var error = {
    "name": "MongoError",
    "message": "insertDocument :: caused by :: 11000 E11000 duplicate key error index: authentication.users.$username_1  dup key: { : \"alex\" }",
    "index": 0,
    "code": 11000,
    "errmsg": "insertDocument :: caused by :: 11000 E11000 duplicate key error index: authentication.users.$username_1  dup key: { : \"alex\" }"
  };
  var key = sut(error);
  key.should.equal('username');
});
