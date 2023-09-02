import { Form, Input, Dialog, Icon, Message, Button } from '@alifd/next';
import React, { useEffect } from 'react';
import { createApplication, updateApplicationById } from 'src/api/Application';
import { ApplicationDtoCreate } from 'src/types/dto/Application';

interface PropsType {
  visible: boolean
  type: 'add'|'edit'
  originInfo: {
    id?: number
    name: string
    describe: string
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

  async handleSubmit(values: ApplicationDtoCreate, isNotPass: boolean) {
    if (isNotPass) return;
    if (this.props.type == 'add') {
      const res = await createApplication(values);
      // const res = await saveApplication(values);
      if (res.code == 1) {
        Message.show({
          type: "success",
          content: "新增应用成功"
        });
        this.props.onClose();
        this.props.success();
      }
    } else {
      const res = await updateApplicationById({
        id: this.props.originInfo.id!,
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
                  name="describe" 
                  defaultValue={this.props.originInfo.describe}
                />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 7 }}>
                <Form.Submit
                  type="primary"
                  validate
                  onClick={this.handleSubmit.bind(this)}
                  style={{ marginRight: 8 }}
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

export default AddEditApplicationDialog;