"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var userSchema = new _mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  roles: [{
    ref: "Role",
    type: _mongoose.Schema.Types.ObjectId
  }]
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('User', userSchema);

exports["default"] = _default;