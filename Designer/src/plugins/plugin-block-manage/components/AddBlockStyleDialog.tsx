import { Form, Input, Dialog, NumberPicker, Message, Button } from '@alifd/next';
import React from 'react';
import { createAppEnv } from 'src/api/AppEnv';
import { createBlockStyle } from 'src/api/BlockStyle';
import { BlockStyleDtoCreate } from 'src/types/dto/BlockStyle';

interface PropsType {
  visible: boolean
  originInfo: BlockStyleDtoCreate
  onClose: () => void
  success: () => void
}

class AddVersionDialog extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      loading: false
    }
  }

  state: {
    loading: boolean
  }

  async handleSubmit(values: BlockStyleDtoCreate, isNotPass: boolean) {
    if (isNotPass) return;

    this.setState({
      loading: true
    })
    
    setTimeout(async () => {
      const res = await createBlockStyle({
        name: values.name,
        priority: values.priority
      });
      if (res.code == 1) {
        Message.show({
          type: "success",
          content: "新增主题成功"
        });
        this.props.onClose();
        this.props.success();
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
          title='新增区块主题'
          width='400px'
          visible={this.props.visible}
          onClose={this.props.onClose}
        >
          <div style={{width: '400px'}}>
            <Form 
              style={{ width: '90%' }} 
              {...{labelCol: { fixedSpan: 6 }, wrapperCol: { span: 18 }}}
            >
              <Form.Item
                label="主题名"
                required
                requiredMessage="主题名不能为空"
              >
                <Input 
                  name="name" 
                />
              </Form.Item>
              <Form.Item
                label="排序"
                required
                requiredMessage="排序不能为空"
              >
                <NumberPicker name="priority" defaultValue={this.props.originInfo.priority}  />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 7 }}>
                <Form.Submit
                  type="primary"
                  validate
                  onClick={this.handleSubmit.bind(this)}
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
        </Dialog>
      )
  }
}

export default AddVersionDialog;