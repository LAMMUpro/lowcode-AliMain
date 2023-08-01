import { material, project } from '@alilc/lowcode-engine';
import { filterPackages } from '@alilc/lowcode-plugin-inject'
import { Message, Dialog } from '@alifd/next';
import { IPublicEnumTransformStage } from '@alilc/lowcode-types';
import { getPageInfo, savePageInfo, PackageType, ProjectSchemaType } from './api';

const defaultSchema = {
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

export const saveSchema = async (scenarioName: string = 'unknown') => {
  await savePageInfo({
    path: '/index',
    projectSchema: project.exportSchema(IPublicEnumTransformStage.Save),
    packages: await filterPackages(material?.getAssets()?.packages),
  })
  // await setProjectSchemaToLocalStorage(scenarioName);
  // await setPackagesToLocalStorage(scenarioName);
  Message.success('成功保存到远端');
};

export const resetSchema = async (scenarioName: string = 'unknown') => {
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

  project.getCurrentDocument()?.importSchema(schema as any);
  project.simulatorHost?.rerender();

  await saveSchema(scenarioName);
  Message.success('成功重置页面');
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

export const getProjectSchemaFromLocalStorage = async (scenarioName: string) => {
  const res = await getPageInfo({path: '/index'});
  return res.data.projectSchema || {};
}

export const getPackagesFromLocalStorage = async (scenarioName: string) => {
  const res = await getPageInfo({path: '/index'});
  return res.data.packages || [];
}

/** 获取Schema */
export const getPageSchema = async (scenarioName: string = 'unknown') => {
  const res = await getPageInfo({path: '/index'});
  return res.data.projectSchema?.componentsTree?.[0] || defaultSchema;
};
