import { NotificationFilled, NotificationOutlined, NotificationTwoTone } from "@ant-design/icons";
import { Avatar, Badge, Input, Tag } from "antd";
import { BrowserRouter, NavLink } from "react-router-dom";

const Header: React.FC = function () {
  return (
    <div
      style={{
        width: '100%', 
        height: '40px',
        flexShrink: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 10px',
      }}
    >
      <div>
        <span>最近打开: </span>
        <Tag closable color="#3b5999">首页</Tag>
        <Tag closable color="#3b5999">活动列表</Tag>
        <Tag closable color="#3b5999">客户详情</Tag>
        <Tag closable color="#3b5999">用户中心</Tag>
      </div>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Input.Search placeholder="请输入关键词" size="small" style={{ width: 150, marginRight: '14px' }} />
        <Badge size="small" count={5}>
          <NotificationOutlined style={{fontSize: 20}}/>
        </Badge>
        <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle', marginLeft: '14px' }} size="default" gap={4}>
          陈永超
        </Avatar>
      </div>
    </div>
  )
}

export default Header;
