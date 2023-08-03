/**
 * 保存为区块
 */
import { IPublicTypeComponentAction } from "@alilc/lowcode-types";
import { Icon, Dialog, Form, Input, NumberPicker, Button, Message } from '@alifd/next';
import { saveBlockInfo } from 'src/services/api';

/**
 * 保存区块弹窗，收集BlockInfoType其它信息
 */
const showAddBlockDialog = (schema: any) => {
  /** 表单数据 */
  const formInfo:{[key: string]: any} = {};
  /** 提交表单 */
  async function handleSubmit() {
    if (!formInfo.blockName) {
      Message.warning("请输入区块英文名");
      return Promise.reject();
    }
    if (!formInfo.blockNameCh) {
      Message.warning("请输入区块中文名");
      return Promise.reject();
    }
    const res = await saveBlockInfo({...formInfo, schema} as any);
    if (!res?.code) {
      Message.error("保存失败！");
      return Promise.reject();
    }
  }
  /** 数据改变 */
  function valueChange(key: string, value: string) {
    formInfo[key] = '' + value;
  }

  Dialog.show({
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
            name="blockName"
            label="区块英文名"
            required
            requiredMessage="请输入区块英文名"
          >
            <Input onChange={(v)=>valueChange('blockName', v)} placeholder="请输入组件英文名"/>
          </Form.Item>
          <Form.Item
            name="blockNameCh"
            label="区块中文名"
            required
            requiredMessage="请输入区块中文名"
          >
            <Input onChange={(v)=>valueChange('blockNameCh', v)} placeholder="请输入组件中文名"/>
          </Form.Item>
          <Form.Item
            name="icon"
            label="Icon名"
            requiredMessage="Please input your email!"
          >
            <Input onChange={(v)=>valueChange('icon', v)} placeholder="请输入@alifd/next的Icon名" />
          </Form.Item>
          <Form.Item
            name="category"
            label="所属分类"
          >
            <Input onChange={(v)=>valueChange('category', v)} placeholder="请输入所属分类" />
          </Form.Item>
          <Form.Item
            name="priority"
            label="分类优先级"
            defaultValue={10}
          >
            <NumberPicker onChange={(v)=>valueChange('priority', v)} placeholder="请输入分类优先级" style={{width: '100%'}}/>
          </Form.Item>
          <Form.Item
            name="keywords"
            label="关键词"
          >
            <Input onChange={(v)=>valueChange('keywords', v)} placeholder="请输入关键词" />
          </Form.Item>
        </Form>
      </div>
    ),
    onOk: () => {
      return handleSubmit();
    }
  });
};

const Action: IPublicTypeComponentAction = {
  name: 'saveAsBlock',
  content: {
    icon: <Icon type="upload" size={14}/>,
    title: '保存为区块',
    action(node) {
      showAddBlockDialog(node.schema);
      // await saveBlockInfo()
      console.log(node.schema);
    }
  },
  important: true,
  condition: true,
}

export default Action;
