"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.DataSourcePane = void 0;
var _button = _interopRequireDefault(require("@alifd/next/lib/button"));
var _message = _interopRequireDefault(require("@alifd/next/lib/message"));
var _dialog = _interopRequireDefault(require("@alifd/next/lib/dialog"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _isArray2 = _interopRequireDefault(require("lodash/isArray"));
var _stateMachine = require("../utils/stateMachine");
var _panelContext = require("../utils/panel-context");
var _DataSourceFilter = require("../components/DataSourceFilter");
var _DataSourceOperations = require("../components/DataSourceOperations");
var _DataSourceList = require("../components/DataSourceList");
var _misc = require("../utils/misc");
var _DataSourceForm = require("../components/DataSourceForm");
var _DataSourceExport = require("../components/DataSourceExport");
var _DataSourceImport = require("../components/DataSourceImport");
var _types = require("../types");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * 面板，先通过 Dialog 呈现
 */
var DataSourcePane = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2["default"])(DataSourcePane, _PureComponent);
  function DataSourcePane() {
    var _this$props$initialSc;
    var _this;
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _PureComponent.call.apply(_PureComponent, [this].concat(_args)) || this;
    _this.serviceS = void 0;
    _this.state = {
      // TODO
      current: (0, _stateMachine.createStateMachine)((_this$props$initialSc = _this.props.initialSchema) === null || _this$props$initialSc === void 0 ? void 0 : _this$props$initialSc.list).initialState,
      listMode: _types.DataSourcePanelMode.NORMAL
    };
    _this.detailRef = /*#__PURE__*/(0, _react.createRef)();
    _this.exportRef = /*#__PURE__*/(0, _react.createRef)();
    _this.importRef = /*#__PURE__*/(0, _react.createRef)();
    _this.send = function () {
      var _this$context$stateSe;
      (_this$context$stateSe = _this.context.stateService).send.apply(_this$context$stateSe, arguments);
    };
    _this.handleStartSort = function () {
      _this.send({
        type: 'START_SORT'
      });
    };
    _this.handleFinishSort = function () {
      _this.send('FINISH_SORT');
    };
    _this.handleCancelSort = function () {
      _this.send('CANCEL_SORT');
    };
    _this.handleCancelExport = function () {
      _this.send('FINISH_EXPORT');
    };
    _this.handleStartExport = function () {
      _this.send('START_EXPORT');
    };
    _this.handleFinishExport = function () {
      var _this$props, _this$props$onExport;
      // TODO
      var context = _this.state.current.context;
      var target = context.dataSourceList.filter(function (item) {
        return context["export"].selectedDataSourceIdList.indexOf(item.id) !== -1;
      });
      (_this$props = _this.props) === null || _this$props === void 0 ? void 0 : (_this$props$onExport = _this$props.onExport) === null || _this$props$onExport === void 0 ? void 0 : _this$props$onExport.call(_this$props, target);
      _this.send({
        type: 'SHOW_EXPORT_DETAIL',
        payload: {
          dataSourceList: target
        }
      });
    };
    _this.handleOperationClick = function (operationType, dataSourceId) {
      var dataSourceTypes = _this.props.dataSourceTypes;
      if (operationType === 'view') {
        _this.send({
          type: 'START_VIEW',
          dataSourceId: dataSourceId,
          dataSourceTypes: dataSourceTypes
        });
      }
      if (operationType === 'edit') {
        _this.send({
          type: 'START_EDIT',
          dataSourceId: dataSourceId,
          dataSourceTypes: dataSourceTypes
        });
      }
      if (operationType === 'duplicate') {
        _this.send({
          type: 'START_DUPLICATE',
          dataSourceId: dataSourceId,
          dataSourceTypes: dataSourceTypes
        });
      }
      if (operationType === 'remove') {
        _dialog["default"].confirm({
          content: '确定要删除吗？',
          onOk: function onOk() {
            _this.send({
              type: 'REMOVE',
              dataSourceId: dataSourceId
            });
          }
        });
      }
    };
    _this.handleImport = function (importPluginName) {
      _this.send({
        type: 'SHOW_IMPORT_DETAIL',
        pluginName: importPluginName
      });
    };
    _this.handleFilterChange = function (keyword, dataSourceType) {
      _this.send({
        type: 'FILTER_CHANGE',
        payload: {
          dataSourceType: dataSourceType,
          keyword: keyword
        }
      });
    };
    _this.handleOperationCancel = function () {
      _this.send({
        type: 'DETAIL_CANCEL'
      });
    };
    _this.handleCreate = function (dataSourceType) {
      var dataSourceTypes = _this.props.dataSourceTypes;
      _this.send({
        type: 'START_CREATE',
        dataSourceType: dataSourceTypes.find(function (i) {
          return i.type === dataSourceType;
        })
      });
    };
    _this.handleOperationFinish = function () {
      var current = _this.state.current;
      if (current.matches('detail.create')) {
        var _this$detailRef, _this$detailRef$curre;
        (_this$detailRef = _this.detailRef) === null || _this$detailRef === void 0 ? void 0 : (_this$detailRef$curre = _this$detailRef.current) === null || _this$detailRef$curre === void 0 ? void 0 : _this$detailRef$curre.submit().then(function (data) {
          if (data) {
            _this.send({
              type: 'FINISH_CREATE',
              payload: data
            });
          }
        });
      } else if (current.matches('detail.edit')) {
        var _this$detailRef2, _this$detailRef2$curr;
        (_this$detailRef2 = _this.detailRef) === null || _this$detailRef2 === void 0 ? void 0 : (_this$detailRef2$curr = _this$detailRef2.current) === null || _this$detailRef2$curr === void 0 ? void 0 : _this$detailRef2$curr.submit().then(function (data) {
          _this.send({
            type: 'FINISH_EDIT',
            payload: data
          });
        });
      } else if (current.matches('detail.export')) {
        var _this$exportRef, _this$exportRef$curre;
        (_this$exportRef = _this.exportRef) === null || _this$exportRef === void 0 ? void 0 : (_this$exportRef$curre = _this$exportRef.current) === null || _this$exportRef$curre === void 0 ? void 0 : _this$exportRef$curre.submit().then(function () {
          _this.send('FINISH_EDIT');
        });
      } else if (current.matches('detail.import')) {
        var _this$importRef, _this$importRef$curre;
        (_this$importRef = _this.importRef) === null || _this$importRef === void 0 ? void 0 : (_this$importRef$curre = _this$importRef.current) === null || _this$importRef$curre === void 0 ? void 0 : _this$importRef$curre.submit().then(function (data) {
          var importDataSourceList = function importDataSourceList() {
            _this.send({
              type: 'FINISH_IMPORT',
              payload: data
            });
          };
          if (!(0, _isArray2["default"])(data) || data.length === 0) {
            _message["default"].error('没有找到可导入的函数');
            return;
          }
          var repeatedDataSourceList = data.filter(function (item) {
            return !!_this.state.current.context.dataSourceList.find(function (dataSource) {
              return dataSource.id === item.id;
            });
          });
          if (repeatedDataSourceList.length > 0) {
            _dialog["default"].confirm({
              content: "\u51FD\u6570\uFF08" + repeatedDataSourceList.map(function (item) {
                return item.id;
              }).join('，') + "\uFF09\u5DF2\u5B58\u5728\uFF0C\u5982\u679C\u5BFC\u5165\u4F1A\u66FF\u6362\u539F\u51FD\u6570\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F",
              onOk: function onOk() {
                importDataSourceList();
              }
            });
            return;
          }
          importDataSourceList();
        })["catch"](function (err) {
          console.warn(err === null || err === void 0 ? void 0 : err.message);
        });
      }
    };
    _this.renderDetail = function () {
      var current = _this.state.current;
      var _this$props2 = _this.props,
        _this$props2$dataSour = _this$props2.dataSourceTypes,
        dataSourceTypes = _this$props2$dataSour === void 0 ? [] : _this$props2$dataSour,
        _this$props2$importPl = _this$props2.importPlugins,
        importPlugins = _this$props2$importPl === void 0 ? [] : _this$props2$importPl,
        _this$props2$exportPl = _this$props2.exportPlugins,
        exportPlugins = _this$props2$exportPl === void 0 ? [] : _this$props2$exportPl,
        _this$props2$formComp = _this$props2.formComponents,
        formComponents = _this$props2$formComp === void 0 ? [] : _this$props2$formComp;
      var content = null;
      if (current.matches('detail.edit')) {
        var _current$context$deta, _current$context$deta2, _current$context$deta3, _current$context$deta4;
        content = /*#__PURE__*/_react["default"].createElement(_DataSourceForm.DataSourceForm, {
          ref: _this.detailRef,
          dataSourceType: (_current$context$deta = current.context.detail) === null || _current$context$deta === void 0 ? void 0 : (_current$context$deta2 = _current$context$deta.data) === null || _current$context$deta2 === void 0 ? void 0 : _current$context$deta2.dataSourceType,
          dataSource: (_current$context$deta3 = current.context.detail) === null || _current$context$deta3 === void 0 ? void 0 : (_current$context$deta4 = _current$context$deta3.data) === null || _current$context$deta4 === void 0 ? void 0 : _current$context$deta4.dataSource,
          dataSourceList: current.context.dataSourceList,
          mode: "edit"
        });
      } else if (current.matches('detail.view')) {
        content = /*#__PURE__*/_react["default"].createElement(_DataSourceForm.DataSourceForm, {
          ref: _this.detailRef,
          readonly: true,
          dataSourceType: current.context.detail.data.dataSourceType,
          dataSource: current.context.detail.data.dataSource,
          dataSourceList: current.context.dataSourceList
        });
      } else if (current.matches('detail.create')) {
        content = /*#__PURE__*/_react["default"].createElement(_DataSourceForm.DataSourceForm, {
          ref: _this.detailRef,
          dataSourceType: current.context.detail.data.dataSourceType,
          dataSource: current.context.detail.data.dataSource,
          dataSourceList: current.context.dataSourceList,
          mode: "create"
        });
      } else if (current.matches('detail.import')) {
        var _current$context$deta5, _current$context$deta6, _current$context$deta7;
        // TODO
        // pluginName
        var currentPluginName = (_current$context$deta5 = current.context.detail) === null || _current$context$deta5 === void 0 ? void 0 : (_current$context$deta6 = _current$context$deta5.data) === null || _current$context$deta6 === void 0 ? void 0 : (_current$context$deta7 = _current$context$deta6.pluginName) === null || _current$context$deta7 === void 0 ? void 0 : _current$context$deta7.name;
        var importPlugin = importPlugins === null || importPlugins === void 0 ? void 0 : importPlugins.find(function (item) {
          return item.name === currentPluginName;
        });
        var Component = importPlugin ? importPlugin.component : _DataSourceImport.DataSourceImport;
        content = /*#__PURE__*/_react["default"].createElement(Component, {
          dataSourceTypes: dataSourceTypes,
          ref: _this.importRef
        });
      } else if (current.matches('detail.export')) {
        // TODO
        content = /*#__PURE__*/_react["default"].createElement(_DataSourceExport.DataSourceExport, {
          ref: _this.exportRef,
          dataSourceTypes: dataSourceTypes,
          dataSourceList: current.context.detail.data.dataSourceList
        });
      }
      if (!current.matches('detail') || !current.context.detail.visible) {
        return null;
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _misc.generateClassName)('detail')
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _misc.generateClassName)('detail-header')
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _misc.generateClassName)('detail-title')
      }, current.context.detail.title), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _misc.generateClassName)('detail-actions')
      }, current.context.detail.ok !== false && /*#__PURE__*/_react["default"].createElement(_button["default"], {
        text: true,
        type: "primary",
        onClick: _this.handleOperationFinish
      }, current.context.detail.okText || '确认'), /*#__PURE__*/_react["default"].createElement(_button["default"], {
        text: true,
        onClick: _this.handleOperationCancel
      }, current.context.detail.cancelText || '取消'))), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _misc.generateClassName)('detail-body')
      }, content));
    };
    return _this;
  }
  var _proto = DataSourcePane.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var _this$context,
      _this$context$stateSe2,
      _this$context$stateSe3,
      _this2 = this,
      _this$props$initialSc2;
    this.serviceS = (_this$context = this.context) === null || _this$context === void 0 ? void 0 : (_this$context$stateSe2 = _this$context.stateService) === null || _this$context$stateSe2 === void 0 ? void 0 : (_this$context$stateSe3 = _this$context$stateSe2.subscribe) === null || _this$context$stateSe3 === void 0 ? void 0 : _this$context$stateSe3.call(_this$context$stateSe2, function (state) {
      var _state$event;
      _this2.setState({
        current: state
      });
      // 监听导入成功事件
      if (state.changed && (state.value === 'idle' || ((_state$event = state.event) === null || _state$event === void 0 ? void 0 : _state$event.type) === 'FINISH_IMPORT')) {
        var _this2$props$onSchema, _this2$props;
        // TODO add hook
        (_this2$props$onSchema = (_this2$props = _this2.props).onSchemaChange) === null || _this2$props$onSchema === void 0 ? void 0 : _this2$props$onSchema.call(_this2$props, {
          list: state.context.dataSourceList
        });
      }
    });
    this.send({
      type: 'UPDATE_DS',
      payload: (_this$props$initialSc2 = this.props.initialSchema) === null || _this$props$initialSc2 === void 0 ? void 0 : _this$props$initialSc2.list
    });
  };
  _proto.componentDidUpdate = function componentDidUpdate(newValue) {
    if (this.props.initialSchema !== newValue.initialSchema) {
      var _this$props$initialSc3;
      this.send({
        type: 'UPDATE_DS',
        payload: (_this$props$initialSc3 = this.props.initialSchema) === null || _this$props$initialSc3 === void 0 ? void 0 : _this$props$initialSc3.list
      });
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this$serviceS, _this$serviceS$unsubs;
    (_this$serviceS = this.serviceS) === null || _this$serviceS === void 0 ? void 0 : (_this$serviceS$unsubs = _this$serviceS.unsubscribe) === null || _this$serviceS$unsubs === void 0 ? void 0 : _this$serviceS$unsubs.call(_this$serviceS);
  };
  _proto.render = function render() {
    var _this$props3 = this.props,
      renderDataSourceInfoTags = _this$props3.renderDataSourceInfoTags,
      _this$props3$style = _this$props3.style,
      style = _this$props3$style === void 0 ? {} : _this$props3$style,
      _this$props3$classNam = _this$props3.className,
      className = _this$props3$classNam === void 0 ? '' : _this$props3$classNam,
      _this$props3$helpLink = _this$props3.helpLink,
      helpLink = _this$props3$helpLink === void 0 ? '' : _this$props3$helpLink,
      _this$props3$dataSour = _this$props3.dataSourceTypes,
      dataSourceTypes = _this$props3$dataSour === void 0 ? [] : _this$props3$dataSour,
      _this$props3$importPl = _this$props3.importPlugins,
      importPlugins = _this$props3$importPl === void 0 ? [] : _this$props3$importPl;
    var _this$state = this.state,
      current = _this$state.current,
      listMode = _this$state.listMode;
    if (!dataSourceTypes || dataSourceTypes.length === 0) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _misc.generateClassName)('error')
      }, "\u6CA1\u6709\u914D\u7F6E\u8BF7\u6C42\u7C7B\u578B");
    }
    var mode = listMode;
    if (current.matches('sort')) {
      mode = _types.DataSourcePanelMode.SORTING;
    } else if (current.matches('export')) {
      mode = _types.DataSourcePanelMode.EXPORTING;
    }
    var isEmpty = current.context.dataSourceList.length === 0;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _classnames["default"])((0, _misc.generateClassName)('container'), className),
      style: style
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _misc.generateClassName)('title')
    }, "\u4E8B\u4EF6\u5904\u7406\u8BF7\u6C42", helpLink && /*#__PURE__*/_react["default"].createElement(_button["default"], {
      component: "a",
      href: helpLink
    }, "\u4F7F\u7528\u5E2E\u52A9")), /*#__PURE__*/_react["default"].createElement(_DataSourceFilter.DataSourceFilter, {
      key: current.context.dataSourceListFilter.renderKey,
      dataSourceTypes: dataSourceTypes,
      onFilter: this.handleFilterChange
    }), /*#__PURE__*/_react["default"].createElement(_DataSourceOperations.DataSourceOperations, {
      dataSource: current.context.dataSourceList,
      empty: isEmpty,
      importPlugins: importPlugins,
      dataSourceTypes: dataSourceTypes,
      onCreate: this.handleCreate,
      onStartExport: this.handleStartExport,
      onCancelExport: this.handleCancelExport,
      onFinishExport: this.handleFinishExport,
      onStartSort: this.handleStartSort,
      onCancelSort: this.handleCancelSort,
      onFinishSort: this.handleFinishSort,
      onImport: this.handleImport,
      mode: mode,
      selectedList: current.context["export"].selectedDataSourceIdList
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _misc.generateClassName)('list')
    }, /*#__PURE__*/_react["default"].createElement(_DataSourceList.DataSourceList, {
      renderItemInfoTags: renderDataSourceInfoTags,
      dataSource: current.context.dataSourceList.filter(function (i) {
        return i.id.indexOf(current.context.dataSourceListFilter.keyword) !== -1 && (!current.context.dataSourceListFilter.dataSourceType || current.context.dataSourceListFilter.dataSourceType === i.type);
      }),
      onOperationClick: this.handleOperationClick
    })), this.renderDetail());
  };
  return DataSourcePane;
}(_react.PureComponent);
exports.DataSourcePane = DataSourcePane;
DataSourcePane.contextType = _panelContext.DataSourcePaneContext;