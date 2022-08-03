"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Docker container should exists
//const url = "mongodb://172.16.0.0:27017/companydb"
var url = "mongodb://localhost:27017/companydb";

_mongoose["default"].connect(url).then(function (db) {
  return console.log('db es connected');
})["catch"](function (error) {
  return console.log(error);
});