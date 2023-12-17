import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { Button, Icon } from '@alifd/next';
import { BlockManagePane } from './BlockManagePane';

let blockManagePaneRef:InstanceType<typeof BlockManagePane>|null;
/** 添加主题 */
function handleAddBlockStyle() {
  blockManagePaneRef?.handleAddBlockStyle?.();
}
/** 添加主题 */
function handleAddBlockCategory() {
  blockManagePaneRef?.handleAddBlockCategory?.();
}

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
          onClick: async() => {}
        },
        panelProps: {
          width: '300px',
          title: (
            <div>
              <span style={{marginRight: '20px'}}>区块库</span>
              <Button type="secondary" size="small" style={{marginLeft: '5px'}}
                onClick={handleAddBlockStyle}
              >添加主题</Button>
              <Button type="secondary" size="small" style={{marginLeft: '5px'}}
                onClick={handleAddBlockCategory}
              >添加分类</Button>
            </div>
          )
        },
        content: (
          <BlockManagePane ref={ref => blockManagePaneRef= ref}></BlockManagePane>
        )
      });
    }
  };
};
BlockPlugin.pluginName = _PluginName_;
export default BlockPlugin;