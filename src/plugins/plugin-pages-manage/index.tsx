import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import PageManagePane from './components/PageManagePane';
import { AppEnvDtoCreate } from 'src/types/dto/AppEnv';

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
          <PageManagePane>

          </PageManagePane>
        )
      });
    }
  };
};
PagesManagePlugin.pluginName = _PluginName_;
export default PagesManagePlugin;