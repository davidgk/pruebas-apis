"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Docker container should exists
_mongoose["default"].connect("mongodb://localhost:27017/companydb").then(function (db) {
  return console.log('db es connected');
})["catch"](function (error) {
  return console.log(error);
});