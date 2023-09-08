import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, LeftOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, RightOutlined } from "@ant-design/icons";
import { Menu, Empty } from "antd";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import type { MenuProps } from 'antd';
import { findManyPageNode } from "@/api/PageNode";
type MenuItem = Required<MenuProps>['items'][number];

const Aside: React.FC = function () {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [collapsed, setCollapsed] = useState(false);

  const history = useHistory();

  function handleMenuItemClick(e:MenuItem) {
    history.push('/lowcode' + `?nodeId=${e?.key}`);
  }

  async function updatePageNodes() {
    const res = await findManyPageNode({
      applicationId: 1,
      version: "1.0.0"
    });
    
    res.data.forEach((node:any)=> {
      processNode(node);
    })

    console.log(res.data)

    setMenuItems(res.data);

    function processNode(node:any) {
      node.key = node.id;
      node.icon = <ContainerOutlined />;
      node.label = node.describe;
      // node.type = 'group';
      if (node.children?.length) {
        node.children.forEach((node:any) => processNode(node));
      } else {
        delete node.children
      }
      delete node.version;
    }
  }

  function handleToggleCollapsed() {
    setCollapsed(!collapsed);
  }

  useEffect(()=>{
    updatePageNodes();
  }, [])

  return (
    <div 
      style={{
        position: 'relative', 
        backgroundColor: '#001529', 
        width: collapsed ? '80px' : '200px', 
        flexShrink: 0, 
        display: 'flex', 
        flexDirection: 'column'
      }}>
      <div style={{padding: '4px 0', paddingRight: '10px'}}>
        <img src="/logo.png" style={{width: '100%'}}/>
      </div>
      
      {
        menuItems?.length ? 
        <Menu
          mode="inline"
          theme="dark"
          style={{flex: 1}}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          inlineCollapsed={collapsed}
          items={menuItems}
          onClick={handleMenuItemClick}
        /> : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂无数据" style={{color: 'white'}}/>
      }
      <div 
        style={{
          position: 'absolute', 
          top: '50%',
          right: 0,
          backgroundColor: 'white',
          transform: 'translate(100%, -50%)',
          height: '100px',
          width: '9px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={handleToggleCollapsed}
      >
       {
        collapsed ? <RightOutlined /> : <LeftOutlined />
       }
      </div>
    </div>
  )
}

export default Aside;
