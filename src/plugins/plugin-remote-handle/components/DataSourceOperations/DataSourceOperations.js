"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.DataSourceOperations = void 0;
var _button = _interopRequireDefault(require("@alifd/next/lib/button"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _menuButton = _interopRequireDefault(require("@alifd/next/lib/menu-button"));
var _react = _interopRequireWildcard(require("react"));
var _isArray2 = _interopRequireDefault(require("lodash/isArray"));
var _misc = require("../../utils/misc");
var _types = require("../../types");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var MenuButtonItem = _menuButton["default"].Item;

// function deriveTypeFromValue(val: any) {
//   if (_isBoolean(val)) return 'bool';
//   if (_isNumber(val)) return 'number';
//   if (_isPlainObject(val)) return 'obj';
//   return 'string';
// }
var DataSourceOperations = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2["default"])(DataSourceOperations, _PureComponent);
  function DataSourceOperations() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _this.handleDataSourceFormBtnClick = function (dataSourceType) {
      var _this$props$onCreate, _this$props;
      (_this$props$onCreate = (_this$props = _this.props).onCreate) === null || _this$props$onCreate === void 0 ? void 0 : _this$props$onCreate.call(_this$props, dataSourceType);
    };
    _this.handleDataSourceFormMenuBtnClick = function (dataSourceType) {
      var _this$props$onCreate2, _this$props2;
      (_this$props$onCreate2 = (_this$props2 = _this.props).onCreate) === null || _this$props$onCreate2 === void 0 ? void 0 : _this$props$onCreate2.call(_this$props2, dataSourceType);
    };
    _this.handleImportDataSourceMenuBtnClick = function (importPluginName) {
      var _this$props$onImport, _this$props3;
      // TODO: 这个是什么
      // @ts-ignore
      (_this$props$onImport = (_this$props3 = _this.props).onImport) === null || _this$props$onImport === void 0 ? void 0 : _this$props$onImport.call(_this$props3, {
        name: importPluginName
      });
    };
    _this.renderOperatons = function () {
      var _this$props4 = _this.props,
        importPlugins = _this$props4.importPlugins,
        dataSourceTypes = _this$props4.dataSourceTypes,
        mode = _this$props4.mode,
        selectedList = _this$props4.selectedList,
        empty = _this$props4.empty;
      if (mode === _types.DataSourcePanelMode.SORTING) {
        return [/*#__PURE__*/_react["default"].createElement(_button["default"], {
          onClick: _this.props.onFinishSort
        }, "\u5B8C\u6210"), /*#__PURE__*/_react["default"].createElement(_button["default"], {
          text: true,
          onClick: _this.props.onCancelSort
        }, "\u53D6\u6D88")];
      }
      if (mode === _types.DataSourcePanelMode.EXPORTING) {
        return [/*#__PURE__*/_react["default"].createElement(_button["default"], {
          disabled: selectedList.length === 0,
          key: "do-export",
          onClick: _this.props.onFinishExport
        }, "\u5BFC\u51FA ", selectedList.length, " \u9879"), /*#__PURE__*/_react["default"].createElement(_button["default"], {
          text: true,
          key: "finish-export",
          onClick: _this.props.onCancelExport
        }, "\u53D6\u6D88")];
      }
      return [(0, _isArray2["default"])(dataSourceTypes) && dataSourceTypes.length > 0 ? /*#__PURE__*/_react["default"].createElement(_menuButton["default"], {
        key: "create",
        label: "\u65B0\u5EFA",
        onItemClick: _this.handleDataSourceFormMenuBtnClick
      }, dataSourceTypes.map(function (type) {
        return /*#__PURE__*/_react["default"].createElement(MenuButtonItem, {
          key: type.type
        }, type.type);
      })) : (0, _isArray2["default"])(dataSourceTypes) && dataSourceTypes.length === 1 ? /*#__PURE__*/_react["default"].createElement(_button["default"], {
        key: "create",
        onClick: _this.handleDataSourceFormBtnClick.bind((0, _assertThisInitialized2["default"])(_this), dataSourceTypes[0].type)
      }, "\u65B0\u5EFA") : null, !empty ? /*#__PURE__*/_react["default"].createElement(_button["default"], {
        text: true,
        key: "sort",
        onClick: _this.props.onStartSort
      }, "\u6392\u5E8F") : null, (0, _isArray2["default"])(importPlugins) && importPlugins.length > 1 ? /*#__PURE__*/_react["default"].createElement(_menuButton["default"], {
        text: true,
        key: "import",
        label: "\u5BFC\u5165",
        onItemClick: _this.handleImportDataSourceMenuBtnClick
      }, importPlugins.map(function (plugin) {
        return /*#__PURE__*/_react["default"].createElement(MenuButtonItem, {
          key: plugin.name
        }, plugin.name);
      })) : (0, _isArray2["default"])(importPlugins) && importPlugins.length === 1 ? /*#__PURE__*/_react["default"].createElement(_button["default"], {
        key: "import",
        onClick: _this.handleImportDataSourceMenuBtnClick.bind((0, _assertThisInitialized2["default"])(_this), importPlugins[0].name),
        text: true
      }, "\u5BFC\u5165") : null, !empty ? /*#__PURE__*/_react["default"].createElement(_button["default"], {
        text: true,
        key: "export",
        onClick: _this.props.onStartExport
      }, "\u5BFC\u51FA") : null];
    };
    return _this;
  }
  var _proto = DataSourceOperations.prototype;
  _proto.render = function render() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _misc.generateClassName)('operations')
    }, this.renderOperatons());
  };
  return DataSourceOperations;
}(_react.PureComponent);
exports.DataSourceOperations = DataSourceOperations;