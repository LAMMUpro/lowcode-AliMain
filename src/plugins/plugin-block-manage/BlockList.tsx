import React from 'react';
import { Message } from '@alifd/next';
import { PluginProps } from '@alilc/lowcode-types';
import cls from 'classnames/bind';
import style from './index.module.scss';
import ComponentManager from './store';
import transform, { getTextReader, SortedGroups, Text, StandardComponentMeta, SnippetMeta, createI18n } from './transform';
import { getBlockList } from 'src/services/api';

const { material, common, project, event } = window.AliLowCodeEngine || {};

const store = new ComponentManager();

const cx = cls.bind(style);

interface ComponentPaneProps extends PluginProps {
  [key: string]: any;
}

interface ComponentPaneState {
  groups: SortedGroups[];
  filter: SortedGroups[];
  keyword: string;
  blocks: any[]
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
  };

  store = store;

  t: (input: Text) => string;

  // getStrKeywords: (keywords: Text[]) => string;

  // getKeyToSearch (c:StandardComponentMeta|SnippetMeta){
  //   const strTitle = this.t(c.title);
  //   const strComponentName = this.t((c as SnippetMeta).schema?.componentName);
  //   const strDescription = "description" in c ? this.t(c.description):'';
  //   const strKeywords = "keywords" in c ? this.getStrKeywords(c.keywords||[]):'';
  //   return  `${strTitle}#${strComponentName}#${strDescription}#${strKeywords}`.toLowerCase();
  // }

  // getFilteredComponents = debounce(() => {
  //   const { groups = [], keyword } = this.state;
  //   if (!keyword) {
  //     this.setState({
  //       filter: groups,
  //     });
  //     return;
  //   }



  //   const filter = groups.map((group) => ({
  //     ...group,
  //     categories: group.categories
  //       .map((category) => ({
  //         ...category,
  //         components: category.components.filter((c) => {
  //           let keyToSearch =  this.getKeyToSearch(c);
  //           if(c.snippets){
  //             c.snippets.map((item)=>{
  //               keyToSearch += `_${this.getKeyToSearch(item)}`
  //             })
  //           }
  //           return keyToSearch.includes(keyword);
  //         }),
  //       }))
  //       .filter((c) => c?.components?.length),
  //   }));

  //   this.setState({
  //     filter,
  //   });
  // }, 200);

  constructor(props) {
    super(props);
    this.t = getTextReader(props.lang);
    // this.getStrKeywords = (keywords: Text[]): string => {
    //   if (typeof keywords === 'string') {
    //     return keywords;
    //   }
    //   if (keywords && Array.isArray(keywords) && keywords.length) {
    //     return keywords.map(keyword => this.t(keyword)).join('-');
    //   }
    //   return '';
    // };
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
   * TODO: 无副作用，可多次执行
   */
  async initComponentList() {
    const { editor } = this.props;
    const rawData = material.getAssets();

    const res = await getBlockList();

    this.setState({
      blocks: res.data || []
    })

    const meta = transform(rawData, this.t);

    const { groups, snippets } = meta;

    console.log('snippets', snippets)

    // this.store.setSnippets(snippets);
    this.store.setSnippets(res.data);

    this.setState({
      groups,
      filter: groups,
    });

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

    // eslint-disable-next-line
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

  // handleSearch = (keyword = '') => {
  //   this.setState({
  //     keyword: keyword.toLowerCase(),
  //   });
  //   this.getFilteredComponents();
  // };

  // renderEmptyContent() {
  //   return (
  //     <div className={cx('empty')}>
  //       <img src="//g.alicdn.com/uxcore/pic/empty.png" />
  //       <div className={cx('content')}>{this.t(createI18n('暂无组件，请在物料站点添加', 'No components, please add materials'))}</div>
  //     </div>
  //   )
  // }

  renderContent() {
    const { filter = [], keyword, blocks } = this.state;
    
    // const hasContent = filter.filter(item => {
    //   return item?.categories?.filter(category => {
    //     return category?.components?.length;
    //   }).length;
    // }).length;
    // if (!hasContent) {
    //   return this.renderEmptyContent();
    // }
    // if (keyword) {
    //   return (
    //     <div ref={this.registerAdditive} className={cx('filtered-content')}>
    //       {filter.map((group) => {
    //         const { categories } = group;
    //         {return categories.map((category) => {
    //           const { components } = category;
    //           const cname = this.t(category.name);
    //           return (
    //             // Category
    //             <div key={cname} name={cname}>
    //               <List>
    //                 {components.map((component) => {
    //                   const { componentName, snippets = [] } = component;
    //                   return snippets.filter(snippet => snippet.id && this.getKeyToSearch(snippet).toLowerCase().includes(keyword)).map(snippet => {
    //                     return (
    //                       // Component
    //                       <div
    //                         data={{
    //                           title: snippet.title || component.title,
    //                           icon: snippet.screenshot || component.icon,
    //                           snippets: [snippet]
    //                         }}
    //                         key={`${this.t(group.name)}_${this.t(componentName)}_${this.t(snippet.title)}`}
    //                         t={this.t}
    //                       />
    //                     );
    //                   });
    //                 })}
    //               </List>
    //             </div>
    //           );
    //         })}
    //       })}
    //     </div>
    //   )
    // }
    console.log('filter', filter);
    console.log('blocks', blocks);
    return (
      <div ref={this.registerAdditive}>
        {
          blocks.map(block=> {
            return (
              <div
                className="snippet" 
                data-id={block.blockName} 
                title={this.t(block.blockNameCh)}
                style={{display: 'flex',}}
              >
                <div className={cx('name')} style={{}}>
                  {this.t(block.blockNameCh)}
                </div>
              </div>
            )
          })
        }
      </div>
      
      // <Tab className={cx('tabs')}>
      //   {filter.map((group) => {
      //     const { categories } = group;
      //     return (
      //       <Tab.Item title={this.t(group.name)} key={this.t(group.name)}>
      //         <div ref={this.registerAdditive}>
      //           {categories.map((category) => {
      //             const { components } = category;
      //             const cname = this.t(category.name);
      //             return (
      //               <div key={cname} name={cname}>
      //                   {components.map((component) => {
      //                     const { componentName, snippets = [] } = component;
      //                     return snippets.filter(snippet => snippet.id).map(snippet => {
      //                       return (
      //                         //Component
      //                         // <div
      //                         //   data={{
      //                         //     title: snippet.title || component.title,
      //                         //     icon: snippet.screenshot || component.icon,
      //                         //     snippets: [snippet]
      //                         //   }}
      //                         //   t={this.t}
      //                         //   key={`${this.t(group.name)}_${this.t(componentName)}_${this.t(snippet.title)}`}
      //                         // />
      //                         // <div
      //                         //   data={{
      //                         //     title: snippet.title || component.title,
      //                         //     icon: snippet.screenshot || component.icon,
      //                         //     snippets: [snippet]
      //                         //   }}
      //                         // >
      //                         //   {this.t(componentName)}
      //                         // </div>
      //                         <div className="snippet" data-id={snippet.id} title={this.t(snippet.title || component.title)}>
      //                           <div className={cx('name')}>{this.t(snippet.title || component.title)}</div>
      //                         </div>
      //                       );
      //                     });
      //                   })}
      //               </div>
      //             );
      //           })}
      //         </div>
      //       </Tab.Item>
      //     );
      //   })}
      // </Tab>
    );
  }

  render() {
    return (
      <div className={cx('lowcode-component-panel')}>
        {/* <div className={cx('header')}>
          <Search
            className={cx('search')}
            placeholder={this.t(createI18n('搜索组件', 'Search components'))}
            shape="simple"
            hasClear
            autoFocus
            onSearch={this.handleSearch}
            onChange={this.handleSearch}
          />
        </div> */}
        {this.renderContent()}
      </div>
    );
  }
}

// export const PaneIcon = IconOfPane;