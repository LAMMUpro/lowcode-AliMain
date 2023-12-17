import React from 'react';
import { Message, Balloon } from '@alifd/next';
import { PluginProps } from '@alilc/lowcode-types';
import './index.scss';
import ComponentManager from './store';
import { getTextReader, SortedGroups, Text } from './transform';
// import { getBlockList } from 'src/services/api';
import { BlockDto } from 'src/types/dto/Block';

const { material, common, project, event } = (window as any).AliLowCodeEngine || {};

const store = new ComponentManager();

interface ComponentPaneProps extends PluginProps {
  [key: string]: any;
}

interface ComponentPaneState {
  groups: SortedGroups[];
  filter: SortedGroups[];
  keyword: string;
  blocks: Array<BlockDto>;
}

export default class BlockList extends React.Component<ComponentPaneProps, ComponentPaneState> {
  static displayName = 'LowcodeComponentPane';

  static defaultProps = {
    lang: 'zh_CN',
  };

  state: ComponentPaneState;

  store = store;

  t: (input: Text) => string;

  constructor(props: {
    blocks: Array<BlockDto>
    config: any
  }) {
    super(props);

    this.state = {
      groups: [],
      filter: [],
      keyword: '',
      blocks: this.props.blocks,
    }
    this.t = getTextReader(props.lang);
  }

  componentDidMount() {
    const { editor } = this.props;
    if (!editor) {
      this.initComponentList();
      return;
    }
    const assets = material.getAssets();
    if (assets) {
      this.initComponentList();
    } else {
      console.warn('[ComponentsPane]: assets not ready, wait for assets ready event.')
    }

    event.on('trunk.change', this.initComponentList.bind(this));
    material.onChangeAssets(this.initComponentList.bind(this));
  }

  /**
   * 初始化组件列表
   */
  async initComponentList() {
    // const res = await getBlockList();

    // this.setState({
    //   loading: false,
    //   blocks: res.data || []
    // })

    this.store.setSnippets(this.state.blocks);

    Message.success("加载区块数据成功！");
  }

  registerAdditive = (shell: HTMLDivElement | null) => {
    if (!shell || shell.dataset.registered) {
      return;
    }

    function getSnippetId(elem: any) {
      if (!elem) {
        return null;
      }
      while (shell !== elem) {
        if (elem.classList.contains('snippet')) {
          return elem.dataset.id;
        }
        elem = elem.parentNode;
      }
      return null;
    }

    const { editor } = this.props;
    const designer = null;
    const _dragon = common.designerCabin.dragon;
    if (!_dragon) {
      return;
    }

    const click = (e: Event) => {};

    shell.addEventListener('click', click);

    _dragon.from(shell, (e: Event) => {
      const doc = project.getCurrentDocument();
      const id = getSnippetId(e.target);
      
      if (!doc || !id) {
        return false;
      }

      const dragTarget = {
        type: 'nodedata',
        data: this.store.getSnippetById(id),
      };

      return dragTarget;
    });

    shell.dataset.registered = 'true';
  };

  renderContent() {
    
    return (
      <div ref={this.registerAdditive} className='block-list'>
        {
          this.state.blocks.map(block=> {
            return (
              <div className="contrainer">
                <Balloon 
                  v2 
                  triggerType="hover" 
                  closable={false}
                  cache={true}
                  popupClassName="contrainer-padding-none"
                  trigger={
                    <div
                      className={'snippet block-item'}
                      data-id={block.id} 
                      title={this.t(block.nameCh)}
                    >
                      <span className="block-name ellipsis_1">
                        {this.t(block.name)}
                      </span>
                      <span className="block-nameCh ellipsis_1">
                        {this.t(block.nameCh)}
                      </span>
                    </div>
                  }
                >
                  {
                    block.screenshot ? <img 
                      className="screenshot" 
                      src={block.screenshot}
                    /> : <p style={{textAlign: 'center'}}>暂无预览图</p>
                  }
                </Balloon>
              </div>
            )
          })
        }
      </div>
    );
  }

  render() {
    return (
      <div className={'lowcode-block-panel'}>
        {this.renderContent()}
      </div>
    );
  }
}
