"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = exports.FormLazyObj = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _button = _interopRequireDefault(require("@alifd/next/lib/button"));
var _menuButton = _interopRequireDefault(require("@alifd/next/lib/menu-button"));
var _react = _interopRequireWildcard(require("react"));
var _next = require("@formily/next");
var _react2 = require("@formily/react");
var _pick2 = _interopRequireDefault(require("lodash/pick"));
var _jsFunction = require("./jsFunction");
var _formLazyObjRemoveBtn = require("./form-lazy-obj-remove-btn");
var _misc = require("../../utils/misc");
var _lowcodeTypes = require("@alilc/lowcode-types");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var MenuButtonItem = _menuButton["default"].Item;
var FormLazyObj = (0, _react2.observer)(function (props) {
  var _props$addText = props.addText,
    addText = _props$addText === void 0 ? '添加' : _props$addText;
  var field = (0, _react2.useField)();
  var schema = (0, _react2.useFieldSchema)();
  var _useState = (0, _react.useState)(function () {
      // 自动回填数据处理函数
      return Object.keys(schema.properties || {}).filter(function (property) {
        return (0, _lowcodeTypes.isJSFunction)(field.form.values[property]);
      });
    }),
    selectedProperties = _useState[0],
    setSelectedProperties = _useState[1];
  var properties = (0, _react.useMemo)(function () {
    return Object.keys(schema.properties || {}).filter(function (i) {
      return selectedProperties.indexOf(i) === -1;
    }).map(function (propertyKey) {
      var _schema$properties;
      return {
        label: (_schema$properties = schema.properties) === null || _schema$properties === void 0 ? void 0 : _schema$properties[propertyKey].title,
        value: propertyKey
      };
    });
  }, [schema, selectedProperties]);
  var handleAdd = (0, _react.useCallback)(function (propertyKey) {
    setSelectedProperties(function (selectedProperties) {
      return selectedProperties.concat(propertyKey);
    });
  }, []);

  /* 改成formily内部支持 */
  var handleRemove = (0, _react.useCallback)(function (propertyKey) {
    var _field$form, _field$form$query, _field$form$query$tak;
    field === null || field === void 0 ? void 0 : (_field$form = field.form) === null || _field$form === void 0 ? void 0 : (_field$form$query = _field$form.query(propertyKey)) === null || _field$form$query === void 0 ? void 0 : (_field$form$query$tak = _field$form$query.take()) === null || _field$form$query$tak === void 0 ? void 0 : _field$form$query$tak.setState(function (state) {
      state.visible = !state.visible;
    });
    // setSelectedProperties((selectedProperties) =>
    //   selectedProperties.filter((i) => i !== propertyKey)
    // );
  }, [field]);
  var addition = (0, _react.useMemo)(function () {
    if (properties.length === 0) return null;
    if (properties.length === 1) {
      return /*#__PURE__*/_react["default"].createElement(_button["default"], {
        onClick: function onClick() {
          return handleAdd(properties[0].value);
        }
      }, addText);
    }
    return /*#__PURE__*/_react["default"].createElement(_menuButton["default"], {
      label: addText,
      onItemClick: handleAdd,
      autoWidth: false
    }, properties.map(function (prop) {
      return /*#__PURE__*/_react["default"].createElement(MenuButtonItem, {
        key: prop.value
      }, prop.label);
    }));
  }, [properties, addText, handleAdd]);
  var content = (0, _react.useMemo)(function () {
    var SchemaField = (0, _react2.createSchemaField)({
      // TODO
      components: {
        JSFunction: _jsFunction.JSFunction,
        FormLayout: _next.FormLayout,
        FormItem: _next.FormItem
      }
    });
    var schemaJSON = schema.toJSON();
    var schemaProperties = (0, _pick2["default"])(schemaJSON.properties, selectedProperties);
    return /*#__PURE__*/_react["default"].createElement(SchemaField, {
      schema: (0, _extends2["default"])({}, schemaJSON, {
        type: 'void',
        'x-component': 'FormLayout',
        'x-component-props': {},
        properties: Object.keys(schemaProperties).reduce(function (acc, cur) {
          acc[cur] = (0, _extends2["default"])({}, schemaProperties[cur], {
            'x-decorator-props': {
              labelCol: 24,
              labelAlign: 'left',
              wrapperCol: 24,
              layout: 'vertical',
              wrapperStyle: {
                justifyContent: 'space-bewteen',
                alignItems: 'flex-start'
              },
              addonAfter: /*#__PURE__*/_react["default"].createElement(_formLazyObjRemoveBtn.RemoveBtn, {
                propertyKey: cur,
                onClick: handleRemove
              })
            }
          });
          return acc;
        }, {})
      })
    });
  }, [schema, selectedProperties, handleRemove]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _misc.generateClassName)('form-lazy-obj')
  }, addition, content);
});
exports.FormLazyObj = FormLazyObj;
FormLazyObj.displayName = 'ArrayCollapse';
var _default = FormLazyObj;
exports["default"] = _default;