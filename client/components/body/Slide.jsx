import React from 'react';

import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

const Slide = () => (
  <div>
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
    >
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="user" />
            코스 정보
          </span>
        }
      >
        <Menu.Item key="1">PRE Course</Menu.Item>
        <Menu.Item key="2">IM Course</Menu.Item>
        <Menu.Item key="3">Flex Course</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span>
            <Icon type="user" />
            유저 정보
          </span>
        }
      >
        <Menu.Item key="1">PRE Course</Menu.Item>
        <Menu.Item key="2">IM Course</Menu.Item>
        <Menu.Item key="3">Flex Course</Menu.Item>
      </SubMenu>
    </Menu>
  </div>
);

export default Slide;
