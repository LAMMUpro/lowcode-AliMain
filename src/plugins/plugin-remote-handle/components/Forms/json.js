"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.JSONComp = exports.JSON = void 0;
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@formily/react");
var _lowcodePluginBaseMonacoEditor = _interopRequireDefault(require("@alilc/lowcode-plugin-base-monaco-editor"));
var _noop2 = _interopRequireDefault(require("lodash/noop"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// import { editor } from 'monaco-editor';
var JSONComp = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2["default"])(JSONComp, _PureComponent);
  function JSONComp() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    // private monacoRef: any = null;
    _this.handleEditorChange = function (newValue) {
      var _this$props$onChange, _this$props;
      (_this$props$onChange = (_this$props = _this.props).onChange) === null || _this$props$onChange === void 0 ? void 0 : _this$props$onChange.call(_this$props, newValue);
    };
    return _this;
  }
  var _proto = JSONComp.prototype;
  // handleEditorDidMount = (editor) => {
  //   this.monacoRef = editor;
  // };
  _proto.render = function render() {
    var _this$props2 = this.props,
      value = _this$props2.value,
      className = _this$props2.className;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: className,
      style: {
        width: '100%',
        height: 150
      }
    }, /*#__PURE__*/_react["default"].createElement(_lowcodePluginBaseMonacoEditor["default"], {
      theme: "vs-vision",
      value: value !== null && value !== void 0 ? value : '',
      language: "json",
      onChange: this.handleEditorChange
      // editorDidMount={this.handleEditorDidMount}
    }));
  };
  return JSONComp;
}(_react.PureComponent);
exports.JSONComp = JSONComp;
JSONComp.isFieldComponent = true;
JSONComp.defaultProps = {
  onChange: _noop2["default"]
};
var JSON = (0, _react2.connect)(JSONComp);
exports.JSON = JSON;