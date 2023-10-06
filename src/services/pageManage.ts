import { material, project, config, event } from '@alilc/lowcode-engine';
import { filterPackages } from '@alilc/lowcode-plugin-inject'
import { Message, Dialog } from '@alifd/next';
import { IPublicEnumTransformStage } from '@alilc/lowcode-types';
import { updatePageSchemaById } from 'src/api/PageSchema';
import _tipSchema from 'schema/tipSchema.json';
import _defaultSchema from 'schema/tipSchema.json';

export const tipSchema = _tipSchema;
export const defaultSchema = _defaultSchema;

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
