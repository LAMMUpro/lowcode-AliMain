import { config, event, init, material, plugins, project } from '@alilc/lowcode-engine';
import { createFetchHandler } from '@alilc/lowcode-datasource-fetch-handler'
import EditorInitPlugin from './plugins/plugin-editor-init';
import UndoRedoPlugin from '@alilc/lowcode-plugin-undo-redo';
import ZhEnPlugin from '@alilc/lowcode-plugin-zh-en';
import CodeGenPlugin from '@alilc/lowcode-plugin-code-generator';
import SchemaPlugin from '@alilc/lowcode-plugin-schema';
import CodeEditorPlugin from "@lammu/lowcode-plugin-code-editor";
import DataSourcePanePlugin from '@lammu/lowcode-plugin-datasource-pane';
import RemoteHandlePanePlugin from '@lammu/lowcode-plugin-remote-handle';
import ManualPlugin from "@alilc/lowcode-plugin-manual";
import InjectPlugin from '@alilc/lowcode-plugin-inject';
import SimulatorResizerPlugin from '@alilc/lowcode-plugin-simulator-select';
import ComponentPanelPlugin from '@alilc/lowcode-plugin-components-pane';
import DefaultSettersRegistryPlugin from './plugins/plugin-default-setters-registry';
import LoadIncrementalAssetsWidgetPlugin from './plugins/plugin-load-incremental-assets-widget';
import SaveSamplePlugin from './plugins/plugin-save-sample';
import PreviewSamplePlugin from './plugins/plugin-preview-sample';
import CustomSetterSamplePlugin from './plugins/plugin-custom-setter-sample';
import SetRefPropPlugin from '@alilc/lowcode-plugin-set-ref-prop';
import LogoSamplePlugin from './plugins/plugin-logo-sample';
import PagesManagePlugin from './plugins/plugin-pages-manage';
import BlockPlugin from './plugins/plugin-block-manage';
import saveAsBlock from './actions/saveAsBlock';
import './global.scss';
import { findAllApplication } from './api/Application';

async function registerPlugins() {
  /** 保存为区块 */
  material.addBuiltinComponentAction(saveAsBlock);

  await plugins.register(InjectPlugin);

  // await plugins.register(EditorInitPlugin, {
  //   scenarioName: '/index',
  //   displayName: '/index',
  //   info: {
  //     urls: [
  //       {
  //         key: "AntD 物料",
  //         value: "https://github.com/alibaba/lowcode-materials/tree/main/packages/antd-lowcode-materials"
  //       }
  //     ],
  //   },
  // });

  /** 页面管理器 */
  await plugins.register(PagesManagePlugin);
  
  /** 组件库 */
  await plugins.register(ComponentPanelPlugin);
  
  /** 区块管理器 */
  await plugins.register(BlockPlugin);

  /** 设置内置 setter 和事件绑定、插件绑定面板 */
  await plugins.register(DefaultSettersRegistryPlugin);

  /** Logo + pageInfo */
  await plugins.register(LogoSamplePlugin);

  await plugins.register(SchemaPlugin);

  await plugins.register(ManualPlugin);

  // 注册回退/前进
  await plugins.register(UndoRedoPlugin);

  // 注册中英文切换
  await plugins.register(ZhEnPlugin);

  await plugins.register(SetRefPropPlugin);

  await plugins.register(SimulatorResizerPlugin);

  /** 异步加载资源??? */
  // await plugins.register(LoadIncrementalAssetsWidgetPlugin);

  /** 数据源 */
  await plugins.register(DataSourcePanePlugin, {
    importPlugins: [],
    dataSourceTypes: [
      {
        type: 'fetch',
      },
      {
        type: 'jsonp',
      }
    ]
  });

  /** 增删改API */
  await plugins.register(RemoteHandlePanePlugin, {
    importPlugins: [],
    dataSourceTypes: [
      {
        type: 'fetch',
      },
      {
        type: 'jsonp',
      }
    ]
  })

  /** 源码面板 */
  await plugins.register(CodeEditorPlugin);

  // 注册出码插件
  // await plugins.register(CodeGenPlugin);

  /** 保存页面 */
  await plugins.register(SaveSamplePlugin);

  /** 预览页面 */
  await plugins.register(PreviewSamplePlugin);

  /** ??? */
  await plugins.register(CustomSetterSamplePlugin);
};

(async function main() {
  findAllApplication().then(res=> {
    config.set('applicationList', res.data||[]);
  });

  await registerPlugins();

  init(document.getElementById('lce-container')!, {
    // locale: 'zh-CN',
    enableCondition: true,
    enableCanvasLock: true,
    // 默认绑定变量
    supportVariableGlobally: true,
    requestHandlersMap: {
      fetch: createFetchHandler()
    }
  });

  /**
   * 通过此方法来执行更新schema的代码, 可以恢复选中的节点
   */
  event.on('common:reset:selectNode', (func: Function) => {
    /** 记录当前选中的节点 */
    const currentNodeId = project?.currentDocument?.selection.node?.id;

    /** 执行带有取消节点选中副作用的代码 */
    func();

    /** 更新schema后选中的节点会取消选中, 得手动设置回来 */
    if (currentNodeId) {
      /** 恢复之前选中的节点 */
      project?.currentDocument?.selection.select(currentNodeId);
    }
  });

})();
