"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.LowcodeExpressionComp = exports.LowcodeExpression = void 0;
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@formily/react");
var _noop2 = _interopRequireDefault(require("lodash/noop"));
var _editorContext = require("../../utils/editor-context");
var _misc = require("../../utils/misc");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// export interface LowcodeExpressionState {}
var LowcodeExpressionComp = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2["default"])(LowcodeExpressionComp, _PureComponent);
  function LowcodeExpressionComp() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _this.handleChange = function (newValue) {
      var _this$props, _this$props$onChange;
      (_this$props = _this.props) === null || _this$props === void 0 ? void 0 : (_this$props$onChange = _this$props.onChange) === null || _this$props$onChange === void 0 ? void 0 : _this$props$onChange.call(_this$props, newValue);
    };
    return _this;
  }
  var _proto = LowcodeExpressionComp.prototype;
  _proto.render = function render() {
    var _this2 = this;
    var _this$props2 = this.props,
      value = _this$props2.value,
      className = _this$props2.className;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: className
    }, /*#__PURE__*/_react["default"].createElement(_editorContext.EditorContext.Consumer, null, function (_ref) {
      var setters = _ref.setters;
      var ExpressionSetter = setters === null || setters === void 0 ? void 0 : setters.getSetter('ExpressionSetter').component;
      if (!ExpressionSetter) return null;
      return /*#__PURE__*/_react["default"].createElement(ExpressionSetter, {
        className: (0, _misc.generateClassName)('lowcode-expression'),
        onChange: _this2.handleChange,
        field: {
          setters: setters
        },
        value: value
      });
    }));
  };
  return LowcodeExpressionComp;
}(_react.PureComponent);
exports.LowcodeExpressionComp = LowcodeExpressionComp;
LowcodeExpressionComp.isFieldComponent = true;
LowcodeExpressionComp.defaultProps = {
  onChange: _noop2["default"]
};
var LowcodeExpression = (0, _react2.connect)(LowcodeExpressionComp);
exports.LowcodeExpression = LowcodeExpression;