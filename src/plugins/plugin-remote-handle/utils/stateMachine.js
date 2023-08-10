"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.createStateService = exports.createStateMachine = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _xstate = require("xstate");
var _uniqueId2 = _interopRequireDefault(require("lodash/uniqueId"));
var createStateMachine = function createStateMachine(dataSourceList) {
  if (dataSourceList === void 0) {
    dataSourceList = [];
  }
  return (0, _xstate.createMachine)({
    id: 'dataSourcePane',
    initial: 'idle',
    states: {
      idle: {
        on: {
          UPDATE_DS: {
            actions: (0, _xstate.assign)({
              dataSourceList: function dataSourceList(context, event) {
                return event.payload;
              }
            })
          }
        }
      },
      sort: {
        on: {
          CANCEL_SORT: 'idle',
          SAVE_SORT: {
            actions: (0, _xstate.assign)({
              sort: function sort(context, event) {
                return {
                  dataSourceList: event.payload
                };
              }
            })
          },
          FINISH_SORT: {
            target: 'idle',
            actions: (0, _xstate.assign)({
              dataSourceList: function dataSourceList(context, event) {
                return context.sort.dataSourceList;
              }
            })
          }
        }
      },
      exit: {
        type: 'final'
      },
      "export": {
        on: {
          FINISH_EXPORT: {
            target: 'idle',
            actions: (0, _xstate.assign)({
              "export": function _export(context, event) {
                return {
                  selectedDataSourceIdList: []
                };
              }
            })
          },
          'EXPORT.toggleSelect': {
            actions: (0, _xstate.assign)({
              "export": function _export(context, event) {
                var selectedDataSourceIdList = context["export"].selectedDataSourceIdList;
                var index = selectedDataSourceIdList.indexOf(event.dataSourceId);
                if (index !== -1) {
                  return {
                    selectedDataSourceIdList: selectedDataSourceIdList.slice(0, index).concat(selectedDataSourceIdList.slice(index + 1))
                  };
                }
                return {
                  selectedDataSourceIdList: context["export"].selectedDataSourceIdList.concat(event.dataSourceId)
                };
              }
            })
          },
          SHOW_EXPORT_DETAIL: {
            target: 'detail.export',
            actions: (0, _xstate.assign)({
              detail: function detail(context, event) {
                return {
                  visible: true,
                  title: '导出',
                  // okText: '创建',
                  target: 'export',
                  data: event.payload
                };
              }
            })
          }
        }
      },
      detail: {
        initial: 'idle',
        on: {
          DETAIL_CANCEL: {
            target: 'idle',
            actions: (0, _xstate.assign)({
              detail: {
                visible: false
              }
            })
          }
        },
        states: {
          idle: {},
          view: {},
          "import": {
            on: {
              FINISH_IMPORT: {
                target: 'idle',
                actions: (0, _xstate.assign)({
                  dataSourceList: function dataSourceList(context, event) {
                    // 直接 concat 会出现重复
                    var filterDataSourceList = context.dataSourceList.filter(function (item) {
                      return !event.payload.find(function (dataSource) {
                        return dataSource.id === item.id;
                      });
                    });
                    return filterDataSourceList.concat(event.payload);
                  },
                  detail: {
                    visible: false
                  }
                })
              }
            }
          },
          "export": {},
          create: {
            on: {
              /* FINISH_CREATE: {
                          target: 'idle',
                          actions: assign({
                              dataSourceList: (context, event) => {
                                  return context.dataSourceList.concat(event.payload);
                              },
                              detail: {
                                  visible: false
                              }
                          })
                      }, */
            }
          },
          edit: {
            on: {
              /* FINISH_EDIT: {
                          type: 'idle',
                          actions: assign({
                              dataSourceList: (context, event) => {
                                  const nextDataSourceList = [...context.dataSourceList];
                                  const id = context.detail.data.dataSourceId;
                                  const dataSourceUpdateIndex = _findIndex(nextDataSourceList, (dataSource) => dataSource.id === id);
                                  nextDataSourceList[dataSourceUpdateIndex] = event.payload;
                                  return nextDataSourceList;
                              },
                              detail: {
                                  visible: false
                              }
                          })
                      }, */
            }
          }
        }
      }
    },
    context: {
      dataSourceList: dataSourceList,
      dataSourceListFilter: {
        type: '',
        keyword: '',
        renderKey: 1
      },
      detail: {
        visible: false,
        target: 'idle'
      },
      sort: {
        dataSourceList: []
      },
      "export": {
        selectedDataSourceIdList: []
      }
    },
    on: {
      FINISH_CREATE: {
        target: 'idle',
        actions: (0, _xstate.assign)({
          dataSourceList: function dataSourceList(context, event) {
            return context.dataSourceList.concat(event.payload);
          },
          detail: {
            visible: false
          }
        })
      },
      FINISH_EDIT: {
        target: 'idle',
        actions: (0, _xstate.assign)({
          dataSourceList: function dataSourceList(context, event) {
            var dataSourceList = context.dataSourceList;
            var id = context.detail.data.dataSource.id;
            var dataSourceUpdateIndex = dataSourceList.findIndex(function (dataSource) {
              return dataSource.id === id;
            });
            dataSourceList[dataSourceUpdateIndex] = event.payload;
            return dataSourceList;
          },
          detail: {
            visible: false
          }
        })
      },
      START_EXPORT: 'export',
      START_SORT: {
        target: 'sort',
        actions: (0, _xstate.assign)({
          dataSourceListFilter: function dataSourceListFilter(context, event) {
            return {
              keyword: '',
              type: '',
              renderKey: context.dataSourceListFilter.renderKey + 1
            };
          }
        })
      },
      REMOVE: {
        actions: (0, _xstate.assign)({
          dataSourceList: function dataSourceList(context, event) {
            return context.dataSourceList.filter(function (item) {
              return item.id !== event.dataSourceId;
            });
          }
        })
      },
      START_CREATE: {
        target: 'detail.create',
        actions: (0, _xstate.assign)({
          detail: function detail(context, event) {
            return {
              visible: true,
              title: "\u521B\u5EFA\u5904\u7406\u51FD\u6570 " + event.dataSourceType.type,
              okText: '创建',
              // target: 'FINISH_CREATE',
              data: {
                dataSourceType: event.dataSourceType
              }
            };
          }
        })
      },
      START_EDIT: {
        target: 'detail.edit',
        actions: (0, _xstate.assign)({
          detail: function detail(context, event) {
            var dataSource = context.dataSourceList.find(function (item) {
              return item.id === event.dataSourceId;
            });
            var dataSourceType = event.dataSourceTypes.find(function (i) {
              return i.type === dataSource.type;
            });
            return {
              visible: true,
              title: "\u7F16\u8F91\u5904\u7406\u51FD\u6570 " + dataSourceType.type,
              data: {
                dataSource: dataSource,
                dataSourceType: dataSourceType
              }
            };
          }
        })
      },
      START_VIEW: {
        target: 'detail.view',
        actions: (0, _xstate.assign)({
          detail: function detail(context, event) {
            var dataSource = context.dataSourceList.find(function (item) {
              return item.id === event.dataSourceId;
            });
            return {
              visible: true,
              title: '查看处理函数',
              ok: false,
              cancelText: '关闭',
              data: {
                dataSource: dataSource,
                dataSourceType: event.dataSourceTypes.find(function (i) {
                  return i.type === dataSource.type;
                })
              }
            };
          }
        })
      },
      START_DUPLICATE: {
        target: 'detail.create',
        actions: (0, _xstate.assign)({
          detail: function detail(context, event) {
            var dataSource = context.dataSourceList.find(function (item) {
              return item.id === event.dataSourceId;
            });
            return {
              visible: true,
              title: '复制处理函数',
              data: {
                dataSource: (0, _extends2["default"])({}, dataSource, {
                  id: (0, _uniqueId2["default"])(event.dataSourceId + "_")
                }),
                dataSourceType: event.dataSourceTypes.find(function (i) {
                  return i.type === dataSource.type;
                })
              }
            };
          }
        })
      },
      FILTER_CHANGE: {
        actions: (0, _xstate.assign)({
          dataSourceListFilter: function dataSourceListFilter(context, event) {
            return (0, _extends2["default"])({}, context.dataSourceListFilter, event.payload);
          }
        })
      },
      SHOW_IMPORT_DETAIL: {
        target: 'detail.import',
        actions: (0, _xstate.assign)({
          detail: function detail(context, event) {
            return {
              visible: true,
              title: '导入',
              data: {
                pluginName: event.pluginName
              }
            };
          }
        })
      }
    }
  }, {
    actions: {}
  });
};
exports.createStateMachine = createStateMachine;
var createStateService = function createStateService() {
  return (0, _xstate.interpret)(createStateMachine()).onTransition(function (current) {
    // console.log('current transition list', current.value);
  });
};
exports.createStateService = createStateService;