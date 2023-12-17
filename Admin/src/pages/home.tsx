import React from 'react';

const pageHome: React.FC = () => {
  return (
    <div>
      首页
      <micro-app 
        iframe
        name='my-app' 
        url='https://microapp.lammu.cn/microappA/'
        default="/microappA/a"
      ></micro-app>
    </div>
  )
}

export default pageHome;
