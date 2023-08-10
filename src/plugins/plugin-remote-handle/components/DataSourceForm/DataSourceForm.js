"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.DataSourceForm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _react = _interopRequireWildcard(require("react"));
var _core = require("@formily/core");
var _react2 = require("@formily/react");
var _next = require("@formily/next");
var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));
var _thru2 = _interopRequireDefault(require("lodash/thru"));
var _isArray2 = _interopRequireDefault(require("lodash/isArray"));
var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));
var _mergeWith2 = _interopRequireDefault(require("lodash/mergeWith"));
var _get2 = _interopRequireDefault(require("lodash/get"));
var _traverse = _interopRequireDefault(require("traverse"));
var _Forms = require("../Forms");
var _misc = require("../../utils/misc");
var _filterXDisplay = require("../../utils/filter-x-display");
var _types = require("../../types");
var _lowcodeTypes = require("@alilc/lowcode-types");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// @todo schema default

var SCHEMA = {
  type: 'object',
  properties: {
    type: {
      title: '类型',
      type: 'string',
      readOnly: true,
      'x-decorator': 'FormItem',
      'x-component-props': {
        // labelWidth: 300,
      }
    },
    id: {
      type: 'string',
      title: '函数名',
      required: true
    },
    isInit: {
      title: '是否自动请求',
      type: 'boolean',
      "default": false,
      'x-decorator-props': {
        addonAfter: /*#__PURE__*/_react["default"].createElement(_Forms.ComponentSwitchBtn, {
          component: "LowcodeExpression"
        })
      }
    },
    options: {
      type: 'object',
      title: '请求配置',
      required: true,
      properties: {
        uri: {
          type: 'string',
          title: '请求地址',
          required: true,
          'x-decorator-props': {
            addonAfter: /*#__PURE__*/_react["default"].createElement(_Forms.ComponentSwitchBtn, {
              component: "LowcodeExpression"
            })
          }
        },
        params: {
          title: '请求参数',
          type: 'array',
          "default": [],
          'x-decorator-props': {
            addonAfter: /*#__PURE__*/_react["default"].createElement(_Forms.ComponentSwitchBtn, {
              component: "LowcodeExpression"
            })
          }
        },
        method: {
          type: 'string',
          title: '请求方法',
          required: true,
          "enum": ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'].map(function (i) {
            return {
              label: i,
              value: i
            };
          }),
          'x-component': 'Select',
          "default": 'GET',
          'x-decorator-props': {
            addonAfter: /*#__PURE__*/_react["default"].createElement(_Forms.ComponentSwitchBtn, {
              component: "LowcodeExpression"
            })
          }
        },
        isCors: {
          type: 'boolean',
          title: '是否支持跨域',
          required: true,
          "default": true,
          'x-decorator-props': {
            addonAfter: /*#__PURE__*/_react["default"].createElement(_Forms.ComponentSwitchBtn, {
              component: "LowcodeExpression"
            })
          }
        },
        timeout: {
          type: 'number',
          title: '超时时长（毫秒）',
          "default": 5000,
          'x-decorator-props': {
            addonAfter: /*#__PURE__*/_react["default"].createElement(_Forms.ComponentSwitchBtn, {
              component: "LowcodeExpression"
            })
          }
        },
        headers: {
          type: 'array',
          title: '请求头信息',
          "default": [],
          'x-decorator-props': {
            addonAfter: /*#__PURE__*/_react["default"].createElement(_Forms.ComponentSwitchBtn, {
              component: "LowcodeExpression"
            })
          }
        }
      }
    },
    lifecycles: {
      type: 'void',
      title: '数据处理函数',
      'x-component': 'FormLazyObj',
      'x-component-props': {
        defaultPropertyKeys: [],
        addText: '选择添加',
        autoWidth: false
      },
      'x-decorator-props': {},
      properties: {
        shouldFetch: {
          type: 'string',
          title: '是否发起请求的计算函数',
          'x-component': 'JSFunction',
          "default": {
            type: 'JSFunction',
            value: 'function() { return true; }'
          }
        },
        willFetch: {
          type: 'string',
          title: '请求前对参数的处理函数',
          'x-component': 'JSFunction',
          "default": {
            type: 'JSFunction',
            value: 'function(options) { return options; }'
          }
        },
        dataHandler: {
          type: 'string',
          title: '请求成功对结果的处理函数',
          'x-component': 'JSFunction',
          "default": {
            type: 'JSFunction',
            value: 'function(res) { return res.data }'
          }
        },
        errorHandler: {
          type: 'string',
          title: '请求失败对异常的处理函数',
          'x-component': 'JSFunction',
          "default": {
            type: 'JSFunction',
            value: 'function(err) {}'
          }
        }
      }
    }
  }
};

/**
 * 通过是否存在 ID 来决定读写状态
 */
