import RemoteHandlePane from './pane';

import {
  DataSourcePaneImportPlugin,
  DataSourceType,
} from './types';

export interface Options {
  importPlugins?: DataSourcePaneImportPlugin[];
  dataSourceTypes: DataSourceType[];
  exportPlugins?: DataSourcePaneImportPlugin[];
}

// TODO: 2.0插件传参修改，不支持直接options: Options
const plugin = (ctx: any, options: Options) => {
  return {
    name: 'com.lammu.lowcode.remote.handlePane.pane',
    width: 300,
    // 依赖的插件（插件名数组）
    dep: [],
    // 插件对外暴露的数据和方法
    exports() {
      return {};
    },
    // 插件的初始化函数，在引擎初始化之后会立刻调用
    init() {
      const dataSourceTypes = [
        {
          type: 'fetch',
        }
      ];
      const importPlugins = ctx.preference.getPreferenceValue('importPlugins') || options.importPlugins;
      const schemaDock = ctx.skeleton.add({
        area: 'leftArea',
        name: 'remoteHandlePane',
        type: 'PanelDock',
        props: {
          icon: 'API',
          description: '增删改API',
        },
        panelProps: {
          width: '300px',
          // title: '源码面板',
        },
        content: RemoteHandlePane,
        contentProps: {
          importPlugins,
          dataSourceTypes,
          event: ctx.event,
          project: ctx.project,
          logger: ctx.logger,
          setters: ctx.setters,
        },
      });

      schemaDock && schemaDock.disable();
      ctx.project.onSimulatorRendererReady(() => {
        schemaDock.enable();
      });
    },
  };
};

plugin.pluginName = 'RemoteHandlePane';
plugin.meta = {
  preferenceDeclaration: {
    title: '数据源面板插件参数定义',
    properties: [{
      key: 'importPlugins',
      type: 'array',
      description: '',
    }, {
      key: 'dataSourceTypes',
      type: 'array',
      description: '数据源类型',
    }],
  },
};

export default plugin;