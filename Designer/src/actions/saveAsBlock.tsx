/**
 * 保存为区块
 */
import { IPublicTypeComponentAction } from "@alilc/lowcode-types";
import { Icon, Dialog, Select, Form, Input, NumberPicker, Button, Message } from '@alifd/next';
import { saveBlockInfo } from 'src/services/api';
import { BlockDtoCreate } from "src/types/dto/Block";
import { config, event } from "@alilc/lowcode-engine";
import { BlockCategoryDto } from "src/types/dto/BlockCategory";

/**
 * 保存区块弹窗，收集BlockInfoType其它信息
 */
const showAddBlockDialog = (schema: any, dom: HTMLElement) => {

  event.emit("saveAsBlock", JSON.stringify(schema), dom);
  return;

  // const categoryList = JSON.parse(config.get("blockCategoryList")||'[]');
  // /** 表单数据 */
  // const formInfo:{[key: string]: any} = {};
  // /** 提交表单 */
  // async function handleSubmit(values: BlockDtoCreate, isNotPass: boolean) {
  //   if (isNotPass) return;
    
  //   const res = await saveBlockInfo({...formInfo, schema} as any);
  //   if (!res?.code) {
  //     Message.error("保存失败！");
  //     return Promise.reject();
  //   }
  // }

  const dialog = Dialog.show({
    wrapperClassName: "hidenBottom",
    v2: true,
    title: '保存为区块',
    width: '400px',
    content: (
      <div style={{width: '400px'}}>
        <Form
          value={formInfo}
          style={{ width: "90%" }} {...{labelCol: { fixedSpan: 6 }, wrapperCol: { span: 18 }}}
          colon
        >
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
            label="所属分类"
          >
            <Select 
              name="categoryId" 
              placeholder="请选择分类"
              style={{ width: '100%' }}
            >
              {
                categoryList.map((item: BlockCategoryDto)=>(
                  <Select.Option value={item.id}>{item.name}</Select.Option>
                ))
              }
            </Select>
          </Form.Item>
          <Form.Item
            label="分类优先级"
            defaultValue={10}
          >
            <NumberPicker name="priority" placeholder="请输入分类优先级" style={{width: '100%'}}/>
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
              onClick={handleSubmit}
              style={{ marginRight: 8 }}
              // loading={this.state.loading}
            >
              确定
            </Form.Submit>
            <Form.Reset>清空</Form.Reset>
            <Button onClick={()=>dialog.hide()} style={{marginLeft: '8px'}}>取消</Button>
          </Form.Item>
        </Form>
      </div>
    )
  });
};

const Action: IPublicTypeComponentAction = {
  name: 'saveAsBlock',
  content: {
    icon: <Icon type="upload" size={14}/>,
    title: '保存为区块',
    action(node) {
      // console.log(node.getDOMNode());
      showAddBlockDialog(node.schema, node.getDOMNode());
      // await saveBlockInfo()
    }
  },
  important: true,
  condition: true,
}

export default Action;
