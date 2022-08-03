"use strict";

var _app = require("./app");

require("./database");

_app.app.listen(4500);

console.log('Server running on port', 4500);