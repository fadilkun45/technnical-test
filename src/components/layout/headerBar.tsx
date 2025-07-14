import { Layout, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const { Header } = Layout;

type HeaderBarProps = {
  collapsed: boolean;
  onToggle: () => void;
};

const HeaderBar = ({ collapsed, onToggle }: HeaderBarProps) => {
  return (
    <Header
      style={{
        background: '#fff',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={onToggle} />
      <h3 style={{ margin: '0 0 0 16px' }}>Supplier Management</h3>
    </Header>
  );
};

export default HeaderBar;
