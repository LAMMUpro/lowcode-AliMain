import { Form, Input, Dialog, Icon, CascaderSelect, Button } from '@alifd/next';
import React from 'react';

interface PropsType {
  visible: boolean
  originInfo: {
    id: string
    label: string
    parentId: string
    parentName: string
    describe: string
  }
  onClose: () => void
}

class EditNodeInfoDialog extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }

  handleSubmit(values: PropsType['originInfo']) {
    console.log(values);
  };

  render() {
    return (
      <Dialog
        v2
        title="编辑节点信息"
        width='400px'
        visible={this.props.visible}
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
                name="label" 
                defaultValue={this.props.originInfo.label}
              />
            </Form.Item>
            <Form.Item
              label="父节点"
            >
              <CascaderSelect
                name="parentId" 
                showSearch
                canOnlyCheckLeaf={false}
                dataSource={data}
                defaultValue={this.props.originInfo.parentId}
              />
            </Form.Item>
            <Form.Item
              label="节点描述"
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