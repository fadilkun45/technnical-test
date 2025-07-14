import DashboardCard from '../../components/dashboard/dashboard';
import { Row, Col, Button, Table, Tag } from 'antd';
import {
    UserAddOutlined,
    TeamOutlined,
    StopOutlined,
    DollarOutlined
} from '@ant-design/icons';
import ToolbarActions from '../../components/ui/ToolbarActions';
import { suppliers, type Supplier } from '../../data/suppliers';
import { useState } from 'react';
import SupplierModal from '../../components/dashboard/supplierModal';

const Dashboard = () => {

    const columns = [
        {
            title: '#',
            dataIndex: 'key',
            width: 50
        },
        {
            title: 'Name',
            dataIndex: 'name',
            render: (_: any, record: Supplier) => (
                <div>
                    <div>{record.name}</div>
                    <div style={{ fontSize: 12, color: '#999' }}>
                        {record.code} <a>{record.id}</a> ({record.alias})
                    </div>
                </div>
            )
        },
        {
            title: 'Address',
            dataIndex: 'address'
        },
        {
            title: 'Contact',
            dataIndex: 'contact'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (status: string) => (
                <Tag color={
                    status === 'Active' ? 'green' :
                        status === 'In Progress' ? 'orange' : 'red'
                }>
                    {status}
                </Tag>
            )
        }
    ];

    const [showModal, setShowModal] = useState<boolean>(false)

    const handleSaveSupplier = (data: any) => {
        console.log('Saved Supplier:', data);
        setShowModal(false);
    };


    return (
        <Col>
            <SupplierModal
                visible={showModal}
                onClose={() => setShowModal(false)}
                onSave={handleSaveSupplier}
            />

            <h2 style={{ marginBottom: 16 }}>Dashboard</h2>

            <Row gutter={[16, 16]}>
                <Col span={6}>
                    <DashboardCard
                        title="Total Supplier"
                        value="1,869"
                        subtitle="+5% vs Last Year"
                        subtitleColor="green"
                        icon={<TeamOutlined />}
                    />
                </Col>
                <Col span={6}>
                    <DashboardCard
                        title="New Supplier"
                        value="27"
                        subtitle="+1% vs Last Year"
                        subtitleColor="green"
                        icon={<UserAddOutlined />}
                    />
                </Col>
                <Col span={6}>
                    <DashboardCard
                        title="Avg Cost per Supplier"
                        value="Rp 320,3 Mn"
                        subtitle="-1% vs Last Year"
                        subtitleColor="red"
                        icon={<DollarOutlined />}
                    />
                </Col>
                <Col span={6}>
                    <DashboardCard
                        title="Blocked Supplier"
                        value="31"
                        subtitle="+4% vs Last Year"
                        subtitleColor="green"
                        icon={<StopOutlined />}
                    />
                </Col>
            </Row>
            <Col>
                <ToolbarActions
                    searchPlaceholder="Search Customer"
                    filterOptions={[
                        { label: 'Active', value: 'Active' },
                        { label: 'In Progress', value: 'In Progress' },
                        { label: 'Blocked', value: 'Blocked' }
                    ]}
                    defaultFilterValue="Active"
                    onSearch={(keyword) => console.log('Search:', keyword)}
                    onFilterChange={(status) => console.log('Filter:', status)}
                    onExport={() => console.log('Export clicked')}
                    onToggleView={(view) => console.log('View mode:', view)}
                    extraActions={
                        <Button type="primary" icon={<UserAddOutlined />} onClick={() => setShowModal(true)}>
                            New Supplier
                        </Button>}
                />
            </Col>
            <Col>
                <Table
                    columns={columns}
                    dataSource={suppliers}
                    rowKey="key"
                    pagination={false}
                />
            </Col>
        </Col>
    );
};

export default Dashboard;
