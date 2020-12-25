import React from 'react';
import { Layout, Button } from 'antd';

import styles from './basicLayout.less';

const { Header, Sider, Content } = Layout;

const BasicLayout: React.FC = () => (
  <Layout>
    <Header className={styles.head}>Header</Header>
    <Layout>
      <Sider>Sider</Sider>
      <Content>
        <div className={styles.head}>demo</div>
        <Button type="primary">Ant D</Button>
      </Content>
    </Layout>
  </Layout>
);

export default BasicLayout;
