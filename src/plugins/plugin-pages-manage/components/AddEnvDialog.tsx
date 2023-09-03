import { Form, Input, Dialog, Select, Message, Button } from '@alifd/next';
import React from 'react';
import { createAppEnv } from 'src/api/AppEnv';
import { AppEnvDtoCreate } from 'src/types/dto/AppEnv';

interface PropsType {
  visible: boolean
  originInfo: AppEnvDtoCreate
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

  async handleSubmit(values: AppEnvDtoCreate, isNotPass: boolean) {
    if (isNotPass) return;

    this.setState({
      loading: true
    })
    
    setTimeout(async () => {
      const res = await createAppEnv({
        applicationId: this.props.originInfo.applicationId,
        env: values.env,
        envCh: values.envCh
      });
      if (res.code == 1) {
        Message.show({
          type: "success",
          content: "新增环境成功"
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
          title='新增环境'
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
                label="环境名"
                required
                requiredMessage="版本号不能为空"
              >
                <Input 
                  name="env" 
                />
              </Form.Item>
              <Form.Item
                label="环境中文名"
                required
                requiredMessage="版本号不能为空"
              >
                <Input 
                  name="envCh" 
                />
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