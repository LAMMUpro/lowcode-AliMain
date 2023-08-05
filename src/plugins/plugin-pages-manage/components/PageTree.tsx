import { Tree, Icon, Search, Menu, Loading, Dialog } from '@alifd/next';
import React from 'react';
import EditNodeInfo from './EditNodeInfo';

const data = [
  {
      label: 'crm',
      key: '1',
      icon: <Icon type="eye" />,
      children: [
          {
              label: 'contract',
              key: '2',
              icon: 'eye',
              children: [
                  {
                      label: 'Input',
                      key: '4',
                      children: [
                        {
                            label: 'Input',
                            key: '44',
                            children: [
                              {
                                icon: <Icon type="eye" />,
                                  label: 'Input',
                                  key: '46',
                              },
                            ]
                        },
                      ]
                  },
                  {
                      label: 'Select',
                      key: '5',
                  },
              ],
          },
          {
              label: 'Display',
              key: '3',
              icon: 'eye',
              children: [
                  {
                      label: 'Table',
                      key: '6',
                  },
              ],
          },
      ],
  },
];



const { Item, Divider } = Menu;

class App extends React.Component {
  constructor(props:any) {
    super(props);

    this.state = {
      expandedKeys: ["2"],
      autoExpandParent: true,
      selectedKeys: [],
      loading: false,
      isShowEditNodeInfoDialog: false
    };

    this.matchedKeys = [];

    this.handleSearch = this.handleSearch.bind(this);
    this.handleExpand = this.handleExpand.bind(this);

  }

  matchedKeys: Array<string>|null;
  state: {
    expandedKeys: Array<string>
    autoExpandParent: boolean
    selectedKeys: Array<string>
    loading: boolean
    isShowEditNodeInfoDialog: boolean
  }

  onRightClick = ({event: e, node}: any) => {
    console.log(e)
    e.preventDefault();
    console.log(node);
    const target = e.target;
    const { top, left } = target.getBoundingClientRect();

    Menu.create({
      target: e.target,
      offset: [e.clientX - left, e.clientY - top],
      className: "context-menu",
      popupClassName: "context-menu",
      onItemClick: console.log,
      selectedKeys: this.state.selectedKeys,
      selectMode: "multiple",
      onSelect: this.handleSelect,
      children: [
        <Item key="1">编辑当前页面</Item>,
        <Item key="2" onClick={()=>this.handleEditNodeInfo(node.props)}>编辑节点信息(父级)</Item>,
        <Divider key="divider-1" />,
        <Item key="4">删除页面</Item>,
        <Item key="3">删除节点</Item>
      ]
    });
  }

  /** 编辑节点信息 */
  handleEditNodeInfo(node: any) {
    this.setState({
      isShowEditNodeInfoDialog: true
    })
  }

  handleSearch(value: string) {
    value = value.trim();
    if (!value) {
      this.matchedKeys = null;
      return;
    }

    const matchedKeys: Array<string> = [];
    const loop = (data:any) =>
      data.forEach((item:any) => {
        if (item.label.indexOf(value) > -1) {
          matchedKeys.push(item.key);
        }
        if (item.children && item.children.length) {
          loop(item.children);
        }
      });
    loop(data);

    this.setState({
      expandedKeys: [...matchedKeys],
      autoExpandParent: true
    });
    this.matchedKeys = matchedKeys;
  }

  handleExpand(keys: Array<string>) {
    this.setState({
      expandedKeys: keys,
      autoExpandParent: false
    });
  }

  handleSelect() {

  }

  render() {
    const { expandedKeys, autoExpandParent } = this.state;
    const filterTreeNode = (node:any) => {
      return (
        this.matchedKeys! && this.matchedKeys.indexOf(node.props.eventKey) > -1
      );
    };
    return (
      <Loading visible={this.state.loading} tip="数据加载中..." style={{width: '100%', height: '100%', padding: "0 15px"}}>
        <Search
          shape="simple"
          size="medium"
          style={{ width: "100%", marginBottom: "10px" }}
          onChange={this.handleSearch}
        />
        <Tree
          draggable
          editable
          showLine
          isNodeBlock
          defaultExpandAll 
          dataSource={data}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
          filterTreeNode={filterTreeNode}
          onExpand={this.handleExpand}
          onRightClick={this.onRightClick}
        />

        <EditNodeInfo 
          visible={this.state.isShowEditNodeInfoDialog}
          originInfo={{
            id: 'string',
            label: 'string',
            parentId: 'string',
            parentName: 'string',
            describe: 'string'
          }}
          onClose={()=>this.setState({isShowEditNodeInfoDialog: false})}
        ></EditNodeInfo>
      </Loading>
    );
  }
}

export default App;