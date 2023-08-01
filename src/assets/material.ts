import { IPublicTypeAssetsJson, IPublicTypePackage } from "@alilc/lowcode-types"

interface Meterial {
  packages: Array<IPublicTypePackage>
  components: IPublicTypeAssetsJson["components"]
}

/** 自定义组件 */
const CustomMeterial:Meterial = {
  packages: [
    {
      "schema": {
        "css": ".text_k8e4nalo {\n  font-size: 14px;\n  color: #666;\n}\n\n.div_k8e4nalp {\n  padding: 12px;\n  background: #f2f2f2;\n  border: 1px solid #ddd;\n}",
        "methods": {
          "onClick": {
            "source": "function onClick() {\n  this.setState({\n    hello: \"The lowcode world is so magic\"\n  });\n}",
            "type": "JSFunction",
            "value": "function onClick() {\n  this.setState({\n    hello: \"The lowcode world is so magic\"\n  });\n}"
          }
        },
        "defaultProps": {
          "titleText": "我是标题"
        },
        "loopArgs": [
          "item",
          "index"
        ],
        "title": "",
        "props": {
          "style": {
            "mock": {},
            "type": "JSExpression",
            "value": "this.props.style"
          },
          "className": "component_k8e4naln",
          "cls": {
            "mock": {},
            "type": "JSExpression",
            "value": "this.props.className"
          },
          "fieldId": "symbol_k8bnubw4"
        },
        "lifeCycles": {
          "componentDidUpdate": {
            "source": "function componentDidUpdate() {\n  console.log('componentDidUpdate');\n}",
            "type": "JSFunction",
            "value": "function componentDidUpdate() {\n  console.log('componentDidUpdate');\n}"
          },
          "componentWillUnmount": {
            "source": "function componentWillUnmount() {\n  console.log('componentWillUnmount');\n}",
            "type": "JSFunction",
            "value": "function componentWillUnmount() {\n  console.log('componentWillUnmount');\n}"
          },
          "componentDidCatch": {
            "source": "function componentDidCatch() {\n  console.log('componentDidCatch');\n}",
            "type": "JSFunction",
            "value": "function componentDidCatch() {\n  console.log('componentDidCatch');\n}"
          },
          "componentDidMount": {
            "source": "function componentDidMount() {\n  console.log('componentDidMount');\n}",
            "type": "JSFunction",
            "value": "function componentDidMount() {\n  console.log('componentDidMount');\n}"
          }
        },
        "condition": true,
        "children": [
          {
            "condition": true,
            "children": [
              {
                "condition": true,
                "id": "node_ocl9cku8455",
                "componentName": "NextText",
                "title": "标题",
                "props": {
                  "strong": false,
                  "code": false,
                  "children": {
                    "mock": "欢迎使用低代码组件",
                    "type": "JSExpression",
                    "value": "this.props.titleText"
                  },
                  "underline": false,
                  "style": {
                    "marginTop": "60px"
                  },
                  "type": "h4",
                  "delete": false,
                  "mark": false
                }
              },
              {
                "condition": true,
                "id": "node_ocl9mio96k2",
                "componentName": "NextText",
                "title": "正文",
                "props": {
                  "strong": false,
                  "code": false,
                  "children": "物料研发新模式。通过低代码的形式生产组件，极低上手门槛，提供丰富的原子组件用于组合，完善的调试预览和组件生命周期控制。生产的组件既可以在低代码引擎项目中使用，也可以出码后在普通源码项目中使用。",
                  "underline": false,
                  "style": {
                    "marginTop": "12px"
                  },
                  "type": "body1",
                  "delete": false,
                  "mark": false
                }
              }
            ],
            "id": "node_ocl9cku8453",
            "componentName": "Box",
            "title": "Box",
            "props": {
              "spacing": 0,
              "justify": "center",
              "style": {
                "width": ""
              },
              "align": "center",
              "direction": "column"
            }
          },
          {
            "condition": true,
            "id": "node_oclcoi4jah2",
            "componentName": "Calendar",
            "title": "卡片型",
            "props": {
              "shape": "card"
            }
          }
        ],
        "propTypes": [
          {
            "defaultValue": "我是标题",
            "display": "inline",
            "name": "titleText",
            "__sid": "item_l9fexhbc",
            "setterProps": {},
            "type": "string",
            "title": "标题内容",
            "setter": "StringSetter"
          }
        ],
        "id": "node_k8bnubvz",
        "state": {
          "hello": {
            "type": "JSExpression",
            "value": "\"world\""
          }
        },
        "componentName": "Component",
        "dataSource": {
          "list": [],
          "sync": true
        }
      },
      "id": "LCC-6B91-AE87JJVTDSQF26LK508C3-9EOQFOCL-0",
      "type": "lowcode",
      "version": "0.1.0"
    }
  ],
  components: [
    {
      "componentId": "LCC-6B91-AE87JJVTDSQF26LK508C3-9EOQFOCL-0",
      "icon": "",
      "group": "自定义组件",
      "category": "自定义组件",
      "configure": {
        "advanced": {
          "initials": [
            {
              "initial": {
                "type": "JSFunction",
                "value": "(node) => {\n                                    return `${node.componentName.charAt(0).toLowerCase() + node.componentName.substr(1)}_${Math.random()\n                                        .toString(36)\n                                        .substring(6)}`;\n                                }"
              },
              "name": "fieldId"
            }
          ],
          "callbacks": {}
        },
        "component": {
          "isContainer": false,
          "rootSelector": "",
          "isModal": false
        },
        "props": [
          {
            "name": "titleText",
            "type": "field",
            "title": {
              "label": "标题内容"
            },
            "setter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": [
                  {
                    "componentName": "StringSetter",
                    "initialValue": "我是标题",
                    "props": {}
                  },
                  "VariableSetter"
                ]
              }
            },
            "extraProps": {
              "display": "inline"
            }
          },
          {
            "name": "fieldId",
            "type": "field",
            "title": "唯一标识",
            "setter": {
              "componentName": "StringSetter",
              "props": {}
            },
            "extraProps": {
              "display": "block"
            }
          },
          {
            "display": "accordion",
            "name": "__style__",
            "title": "样式设置",
            "setter": "StyleSetter"
          }
        ]
      },
      "title": "LCC3",
      "tags": "",
      "reference": {
        "destructuring": false,
        "id": "LCC-6B91-AE87JJVTDSQF26LK508C3-9EOQFOCL-0",
        "version": "0.1.0"
      },
      "devMode": "lowcode",
      "snippets": [
        {
          "schema": {
            "componentName": "LccLcofqh6f",
            "props": {
              "titleText": "我是标题"
            }
          },
          "title": "LCC3"
        }
      ],
      "docUrl": "",
      "componentName": "LccLcofqh6f"
    }
  ],
}

