import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined } from "@ant-design/icons";
import { Button, Menu } from "antd";
import { useState } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as unknown as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),

  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),

    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];

const Aside: React.FC = function () {
  function handleMenuItemClick(e:MenuItem) {
    console.log(e)
  }
  return (
    <div style={{width: '200px', display: 'flex', flexDirection: 'column'}}>
      <div style={{backgroundColor: '#001529', padding: '4px 0', paddingRight: '10px'}}>
        <img src="/logo.png" style={{width: '100%'}}/>
      </div>
      <Menu
        mode="inline"
        theme="dark"
        style={{flex: 1}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        items={items}
        onClick={handleMenuItemClick}
      />
    </div>
    
    // <div
    //   style={{width: '160px', backgroundColor: 'lightblue'}}
    // >
    //   {/* 侧边栏
    //   <div></div>
    //   <BrowserRouter>
    //     <NavLink to="/lowcode?nodeId=1">跳转首页</NavLink>
    //   </BrowserRouter> */}
    // </div>
  )
}

export default Aside;
