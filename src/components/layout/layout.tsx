import { Layout } from 'antd';
import Sidebar from './sidebar';
import HeaderBar from './headerBar';
import { useState } from 'react';
import type {ReactNode} from 'react'

const { Content } = Layout;

type Props = {
  children: ReactNode;
};

const AppLayout = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} />
      <Layout>
        <HeaderBar collapsed={collapsed} onToggle={toggleSidebar} />
        <Content style={{ margin: 16 }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
