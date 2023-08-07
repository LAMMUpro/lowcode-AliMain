import { BrowserRouter, NavLink } from "react-router-dom";

const Header: React.FC = function () {
  return (
    <div
      style={{
        width: '100%', 
        height: '32px',
        flexShrink: 0,
        backgroundColor: 'rgb(181 155 213)',
      }}
    >
      <BrowserRouter>
        <NavLink to="/lowcode">头部</NavLink>
      </BrowserRouter>
    </div>
  )
}

export default Header;
