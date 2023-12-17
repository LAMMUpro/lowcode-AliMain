import { Select as OriginalSelect } from 'antd5';
import { withDivWrap } from '../../utils/hoc';

const Select = withDivWrap(OriginalSelect);

export default Select;


/**
 * class写法
 */
// import { Select as OriginalSelect } from 'antd5';
// import * as React from 'react';


// class Select extends React.Component<any, any> {
//   render() {
//     return <OriginalSelect {...this.props}></OriginalSelect>
//   }
// }

// export default Select;