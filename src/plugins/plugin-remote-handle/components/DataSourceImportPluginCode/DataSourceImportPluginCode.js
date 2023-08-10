"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.DataSourceImportPluginCode = void 0;
var _button = _interopRequireDefault(require("@alifd/next/lib/button"));
var _message = _interopRequireDefault(require("@alifd/next/lib/message"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _react = _interopRequireWildcard(require("react"));
var _noop2 = _interopRequireDefault(require("lodash/noop"));
var _isArray2 = _interopRequireDefault(require("lodash/isArray"));
var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));
var _lowcodePluginBaseMonacoEditor = _interopRequireDefault(require("@alilc/lowcode-plugin-base-monaco-editor"));
var _ajv = _interopRequireDefault(require("ajv"));
require("./index.scss");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * 源码导入插件
 * @todo editor 关联 types，并提供详细的出错信息
 */
var DataSourceImportPluginCode = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2["default"])(DataSourceImportPluginCode, _PureComponent);
  function DataSourceImportPluginCode(props) {
    var _this;
    _this = _PureComponent.call(this, props) || this;
    _this.state = {
      code: '',
      isCodeValid: true
    };
    /* @author daifuyang
    ** @description：修复默认panel ref没有submit方法
    */
    _this.submit = function () {
      return new Promise(function (resolve, reject) {
        var _this$state = _this.state,
          isCodeValid = _this$state.isCodeValid,
          code = _this$state.code;
        if (!isCodeValid) reject(new Error('导入格式有误'));

        // 只 resolve 通过 schema 校验的数据
        resolve(_this.deriveValue(JSON.parse(code)));
      });
    };
    _this.monacoRef = void 0;
    _this.deriveValue = function (value) {
      var dataSourceTypes = _this.props.dataSourceTypes;
      if (!(0, _isArray2["default"])(dataSourceTypes) || dataSourceTypes.length === 0) return [];
      var result = value;
      if ((0, _isPlainObject2["default"])(result)) {
        // 如果是对象则转化成数组
        result = [result];
      } else if (!(0, _isArray2["default"])(result)) {
        return [];
      }
      var ajv = new _ajv["default"]();
      return result.filter(function (dataSource) {
        if (!dataSource.type) return false;
        var dataSourceType = dataSourceTypes.find(function (type) {
          return type.type === dataSource.type;
        });
        if (!dataSourceType) return false;
        // 处理下默认为空的情况，向下兼容
        return ajv.validate(dataSourceType.schema || {}, dataSource);
      });
    };
    _this.handleComplete = function () {
      if (_this.monacoRef) {
        if (!_this.monacoRef.getModelMarkers().find(function (marker) {
          return marker.owner === 'json';
        })) {
          _message["default"].success("检验成功，点击右上方确定完成导入！");
          _this.setState({
            isCodeValid: true
          });
          // const model: any = _last(this.monacoRef.getModels());
          // if (!model) return;
          // this.props.onImport?.(this.deriveValue(JSON.parse(model.getValue())));
          return;
        }
      }
      _this.setState({
        isCodeValid: false
      });
    };
    _this.handleEditorChange = function (newValue) {
      if (_this.monacoRef) {
        if (!_this.monacoRef.getModelMarkers().find(function (marker) {
          return marker.owner === 'json';
        })) {
          _this.setState({
            isCodeValid: true,
            code: newValue
          });
        }
      }
    };
    /* @author daifuyang
    ** @description：修复编辑器挂载事件
    */
    _this.handleEditorDidMount = function (editor, monaco) {
      _this.monacoRef = editor === null || editor === void 0 ? void 0 : editor.editor;
    };
    _this.state.code = JSON.stringify(_this.deriveValue(_this.props.defaultValue));
    _this.handleEditorDidMount = _this.handleEditorDidMount.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleEditorChange = _this.handleEditorChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleComplete = _this.handleComplete.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }
  var _proto = DataSourceImportPluginCode.prototype;
  _proto.render = function render() {
    var _this$props$onCancel = this.props.onCancel,
      onCancel = _this$props$onCancel === void 0 ? _noop2["default"] : _this$props$onCancel;
    var _this$state2 = this.state,
      code = _this$state2.code,
      isCodeValid = _this$state2.isCodeValid;

    // @todo
    // formatOnType formatOnPaste
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "lowcode-plugin-datasource-import-plugin-code"
    }, /*#__PURE__*/_react["default"].createElement(_lowcodePluginBaseMonacoEditor["default"], {
      theme: "vs-vision",
      width: 800,
      height: 400,
      value: code,
      language: "json",
      onChange: this.handleEditorChange,
      editorDidMount: this.handleEditorDidMount
    }), !isCodeValid && /*#__PURE__*/_react["default"].createElement("p", {
      className: "error-msg"
    }, "\u683C\u5F0F\u6709\u8BEF"), /*#__PURE__*/_react["default"].createElement("p", {
      className: "btns"
    }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
      onClick: onCancel
    }, "\u53D6\u6D88"), /*#__PURE__*/_react["default"].createElement(_button["default"], {
      type: "primary",
      onClick: this.handleComplete
    }, "\u68C0\u9A8C")));
  };
  return DataSourceImportPluginCode;
}(_react.PureComponent);
exports.DataSourceImportPluginCode = DataSourceImportPluginCode;
DataSourceImportPluginCode.defaultProps = {
  defaultValue: [{
    type: 'http',
    id: 'test'
  }]
};