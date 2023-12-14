 
import packageJson from '../../package.json';

/** 组件英文名 */
const componentName = "ColorfulInput";
/** 组件中文名 */
const componentNameCh = "颜色选择器";

const ComponentMeta: LowcodeSpace.Meta<typeof componentName> = {
  "componentName": componentName, /** 组件名 */
  "title": componentNameCh, /** 拖拉显示的组件名/大纲名 */
  "description": "自定义组件", /** 组件描述 */
  "group": "自定义组件", /** group分类 */
  "category": "测试", /** category分类 */
  "priority": 10, /** category分类中的排序 */
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
            "en-US": "color",
            "zh-CN": "color"
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
      "screenshot": "", /** 组件头像 */
      "schema": {
        "componentName": componentName,
        "props": {}
      }
    }
  ]
};

export default ComponentMeta;
