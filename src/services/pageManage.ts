import { material, project, config, event } from '@alilc/lowcode-engine';
import { filterPackages } from '@alilc/lowcode-plugin-inject'
import { Message, Dialog } from '@alifd/next';
import { IPublicEnumTransformStage } from '@alilc/lowcode-types';
import { updatePageSchemaById } from 'src/api/PageSchema';

export const tipSchema = {
  "componentName": "Page",
  "id": "node_dockcviv8fo1",
  "props": {
    "ref": "outerView",
    "style": {
      "height": "100%"
    }
  },
  "fileName": "/",
  "dataSource": {
    "list": [
      {
        "type": "fetch",
        "isInit": true,
        "options": {
          "params": {},
          "method": "GET",
          "isCors": true,
          "timeout": 5000,
          "headers": {},
          "uri": "mock/info.json"
        },
        "id": "info",
        "shouldFetch": {
          "type": "JSFunction",
          "value": "function() { \n  console.log('should fetch.....');\n  return true; \n}"
        }
      }
    ]
  },
  "state": {
    "text": {
      "type": "JSExpression",
      "value": "\"outer\""
    },
    "isShowDialog": {
      "type": "JSExpression",
      "value": "false"
    }
  },
  "css": "body {\n  font-size: 12px;\n}\n\n.button {\n  width: 100px;\n  color: #ff00ff\n}",
  "lifeCycles": {
    "componentDidMount": {
      "type": "JSFunction",
      "value": "function componentDidMount() {\n  console.log('did mount');\n}"
    },
    "componentWillUnmount": {
      "type": "JSFunction",
      "value": "function componentWillUnmount() {\n  console.log('will unmount');\n}"
    }
  },
  "methods": {
    "testFunc": {
      "type": "JSFunction",
      "value": "function testFunc() {\n  console.log('test func');\n}"
    },
    "onClick": {
      "type": "JSFunction",
      "value": "function onClick() {\n  this.setState({\n    isShowDialog: true\n  });\n}"
    },
    "closeDialog": {
      "type": "JSFunction",
      "value": "function closeDialog() {\n  this.setState({\n    isShowDialog: false\n  });\n}"
    }
  },
  "originCode": "class LowcodeComponent extends Component {\n  state = {\n    \"text\": \"outer\",\n    \"isShowDialog\": false\n  }\n  componentDidMount() {\n    console.log('did mount');\n  }\n  componentWillUnmount() {\n    console.log('will unmount');\n  }\n  testFunc() {\n    console.log('test func');\n  }\n  onClick() {\n    this.setState({\n      isShowDialog: true\n    })\n  }\n  closeDialog() {\n    this.setState({\n      isShowDialog: false\n    })\n  }\n}",
  "hidden": false,
  "title": "",
  "isLocked": false,
  "condition": true,
  "conditionGroup": "",
  "remoteHandle": {
    "list": []
  },
  "children": [
    {
      "componentName": "UseContainer",
      "id": "node_oclnej1uyt1",
      "props": {
        "containerSlot": {
          "type": "JSSlot",
          "params": [],
          "value": [
            {
              "componentName": "UseContainer",
              "id": "node_oclnej1uyt5",
              "props": {
                "containerSlot": {
                  "type": "JSSlot",
                  "params": [],
                  "value": [
                    {
                      "componentName": "Typography.Text",
                      "id": "node_oclnej1uyt7",
                      "props": {
                        "children": "说明",
                        "code": false,
                        "delete": false,
                        "disabled": false,
                        "mark": false,
                        "keyboard": false,
                        "underline": false,
                        "strong": false,
                        "style": {
                          "fontSize": "20px"
                        }
                      },
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "condition": true,
                      "conditionGroup": ""
                    }
                  ],
                  "title": "插槽容器",
                  "id": "node_oclnej1uyt6"
                }
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": ""
            },
            {
              "componentName": "UseContainer",
              "id": "node_oclnej1uyt3",
              "props": {
                "containerSlot": {
                  "type": "JSSlot",
                  "params": [],
                  "value": [
                    {
                      "componentName": "Typography.Text",
                      "id": "node_oclnej1uyt8",
                      "props": {
                        "children": "该默认页面无法保存, 仅供参考",
                        "code": false,
                        "delete": false,
                        "disabled": false,
                        "mark": false,
                        "keyboard": false,
                        "underline": false,
                        "strong": false,
                        "style": {
                          "fontSize": "14px",
                          "color": "#9b9b9b"
                        }
                      },
                      "hidden": false,
                      "title": "",
                      "isLocked": false,
                      "condition": true,
                      "conditionGroup": ""
                    }
                  ],
                  "title": "插槽容器",
                  "id": "node_oclnej1uyt4"
                },
                "style": {
                  "marginBottom": "10px",
                  "borderBottom": "1px solid red",
                  "paddingBottom": "6px",
                  "borderBottomStyle": "solid",
                  "borderBottomColor": "#777777",
                  "borderBottomWidth": "1px"
                }
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": ""
            },
            {
              "componentName": "Typography.Text",
              "id": "node_oclnej1uyt9",
              "props": {
                "children": "欢迎使用可视化编排平台，请先创建应用, 选择要编辑的页面",
                "code": false,
                "delete": false,
                "disabled": false,
                "mark": false,
                "keyboard": false,
                "underline": false,
                "strong": false,
                "style": {
                  "fontSize": "14px"
                }
              },
              "hidden": false,
              "title": "",
              "isLocked": false,
              "condition": true,
              "conditionGroup": ""
            }
          ],
          "title": "插槽容器",
          "id": "node_oclnej1uyt2"
        },
        "style": {
          "padding": "10px"
        }
      },
      "hidden": false,
      "title": "",
      "isLocked": false,
      "condition": true,
      "conditionGroup": ""
    }
  ]
}

export const defaultSchema = {
  "componentName": "Page",
  "id": "node_dockcviv8fo1",
  "props": {
    "ref": "outerView",
    "style": {
      "height": "100%"
    }
  },
  "fileName": "/",
  "dataSource": {
    "list": [
      {
        "type": "fetch",
        "isInit": true,
        "options": {
          "params": {},
          "method": "GET",
          "isCors": true,
          "timeout": 5000,
          "headers": {},
          "uri": "mock/info.json"
        },
        "id": "info",
        "shouldFetch": {
          "type": "JSFunction",
          "value": "function() { \n  console.log('should fetch.....');\n  return true; \n}"
        }
      }
    ]
  },
  "state": {
    "text": {
      "type": "JSExpression",
      "value": "\"outer\""
    },
    "isShowDialog": {
      "type": "JSExpression",
      "value": "false"
    }
  },
  "css": "body {\n  font-size: 12px;\n}\n\n.button {\n  width: 100px;\n  color: #ff00ff\n}",
  "lifeCycles": {
    "componentDidMount": {
      "type": "JSFunction",
      "value": "function componentDidMount() {\n  console.log('did mount');\n}"
    },
    "componentWillUnmount": {
      "type": "JSFunction",
      "value": "function componentWillUnmount() {\n  console.log('will unmount');\n}"
    }
  },
  "methods": {
    "testFunc": {
      "type": "JSFunction",
      "value": "function testFunc() {\n  console.log('test func');\n}"
    },
    "onClick": {
      "type": "JSFunction",
      "value": "function onClick() {\n  this.setState({\n    isShowDialog: true\n  });\n}"
    },
    "closeDialog": {
      "type": "JSFunction",
      "value": "function closeDialog() {\n  this.setState({\n    isShowDialog: false\n  });\n}"
    }
  },
  "originCode": "class LowcodeComponent extends Component {\n  state = {\n    \"text\": \"outer\",\n    \"isShowDialog\": false\n  }\n  componentDidMount() {\n    console.log('did mount');\n  }\n  componentWillUnmount() {\n    console.log('will unmount');\n  }\n  testFunc() {\n    console.log('test func');\n  }\n  onClick() {\n    this.setState({\n      isShowDialog: true\n    })\n  }\n  closeDialog() {\n    this.setState({\n      isShowDialog: false\n    })\n  }\n}",
  "hidden": false,
  "title": "",
  "isLocked": false,
  "condition": true,
  "conditionGroup": ""
}

export const updatePageInfo = async () => {
  const nodeId = config.get('nodeId');
  if (!nodeId) return Message.warning("没有可保存的页面!");
  await updatePageSchemaById({
    id: +nodeId,
    schema: JSON.stringify(project.exportSchema(IPublicEnumTransformStage.Save)),
    package: JSON.stringify(await filterPackages(material?.getAssets()?.packages)),
  })
  // await setProjectSchemaToLocalStorage(scenarioName);
  // await setPackagesToLocalStorage(scenarioName);
  event.emit("update:pageNodes");
  Message.success('成功保存到远端');
};

export const resetSchema = async (nodeId: number) => {
  if (!nodeId) return Message.warning("没有选中页面!");

  try {
    await new Promise<void>((resolve, reject) => {
      Dialog.confirm({
        content: '确定要重置吗？您所有的修改都将消失！',
        onOk: () => {
          resolve();
        },
        onCancel: () => {
          reject()
        },
      })
    })
  } catch(err) {
    return;
  }

  let schema = defaultSchema || {
    componentsTree: [{ componentName: 'Page', fileName: 'sample' }],
    componentsMap: material.componentsMap,
    version: '1.0.0',
    i18n: {},
  };

  const res = await updatePageSchemaById({
    id: +nodeId,
    schema: JSON.stringify(schema),
    package: JSON.stringify(await filterPackages(material?.getAssets()?.packages)),
  })

  if (res.code == 1) {
    /** 如果重置的是当前编辑的页面, 刷新面板 */
    if (config.get('nodeId') == nodeId) {
      project.getCurrentDocument()?.importSchema(schema as any);
      project.simulatorHost?.rerender();
    }
    Message.success('成功重置页面');
  }
}

// const getLSName = (scenarioName: string, ns: string = 'projectSchema') => `${scenarioName}:${ns}`;

// const setProjectSchemaToLocalStorage = (scenarioName: string) => {
//   if (!scenarioName) {
//     console.error('scenarioName is required!');
//     return;
//   }
//   window.localStorage.setItem(
//     getLSName(scenarioName),
//     JSON.stringify(project.exportSchema(IPublicEnumTransformStage.Save))
//   );
// }

// const setPackagesToLocalStorage = async (scenarioName: string) => {
//   if (!scenarioName) {
//     console.error('scenarioName is required!');
//     return;
//   }
//   const packages = await filterPackages(material.getAssets().packages);
//   window.localStorage.setItem(
//     getLSName(scenarioName, 'packages'),
//     JSON.stringify(packages),
//   );
// }
