import { Icon, Dialog, Select, Form, Input, NumberPicker, Button, Message, Field } from '@alifd/next';
import html2canvas from 'html2canvas';
import React from 'react';
import { createBlock } from 'src/api/Block';
import { findAllBlockCategory } from 'src/api/BlockCategory';
import { findAllBlockStyle } from 'src/api/BlockStyle';
import { BlockDtoCreate } from 'src/types/dto/Block';
import { BlockCategoryDto } from 'src/types/dto/BlockCategory';
import { BlockStyleDto } from 'src/types/dto/BlockStyle';
import AddBlockCategoryDialog from "src/plugins/plugin-block-manage/components/AddBlockCategoryDialog.tsx";
import { BlockCategoryDtoCreate } from 'src/types/dto/BlockCategory';
import { getDefaultBlockCategory } from 'src/plugins/plugin-block-manage/BlockManagePane';

interface PropsType {
  visible: boolean
  originInfo: BlockDtoCreate
  blockDom?: HTMLElement,
  onClose: () => void
  success: (styleId:number) => void
}

class AddVersionDialog extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      loading: false,
      categoryList: [],
      styleList: [],
      imgBase64: '',
      field: new Field(this),
      blockCategoryInfo: getDefaultBlockCategory(),
      isShowAddBlockCategoryDialog: false,
    }
    this.updateCategoryList = this.updateCategoryList.bind(this);
    this.handleAddBlockCategory = this.handleAddBlockCategory.bind(this);
    this.handleAddBlockCategorySuccess = this.handleAddBlockCategorySuccess.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state: {
    loading: boolean
    categoryList: Array<BlockCategoryDto>
    styleList: Array<BlockStyleDto>
    imgBase64: string
    field: any
    isShowAddBlockCategoryDialog: boolean
    blockCategoryInfo: BlockCategoryDtoCreate
  }

  async componentDidMount() {
    const res = await findAllBlockStyle();
    this.setState({
      styleList: res.data
    })
  }

  async componentDidUpdate(preProps: Readonly<PropsType>) {
    (!preProps.visible && this.props.visible) 
    && this.props.blockDom 
    && html2canvas(this.props.blockDom!).then((res)=>{
      /** base64 */
      const data = res.toDataURL();
      this.setState({
        imgBase64: data
      })
    });

    if (!preProps.visible && this.props.visible) {
      this.setState({ categoryList: [] });
      if (this.props.originInfo.styleId && this.state.styleList.find(item => item.id == this.props.originInfo.styleId)) {
        this.setState({
          blockCategoryInfo: getDefaultBlockCategory(this.props.originInfo.styleId)
        })
        this.updateCategoryList(this.props.originInfo.styleId);
      }
    }
  }

  /** 添加分类 */
  handleAddBlockCategory() {
    this.setState({
      isShowAddBlockCategoryDialog: true
    })
  }

  /** 添加分类成功 */
  handleAddBlockCategorySuccess() {
    this.updateCategoryList(this.state.blockCategoryInfo.styleId);
  }

  async updateCategoryList(styleId: number) {
    /** 清空选中的categoryId */
    this.state.field.setValue('categoryId', '');
    this.setState({
      blockCategoryInfo: getDefaultBlockCategory(styleId)
    })
    const res = await findAllBlockCategory({styleId});
    this.setState({
      categoryList: res.data
    })
  }

  async handleSubmit(values: BlockDtoCreate, isNotPass: boolean) {
    if (isNotPass) return;

    this.setState({
      loading: true
    })
    
    setTimeout(async () => {
      const res = await createBlock({
        styleId: values.styleId,
        name: values.name,
        nameCh: values.nameCh,
        schema: this.props.originInfo.schema,
        screenshot: this.state.imgBase64,
        categoryId: values.categoryId,
        categoryName: '',
        priority: values.priority
      });
      if (res.code == 1) {
        Message.show({
          type: "success",
          content: "区块保存成功"
        });
        this.props.onClose();
        this.props.success(values.styleId);
      }
      this.setState({
        loading: false
      })
    });
  };

  render(): React.ReactNode {
      return (
        <Dialog
          wrapperClassName="hidenBottom"
          v2
          title='保存为区块'
          width='400px'
          visible={this.props.visible}
          onClose={this.props.onClose}
        >
          <div style={{width: '400px'}}>
            <Form
              style={{ width: "90%" }} 
              {...{labelCol: { fixedSpan: 6 }, wrapperCol: { span: 18 }}}
              colon
              field={this.state.field}
            >
              <div style={{width: '110%', marginTop: '-30px'}}>
                <p style={{textAlign: 'center'}}>预览图</p>
                <img
                  style={{width: '100%', objectFit: 'scale-down', border: '1px solid #c5c5c5'}}
                  src={this.state.imgBase64}
                />
              </div>
              <Form.Item
                label="区块英文名"
                required
                requiredMessage="请输入区块英文名"
              >
                <Input name="name" placeholder="请输入区块英文名"/>
              </Form.Item>
              <Form.Item
                label="区块中文名"
                required
                requiredMessage="请输入区块中文名"
              >
                <Input name="nameCh" placeholder="请输入组件中文名"/>
              </Form.Item>
              <Form.Item
                label="所属主题"
                required
              >
                <Select 
                  name="styleId" 
                  placeholder="请选择主题"
                  style={{ width: '100%' }}
                  defaultValue={this.props.originInfo.styleId}
                  onChange={this.updateCategoryList}
                >
                  {
                    this.state.styleList?.map(item=>(
                      <Select.Option value={item.id}>{item.name}</Select.Option>
                    ))
                  }
                </Select>
              </Form.Item>
              <Form.Item
                label="所属分类"
                required
              >
                <Select 
                  name="categoryId" 
                  placeholder="请选择分类"
                  style={{ width: '50%' }}
                >
                  {
                    this.state.categoryList.map(item=>(
                      <Select.Option value={item.id}>{item.name}</Select.Option>
                    ))
                  }
                </Select>
                <Button
                  onClick={this.handleAddBlockCategory} 
                  style={{marginLeft: '8px'}}
                  disabled={!this.state.blockCategoryInfo.styleId}
                >
                  添加分类
                </Button>
              </Form.Item>
              <Form.Item
                label="优先级"
                required
              >
                <NumberPicker name="priority" defaultValue={10} placeholder="请输入分类优先级" style={{width: '100%'}}/>
              </Form.Item>
              <Form.Item
                label="关键词"
              >
                <Input name="keywords" placeholder="请输入关键词" />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 7 }}>
                <Form.Submit
                  type="primary"
                  validate
                  onClick={this.handleSubmit}
                  style={{ marginRight: 8 }}
                  loading={this.state.loading}
                >
                  确定
                </Form.Submit>
                <Form.Reset>清空</Form.Reset>
                <Button onClick={this.props.onClose} style={{marginLeft: '8px'}}>取消</Button>
              </Form.Item>
            </Form>
          </div>
          <AddBlockCategoryDialog 
            visible={this.state.isShowAddBlockCategoryDialog}
            originInfo={this.state.blockCategoryInfo}
            onClose={()=>this.setState({isShowAddBlockCategoryDialog: false})}
            success={this.handleAddBlockCategorySuccess}
          ></AddBlockCategoryDialog>
        </Dialog>
      )
  }
}

export default AddVersionDialog;