import { Form, Input, Dialog, Icon, CascaderSelect, Button, Message } from '@alifd/next';
import React from 'react';
import { PageNode, saveNode, updateNode } from 'src/services/api';

interface PropsType {
  visible: boolean
  type: 'add'|'edit'
  applicationId: number
  originInfo: Omit<PageNode, 'id'|'depth'|'children'> & { id?: number }
  onClose: () => void
  success: () => void
  pageNodes: Array<PageNode>
}

class EditNodeInfoDialog extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }

  async handleSubmit(values: Omit<PropsType['originInfo'], 'id'>) {
    console.log(values);
    if (this.props.type == 'add') {
      const res = await saveNode({
        app_id: this.props.applicationId,
        ...values,
      });
      if (res.code == 1) {
        Message.show({
          type: "success",
          content: "新增节点成功"
        });
        this.props.onClose();
        this.props.success();
      }
    } else {
      const res = await updateNode({
        id: this.props.originInfo.id!,
        ...values,
      });
      if (res.code == 1) {
        Message.show({
          type: "success",
          content: "修改节点信息成功"
        });
        this.props.onClose();
        this.props.success();
      }
    }
  };

  render() {
    return (
      <Dialog
        wrapperClassName="hidenBottom"
        v2
        title={this.props.type=='add'?"新增节点信息":"编辑节点信息"}
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
              label="节点名称"
              required
              requiredMessage="节点名称不能为空"
            >
              <Input 
                name="name" 
                defaultValue={this.props.originInfo.name}
              />
            </Form.Item>
            <Form.Item
              label="父节点"
            >
              <CascaderSelect
                name="parent_id"
                style={{width: '100%'}}
                showSearch
                changeOnSelect
                canOnlyCheckLeaf={false}
                dataSource={this.props.pageNodes}
                defaultValue={this.props.originInfo.parent_id as unknown as string}
              />
            </Form.Item>
            <Form.Item
              label="节点描述"
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
    );
  }
}

export default EditNodeInfoDialog;


const data = [
  {
      label: 'crm',
      value: '1',
      icon: <Icon type="eye" />,
      children: [
          {
              label: 'contract',
              value: '2',
              icon: 'eye',
              children: [
                  {
                      label: 'Input',
                      value: '4',
                      children: [
                        {
                            label: 'Input',
                            value: '44',
                            children: [
                              {
                                icon: <Icon type="eye" />,
                                  label: 'Input',
                                  value: '46',
                              },
                            ]
                        },
                      ]
                  },
                  {
                      label: 'Select',
                      value: '5',
                  },
              ],
          },
          {
              label: 'Display',
              value: '3',
              icon: 'eye',
              children: [
                  {
                      label: 'Table',
                      value: '6',
                  },
              ],
          },
      ],
  },
];