import { Form, Input, Dialog, Select, Message, Button } from '@alifd/next';
import React, { useEffect } from 'react';
import { createAppVersion } from 'src/api/AppVersion';
import { AppVersionDto, AppVersionDtoCreate } from 'src/types/dto/AppVersion';
import { SpaceAppVersionDto } from 'src/types/dtoExt/AppVersion';

interface PropsType {
  visible: boolean
  originInfo: SpaceAppVersionDto.create
  /** 应用版本 */
  appVersionList: Array<AppVersionDto>
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

  async handleSubmit(values: SpaceAppVersionDto.create, isNotPass: boolean) {
    if (isNotPass) return;
    /** 版本号重复校验 */
    if ( this.props.appVersionList.find(item=>item.version == values.version)) return Message.warning("版本号不能重复");
    /** 版本号格式校验 */
    if ( !/^\d{1,2}\.\d{1,2}\.\d{1,2}$/.test(values.version||'') ) return Message.warning("版本号格式不对");
    
    this.setState({
      loading: true
    })
    
    setTimeout(async () => {
      const res = await createAppVersion({
        applicationId: this.props.originInfo.applicationId,
        extendVersionId: values.extendVersionId,
        version: values.version
      });
      if (res.code == 1) {
        Message.show({
          type: "success",
          content: "新增版本成功"
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
                label="基于分支"
                required
                requiredMessage="版本号不能为空"
              >
                <Select 
                  name="extendVersionId" 
                  placeholder="请选择分支"
                  defaultValue={this.props.originInfo.extendVersionId}
                  style={{ width: '100%' }}
                >
                  {
                    this.props.appVersionList.map(item=>(
                      <Select.Option value={item.id}>{item.version}</Select.Option>
                    ))
                  }
                </Select>
              </Form.Item>
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