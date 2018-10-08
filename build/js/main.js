/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components.js":
/*!******************************!*\
  !*** ./src/js/components.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var TodoApp =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(TodoApp, _React$Component);

  function TodoApp(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TodoApp);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TodoApp).call(this, props));
    _this.state = {
      items: [],
      text: ''
    };
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleSubmit = _this.handleSubmit.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  (0, _createClass2.default)(TodoApp, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: 'sw-content__item todo'
      }, _react.default.createElement(TodoList, {
        items: this.state.items
      }), _react.default.createElement("form", {
        className: 'todo__add',
        onSubmit: this.handleSubmit
      }, _react.default.createElement("input", {
        autocomplete: 'off',
        id: "new-todo",
        onChange: this.handleChange,
        value: this.state.text
      }), _react.default.createElement("button", null, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")));
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        text: e.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();

      if (!this.state.text.length) {
        return;
      }

      var newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(function (state) {
        return {
          items: state.items.concat(newItem),
          text: ''
        };
      });
    }
  }]);
  return TodoApp;
}(_react.default.Component);

var TodoList =
/*#__PURE__*/
function (_React$Component2) {
  (0, _inherits2.default)(TodoList, _React$Component2);

  function TodoList() {
    (0, _classCallCheck2.default)(this, TodoList);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TodoList).apply(this, arguments));
  }

  (0, _createClass2.default)(TodoList, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("ul", null, this.props.items.map(function (item) {
        return _react.default.createElement("li", {
          className: 'todo__item'
        }, _react.default.createElement("div", {
          className: 'todo__item__text',
          key: item.id
        }, item.text), _react.default.createElement("div", {
          className: 'todo__item__close'
        }, "\u0443\u0434\u0430\u043B\u0438\u0442\u044C"));
      }));
    }
  }]);
  return TodoList;
}(_react.default.Component);

var OtherApp =
/*#__PURE__*/
function (_React$Component3) {
  (0, _inherits2.default)(OtherApp, _React$Component3);

  function OtherApp() {
    (0, _classCallCheck2.default)(this, OtherApp);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(OtherApp).apply(this, arguments));
  }

  (0, _createClass2.default)(OtherApp, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: 'sw-content__item'
      });
    }
  }]);
  return OtherApp;
}(_react.default.Component);

var mountNode = document.getElementById('content');

_reactDom.default.render(_react.default.createElement("div", {
  className: 'sw-content'
}, _react.default.createElement(TodoApp, null), _react.default.createElement(OtherApp, null)), mountNode);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./vendor */ "./src/js/vendor.js");

__webpack_require__(/*! ./components.js */ "./src/js/components.js");

document.querySelector('.createlist').addEventListener('click', function () {
  document.querySelector('.popup__addlist').style = 'display: block';
});
document.querySelector('.close').addEventListener('click', function () {
  document.querySelector('.popup__addlist').style = 'display: none';
}); //create list

document.querySelector('.submit').addEventListener('click', CreateList);

function CreateList() {
  var text = document.getElementById('text');
  var NewList = document.createElement('div');
  NewList.className = 'list__item';
  NewList.innerHTML = text.value;
  var AddList = document.querySelector('.btn__sw-sidebar-main');
  document.querySelector(".sw-sidebar__main").appendChild(NewList, AddList);
  document.querySelector('.popup__addlist').style = 'display: none';
}

;

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");

var _svg4everybody = _interopRequireDefault(__webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js"));

var _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"));

var _foundationSites = _interopRequireDefault(__webpack_require__(/*! foundation-sites */ "./node_modules/foundation-sites/js/foundation.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(0, _svg4everybody.default)();
window.$ = _jquery.default;
window.jQuery = _jquery.default;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

_foundationSites.default.addToJquery(_jquery.default);

(0, _jquery.default)(document).foundation();

/***/ })

/******/ });
//# sourceMappingURL=main.js.map