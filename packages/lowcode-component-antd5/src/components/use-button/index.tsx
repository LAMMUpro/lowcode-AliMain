import * as React from 'react';
import { Button } from '@alifd/next';
import './index.scss';

export interface UseButtonProps {
  /**
   * 类型
   */
  type?: "primary" | "secondary" | "normal";
  color?: string;
  style?: object;
  content?: string;
  slotcontent: React.FC
}

interface State {

}

class UseButton extends React.Component<UseButtonProps, State> {
  render() {
    return (
      <div>
        <Button { ...this.props } type={this.props.type}>{this.props.content}</Button>
        <>{this.props.slotcontent}</>
      </div>
    );
  }
}

export default UseButton;


