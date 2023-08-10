"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.CodeComp = exports.Code = void 0;
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@formily/react");
var _lowcodePluginBaseMonacoEditor = _interopRequireDefault(require("@alilc/lowcode-plugin-base-monaco-editor"));
var _noop2 = _interopRequireDefault(require("lodash/noop"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var CodeComp = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2["default"])(CodeComp, _PureComponent);
  function CodeComp() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _this.monacoRef = null;
    _this.handleEditorChange = function (newValue) {
      if (_this.monacoRef) {
        if (!_this.monacoRef.getModelMarkers().find(function (marker) {
          return marker.owner === 'json';
        })) {
          var _this$props$onChange, _this$props;
          (_this$props$onChange = (_this$props = _this.props).onChange) === null || _this$props$onChange === void 0 ? void 0 : _this$props$onChange.call(_this$props, newValue);
        }
      }
    };
    _this.handleEditorDidMount = function (isFullscreen, editor, monaco) {
      _this.monacoRef = monaco === null || monaco === void 0 ? void 0 : monaco.editor;
    };
    return _this;
  }
  var _proto = CodeComp.prototype;
  _proto.render = function render() {
    var _this$props2 = this.props,
      value = _this$props2.value,
      language = _this$props2.language;
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        width: '100%',
        height: 150
      }
    }, /*#__PURE__*/_react["default"].createElement(_lowcodePluginBaseMonacoEditor["default"], {
      theme: "vs-vision",
      value: value !== null && value !== void 0 ? value : '',
      language: language,
      onChange: this.handleEditorChange,
      editorDidMount: this.handleEditorDidMount
    }));
  };
  return CodeComp;
}(_react.PureComponent);
exports.CodeComp = CodeComp;
CodeComp.isFieldComponent = true;
CodeComp.defaultProps = {
  onChange: _noop2["default"],
  language: 'json'
};
var Code = (0, _react2.connect)(CodeComp);
exports.Code = Code;