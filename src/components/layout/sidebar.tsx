import { Layout, Menu } from 'antd';
import {
    DashboardOutlined,
    FileTextOutlined,
    CheckCircleOutlined,
    SettingOutlined,
    TeamOutlined,
    QuestionCircleOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Link } from 'react-router';

const { Sider } = Layout;

type SidebarProps = {
    collapsed: boolean;
};

const Sidebar = ({ collapsed }: SidebarProps) => {
    return (
        <Sider collapsible collapsed={collapsed} trigger={null}>
            <div style={{ color: 'white', padding: 16, textAlign: 'center' }}>
                {collapsed ? 'A' : 'ALISA'}
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['2-2']}>
                <Menu.Item key="1" icon={<DashboardOutlined />}>
                    <Link to="/">Dashboard</Link>
                </Menu.Item>

                <Menu.SubMenu
                    key="2"
                    icon={<FileTextOutlined />}
                    title="Supplier Management"
                >
                    <Menu.Item key="2-1">
                        <Link to="/">Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="2-2">
                        <Link to="/supplier-list">Supplier List</Link>
                    </Menu.Item>
                    <Menu.Item key="2-3" icon={<CheckCircleOutlined />} style={{ paddingLeft: 40 }}>
                        <Link to="/review-approvals">Review & Approvals</Link>
                    </Menu.Item>
                    <Menu.Item key="2-4" icon={<SettingOutlined />} style={{ paddingLeft: 40 }}>
                        <Link to="/configurations">Configurations</Link>
                    </Menu.Item>
                </Menu.SubMenu>

                <Menu.Item key="3" icon={<TeamOutlined />}>
                    <Link to="/funnel-management">Funnel Management</Link>
                </Menu.Item>

                <Menu.Divider />

                <Menu.Item key="4" icon={<QuestionCircleOutlined />}>
                    <Link to="/help-support">Help & Support</Link>
                </Menu.Item>

                <Menu.Item key="5" icon={<UserOutlined />} style={{ color: 'red' }}>
                    <Link to="/profile">John Doe</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default Sidebar;
