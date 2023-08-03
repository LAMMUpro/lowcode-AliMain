import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import BlockList from './BlockList';
import { Button, Icon } from '@alifd/next';

const _PluginName_ = 'BlockPlugin';
const BlockPlugin = (ctx: IPublicModelPluginContext) => {
  let blockListRef:InstanceType<typeof BlockList>;
  function refreshBlocks() {
    console.log(blockListRef.initComponentList());
  }
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
          onClick: async() => {}
        },
        panelProps: {
          width: '300px',
          title: (
            <div>
              <span style={{marginRight: '20px'}}>区块库</span>
              <Button type="primary" size="small" iconSize={14} onClick={refreshBlocks}>
                <Icon type="refresh"></Icon>
                <span style={{paddingLeft: '8px'}}>刷新区块</span>
              </Button>
            </div>
          )
        },
        content: (
          <div>
            <BlockList ref={ref => blockListRef= ref}></BlockList>
          </div>
        )
      });
    }
  };
};
BlockPlugin.pluginName = _PluginName_;
export default BlockPlugin;