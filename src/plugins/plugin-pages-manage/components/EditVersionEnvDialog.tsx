import { Form, Input, Dialog, Icon, Message, Button, Tag } from '@alifd/next';
import React, { useEffect } from 'react';
import { updateAppEnv } from 'src/api/AppEnv';
import { createAppVersion } from 'src/api/AppVersion';
import { createApplication, updateApplicationById } from 'src/api/Application';
import { saveApplication, updateApplication } from 'src/services/api';
import { AppEnvDto } from 'src/types/dto/AppEnv';
import { AppVersionDtoCreate } from 'src/types/dto/AppVersion';
import { ApplicationDtoCreate } from 'src/types/dto/Application';
import { SpaceAppEnvDto } from 'src/types/dtoExt/AppEnv';

interface PropsType {
  visible: boolean
  originInfo: SpaceAppEnvDto.updateAppEnv
  appAllEnvList: Array<AppEnvDto>
  onClose: () => void
  success: () => void
}

class EditVersionEnvDialog extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
    this.handleEnvChange = this.handleEnvChange.bind(this);
  }

  componentDidMount() {
    React.useEffect(()=>{
      console.log('111', this.props.originInfo);
    })
  }

  /** 选中/取消选中 环境标签 */
  handleEnvChange(index:number, isSelect:Boolean) {
    console.log("选中")
    const envId = this.props.appAllEnvList[index].id;
    if (isSelect) {
      this.props.originInfo.envIdList = [...this.props.originInfo.envIdList, envId];
    }else {
      this.props.originInfo.envIdList = this.props.originInfo.envIdList.filter(item=>item!=envId)
    }
  }
  
  async handleSubmit(values: AppVersionDtoCreate) {
    console.log(this.props.originInfo)
    return;
    const res = await updateAppEnv({
      envIdList: [],
      appVersionId: this.props.originInfo.appVersionId,
      version: this.props.originInfo.version,
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
          title='版本对应环境配置'
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
              >
                <div 
                  style={{display: 'flex', alignItems: 'center', height: '100%', fontSize: '16px'}}
                >{this.props.originInfo.version}</div>
              </Form.Item>
              <Form.Item
                label="环境"
              >
                <Tag.Group className="tagCenter" style={{height: '100%', display: 'flex'}}>
                  {
                    this.props.appAllEnvList.map((item, index)=>{
                      return <Tag.Selectable
                        key={item.id}
                        size="small"
                        checked={this.props.originInfo.envIdList.includes(item.id)}
                        onChange={(isSelect) => this.handleEnvChange(index, isSelect)}
                      >{item.envCh}</Tag.Selectable>
                    })
                  }
                </Tag.Group>
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

export default EditVersionEnvDialog;