import { Tree, Icon, Search, Dialog, Menu, Loading, Button, Balloon, Select, Message } from '@alifd/next';
import React from 'react';
import EditNodeInfo from './EditNodeInfo';
import AddEditApplicationDialog from './AddEditApplication';
import { deleteApplication, getApplicationList } from 'src/services/api';

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

function getDefaultApplication() {
  return {
    name: '',
    _describe: ''
  }
}

class App extends React.Component {
  constructor(props:any) {
    super(props);

    this.state = {
      expandedKeys: ["5", "6", "46"],
      autoExpandParent: true,
      selectedKeys: [],
      loading: false,
      isShowEditNodeInfoDialog: false,
      isShowEditApplicationInfoDialog: false,
      appDialogType: 'add',
      applicationId: undefined,
      applicationList: [],
      applicationInfo: getDefaultApplication(),
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

    this.updateApplicationList();
  }

  matchedKeys: Array<string>|null;
  state: {
    expandedKeys: Array<string>
    autoExpandParent: boolean
    selectedKeys: Array<string>
    loading: boolean
    isShowEditNodeInfoDialog: boolean
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
  }

  async updateApplicationList() {
    const res = await getApplicationList();
    if (res.code == 1) {
      this.setState({
        applicationList: res.data,
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

  deletePageInfo() {
    Dialog.confirm({
      content: '确定要删除该节点页面数据吗？',
      onOk: () => {
        // resolve();
      },
      onCancel: () => {
        // reject()
      },
    })
  }
  
  deleteNode() {
    Dialog.confirm({
      content: '确定要删除该节点吗？对应页面数据及其子节点都会被删除!',
      onOk: () => {
        // resolve();
      },
      onCancel: () => {
        // reject()
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
        <Item key="4" onClick={this.deletePageInfo}>删除页面</Item>,
        <Item key="3" onClick={this.deleteNode}>删除节点</Item>
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
      this.setState({
        expandedKeys: ["5", "6", "46"],
        autoExpandParent: true
      });
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

        <Search
          shape="simple"
          size="medium"
          style={{ width: "100%", marginBottom: "10px" }}
          hasClear
          onSearch={this.handleSearch}
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

export default App;