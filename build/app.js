"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../package.json"));

var _products = _interopRequireDefault(require("./routes/products.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _roles = _interopRequireDefault(require("./routes/roles.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
exports.app = app;
app.set('pkg', _package["default"]);
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.get('/', function (req, res) {
  return res.json({
    author: app.get('pkg').author,
    name: app.get('pkg').name,
    version: app.get('pkg').version
  });
});
app.use('/api/products', _products["default"]);
app.use('/api/users', _user["default"]);
app.use('/api/auth', _auth["default"]);
app.use('/api/roles', _roles["default"]);