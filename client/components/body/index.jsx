import React from 'react';

import { Breadcrumb } from 'antd';
import 'antd/dist/antd.css';

const Body = () => (
  <div style={{ height: 'calc(100vh - 15vh)' }}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  </div>
);
export default Body;
