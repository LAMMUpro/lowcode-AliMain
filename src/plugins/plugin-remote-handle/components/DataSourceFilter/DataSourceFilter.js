"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.DataSourceFilter = void 0;
var _search = _interopRequireDefault(require("@alifd/next/lib/search"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _react = _interopRequireWildcard(require("react"));
var _misc = require("../../utils/misc");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var DataSourceFilter = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2["default"])(DataSourceFilter, _PureComponent);
  function DataSourceFilter() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _this.state = {
      selectedDataSourceType: '',
      keyword: ''
    };
    // TODO onFilterChange 类型定义和实际不符
    _this.handleSearchFilterChange = function (filterObj) {
      // const { keyword } = this.state;
      var onFilter = _this.props.onFilter;
      // TODO 所以这里转换为 string
      _this.setState({
        selectedDataSourceType: filterObj
      }, function () {
        var _this$state = _this.state,
          keyword = _this$state.keyword,
          selectedDataSourceType = _this$state.selectedDataSourceType;
        onFilter === null || onFilter === void 0 ? void 0 : onFilter(keyword, selectedDataSourceType);
      });
    };
    _this.handleChange = function (val, actionType, item) {
      if (item === 'clear') {
        _this.handleSearch('');
      }
    };
    _this.handleSearch = function (keyword) {
      var selectedDataSourceType = _this.state.selectedDataSourceType;
      var onFilter = _this.props.onFilter;
      onFilter === null || onFilter === void 0 ? void 0 : onFilter(selectedDataSourceType, keyword);
      _this.setState({
        keyword: keyword
      }, function () {
        var _this$state2 = _this.state,
          keyword = _this$state2.keyword,
          selectedDataSourceType = _this$state2.selectedDataSourceType;
        onFilter === null || onFilter === void 0 ? void 0 : onFilter(keyword, selectedDataSourceType);
      });
    };
    return _this;
  }
  var _proto = DataSourceFilter.prototype;
  _proto.render = function render() {
    var dataSourceTypes = this.props.dataSourceTypes;
    var selectedDataSourceType = this.state.selectedDataSourceType;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _misc.generateClassName)('filters')
    }, /*#__PURE__*/_react["default"].createElement(_search["default"], {
      hasClear: true,
      onChange: this.handleChange,
      onSearch: this.handleSearch,
      filterProps: {},
      defaultFilterValue: selectedDataSourceType,
      filter: [{
        label: '全部',
        value: ''
      }].concat(dataSourceTypes.map(function (type) {
        return {
          label: type === null || type === void 0 ? void 0 : type.type,
          value: type === null || type === void 0 ? void 0 : type.type
        };
      })),
      onFilterChange: this.handleSearchFilterChange
    }));
  };
  return DataSourceFilter;
}(_react.PureComponent);
exports.DataSourceFilter = DataSourceFilter;