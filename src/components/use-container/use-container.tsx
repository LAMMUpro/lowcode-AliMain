import * as React from 'react';
import { createElement } from 'react';

export interface UseContainerProps {
  style?: any
  classNameList: Array<string>
  containerSlot?: any
}

const UseContainer: React.FC<UseContainerProps> = function ({
  style = {},
  classNameList = [],
  containerSlot,
  ...otherProps
}) {

  return (
    <div 
      className={classNameList.join(' ')} 
      style={style} 
      {...otherProps}
    > 
      {
        containerSlot
      }
    </div>
  );
}
UseContainer.displayName = 'UseContainer';
export default UseContainer;