var DataSourceForm = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2["default"])(DataSourceForm, _PureComponent);
  function DataSourceForm(props) {
    var _this;
    _this = _PureComponent.call(this, props) || this;
    _this.submit = function () {
      return _this.state.form.submit().then(function (formData) {
        if ((0, _isArray2["default"])((0, _get2["default"])(formData, 'options.params'))) {
          formData.options.params = formData.options.params.reduce(function (acc, cur) {
            if (!cur.name) return acc;
            acc[cur.name] = cur.value;
            return acc;
          }, {});
        }
        if ((0, _isArray2["default"])((0, _get2["default"])(formData, 'options.headers'))) {
          formData.options.headers = formData.options.headers.reduce(function (acc, cur) {
            if (!cur.name) return acc;
            acc[cur.name] = cur.value;
            return acc;
          }, {});
        }
        return formData;
      })["catch"](function (err) {
        console.error('v', err);
        return null;
      });
    };
    _this.deriveInitialData = function (dataSource) {
      if (dataSource === void 0) {
        dataSource = {};
      }
      var dataSourceType = _this.props.dataSourceType;
      var result = (0, _cloneDeep2["default"])(dataSource);
      // TODO
      if ((0, _isPlainObject2["default"])((0, _get2["default"])(result, 'options.params')) && !(0, _lowcodeTypes.isJSExpression)((0, _get2["default"])(result, 'options.params'))) {
        result.options.params = Object.keys(result.options.params).reduce(function (acc, cur) {
          acc.push({
            name: cur,
            value: result.options.params[cur]
          });
          return acc;
        }, []);
      }
      if ((0, _isPlainObject2["default"])((0, _get2["default"])(result, 'options.headers')) && !(0, _lowcodeTypes.isJSExpression)((0, _get2["default"])(result, 'options.headers'))) {
        result.options.headers = Object.keys(result.options.headers).reduce(function (acc, cur) {
          acc.push({
            name: cur,
            value: result.options.headers[cur]
          });
          return acc;
        }, []);
      }
      result.type = dataSourceType.type;
      return result;
    };
    _this.deriveSchema = function () {
      var _this$props = _this.props,
        dataSourceType = _this$props.dataSourceType,
        _this$props$dataSourc = _this$props.dataSourceList,
        dataSourceList = _this$props$dataSourc === void 0 ? [] : _this$props$dataSourc,
        mode = _this$props.mode;

      // 添加校验规则
      // TODO 返回对象会报错
      (0, _core.registerValidateRules)({
        validateDataSourceId: function validateDataSourceId(value, rule) {
          if (dataSourceList !== null && dataSourceList !== void 0 && dataSourceList.find(function (i) {
            return i.id === value;
          })) {
            return rule.message;
          }
          return '';
        }
      });

      // @todo 减小覆盖的风险
      var formSchema = (0, _mergeWith2["default"])({}, SCHEMA, dataSourceType.schema, function (objValue, srcValue) {
        if ((0, _isArray2["default"])(objValue)) {
          return srcValue;
        }
      });

      // 过滤 x-display 值为隐藏的属性
      (0, _filterXDisplay.filterXDisplay)(formSchema);
      if (mode === _types.DataSourceFormMode.CREATE) {
        formSchema.properties.id['x-validator'] = {
          validateDataSourceId: true,
          message: '该函数已存在'
        };
      }
      if ((0, _get2["default"])(formSchema, 'properties.options.properties.params')) {
        formSchema.properties.options.properties.params = (0, _extends2["default"])({}, formSchema.properties.options.properties.params, {
          type: 'array',
          'x-component': 'ArrayItems',
          'x-component-props': {
            className: (0, _misc.generateClassName)('array-items')
          },
          'x-decorator': 'FormItem',
          items: {
            type: 'object',
            // 'x-component': 'Space',
            properties: {
              space: {
                type: 'void',
                'x-component': 'Space',
                properties: {
                  sort: {
                    type: 'void',
                    'x-decorator': 'FormItem',
                    'x-component': 'ArrayItems.SortHandle'
                  },
                  name: {
                    title: '',
                    type: 'string',
                    'x-component': 'Input',
                    'x-component-props': {
                      placeholder: 'name',
                      style: {
                        width: '80px'
                      }
                    },
                    'x-decorator-props': {
                      addonAfter: ':'
                    }
                  },
                  value: {
                    title: '',
                    // type: "string",
                    'x-component': 'ParamValue',
                    'x-component-props': {
                      types: ['string', 'boolean', 'expression'],
                      placeholder: 'value'
                    }
                  },
                  remove: {
                    type: 'void',
                    'x-decorator': 'FormItem',
                    'x-component': 'ArrayItems.Remove'
                  }
                }
              }
            }
          },
          properties: {
            addition: {
              type: 'void',
              title: '添加',
              'x-component': 'ArrayItems.Addition',
              'x-component-props': {
                style: {
                  width: '120'
                }
              }
            }
          }
        });
      }
      if ((0, _get2["default"])(formSchema, 'properties.options.properties.headers')) {
        formSchema.properties.options.properties.headers = (0, _extends2["default"])({}, formSchema.properties.options.properties.headers, {
          type: 'array',
          'x-component': 'ArrayItems',
          'x-component-props': {
            className: (0, _misc.generateClassName)('array-items')
          },
          items: {
            type: 'object',
            'x-component': 'Space',
            properties: {
              sort: {
                type: 'void',
                'x-decorator': 'FormItem',
                'x-component': 'ArrayItems.SortHandle'
              },
              name: {
                title: '',
                type: 'string',
                'x-component': 'Input',
                'x-component-props': {
                  placeholder: 'name',
                  style: {
                    width: '80px'
                  }
                },
                'x-decorator-props': {
                  addonAfter: ':'
                }
              },
              value: {
                title: '',
                // type: "string",
                'x-component': 'ParamValue',
                'x-component-props': {
                  types: ['string', 'boolean', 'expression']
                  // placeholder: "value",
                }
              },

              remove: {
                type: 'void',
                'x-decorator': 'FormItem',
                'x-component': 'ArrayItems.Remove'
              }
            }
          },
          properties: {
            addition: {
              type: 'void',
              title: '添加',
              'x-component': 'ArrayItems.Addition',
              'x-component-props': {
                style: {
                  width: '120'
                }
              }
            }
          }
        });
        // delete formSchema.properties.options.properties.headers.properties;
      }

      return {
        type: 'object',
        properties: {
          layout: {
            type: 'void',
            'x-component': 'FormLayout',
            'x-component-props': {
              labelCol: 6,
              wrapperCol: 14
              // layout: 'vertical'
            },

            properties: (0, _traverse["default"])(formSchema).forEach(function (node) {
              if (node !== null && node !== void 0 && node.type && !node['x-component']) {
                if (node.type === 'string') {
                  node['x-component'] = 'Input';
                } else if (node.type === 'number') {
                  node['x-component'] = 'NumberPicker';
                } else if (node.type === 'boolean') {
                  node['x-component'] = 'Switch';
                  node['x-component-props'] = {
                    size: 'small',
                    // labelWidth: 300,
                    style: {
                      width: '50px'
                    }
                  };
                }
              }
              if (node && node['x-component'] && node['x-component'].indexOf('FormCollapse') === -1 && node['x-component'].indexOf('ArrayItems.') === -1) {
                node['x-decorator'] = 'FormItem';
              }
            }).properties
          }
        }
      };
    };
    _this.state = {
      form: _this.createForm()
    };
    return _this;
  }
  var _proto = DataSourceForm.prototype;
  _proto.createForm = function createForm() {
    return (0, _core.createForm)({
      initialValues: this.deriveInitialData(this.props.dataSource)
    });
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props$dataSourc2, _prevProps$dataSource;
    var type = (_this$props$dataSourc2 = this.props.dataSourceType) === null || _this$props$dataSourc2 === void 0 ? void 0 : _this$props$dataSourc2.type;
    var ptype = (_prevProps$dataSource = prevProps.dataSourceType) === null || _prevProps$dataSource === void 0 ? void 0 : _prevProps$dataSource.type;
    // dataSource 或 dataSourceType.type 变了，需要更新 form，界面刷新
    if (this.props.dataSource !== prevProps.dataSource || type !== ptype) {
      this.setState({
        form: this.createForm()
      });
    }
  };
  _proto.render = function render() {
    var SchemaField = (0, _react2.createSchemaField)({
      components: {
        Input: _next.Input,
        Switch: _next.Switch,
        NumberPicker: _next.NumberPicker,
        FormItem: _next.FormItem,
        ArrayItems: _next.ArrayItems,
        FormLayout: _next.FormLayout,
        FormCollapse: _next.FormCollapse,
        JSFunction: _Forms.JSFunction,
        Code: _Forms.Code,
        ParamValue: _Forms.ParamValue,
        LowcodeExpression: _Forms.LowcodeExpression,
        Space: _next.Space,
        FormLazyObj: _Forms.FormLazyObj,
        Select: _next.Select
      }
    });
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _misc.generateClassName)('create')
    }, /*#__PURE__*/_react["default"].createElement(_next.Form, {
      form: this.state.form
    }, /*#__PURE__*/_react["default"].createElement(SchemaField, {
      schema: (0, _thru2["default"])(this.deriveSchema(), function (arg) {
        return arg;
      })
    })));
  };
  return DataSourceForm;
}(_react.PureComponent);
exports.DataSourceForm = DataSourceForm;