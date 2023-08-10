"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _select = _interopRequireDefault(require("@alifd/next/lib/select"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _lowcodeEngine = require("@alilc/lowcode-engine");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ClassNameView = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2["default"])(ClassNameView, _PureComponent);
  function ClassNameView() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _this.getClassNameList = function () {
      var project = _this.context.project;
      var schema = project.exportSchema(_lowcodeEngine.common.designerCabin.TransformStage.Save);
      var css = schema.componentsTree[0].css;
      var classNameList = [];
      var re = /\.?\w+[^{]+\{[^}]*\}/g;
      var list = css.match(re);
      list.map(function (item) {
        if (item[0] === '.') {
          var className = item.substring(1, item.indexOf('{'));
          classNameList.push(className);
        }
        return item;
      });
      return classNameList;
    };
    _this.handleChange = function (value) {
      var onChange = _this.props.onChange;
      onChange(value.join(' '));
      _this.setState({
        selectValue: value
      });
    };
    return _this;
  }
  var _proto = ClassNameView.prototype;
  // eslint-disable-next-line react/no-deprecated
  _proto.componentWillMount = function componentWillMount() {
    var value = this.props.value;
    var classnameList = this.getClassNameList();
    var dataSource = [];
    classnameList.map(function (item) {
      dataSource.push({
        value: item,
        label: item
      });
      return item;
    });
    var selectValue = [];
    if (value && value !== '') {
      selectValue = value.split(' ');
    }
    this.setState({
      dataSource: dataSource,
      selectValue: selectValue
    });
  };
  _proto.render = function render() {
    var _this$state = this.state,
      dataSource = _this$state.dataSource,
      selectValue = _this$state.selectValue;
    return /*#__PURE__*/_react["default"].createElement(_select["default"], {
      "aria-label": "tag mode",
      mode: "tag",
      dataSource: dataSource,
      onChange: this.handleChange,
      value: selectValue
    });
  };
  return ClassNameView;
}(_react.PureComponent);
exports["default"] = ClassNameView;
ClassNameView.display = 'ClassNameSetter';
ClassNameView.propTypes = {
  onChange: _propTypes["default"].func,
  value: _propTypes["default"].string
};
ClassNameView.defaultProps = {
  onChange: function onChange() {},
  value: ''
};