/** antd */
const AntdMeterial:Meterial = {
  packages: [
    {
      "package": "@ant-design/icons",
      "version": "4.7.0",
      "urls": ["https://g.alicdn.com/code/npm/@ali/ant-design-icons-cdn/4.5.0/index.umd.min.js"],
      "library": "icons"
    },
    {
      "package": "antd",
      "version": "4.19.5",
      "urls": [
        "https://g.alicdn.com/code/lib/antd/4.23.0/antd.min.js",
        "https://g.alicdn.com/code/lib/antd/4.23.0/antd.min.css"
      ],
      "library": "antd"
    },
    {
      "package": "@alilc/antd-lowcode-materials",
      "version": "1.2.1",
      "library": "AntdLowcode",
      "urls": [
        "https://alifd.alicdn.com/npm/@alilc/antd-lowcode-materials@1.2.1/build/lowcode/view.js",
        "https://alifd.alicdn.com/npm/@alilc/antd-lowcode-materials@1.2.1/build/lowcode/view.css"
      ],
      "editUrls": [
        "https://alifd.alicdn.com/npm/@alilc/antd-lowcode-materials@1.2.1/build/lowcode/view.js",
        "https://alifd.alicdn.com/npm/@alilc/antd-lowcode-materials@1.2.1/build/lowcode/view.css"
      ]
    },
  ],
  components: [
    {
      "exportName": "AlilcAntdLowcodeMaterialsMeta",
      "npm": {
        "package": "@alilc/antd-lowcode-materials",
        "version": "1.2.1"
      },
      "url": "https://alifd.alicdn.com/npm/@alilc/antd-lowcode-materials@1.2.1/build/lowcode/meta.js",
      "urls": {
        "default": "https://alifd.alicdn.com/npm/@alilc/antd-lowcode-materials@1.2.1/build/lowcode/meta.js"
      }
    },
  ],
}
export {
  Meterial,
  CustomMeterial,
  AntdMeterial
}