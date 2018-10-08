"use strict";

require("@babel/polyfill");

var _svg4everybody = _interopRequireDefault(require("svg4everybody"));

var _jquery = _interopRequireDefault(require("jquery"));

var _foundationSites = _interopRequireDefault(require("foundation-sites"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(0, _svg4everybody.default)();
window.$ = _jquery.default;
window.jQuery = _jquery.default;

require('ninelines-ua-parser');

_foundationSites.default.addToJquery(_jquery.default);

(0, _jquery.default)(document).foundation();