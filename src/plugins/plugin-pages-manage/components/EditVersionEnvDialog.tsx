import { Form, Input, Dialog, Icon, Message, Button, Tag } from '@alifd/next';
import React from 'react';
import { updateAppEnv } from 'src/api/AppEnv';
import { AppEnvDto } from 'src/types/dto/AppEnv';
import { SpaceAppEnvDto } from 'src/types/dtoExt/AppEnv';

interface PropsType {
  visible: boolean
  originInfo: SpaceAppEnvDto.updateAppEnv
  appAllEnvList: Array<AppEnvDto>
  versionIsPass: Boolean
  onClose: () => void
  success: () => void
}
interface StateType {
  info: SpaceAppEnvDto.updateAppEnv
}

class EditVersionEnvDialog extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props);

    this.handleEnvChange = this.handleEnvChange.bind(this);
  }

  state: StateType = {
    info: {
      envIdList: [],
      appVersionId: 0,
      version: ''
    }
  };

  componentDidMount() {

  }

  componentDidUpdate(preProps: PropsType, preState: StateType) {
    if (!preProps.visible&&this.props.visible) {
      this.setState({
        info: JSON.parse(JSON.stringify(preProps.originInfo))
      })
    }
  }

  componentWillUnmount() {

  }

  /** 选中/取消选中 环境标签 */
  handleEnvChange(index:number, isSelect:Boolean) {
    const envId = this.props.appAllEnvList[index].id;
    if (isSelect) {
      const info = {
        ...this.state.info,
        envIdList: [...this.state.info.envIdList, envId]
      }
      this.setState({
        info
      })
    }else {
      const info = {
        ...this.state.info,
        envIdList: this.state.info.envIdList.filter(item=>item!=envId)
      }
      this.setState({
        info
      })
    }
  }
  
  async handleSubmit(values: any, isNotPass: boolean) {
    if (isNotPass) return;
    const res = await updateAppEnv(this.state.info);
    if (res.code == 1) {
      Message.show({
        type: "success",
        content: "绑定环境成功"
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
                label="版本号:"
              >
                <div 
                  style={{display: 'flex', alignItems: 'center', height: '100%', fontSize: '16px'}}
                >{this.state.info.version}</div>
              </Form.Item>
              <Form.Item
                label="环境:"
              >
                <Tag.Group className="tagCenter" style={{height: '100%', display: 'flex', flexWrap: 'wrap'}}>
                  {
                    this.props.appAllEnvList.map((item, index)=>{
                      return <Tag.Selectable
                        key={item.id}
                        size="small"
                        disabled={item.env==='master'&&!this.props.versionIsPass}
                        checked={this.state.info.envIdList.includes(item.id)}
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