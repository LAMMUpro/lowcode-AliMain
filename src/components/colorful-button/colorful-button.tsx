import * as React from 'react';
import { createElement } from 'react';
import { Button } from '@alifd/next';
import './index.scss';

export interface ColorfulButtonProps {
  /**
   * 类型
   */
  type?: "primary" | "secondary" | "normal";
  color?: string;
  style?: object;
  content?: string;
  slotcontent: React.FC
}

const ColorfulButton: React.FC<ColorfulButtonProps> = function ColorfulButton({
  type = 'primary',
  color,
  content,
  style = {},
  slotcontent,
  ...otherProps
}) {
  const _style = style || {};
  if (color) {
    _style.backgroundColor = color;
  }
  const _otherProps = otherProps || {};
  _otherProps.style = _style;
  return (
    <div>
      <Button type={type} { ..._otherProps } >{content}</Button>
      {slotcontent}
    </div>
  );
};

ColorfulButton.displayName = 'ColorfulButton';
export default ColorfulButton;


