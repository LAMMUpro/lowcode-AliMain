import { Tree, Icon, Search, Dialog, Menu, Loading, Button, Tag, Select, Message } from '@alifd/next';
import React from 'react';
import EditNodeInfoDialog from './EditNodeInfoDialog';
import AddEditApplicationDialog from './AddEditApplicationDialog';
import { material, project, config, event } from '@alilc/lowcode-engine';
import { defaultSchema } from 'src/services/pageManage';
import { deleteApplicationById, findAllApplication } from 'src/api/Application';
import { createAppVersion, deleteAppVersionById, findAllAppVersionByAppId, verifyAppVersion } from 'src/api/AppVersion';
import AddVersionDialog from './AddVersionDialog';
import AddEnvDialog from './AddEnvDialog';
import EditVersionEnvDialog from './EditVersionEnvDialog';
import { AppVersionDto, AppVersionDtoCreate } from 'src/types/dto/AppVersion';
import { findAllAppEnv, updateAppEnv } from 'src/api/AppEnv';
import { AppEnvDto, AppEnvDtoCreate, AppEnvDtoUpdate } from 'src/types/dto/AppEnv';
import { SpaceAppEnvDto } from 'src/types/dtoExt/AppEnv';
import { createPageNode, deletePageNodeById, findManyPageNode } from 'src/api/PageNode';
import { PageNodeDto, PageNodeDtoCreate } from 'src/types/dto/PageNode';
import { deletePageSchemaById, findPageSchemaByNodeId } from 'src/api/PageSchema';
import { ApplicationDto } from 'src/types/dto/Application';
import { PageNode } from 'src/types/dtoExt/PageNode';
import { SpaceAppVersionDto } from 'src/types/dtoExt/AppVersion';
import SaveAsBlockDialog from 'src/actions/SaveAsBlockDialog';
import { BlockDtoCreate } from 'src/types/dto/Block';
import { parseLocalInt } from 'src/utils';

const { Item, Divider } = Menu;

function getDefaultApplication() {
  return {
    name: '',
    describe: ''
  }
}

function getDefaultNode(applicationId: number = 0, version: string = ''): PageNodeDtoCreate {
  return {
    name: '',
    parentId: undefined,
    describe: '',
    applicationId: applicationId,
    version: version
  }
}

function getDefaultAppVersion(applicationId: number = 0, extendVersionId: number = 0): SpaceAppVersionDto.create {
  return {
    extendVersionId,
    applicationId,
    version: ''
  }
}

function getDefaultAppEnv(applicationId: number = 0): AppEnvDtoCreate {
  return {
    applicationId: applicationId,
    env: '',
    envCh: ''
  }
}

function getDefaultBlock(schema:string = ''): BlockDtoCreate {
  return {
    styleId: 0,
    name: '',
    nameCh: '',
    schema: schema,
    screenshot: '',
    categoryId: 0,
    categoryName: ''
  }
}

class PageManagePane extends React.Component {
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
      nodeId: parseLocalInt(localStorage.getItem("active:nodeId")),
      nodeInfo: getDefaultNode(),

