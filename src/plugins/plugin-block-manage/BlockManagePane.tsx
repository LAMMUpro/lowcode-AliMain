import React from "react";
import { Tab, Loading, Message } from '@alifd/next';
import BlockList from "./components/BlockList/index";
import AddBlockStyleDialog from './components/AddBlockStyleDialog';
import { BlockStyleDto, BlockStyleDtoCreate } from "src/types/dto/BlockStyle";
import { findAllBlockStyle } from "src/api/BlockStyle";
import AddBlockCategoryDialog from "./components/AddBlockCategoryDialog";
import { BlockCategoryDto, BlockCategoryDtoCreate } from "src/types/dto/BlockCategory";
import { BlockDto } from "src/types/dto/Block";
import { findAllBlock } from "src/api/Block";
import Category from "./components/Category";
import { config, event } from "@alilc/lowcode-engine";
import { parseLocalInt } from "src/utils";

let blockListRef:InstanceType<typeof BlockList>|null;
function refreshBlocks() {
  blockListRef?.initComponentList?.();
}

function getDefaultBlockStyle(): BlockStyleDtoCreate {
  return {
    name: '',
    priority: 10,
  }
}
function getDefaultBlockCategory(styleId: number = 0): BlockCategoryDtoCreate {
  return {
    styleId,
    name: '',
    priority: 10,
  }
}

export class BlockManagePane extends React.Component {
  constructor(props:any) {
    super(props);

    this.state = {
      loading: false,
      isShowAddBlockStyleDialog: false,
      isShowAddBlockCategoryDialog: false,
      blockStyleInfo: getDefaultBlockStyle(),
      blockCategoryInfo: getDefaultBlockCategory(),
      blockStyleList: [],
      blockStyleId: parseLocalInt(localStorage.getItem("active:blockStyleId")),
      blockCategoryList: [],
      blockCategoryMap: {},
      blockMap: {}
    }

    this.handleAddBlockStyle = this.handleAddBlockStyle.bind(this);
    this.updateBlockStyleList = this.updateBlockStyleList.bind(this);
    this.updateStyleBlockList = this.updateStyleBlockList.bind(this);
    this.handleAddBlockStyleSuccess = this.handleAddBlockStyleSuccess.bind(this);
    this.handleAddBlockCategorySuccess = this.handleAddBlockCategorySuccess.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);

    event.on('common:update:blocks', (data)=>{
      this.updateStyleBlockList(true, data);
    })

    config.set("blockStyleId", this.state.blockStyleId);
  }

  state: {
    loading: boolean
    isShowAddBlockStyleDialog: boolean
    isShowAddBlockCategoryDialog: boolean
    blockStyleInfo: BlockStyleDtoCreate
    blockCategoryInfo: BlockCategoryDtoCreate
    blockStyleList: Array<BlockStyleDto>
    blockCategoryList: Array<BlockCategoryDto>
    blockStyleId: number
    blockCategoryMap: {
      [key: string]: Array<BlockCategoryDto>
    }
    blockMap: {
      [key: string]: Array<{
        categoryId: string
        categoryName: string
        list: Array<BlockDto>
      }>
    }
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
      await this.updateBlockStyleList();
      if (!this.state.blockStyleList.find(style=>style.id===this.state.blockStyleId)) return callback();
      await this.updateStyleBlockList();

      callback();
    });
  }

  /** 打开添加区块主题弹窗 */
  handleAddBlockStyle() {
    this.setState({
      blockStyleInfo: getDefaultBlockStyle(),
      isShowAddBlockStyleDialog: true
    })
  }

  /** 打开添加区块分类弹窗 */
  handleAddBlockCategory() {
    if (!this.state.blockStyleId) return Message.warning("请先选中主题!");
    this.setState({
      blockCategoryInfo: getDefaultBlockCategory(this.state.blockStyleId),
      isShowAddBlockCategoryDialog: true
    })
  }

  /** 切换区块主题 */
  handleTabChange(key: string) {
    this.setState({
      blockStyleId: +key
    })
    localStorage.setItem("active:blockStyleId", key);
    config.set("blockStyleId", key);
    setTimeout(() => {
      this.updateStyleBlockList();
    });
  }

  /** 添加区块主题成功 */
  handleAddBlockStyleSuccess() {
    this.updateBlockStyleList();
  }

  /** 添加分类成功 */
  handleAddBlockCategorySuccess() {
    this.updateStyleBlockList(true);
  }

  /** 更新区块主题列表 */
  async updateBlockStyleList() {
    const res = await findAllBlockStyle();
    if (res.code == 1) {
      this.setState({
        blockStyleList: res.data,
      })
    }
  }

  /** 更新区块列表 */
  async updateStyleBlockList(refresh:boolean = false, options: {styleId?: number} = {}) {
    /** 有缓存了 */
    if (!refresh && Object.keys(this.state.blockMap).includes(''+this.state.blockStyleId)) return;
    debugger
    const styleId = options.styleId || this.state.blockStyleId;
    const res = await findAllBlock({
      styleId,
    });
    if (res.code == 1) {
      const blockMap = JSON.parse(JSON.stringify(this.state.blockMap));
      blockMap[styleId] = res.data;

      this.setState({
        blockMap: []
      })
      setTimeout(() => {
        this.setState({
          blockMap
        })
      });
    }
  }

  render(): React.ReactNode {
    return (
      <Loading 
        visible={this.state.loading} 
        tip="数据加载中..." 
        style={{width: '100%', height: '100%'}}
      >
        <div>
          <div>
            {
              this.state.blockStyleList.length === 0 && <p style={{textAlign: 'center'}}>暂无主题, 请先添加主题!</p>
            }
            <Tab 
              activeKey={''+this.state.blockStyleId}
              onChange={this.handleTabChange}
            >
              {
                this.state.blockStyleList.map((blockStyle, index) => (
                  <Tab.Item title={blockStyle.name} key={blockStyle.id}>
                    {
                      !this.state.blockMap[blockStyle.id]?.length ? 
                      <p style={{textAlign: 'center'}}>
                        暂无可用区块, 可以到面板上上传你组合的区块
                      </p> :
                      this.state.blockMap[blockStyle.id]?.map(item=>(<div>
                        <Category key={item.categoryId} name={item.categoryName}>
                          <BlockList 
                            // ref={ref => blockListRef= ref}
                            blocks={item.list}
                          ></BlockList>
                        </Category>
                      </div>))
                      // this.state.blockCategoryMap[blockStyle.id]?.map(category=>category.name).join(',')
                    }
                    {

                    }
                  </Tab.Item>
                ))
              }
            </Tab>
            {
              !this.state.blockStyleId && <p style={{textAlign: 'center'}}>请选择一个主题进行查看</p>
            }
          </div>
        </div>
        {/* 添加主题 */}
        <AddBlockStyleDialog 
          visible={this.state.isShowAddBlockStyleDialog}
          originInfo={this.state.blockStyleInfo}
          onClose={()=>this.setState({isShowAddBlockStyleDialog: false})}
          success={this.handleAddBlockStyleSuccess}
        ></AddBlockStyleDialog>
        {/* 添加分类 */}
        <AddBlockCategoryDialog 
          visible={this.state.isShowAddBlockCategoryDialog}
          originInfo={this.state.blockCategoryInfo}
          onClose={()=>this.setState({isShowAddBlockCategoryDialog: false})}
          success={this.handleAddBlockCategorySuccess}
        ></AddBlockCategoryDialog>
      </Loading>
    )
  }
}