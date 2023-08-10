"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.ParamValue = void 0;
var _numberPicker = _interopRequireDefault(require("@alifd/next/lib/number-picker"));
var _switch = _interopRequireDefault(require("@alifd/next/lib/switch"));
var _input = _interopRequireDefault(require("@alifd/next/lib/input"));
var _select = _interopRequireDefault(require("@alifd/next/lib/select"));
var _menuButton = _interopRequireDefault(require("@alifd/next/lib/menu-button"));
var _button = _interopRequireDefault(require("@alifd/next/lib/button"));
var _icon = _interopRequireDefault(require("@alifd/next/lib/icon"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _radio = _interopRequireDefault(require("@alifd/next/lib/radio"));
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@formily/react");
var _lowcodeTypes = require("@alilc/lowcode-types");
var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));
var _isArray2 = _interopRequireDefault(require("lodash/isArray"));
var _isNumber2 = _interopRequireDefault(require("lodash/isNumber"));
var _isBoolean2 = _interopRequireDefault(require("lodash/isBoolean"));
var _classnames = _interopRequireDefault(require("classnames"));
var _editorContext = require("../../utils/editor-context");
var _misc = require("../../utils/misc");
var _json = require("./json");
require("./param-value.scss");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var RadioGroup = _radio["default"].Group;
var ParamValueEnum = /*#__PURE__*/function (ParamValueEnum) {
  ParamValueEnum["STRING"] = "string";
  ParamValueEnum["NUMBER"] = "number";
  ParamValueEnum["BOOLEAN"] = "boolean";
  ParamValueEnum["EXPRSSION"] = "expression";
  ParamValueEnum["JSON"] = "json";
  ParamValueEnum["JSONSTRING"] = "jsonstring";
  return ParamValueEnum;
}(ParamValueEnum || {});
function isBoolean(val) {
  return (0, _isBoolean2["default"])(val) || val === 'true' || val === 'false';
}
var TYPE_LABEL_MAP = {
  string: '字符串',
  number: '数字',
  "boolean": '布尔',
  expression: '表达式',
  jsonstring: '对象字符串',
  json: '对象'
};
var ParamValueComp = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2["default"])(ParamValueComp, _PureComponent);
  function ParamValueComp(props) {
    var _this;
    _this = _PureComponent.call(this, props) || this;
    _this.state = {
      type: 'string',
      value: ''
    };
    // @todo
    _this.getTypeFromValue = function (value) {
      if ((0, _isBoolean2["default"])(value)) {
        return 'boolean';
      } else if ((0, _isNumber2["default"])(value)) {
        return 'number';
      } else if ((0, _isPlainObject2["default"])(value) && value.type === 'JSExpression') {
        return 'expression';
      }
      return 'string';
    };
    // @todo 需要再 bind 一次？
    _this.handleChange = function (value) {
      var _this$props2, _this$props2$onChange;
      var type = _this.state.type;
      if (type === 'json') {
        var _this$props$onChange, _this$props;
        (_this$props$onChange = (_this$props = _this.props).onChange) === null || _this$props$onChange === void 0 ? void 0 : _this$props$onChange.call(_this$props, {
          type: 'JSExpression',
          value: value
        });
        return;
      }
      _this.setState({
        value: value
      });
      (_this$props2 = _this.props) === null || _this$props2 === void 0 ? void 0 : (_this$props2$onChange = _this$props2.onChange) === null || _this$props2$onChange === void 0 ? void 0 : _this$props2$onChange.call(_this$props2, value);
    };
    _this.handleTypeChange = function (nextType) {
      var _this$props$onChange3, _this$props4;
      var types = _this.props.types;
      var type = _this.state.type;
      var nextRealType = nextType;
      var nextValue = _this.props.value || '';
      if (!nextRealType) {
        var currentTypeIndex = _this.props.types.indexOf(type);
        nextRealType = types[(currentTypeIndex + 1) % types.length];
      }
      switch (nextRealType) {
        case ParamValueEnum.STRING:
          if ((0, _lowcodeTypes.isJSExpression)(nextValue)) {
            nextValue = nextValue.value;
          }
          // nextValue = nextValue.toString();
          break;
        case ParamValueEnum.NUMBER:
          nextValue *= 1;
          break;
        case ParamValueEnum.BOOLEAN:
          if (isBoolean(nextValue)) {
            nextValue = nextValue === 'true' || nextValue && nextValue.value === 'true' || false;
          }
          break;
        case ParamValueEnum.JSONSTRING:
          nextValue = '';
          break;
        case ParamValueEnum.JSON:
          if ((0, _lowcodeTypes.isJSExpression)(nextValue)) {
            nextValue = nextValue.value;
          }
          break;
        case ParamValueEnum.EXPRSSION:
          if (!(0, _lowcodeTypes.isJSExpression)(nextValue)) {
            nextValue = {
              type: 'JSExpression',
              value: nextValue
            };
          }
          break;
        default:
      }
      _this.setState({
        type: nextRealType,
        value: nextValue
      });
      if (nextRealType === 'json') {
        var _this$props$onChange2, _this$props3;
        (_this$props$onChange2 = (_this$props3 = _this.props).onChange) === null || _this$props$onChange2 === void 0 ? void 0 : _this$props$onChange2.call(_this$props3, {
          type: 'JSExpression',
          value: nextValue
        });
        return;
      }
      (_this$props$onChange3 = (_this$props4 = _this.props).onChange) === null || _this$props$onChange3 === void 0 ? void 0 : _this$props$onChange3.call(_this$props4, nextValue);
    };
    _this.renderTypeSwitch = function () {
      var handleSwitch = function handleSwitch() {
        _this.handleTypeChange();
      };
      var handleSwitchTo = function handleSwitchTo(type) {
        _this.handleTypeChange(type);
      };
      return /*#__PURE__*/_react["default"].createElement(_button["default"].Group, {
        className: (0, _misc.generateClassName)('universal-value-typeswitch')
      }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
        onClick: handleSwitch
      }, /*#__PURE__*/_react["default"].createElement(_icon["default"], {
        type: "switch"
      })), /*#__PURE__*/_react["default"].createElement(_menuButton["default"], {
        size: "small",
        type: "secondary",
        onItemClick: handleSwitchTo
      }, _this.props.types.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement(_menuButton["default"].Item, {
          key: item
        }, TYPE_LABEL_MAP[item]);
      })));
    };
    _this.renderTypeSelect = function () {
      var type = _this.state.type;
      var types = _this.props.types;
      if ((0, _isArray2["default"])(types) && types.length > 1) {
        return /*#__PURE__*/_react["default"].createElement(_select["default"], {
          followTrigger: true,
          className: "param-value-type",
          dataSource: types.map(function (item) {
            return {
              label: TYPE_LABEL_MAP[item],
              value: item
            };
          }),
          value: type,
          onChange: _this.handleTypeChange
        });
      }
      // if (_isArray(types) && types.length > 1) {
      //   return (
      //     <RadioGroup
      //       className="param-value-type"
      //       shape="button"
      //       size="small"
      //       onChange={this.handleTypeChange}
      //       value={type}
      //     >
      //       {types.map((item) => (
      //         <Radio value={item}>TYPE_LABEL_MAP[item]</Radio>
      //       ))}
      //     </RadioGroup>
      //   );
      // }
      return null;
    };
    _this.state.value = _this.props.value;
    _this.state.type = _this.getTypeFromValue(_this.props.value);
    return _this;
  }
  var _proto = ParamValueComp.prototype;
  _proto.render = function render() {
    var _this2 = this;
    var _this$props5 = this.props,
      className = _this$props5.className,
      style = _this$props5.style;
    var _this$state = this.state,
      type = _this$state.type,
      value = _this$state.value;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _classnames["default"])((0, _misc.generateClassName)('universal-value'), className),
      style: style
    }, type === 'string' && /*#__PURE__*/_react["default"].createElement(_input["default"], {
      className: (0, _misc.generateClassName)('universal-value-string'),
      onChange: this.handleChange,
      value: value
    }), type === 'boolean' && /*#__PURE__*/_react["default"].createElement(_switch["default"], {
      className: (0, _misc.generateClassName)('universal-value-boolean'),
      onChange: this.handleChange,
      checked: value
    }), type === 'number' && /*#__PURE__*/_react["default"].createElement(_numberPicker["default"], {
      className: (0, _misc.generateClassName)('universal-value-number'),
      onChange: this.handleChange,
      value: value
    }), type === 'jsonstring' && /*#__PURE__*/_react["default"].createElement("span", {
      className: (0, _misc.generateClassName)('universal-value-jsonstring')
    }, /*#__PURE__*/_react["default"].createElement(_json.JSONComp, {
      onChange: this.handleChange,
      value: (0, _misc.safeParse)(value)
    })), type === 'json' && /*#__PURE__*/_react["default"].createElement("span", {
      className: (0, _misc.generateClassName)('universal-value-json')
    }, /*#__PURE__*/_react["default"].createElement(_json.JSONComp, {
      onChange: this.handleChange,
      value: value
    })), type === 'expression' && /*#__PURE__*/_react["default"].createElement("span", {
      className: (0, _misc.generateClassName)('universal-value-json')
    }, /*#__PURE__*/_react["default"].createElement(_editorContext.EditorContext.Consumer, null, function (_ref) {
      var setters = _ref.setters;
      var ExpressionSetter = setters === null || setters === void 0 ? void 0 : setters.getSetter('ExpressionSetter').component;
      if (!ExpressionSetter) return null;
      return /*#__PURE__*/_react["default"].createElement(ExpressionSetter, {
        className: (0, _misc.generateClassName)('universal-value-expression'),
        onChange: _this2.handleChange,
        field: {
          setters: setters
        },
        value: value
      });
    })), this.renderTypeSwitch());
  };
  return ParamValueComp;
}(_react.PureComponent);
ParamValueComp.isFieldComponent = true;
ParamValueComp.defaultProps = {
  types: ['string', 'boolean', 'number', 'expression', 'jsonstring', 'json'],
  className: '',
  style: {}
};
var ParamValue = (0, _react2.connect)(ParamValueComp);
exports.ParamValue = ParamValue;
ParamValue.displayName = 'ParamValue';