      isShowEditApplicationInfoDialog: false,
      isShowAddAppVersionDialog: false,
      isShowAddAppEnvDialog: false,
      isShowBindAppVersionEnvDialog: false,
      isShowSaveAsBlockDialog: false,
      appDialogType: 'add',
      applicationId: parseLocalInt(localStorage.getItem("active:applicationId")),
      applicationList: config.get("applicationList"),
      applicationInfo: getDefaultApplication(),
      appVersionInfo: getDefaultAppVersion(),
      appAddEnvInfo: getDefaultAppEnv(),
      blockInfo: getDefaultBlock(),
      appEnvInfo: {
        envIdList: [],
        appVersionId: 0,
        version: ''
      },
      appVersionId: parseLocalInt(localStorage.getItem("active:appVersionId")),
      appVersion: localStorage.getItem("active:appVersion")||'',
      appVersionList: [],
      appEnvList: [],
      appAllEnvList: [],
      onSelectEnvIdList: [],
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
    this.handleAddVersionSuccess = this.handleAddVersionSuccess.bind(this);
    this.handleVerify = this.handleVerify.bind(this);
    this.handleAddEnvSuccess = this.handleAddEnvSuccess.bind(this);
    this.handleSaveAsBlockSuccess = this.handleSaveAsBlockSuccess.bind(this);
    this.handleEditVersionEnvSuccess = this.handleEditVersionEnvSuccess.bind(this);
    this.handleAppIdChange = this.handleAppIdChange.bind(this);
    this.updatePageNodes = this.updatePageNodes.bind(this);
    this.handleAddNodeInfo = this.handleAddNodeInfo.bind(this);
    this.handleEditNodeInfo = this.handleEditNodeInfo.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
    this.handleAddEditNodeSuccess = this.handleAddEditNodeSuccess.bind(this);
    this.handleEditPage = this.handleEditPage.bind(this);
    this.updateAppVersions = this.updateAppVersions.bind(this);
    this.handleAppVersionChange = this.handleAppVersionChange.bind(this);
    this.updateAppEnvs = this.updateAppEnvs.bind(this);
    this.handleEnvChange = this.handleEnvChange.bind(this);
    this.handleDeleteVersion = this.handleDeleteVersion.bind(this);
    this.handleAddVersion = this.handleAddVersion.bind(this);
    this.handleAddEnv = this.handleAddEnv.bind(this);
    this.handleBindVersionEnv = this.handleBindVersionEnv.bind(this);
    this.updateAppAllEnv = this.updateAppAllEnv.bind(this);
    this.handleSaveBindEnvs = this.handleSaveBindEnvs.bind(this);
    this.updateEditPage = this.updateEditPage.bind(this);
    this.handleSaveAsBlock = this.handleSaveAsBlock.bind(this);
    
