import { BrowserRouter, NavLink } from "react-router-dom";

const Aside: React.FC = function () {
  return (
    <div
      style={{width: '160px', backgroundColor: 'lightblue'}}
    >侧边栏
      <div></div>
      <BrowserRouter>
        <NavLink to="/lowcode?nodeId=1">跳转首页</NavLink>
      </BrowserRouter>
    </div>
  )
}

export default Aside;
