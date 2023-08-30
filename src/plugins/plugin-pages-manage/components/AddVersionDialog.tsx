import { Form, Input, Dialog, Icon, Message, Button } from '@alifd/next';
import React, { useEffect } from 'react';
import { createAppVersion } from 'src/api/AppVersion';
import { createApplication, updateApplicationById } from 'src/api/Application';
import { saveApplication, updateApplication } from 'src/services/api';
import { AppVersionDtoCreate } from 'src/types/dto/AppVersion';
import { ApplicationDtoCreate } from 'src/types/dto/Application';

interface PropsType {
  visible: boolean
  originInfo: AppVersionDtoCreate
  onClose: () => void
  success: () => void
}

class AddVersionDialog extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }

  async handleSubmit(values: AppVersionDtoCreate) {
    const res = await createAppVersion({
      applicationId: this.props.originInfo.applicationId,
      version: values.version
    });
    // const res = await saveApplication(values);
    if (res.code == 1) {
      Message.show({
        type: "success",
        content: "新增版本成功"
      });
      this.props.onClose();
      this.props.success();
    }
  };

  render(): React.ReactNode {
      return (
        <Dialog
          wrapperClassName="hidenBottom"
          v2
          title='新增版本'
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
                label="版本号"
                required
                requiredMessage="版本号不能为空"
              >
                <Input 
                  name="version" 
                  defaultValue={this.props.originInfo.version}
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

export default AddVersionDialog;