import { Tree, Icon, Search, Dialog, Menu, Loading, Button, Balloon, Select, Message } from '@alifd/next';
import React from 'react';
import EditNodeInfo from './EditNodeInfo';
import AddEditApplicationDialog from './AddEditApplication';
import { PageNode, deleteApplication, deleteNode, deletePage, getApplicationList, getNodes } from 'src/services/api';

// const data = [
//   {
//       label: 'crm',
//       key: '1',
//       icon: <Icon type="eye" />,
//       children: [
//           {
//               label: 'contract',
//               key: '2',
//               icon: 'eye',
//               children: [
//                   {
//                       label: 'Input',
//                       key: '4',
//                       children: [
//                         {
//                             label: 'Input',
//                             key: '44',
//                             children: [
//                               {
//                                 icon: <Icon type="eye" />,
//                                   label: 'Input',
//                                   key: '46',
//                               },
//                             ]
//                         },
//                       ]
//                   },
//                   {
//                       label: 'Select',
//                       key: '5',
//                   },
//               ],
//           },
//           {
//               label: 'Display',
//               key: '3',
//               icon: 'eye',
//               children: [
//                   {
//                       label: 'Table',
//                       key: '6',
//                   },
//               ],
//           },
//       ],
//   },
// ];

const { Item, Divider } = Menu;

function getDefaultApplication() {
  return {
    name: '',
    _describe: ''
  }
}

function getDefaultNode() {
  return {
    name: '',
    parent_id: null,
    _describe: ''
  }
}

class App extends React.Component {
  constructor(props:any) {
    super(props);

    this.state = {
      expandedKeys: [],
      leafIds: [],
      autoExpandParent: true,
      selectedKeys: [],
      loading: false,
      isShowEditNodeInfoDialog: false,
      nodeDialogType: 'add',
      nodeId: undefined,
      nodeInfo: getDefaultNode(),

      isShowEditApplicationInfoDialog: false,
      appDialogType: 'add',
      applicationId: undefined,
      applicationList: [],
      applicationInfo: getDefaultApplication(),
      pageNodes: [],
      nodeList: [],
    };

    this.matchedKeys = null;

    this.handleSearch = this.handleSearch.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.updateApplicationList = this.updateApplicationList.bind(this);
    this.handleDeleteApplication = this.handleDeleteApplication.bind(this);
    this.handleAddApplicationInfo = this.handleAddApplicationInfo.bind(this);
    this.handleEditApplicationInfo = this.handleEditApplicationInfo.bind(this);
    this.handleAddEditAppSuccess = this.handleAddEditAppSuccess.bind(this);
    this.handleAppIdChange = this.handleAppIdChange.bind(this);
    this.updatePageNodes = this.updatePageNodes.bind(this);
    this.handleAddNodeInfo = this.handleAddNodeInfo.bind(this);
    this.handleEditNodeInfo = this.handleEditNodeInfo.bind(this);
    this.handleAddEditNodeSuccess = this.handleAddEditNodeSuccess.bind(this);

    this.updateApplicationList();
    this.updatePageNodes();
  }

  matchedKeys: Array<string>|null;
  state: {
    expandedKeys: Array<number>
    leafIds: Array<number>
    autoExpandParent: boolean
    selectedKeys: Array<string>
    loading: boolean
    isShowEditNodeInfoDialog: boolean
    nodeDialogType: 'add'|'edit'
    nodeId?: number
    nodeInfo: Omit<PageNode, 'id'|'depth'|'children'>

    isShowEditApplicationInfoDialog: boolean
    appDialogType: 'add'|'edit'
    applicationInfo: {
      id?: number
      name: string
      _describe: string
    }
    applicationId?: number
    applicationList: Array<{
      id: number
      name: string
      _describe: string
    }>
    pageNodes: Array<PageNode>
    nodeList: Array<PageNode>
  }

  async updateApplicationList() {
    const res = await getApplicationList();
    if (res.code == 1) {
      this.setState({
        applicationList: res.data,
      })
    }
  }

  async updatePageNodes() {
    const res = await getNodes();
    if (res.code == 1) {
      this.setState({
        pageNodes: res.data,
        nodeList: res.originList,
        leafIds: res.leafIds,
        expandedKeys: res.leafIds,
      })
    }
  }

  /** 新增用户信息 */
  handleAddApplicationInfo(node: any) {
    this.setState({
      appDialogType: 'add',
      isShowEditApplicationInfoDialog: true,
      applicationInfo: getDefaultApplication(),
    })
  }

  /** 编辑应用信息 */
  handleEditApplicationInfo(node: any) {
    this.setState({
      appDialogType: 'edit',
      isShowEditApplicationInfoDialog: true,
      applicationInfo: this.state.applicationList.find(item=>item.id == this.state.applicationId)
    })
  }

  /** 新增/编辑应用信息 成功回调 */
  handleAddEditAppSuccess() {
    this.updateApplicationList();
  }

  /** 切换应用 */
  handleAppIdChange(id: number) {
    this.setState({
      applicationId: id,
    })

  }

  deletePageInfo(id: number) {
    Dialog.confirm({
      content: '确定要删除该节点页面数据吗？',
      onOk: async () => {
        const res = await deletePage({id});
        if (res.code == 1) {
          Message.show({
            type: "success",
            content: "清空页面数据成功"
          });
        }
      },
    })
  }
  
