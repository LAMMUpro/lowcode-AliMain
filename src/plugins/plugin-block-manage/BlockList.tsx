import React from 'react';
import { Message, Loading } from '@alifd/next';
import { PluginProps } from '@alilc/lowcode-types';
import './index.scss';
import ComponentManager from './store';
import { getTextReader, SortedGroups, Text } from './transform';
import { getBlockList } from 'src/services/api';

const { material, common, project, event } = window.AliLowCodeEngine || {};

const store = new ComponentManager();

interface ComponentPaneProps extends PluginProps {
  [key: string]: any;
}

interface ComponentPaneState {
  groups: SortedGroups[];
  filter: SortedGroups[];
  keyword: string;
  blocks: any[];
  loading: boolean
}

export default class ComponentPane extends React.Component<ComponentPaneProps, ComponentPaneState> {
  static displayName = 'LowcodeComponentPane';

  static defaultProps = {
    lang: 'zh_CN',
  };

  state: ComponentPaneState = {
    groups: [],
    filter: [],
    keyword: '',
    blocks: [],
    loading: false,
  };

  store = store;

  t: (input: Text) => string;

  constructor(props) {
    super(props);
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
    this.setState({
      loading: true
    })

    const res = await getBlockList();

    this.setState({
      loading: false,
      blocks: res.data || []
    })

    this.store.setSnippets(res.data);

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
    const { blocks } = this.state;
    
    return (
      <Loading visible={this.state.loading} tip="区块数据加载中...">
        <div ref={this.registerAdditive} className='block-list'>
          {
            blocks.map(block=> {
              return (
                <div className="contrainer">
                  <div
                    className={'snippet block-item'}
                    data-id={block.blockName} 
                    title={this.t(block.blockNameCh)}
                  >
                    <img 
                      className="screenshot" 
                      src={block.screenshot || 'http://lowcode.flyowl.com.cn/media/files/4/a/4a845cefa96ff8e09c5028b1fb55f187.jpeg'}
                    />
                    <span className="block-name">
                      {this.t(block.blockNameCh)}
                    </span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </Loading>
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
