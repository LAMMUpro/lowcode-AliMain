import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import PageTree from './components/PageTree';


const _PluginName_ = 'PagesManagePlugin';
const PagesManagePlugin = (ctx: IPublicModelPluginContext) => {
  return {
    name: _PluginName_,
    width: 300,
    /** 插件的初始化函数，在引擎初始化之后会立刻调用 */
    async init() {
      ctx.skeleton.add({
        area: 'leftArea',
        name: _PluginName_,
        type: 'PanelDock',
        props: {
          icon: "fabu1",
          description: '页面管理',
          onClick: () => {}
        },
        panelProps: {
          width: '300px',
          title: '页面管理'
        },
        content: (
          <PageTree>

          </PageTree>
        )
      });
    }
  };
};
PagesManagePlugin.pluginName = _PluginName_;
export default PagesManagePlugin;