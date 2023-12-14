
import packageJson from '../../package.json';

/** 组件英文名 */
const componentName = "ColorfulButton";
/** 组件中文名 */
const componentNameCh = "多彩按钮";

const ComponentMeta: LowcodeSpace.Meta<typeof componentName> = {
  "componentName": componentName, /** 组件名 */
  "title": componentNameCh, /** 拖拉显示的组件名/大纲名 */
  "description": "自定义组件", /** 组件描述 */
  "group": "自定义组件", /** group分类 */
  "category": "测试", /** category分类 */
  "priority": 11, /** category分类中的排序 */
  "tags": ["测试1"],
  "keywords": ["测试2"],
  "devMode": "proCode",
  "npm": {
    "package": packageJson.name,
    "version": packageJson.version,
    "exportName": componentName,
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "type",
            "zh-CN": "类型"
          },
          "tip": "type | 类型"
        },
        "name": "type",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "primary",
                "value": "primary"
              },
              {
                "label": "secondary",
                "value": "secondary"
              },
              {
                "label": "normal",
                "value": "normal"
              }
            ],
            "options": [
              {
                "label": "primary",
                "value": "primary"
              },
              {
                "label": "secondary",
                "value": "secondary"
              },
              {
                "label": "normal",
                "value": "normal"
              }
            ]
          },
          "initialValue": "primary",
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "content",
            "zh-CN": "内容"
          }
        },
        "name": "content",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": "按钮"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "content",
            "zh-CN": "slot"
          }
        },
        "name": "slotcontent",
        "setter": {
          "componentName": "SlotSetter",
          "isRequired": true,
          "initialValue": {
            "type": 'JSSlot',
            "params": [],
            "value": [],
          },
          "hideParams": true,
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "color",
            "zh-CN": "颜色"
          }
        },
        "name": "color",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  },
  "snippets": [
    {
      "title": componentNameCh, /** 组件库显示的组件名 */
      "screenshot": "http://cdn.itq168.com/img/20221016105708.png?imageslim", /** 组件头像 */
      "schema": {
        "componentName": componentName,
        "props": {}
      }
    }
  ]
};

export default ComponentMeta;
