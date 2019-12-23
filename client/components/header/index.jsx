import React from 'react';

import { Menu } from 'antd';
import 'antd/dist/antd.css';

const Header = () => (
  <div>
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="1">Home</Menu.Item>
    </Menu>
  </div>
);
export default Header;