  deleteNode(id: number) {
    Dialog.confirm({
      content: '确定要删除该节点吗？对应页面数据及其子节点都会被删除!',
      onOk: async () => {
        const res = await deleteNode({id});
        if (res.code == 1) {
          Message.show({
            type: "success",
            content: "节点删除成功"
          });
          this.updatePageNodes();
        }
      },
    })
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
        <Item key="4" onClick={()=>this.deletePageInfo(node.props.eventKey)}>删除页面</Item>,
        <Item key="3" onClick={()=>this.deleteNode(node.props.eventKey)}>删除节点</Item>
      ]
    });
  }


  /** 新增节点信息 */
  handleAddNodeInfo(node: any) {
    this.setState({
      nodeDialogType: 'add',
      isShowEditNodeInfoDialog: true,
      nodeInfo: getDefaultNode()
    })
  }

  /** 编辑节点信息 */
  handleEditNodeInfo(node: any) {
    this.setState({
      nodeDialogType: 'edit',
      isShowEditNodeInfoDialog: true,
      nodeInfo: this.state.nodeList.find(item=>item.id == node.eventKey)
    })
  }

  /** 新增/编辑 节点成功 回调 */
  handleAddEditNodeSuccess() {
    this.updatePageNodes();
  }

  handleSearch(value: string) {
    value = value.trim();
    if (!value) {
      this.matchedKeys = null;
      this.setState({
        expandedKeys: this.state.leafIds,
        autoExpandParent: true
      });
      return;
    }

    const matchedKeys: Array<string> = [];
    const loop = (data:any) =>
      data.forEach((item:any) => {
        if (item.name.indexOf(value) > -1) {
          matchedKeys.push(item.id);
        }
        if (item.children && item.children.length) {
          loop(item.children);
        }
      });
    loop(this.state.pageNodes);
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

  handleDeleteApplication() {
    Dialog.confirm({
      content: '确定要删除该应用吗？对应节点/页面信息也将被删除!',
      onOk: async () => {
        const res = await deleteApplication({id: this.state.applicationId!});
        if (res.code == 1) {
          Message.show({
            type: "success",
            content: "应用删除成功"
          });
          this.setState({
            applicationId: undefined
          });
          this.updateApplicationList();
        }
      },
    })
  }

  render() {
    const { expandedKeys, autoExpandParent } = this.state;
    const filterTreeNode = (node:any) => {
      // if (this.matchedKeys === null) {
      //   this.setState({
      //     expandedKeys: [...this.state.expandedKeys, node.props.eventKey]
      //   })
      // }
      return (
        this.matchedKeys! && this.matchedKeys.indexOf(node.props.eventKey) > -1
      );
    };
    return (
      <Loading 
        visible={this.state.loading} 
        tip="数据加载中..." 
        style={{width: '100%', height: '100%', padding: "0 15px"}}
      >
        <div style={{display: 'flex'}}>
          <Select 
            label="当前应用:"
            value={this.state.applicationId}
            defaultValue={this.state.applicationId}
            style={{ flex: 1, marginBottom: '10px' }}
            onChange={id => this.handleAppIdChange(id)}
          >
            {
              this.state.applicationList.map(item=>(
                <Select.Option value={item.id}>{item.name}</Select.Option>
              ))
            }
          </Select>
          <Button type="primary" size="small" style={{marginLeft: '5px'}}
            onClick={this.handleAddApplicationInfo}
          >新增</Button>
          <Button type="normal" size="small" style={{marginLeft: '5px'}}
            disabled={!this.state.applicationId}
            onClick={this.handleEditApplicationInfo}
          >编辑</Button>
          <Button type="primary" warning size="small" style={{marginLeft: '5px'}}
            disabled={!this.state.applicationId}
            onClick={this.handleDeleteApplication}
          >删除</Button>
        </div>
        <div style={{display: 'flex'}}>
          <Search
            shape="simple"
            size="medium"
            style={{ width: "100%", marginBottom: "10px" }}
            hasClear
            onSearch={this.handleSearch}
            onChange={this.handleSearch}
          />
          <Button type="primary" size="small" style={{marginLeft: '5px'}}
            onClick={this.handleAddNodeInfo}
          >新增</Button>
        </div>
        <Tree
          draggable
          editable
          showLine
          isNodeBlock
          defaultExpandAll 
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
          filterTreeNode={filterTreeNode}
          onExpand={this.handleExpand}
          onRightClick={this.onRightClick}
        >
          {
            this.state.pageNodes.map(item=> renderNode(item))
          }
        </Tree>

        <EditNodeInfo 
          visible={this.state.isShowEditNodeInfoDialog}
          type={this.state.nodeDialogType}
          originInfo={this.state.nodeInfo}
          pageNodes={this.state.pageNodes}
          onClose={()=>this.setState({isShowEditNodeInfoDialog: false})}
          success={this.handleAddEditNodeSuccess}
        ></EditNodeInfo>

        <AddEditApplicationDialog 
          visible={this.state.isShowEditApplicationInfoDialog}
          type={this.state.appDialogType}
          originInfo={this.state.applicationInfo}
          onClose={()=>this.setState({isShowEditApplicationInfoDialog: false})}
          success={this.handleAddEditAppSuccess}
        ></AddEditApplicationDialog>
      </Loading>
    );
  }
}

function renderNode(node: PageNode) {
  return <Tree.Node key={node.id} label={node.name}>
    {
      node.children.map(item=> (
        <Tree.Node key={item.id} label={item.name}>
          {
            item.children.map(item2 => renderNode(item2))
          }
        </Tree.Node>
      ))
    }
  </Tree.Node>
}

export default App;