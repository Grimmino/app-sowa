"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

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