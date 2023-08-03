import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import BlockList from './BlockList';

const _PluginName_ = 'BlockPlugin';
const BlockPlugin = (ctx: IPublicModelPluginContext) => {
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
          icon: "A-B",
          description: '区块',
          onClick: () => {}
        },
        panelProps: {
          width: '300px',
          title: '区块'
        },
        content: (
          <BlockList>

          </BlockList>
        )
      });
    }
  };
};
BlockPlugin.pluginName = _PluginName_;
export default BlockPlugin;