    event.on('common:update:pageNodes', this.updatePageNodes);
    event.on('common:saveAsBlock', this.handleSaveAsBlock);

  }

  async componentDidMount() {
    this.setState({
      loading: true
    })
    const callback = () => {
      this.setState({
        loading: false
      })
    }
    setTimeout(async () => {
      if (!this.state.applicationList?.length) return callback();
      if (!this.state.applicationList.find(app=>app.id===this.state.applicationId)) return callback();
      await this.updateAppVersions();
      await this.updateAppAllEnv();
      if (!this.state.appVersionList?.length) return callback();
      if (!this.state.appVersionList.find(version=>version.id===this.state.appVersionId)) return callback();
      await this.updateAppEnvs();
      await this.updatePageNodes();
      if (!this.state.nodeList?.length) return callback();
      if (!this.state.nodeList.find(node=>node.id==this.state.nodeId)) return callback();
      await this.updateEditPage();
      callback();
    });
  }

  componentDidUpdate() {
    /** componentDidUpdate打开弹窗会重复触发!!! */
    // if (this.state.applicationList.length==0) {
    //   this.updateApplicationList();
    // }
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
    nodeId: number
    nodeInfo: PageNodeDtoCreate

    isShowEditApplicationInfoDialog: boolean
    isShowAddAppVersionDialog: boolean
    isShowAddAppEnvDialog: boolean
    isShowBindAppVersionEnvDialog: boolean
    isShowSaveAsBlockDialog: boolean
    appDialogType: 'add'|'edit'
    applicationInfo: {
      id?: number
      name: string
      describe: string
    }
    appVersionInfo: SpaceAppVersionDto.create
    appAddEnvInfo: AppEnvDtoCreate
    appEnvInfo: SpaceAppEnvDto.updateAppEnv,
    blockInfo: BlockDtoCreate
    /** 当前选中的应用id */
    applicationId: number
    /** 应用列表 */
    applicationList: Array<ApplicationDto>
    /** 当前选中的应用版本id */
    appVersionId: number
    /** 当前应用版本name */
    appVersion: string
    /** 应用版本 */
    appVersionList: Array<AppVersionDto>
    /** 当前版本环境 */
    appEnvList: Array<any>
    /** 当前应用所有环境 */
    appAllEnvList: Array<AppEnvDto>
    /** 用户选中的环境 */
    onSelectEnvIdList: Array<number>
    pageNodes: Array<PageNode>
    nodeList: Array<PageNode>
  }

  /** 更新应用列表 */
  async updateApplicationList() {
    const res = await findAllApplication();
    if (res.code == 1) {
      this.setState({
        applicationList: res.data,
      })
    }
  }

  /** 更新应用所有环境 */
  async updateAppAllEnv() {
    const res = await findAllAppEnv({
      applicationId: this.state.applicationId!
    });
    if (res.code == 1) {
      this.setState({
        appAllEnvList: res.data,
      })
    }
  }

  /** 更新版本列表 */
  async updateAppVersions() {
    const res = await findAllAppVersionByAppId({
      applicationId: this.state.applicationId!
    });
    if (res.code == 1) {
      this.setState({
        appVersionList: res.data,
      })
    }
  }

  /** 更新环境列表 */
  async updateAppEnvs() {
    const res = await findAllAppEnv({
      appVersionId: this.state.appVersionId!
    });
    if (res.code == 1) {
      this.setState({
        appEnvList: res.data,
        onSelectEnvIdList: res.data.map((item:any)=>item.id)
      })
    }
    localStorage.setItem("active:appEnvList", JSON.stringify(res.data));
  }

  /** 更新节点树 */
  async updatePageNodes() {
    if (!this.state.applicationId) return Message.show({
      type: "warning",
      content: "请先选择应用"
    });
    const res = await findManyPageNode({
      applicationId: this.state.applicationId,
      version: this.state.appVersion
    });
    if (res.code == 1) {
      this.setState({
        pageNodes: res.data,
        nodeList: res.originList,
        leafIds: res.leafIds,
        expandedKeys: res.leafIds,
      })
    }
  }

  /** 新增版本信息 */
  handleAddVersion(node: any) {
    this.setState({
      isShowAddAppVersionDialog: true,
      appVersionInfo: getDefaultAppVersion(this.state.applicationId, this.state.appVersionId),
    })
  }

  /** 提交审核 */
  handleVerify() {
    Dialog.confirm({
      content: `确定要将该版本[${this.state.appVersion}]提交审核吗？审核完成后可以绑定正式环境!`,
      onOk: async () => {
        const res = await verifyAppVersion({id: this.state.appVersionId});
        if (res.code == 1) {
          Message.show({
            type: "success",
            content: "提交成功"
          });
          this.updateAppVersions();
        }
      },
    })
  }

  /** 新增环境 */
  handleAddEnv() {
    this.setState({
      appAddEnvInfo: getDefaultAppEnv(this.state.applicationId),
      isShowAddAppEnvDialog: true
    })
  }

  /** 绑定版本环境 */
  async handleSaveBindEnvs() {
    const res = await updateAppEnv({
      envIdList: this.state.onSelectEnvIdList,
      appVersionId: this.state.appVersionId,
      version: this.state.appVersion,
    });
    if (res.code == 1) {
      Message.show({
        type: "success",
        content: "绑定环境成功"
      });
      this.updateAppEnvs();
    }
  }

  /** 绑定版本环境 */
  handleBindVersionEnv() {
    this.setState({
      appEnvInfo: {
        envIdList: this.state.appEnvList.map(item=>item.id),
        appVersionId: this.state.appVersionId,
        version: this.state.appVersion
      }
    })
    setTimeout(() => {
      this.setState({
        isShowBindAppVersionEnvDialog: true
      });
    }, 0);
  }

  /** 新增应用信息 */
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

  /** 添加版本 */
  handleAddVersionSuccess() {
    this.updateAppVersions();
  }

  /** 添加环境 */
  handleAddEnvSuccess() {
    this.updateAppAllEnv();
    this.updateAppEnvs();
  }

  /** 添加区块 */
  handleSaveAsBlockSuccess(styleId: number) {
    event.emit('update:blocks', {
      styleId
    })
  }

  /** 编辑环境 */
  handleEditVersionEnvSuccess() {
    this.updateAppAllEnv();
    this.updateAppEnvs();
  }

  /** 切换应用 */
  handleAppIdChange(applicationId: number) {
    this.state.appVersionId
    this.setState({
      applicationId,
      appVersionId: '',
      appVersionList: [],
      appEnvList: [],
      nodeList: [],
      pageNodes: []
    })
    localStorage.setItem("active:applicationId", '' + applicationId);
    setTimeout(()=> {
      this.updateAppVersions();
      this.updateAppAllEnv();
    });
  }

  /** 切换版本 */
  handleAppVersionChange(appVersionId: number) {
    this.setState({
      appVersionId,
      appVersion: this.state.appVersionList.find(item=>item.id == appVersionId)?.version || '',
    })
    localStorage.setItem("active:appVersionId", '' + appVersionId);
    setTimeout(()=> {
      localStorage.setItem("active:appVersion", this.state.appVersion);
      this.updateAppEnvs();
      this.updatePageNodes();
    });
  }

  /** 选中/取消选中 环境标签 */
  handleEnvChange(index:number, isSelect:Boolean) {
    if (isSelect) {
      this.setState({
        onSelectEnvIdList: [...this.state.onSelectEnvIdList, this.state.appEnvList[index].id]
      })
    }else {
      const envId = this.state.appEnvList[index].id;
      this.setState({
        onSelectEnvIdList: this.state.onSelectEnvIdList.filter(item=>item!=envId)
      })
    }
  }

  deletePageInfo(nodeId: number) {
    Dialog.confirm({
      content: '确定要删除该节点页面数据吗？',
      onOk: async () => {
        const res = await deletePageSchemaById({nodeId});
        if (res.code == 1) {
          Message.show({
            type: "success",
            content: "清空页面数据成功"
          });
          this.updatePageNodes();
        }
      },
    })
  }
  
  deleteNode(id: number) {
    Dialog.confirm({
      content: '确定要删除该节点吗？对应页面数据及其子节点都会被删除!',
      onOk: async () => {
        const res = await deletePageNodeById({id});
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
    e.preventDefault();
    const pageNode = this.state.nodeList.find(item=>item.id==node.props.eventKey);
    if (pageNode?.parentId==0) return Message.show({
      type: "notice",
      content: "根节点不可操作"
    });
    const target = e.target;
    const { top, left } = target.getBoundingClientRect();

    Menu.create({
      target: e.target,
      offset: [e.clientX - left, e.clientY - top],
      className: "context-menu",
      popupClassName: "context-menu",
      // onItemClick: console.log,
      selectedKeys: this.state.selectedKeys,
      selectMode: "multiple",
      onSelect: this.handleSelect,
      children: [
        <Item key="1" onClick={()=>this.handleEditPage(node.props.eventKey)}>编辑当前页面</Item>,
        <Item key="2" onClick={()=>this.handleEditNodeInfo(node.props)}>编辑节点信息</Item>,
        <Divider key="divider-1" />,
        <Item key="5" onClick={()=>this.handlePreview(node.props.eventKey)}
          disabled={!pageNode?.hasSchema}
        >预览</Item>,
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
      nodeInfo: getDefaultNode(this.state.applicationId, this.state.appVersion)
    })
  }

  /** 更新编辑的页面 */
  async updateEditPage() {
    const nodeId = this.state.nodeId;
    const res = await findPageSchemaByNodeId({nodeId: nodeId});

    const _node_ = this.state.nodeList.find(item=>item.id == nodeId);
    
    config.set('schemaId', res.data.id);
    config.set('nodeId', nodeId);
    config.set('nodePath', _node_?.path);
    config.set('nodeDescribe', _node_?.describe);
    localStorage.setItem('active:nodeId', '' + nodeId);
    
    event.emit('update:nodePath');

    const schema = res.data.schema?.componentsTree?.[0] || JSON.parse(JSON.stringify(defaultSchema));

    if (project.getCurrentDocument()) {
      project.getCurrentDocument()?.importSchema(schema);
    } else {
      project.openDocument(schema);
    }
    
    project.simulatorHost?.rerender();
  }

  /** 编辑页面 */
  async handleEditPage(nodeId: number) {
    this.setState({
      nodeId
    })
    setTimeout(()=>{
      this.updateEditPage();
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

  /** 预览节点 */
  handlePreview(nodeId: number) {
    const search = `?nodeId=${nodeId}`;
    window.open(`./preview.html${search}`);
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
        const res = await deleteApplicationById({id: this.state.applicationId!});
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

  handleDeleteVersion() {
    Dialog.confirm({
      content: '确定要删除该版本吗？对应节点/页面信息也将被删除!',
      onOk: async () => {
        const res = await deleteAppVersionById({id: this.state.appVersionId!});
        if (res.code == 1) {
          Message.show({
            type: "success",
            content: "版本删除成功"
          });
          this.setState({
            appVersionId: undefined
          });
          this.updateAppVersions();
        }
      },
    })
  }

  /** 保存为区块 */
  handleSaveAsBlock(schema: string) {
    this.setState({
      isShowSaveAsBlockDialog: true,
      blockInfo: getDefaultBlock(schema),
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
            placeholder="请选择应用"
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
          <Button type="secondary" size="small" style={{marginLeft: '5px'}}
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
          <Select 
            label=""
            placeholder="请选择版本"
            autoWidth={false}
            value={this.state.appVersionId}
            defaultValue={this.state.appVersionId}
            style={{ flex: 1, marginBottom: '10px' }}
            onChange={id => this.handleAppVersionChange(id)}
          >
            {
              this.state.appVersionList.map(item=>(
                <Select.Option value={item.id}>
                  <span>{item.version}</span>
                  <span>{this.state.appAllEnvList.filter(env=>env.appVersionId==item.id).map(item=>item.envCh).join(',')}</span>
                  <span>{(item.isPass&&'✅')||(item.auditContent&&'❌')||(item.isAuditing&&'⌛️')}</span>
                </Select.Option>
              ))
            }
          </Select>
          <Button type="secondary" size="small" style={{marginLeft: '2px'}}
            disabled={!this.state.applicationId}
            onClick={this.handleAddVersion}
          >新增</Button>
          <Button type="secondary" size="small" style={{marginLeft: '2px'}}
            disabled={!this.state.applicationId 
              || this.state.appVersionList.find(item=>item.id==this.state.appVersionId)?.isPass
              || this.state.appVersionList.find(item=>item.id==this.state.appVersionId)?.isAuditing
            }
            onClick={this.handleVerify}
          >提审</Button>
          <Button type="normal" size="small" style={{marginLeft: '2px'}}
            disabled={!this.state.appVersionId}
            onClick={this.handleBindVersionEnv}
          >绑定环境</Button>
          <Button type="primary" warning size="small" style={{marginLeft: '2px'}}
            disabled={!this.state.appVersionId}
            onClick={this.handleDeleteVersion}
          >删除</Button>
        </div>
        {
          this.state.appVersionId && (<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <span style={{marginRight: '10px'}}>对应环境:</span>
              <Tag.Group className="tagCenter">
                {
                  this.state.appEnvList.map((item, index)=>{
                    return <Tag.Selectable
                      key={item.id}
                      size="small"
                      checked={this.state.onSelectEnvIdList.includes(item.id)}
                      onChange={(isSelect) => this.handleEnvChange(index, isSelect)}
                    >{item.envCh}</Tag.Selectable>
                  })
                }
              </Tag.Group>
            </div>
            <div style={{flexShrink: 0}}>
              <Button type="secondary" size="small" style={{marginLeft: '5px'}}
                disabled={!this.state.applicationId}
                onClick={this.handleAddEnv}
              >新增</Button>
              <Button type="primary" size="small" style={{marginLeft: '5px'}}
                disabled={this.state.appEnvList.length==this.state.onSelectEnvIdList.length}
                onClick={this.handleSaveBindEnvs}
              >保存</Button>
            </div>
          </div>)
        }
        <div style={{display: 'flex'}}>
          <Search
            shape="simple"
            size="medium"
            style={{ width: "100%", marginBottom: "10px" }}
            placeholder="请输入节点名"
            hasClear
            onSearch={this.handleSearch}
            onChange={this.handleSearch}
          />
          <Button type="secondary" size="small" style={{marginLeft: '5px'}}
            disabled={!this.state.appVersionId}
            onClick={this.handleAddNodeInfo}
          >新增</Button>
        </div>
        {
          (!this.state.applicationId) ? (
            <div style={{textAlign: 'center', marginTop: '10px'}}>请先选择应用!</div>
          ) : <></>
        }
        {
          (this.state.appVersionId && !this.state.appVersionId) ? (
            <div style={{textAlign: 'center', marginTop: '10px'}}>请先选择版本!</div>
          ) : <></>
        }
        {
          (this.state.applicationId && this.state.appVersionId && !this.state.pageNodes.length) ? (
            <div style={{textAlign: 'center', marginTop: '10px'}}>该应用暂无节点, 请先新增节点!</div>
          ) : <></>
        }
        {
          (this.state.applicationId && this.state.appVersionId) && <Tree
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
        }
        

        <EditNodeInfoDialog 
          visible={this.state.isShowEditNodeInfoDialog}
          type={this.state.nodeDialogType}
          originInfo={this.state.nodeInfo}
          pageNodes={this.state.pageNodes}
          onClose={()=>this.setState({isShowEditNodeInfoDialog: false})}
          success={this.handleAddEditNodeSuccess}
        ></EditNodeInfoDialog>

        <AddEditApplicationDialog 
          visible={this.state.isShowEditApplicationInfoDialog}
          type={this.state.appDialogType}
          originInfo={this.state.applicationInfo}
          onClose={()=>this.setState({isShowEditApplicationInfoDialog: false})}
          success={this.handleAddEditAppSuccess}
        ></AddEditApplicationDialog>

        <AddVersionDialog 
          visible={this.state.isShowAddAppVersionDialog}
          originInfo={this.state.appVersionInfo}
          appVersionList={this.state.appVersionList}
          onClose={()=>this.setState({isShowAddAppVersionDialog: false})}
          success={this.handleAddVersionSuccess}
        ></AddVersionDialog>

        <EditVersionEnvDialog
          visible={this.state.isShowBindAppVersionEnvDialog}
          originInfo={this.state.appEnvInfo}
          appAllEnvList={this.state.appAllEnvList}
          versionIsPass={this.state.appVersionList.find(item=>item.id==this.state.appVersionId)?.isPass||false}
          onClose={()=>this.setState({isShowBindAppVersionEnvDialog: false})}
          success={this.handleEditVersionEnvSuccess}
        ></EditVersionEnvDialog>

        {/* 新增环境 */}
        <AddEnvDialog 
          visible={this.state.isShowAddAppEnvDialog}
          originInfo={this.state.appAddEnvInfo}
          onClose={()=>this.setState({isShowAddAppEnvDialog: false})}
          success={this.handleAddEnvSuccess}
        ></AddEnvDialog>

        {/* 保存为区块 */}
        <SaveAsBlockDialog 
          visible={this.state.isShowSaveAsBlockDialog}
          originInfo={this.state.blockInfo}
          onClose={()=>this.setState({isShowSaveAsBlockDialog: false})}
          success={this.handleSaveAsBlockSuccess}
        ></SaveAsBlockDialog>
        
      </Loading>
    );
  }
}

function renderNode(node: PageNode) {
  return <Tree.Node key={node.id} label={
    <span>
      <span>{node.name}</span> 
      { node.hasSchema && <Icon type="detail"/> }
    </span>
  }>
    {
      node.children.map(item=> (
        <Tree.Node key={item.id} label={
          <span>
            <span>{item.name}</span> 
            { item.hasSchema && <Icon type="detail"/> }
          </span>
        }>
          {
            item.children.map(item2 => renderNode(item2))
          }
        </Tree.Node>
      ))
    }
  </Tree.Node>
}

export default PageManagePane;