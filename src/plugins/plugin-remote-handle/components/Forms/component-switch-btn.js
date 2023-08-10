"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.ComponentSwitchBtn = void 0;
var _button = _interopRequireDefault(require("@alifd/next/lib/button"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _react = _interopRequireWildcard(require("react"));
var _variable = require("../icons/variable");
var _get2 = _interopRequireDefault(require("lodash/get"));
var _react2 = require("@formily/react");
var _classnames = _interopRequireDefault(require("classnames"));
var _misc = require("../../utils/misc");
var _lowcodeTypes = require("@alilc/lowcode-types");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ComponentSwitchBtnCompComp = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2["default"])(ComponentSwitchBtnCompComp, _PureComponent);
  function ComponentSwitchBtnCompComp() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _this.state = {
      currentComponent: _this.props.originalComponent
    };
    _this.originalComponent = null;
    _this.handleSwitch = function () {
      var _this$props = _this.props,
        field = _this$props.field,
        setComponent = _this$props.setComponent;
      var nextComponent = null;
      if (_this.state.currentComponent === _this.originalComponent) {
        nextComponent = _this.props.component;
      } else {
        nextComponent = _this.originalComponent;
      }
      var nextValue = field.value;
      switch (nextComponent) {
        case 'Switch':
          // expression 转 boolean
          if ((0, _lowcodeTypes.isJSExpression)(nextValue)) {
            nextValue = nextValue && nextValue.value === 'true' || false;
          }
          break;
        case 'NumberPicker':
          // expression 转 number
          if ((0, _lowcodeTypes.isJSExpression)(nextValue)) {
            var val = +(nextValue && nextValue.value);
            nextValue = isNaN(val) ? 0 : val;
          }
          break;
        case 'ArrayItems':
          // expression 转 array
          if ((0, _lowcodeTypes.isJSExpression)(nextValue)) {
            nextValue = [];
          }
          break;
        case 'LowcodeExpression':
          // 普通组件转 array
          nextValue = {
            type: 'JSExpression',
            value: nextValue + ''
          };
          break;
        default:
          // 默认 expression 转 string （Input、Select 组件走这）
          if ((0, _lowcodeTypes.isJSExpression)(nextValue)) {
            nextValue = nextValue && nextValue.value || '';
          }
      }
      _this.setState({
        currentComponent: nextComponent
      });
      field.setValue(nextValue);
      setComponent === null || setComponent === void 0 ? void 0 : setComponent(nextComponent);
    };
    return _this;
  }
  var _proto = ComponentSwitchBtnCompComp.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.originalComponent = this.props.originalComponent;

    // 表单回调的时候，如果初始值是 expression，那需要切换组件
    if ((0, _lowcodeTypes.isJSExpression)(this.props.field.value)) {
      this.props.setComponent('LowcodeExpression');
      this.setState({
        currentComponent: 'LowcodeExpression'
      });
    }
  };
  _proto.render = function render() {
    var _this$props2 = this.props,
      className = _this$props2.className,
      style = _this$props2.style;
    return /*#__PURE__*/_react["default"].createElement(_button["default"], {
      className: (0, _classnames["default"])((0, _misc.generateClassName)('component-switchbtn'), className),
      style: style,
      text: true,
      onClick: this.handleSwitch
    }, /*#__PURE__*/_react["default"].createElement(_variable.IconVariable, {
      size: 20,
      fill: "#8f9bb3"
    }));
  };
  return ComponentSwitchBtnCompComp;
}(_react.PureComponent);
ComponentSwitchBtnCompComp.isFieldComponent = true;
ComponentSwitchBtnCompComp.defaultProps = {};
var ComponentSwitchBtn = (0, _react2.connect)(ComponentSwitchBtnCompComp, (0, _react2.mapProps)(function (props, field) {
  return {
    field: field,
    setComponent: field.setComponent,
    originalComponent: (0, _get2["default"])(field, 'component[0]')
  };
}));
exports.ComponentSwitchBtn = ComponentSwitchBtn;