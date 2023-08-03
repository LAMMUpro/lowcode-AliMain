/**
 * 保存为区块
 */
import { Icon } from '@alifd/next';
import { IPublicTypeComponentAction } from "@alilc/lowcode-types";

const Action: IPublicTypeComponentAction = {
  name: 'saveAsBlock',
  content: {
    icon: <Icon type="upload" size={14}/>,
    title: '保存为区块',
    action(node) {
      console.log(node.schema);
    }
  },
  important: true,
  condition: true,
}

export default Action;