import * as React from 'react';

export interface UseContainerProps {
  style?: any
  classNameList?: Array<string>
  containerSlot?: any
}

interface State {

}

class UseContainer extends React.Component<UseContainerProps, State> {
  render() {
    return <div 
      {...this.props}
      className={this.props.classNameList?.join(' ')} 
      style={this.props.style} 
    > 
      {
        this.props.containerSlot
      }
    </div>
  }
}

export default UseContainer;

