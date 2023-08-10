"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.DataSourceImport = void 0;
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _react = _interopRequireWildcard(require("react"));
var _isArray2 = _interopRequireDefault(require("lodash/isArray"));
var _last2 = _interopRequireDefault(require("lodash/last"));
var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));
var _lowcodePluginBaseMonacoEditor = _interopRequireDefault(require("@alilc/lowcode-plugin-base-monaco-editor"));
var _ajv = _interopRequireDefault(require("ajv"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint-disable @typescript-eslint/indent */
/**
 * 源码导入插件
 * @todo editor 关联 types，并提供详细的出错信息
 */
// import './import-plugins/code.scss';
var DataSourceImport = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2["default"])(DataSourceImport, _PureComponent);
  function DataSourceImport(props) {
    var _this;
    _this = _PureComponent.call(this, props) || this;
    _this.state = {
      code: '',
      isCodeValid: true
    };
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

        // 向下兼容
        if (dataSourceType.schema) {
          // 校验失败的数据源，给予用户提示
          var validate = ajv.compile(dataSourceType.schema);
          var valid = validate(dataSource);
          if (!valid) console.warn(validate.errors);
          return valid;
        } else {
          // 用户不传入 schema 校验规则，默认返回 true
          return true;
        }
      });
    };
    /**
     * 看代码是未使用到
     * @deprecated
     */
    _this.handleComplete = function () {
      if (_this.monacoRef) {
        if (!_this.monacoRef.getModelMarkers().find(function (marker) {
          return marker.owner === 'json';
        })) {
          var _this$props$onImport, _this$props;
          _this.setState({
            isCodeValid: true
          });
          var model = (0, _last2["default"])(_this.monacoRef.getModels());
          if (!model) return;
          (_this$props$onImport = (_this$props = _this.props).onImport) === null || _this$props$onImport === void 0 ? void 0 : _this$props$onImport.call(_this$props, _this.deriveValue(JSON.parse(model.getValue())));
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
    _this.handleEditorDidMount = function (editor, monaco) {
      _this.monacoRef = editor === null || editor === void 0 ? void 0 : editor.editor;
    };
    _this.state.code = JSON.stringify(_this.deriveValue(_this.props.defaultValue), null, 2);
    _this.handleEditorDidMount = _this.handleEditorDidMount.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleEditorChange = _this.handleEditorChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleComplete = _this.handleComplete.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }
  var _proto = DataSourceImport.prototype;
  _proto.render = function render() {
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
    }, "\u683C\u5F0F\u6709\u8BEF"));
  };
  return DataSourceImport;
}(_react.PureComponent);
exports.DataSourceImport = DataSourceImport;
DataSourceImport.defaultProps = {
  defaultValue: [{
    type: 'fetch',
    isInit: false,
    options: {
      method: 'GET',
      isCors: true,
      timeout: 5000,
      uri: '/info',
      params: {},
      headers: {}
    },
    id: 'info'
  }]
};