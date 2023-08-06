import { Form, Input, Dialog, Icon, Message, Button } from '@alifd/next';
import React, { useEffect } from 'react';
import { saveApplication, updateApplication } from 'src/services/api';

interface PropsType {
  visible: boolean
  type: 'add'|'edit'
  originInfo: {
    id?: number
    name: string
    _describe: string
  }
  onClose: () => void
  success: () => void
}

class AddEditApplicationDialog extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }

  // componentDidUpdate() {
  //   if (this.props.visible) {
  //     if (this.props.type == 'add') {
  //     }
  //   }
  // }  

  async handleSubmit(values: PropsType['originInfo']) {
    if (this.props.type == 'add') {
      const res = await saveApplication(values);
      if (res.code == 1) {
        Message.show({
          type: "success",
          content: "新增应用成功"
        });
        this.props.onClose();
        this.props.success();
      }
    } else {
      const res = await updateApplication({
        id: this.props.originInfo.id,
        ...values,
      });
      if (res.code == 1) {
        Message.show({
          type: "success",
          content: "修改应用信息成功"
        });
        this.props.onClose();
        this.props.success();
      }
    }
  };

  render(): React.ReactNode {
      return (
        <Dialog
          wrapperClassName="hidenBottom"
          v2
          title={this.props.type=='add'?"新增应用":"编辑应用信息"}
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
                label="应用名"
                required
                requiredMessage="应用名不能为空"
              >
                <Input 
                  name="name" 
                  defaultValue={this.props.originInfo.name}
                />
              </Form.Item>
              <Form.Item
                label="应用描述"
              >
                <Input 
                  name="_describe" 
                  defaultValue={this.props.originInfo._describe}
                />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 7 }}>
                <Form.Submit
                  type="primary"
                  validate
                  onClick={this.handleSubmit.bind(this)}
                  style={{ marginRight: 8 }}
                >
                  确定修改
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

export default AddEditApplicationDialog;