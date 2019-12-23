import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Layout } from 'antd';
import 'antd/dist/antd.css';

import Header from '@Components/Header';
import Body from '@Components/body';
import Footer from '@Components/Footer';

import Slide from '@Components/body/Slide';

const [HeaderLayout, SiderLayout, BodyLayout, FooterLayout] = [
  Layout.Header,
  Layout.Sider,
  Layout.Content,
  Layout.Footer
];

const App = () => (
  <div className="App">
    <Layout>
      <HeaderLayout className="header">
        <Switch>
          <Route path="/" component={Header} />
        </Switch>
      </HeaderLayout>

      <Layout>
        <SiderLayout width={200} style={{ background: '#fff' }}>
          <Slide />
        </SiderLayout>
        <Layout>
          <BodyLayout style={{ padding: '0 24px 24px' }}>
            <Switch>
              <Route path="/" component={Body} />
            </Switch>
          </BodyLayout>
        </Layout>
      </Layout>

      <FooterLayout style={{ textAlign: 'center' }}>
        <Switch>
          <Route path="/" component={Footer} />
        </Switch>
      </FooterLayout>
    </Layout>
  </div>
);

export default App;
