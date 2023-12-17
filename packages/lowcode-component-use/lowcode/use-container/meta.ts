
import packageJson from '../../package.json';

/** 组件英文名 */
const componentName = "UseContainer";
/** 组件中文名 */
const componentNameCh = "自由容器";

const ComponentMeta: LowcodeSpace.Meta<typeof componentName> = {
  "componentName": componentName, /** 组件名 */
  "title": componentNameCh, /** 拖拉显示的组件名/大纲名 */
  "description": "容器", /** 组件描述 */
  "group": "自定义组件", /** group分类 */
  "category": "容器", /** category分类 */
  "priority": 100, /** category分类中的排序 */
  "tags": ["div", "容器"],
  "keywords": ["div", "容器"],
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
            "en-US": "classNameList",
            "zh-CN": "className, 类型: Array<string>"
          }
        },
        "name": "classNameList",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "StringSetter",
              "isRequired": false,
              "initialValue": ""
            }
          }
        }
      }
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "containerSlot",
      //       "zh-CN": "插槽"
      //     }
      //   },
      //   "name": "containerSlot",
      //   "setter": {
      //     "componentName": "SlotSetter",
      //     "isRequired": true,
      //     "title": '组件坑位',
      //     "initialValue": {
      //       "type": 'JSSlot',
      //       "params": [],
      //       "value": [],
      //     },
      //     "hideParams": false,
      //   }
      // }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  },
  "snippets": [
    {
      "title": componentNameCh, /** 组件库显示的组件名 */
      "screenshot": "https://alifd.alicdn.com/fusion-cool/icons/icon-antd/1-1.png", /** 组件头像 */
      "schema": {
        "componentName": componentName,
        "props": {
          "containerSlot": {
            "type": "JSSlot",
            "params": [],
            "title": "插槽容器",
          }
        }
      }
    }
  ]
};

export default ComponentMeta;
