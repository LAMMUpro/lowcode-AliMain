import { BrowserRouter, NavLink } from "react-router-dom";

const Header: React.FC = function () {
  return (
    <div>
      <BrowserRouter>
        <NavLink to="/lowcode">头部</NavLink>
      </BrowserRouter>
    </div>
  )
}

export default Header;
