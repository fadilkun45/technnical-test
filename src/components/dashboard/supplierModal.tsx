import {
    Modal,
    Form,
    Input, Tabs,
    Table,
    Radio,
    Button,
    Space,
    Col,
    Checkbox
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import ImageUploader from '../ui/UploadImage';
import { contacts, type Contact } from '../../data/contact';
import { groupList, type Group } from '../../data/group';

const { TabPane } = Tabs;

type Address = {
    key: string;
    name: string;
    address: string;
};

type Props = {
    visible: boolean;
    onClose: () => void;
    onSave: (data: any) => void;
};

const SupplierModal = ({ visible, onClose, onSave }: Props) => {
    const [form] = Form.useForm();
    const [addresses, setAddresses] = useState<Address[]>([]);
    const [mainKey, setMainKey] = useState<string | null>(null);
    const [mainContactKey, setMainContactKey] = useState<string>('1');
    const [groups, setGroups] = useState<Group[]>(groupList);
    const [logo, setLogo] = useState<{ file: File | null; preview: string | null }>({
        file: null,
        preview: null
    });

    useEffect(() => {
        // Dummy initial data
        setAddresses([
            { key: '1', name: 'Head Office', address: 'Fatmawati Raya St, 123' },
            { key: '2', name: 'Branch Office', address: 'Ciawi, 99' }
        ]);
        setMainKey('1');
        form.setFieldsValue({
            name: 'PT Setroom Indonesia',
            nickname: 'Setroom'
        });
    }, [visible]);

    const handleAddAddress = () => {
        const newKey = (addresses.length + 1).toString();
        setAddresses([
            ...addresses,
            { key: newKey, name: 'New Office', address: '-' }
        ]);
    };

    const handleSave = () => {
        form.validateFields().then(values => {
            onSave({
                ...values,
                addresses,
                mainAddressKey: mainKey,
                logo
            });
            onClose();
        });
    };

    const handleToggleGroup = (key: string) => {
        setGroups(prev =>
            prev.map(group =>
                group.key === key ? { ...group, active: !group.active } : group
            )
        );
    };


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text: string) => <b>{text}</b>
        },
        {
            title: 'Address',
            dataIndex: 'address'
        },
        {
            title: 'Main',
            dataIndex: 'main',
            width: 80,
            render: (_: any, record: Address) => (
                <Radio
                    checked={mainKey === record.key}
                    onChange={() => setMainKey(record.key)}
                />
            )
        }
    ];

    const columnsContacts = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text: string) => <b>{text}</b>
        },
        {
            title: 'Job Position',
            dataIndex: 'job'
        },
        {
            title: 'Email',
            dataIndex: 'email'
        },
        {
            title: 'Phone',
            dataIndex: 'phone'
        },
        {
            title: 'Mobile',
            dataIndex: 'mobile'
        },
        {
            title: 'Main',
            dataIndex: 'main',
            width: 80,
            render: (_: any, record: Contact) => (
                <Radio
                    checked={mainContactKey === record.key}
                    onChange={() => setMainContactKey(record.key)}
                />
            )
        }
    ];


    const columnsGroups = [
        {
            title: '#',
            dataIndex: 'key',
            width: 40,
            render: (_: any, __: Group, index: number) => index + 1
        },
        {
            title: 'Group Name',
            dataIndex: 'name'
        },
        {
            title: 'Value',
            dataIndex: 'value'
        },
        {
            title: 'Active',
            dataIndex: 'active',
            width: 80,
            render: (_: any, record: Group) => (
                <Checkbox
                    checked={record.active}
                    onChange={() => handleToggleGroup(record.key)}
                />
            )
        }
    ];


    return (
        <Modal
            open={visible}
            title="New Supplier"
            onCancel={onClose}
            width={850}
            footer={[
                <Button key="cancel" onClick={onClose}>
                    Cancel
                </Button>,
                <Button key="save" type="primary" onClick={handleSave}>
                    Save
                </Button>
            ]}
        >
            <Form form={form} layout="vertical">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <ImageUploader
                        onChange={(file, preview) => setLogo({ file, preview })}
                    />
                    <Col style={{ width: "80%" }}>
                        <Form.Item label="Supplier Name" name="name" rules={[{ required: true }]}>
                            <Input placeholder="Enter supplier name" />
                        </Form.Item>
                        <Form.Item label="Nick Name" name="nickname">
                            <Input placeholder="Enter nickname" />
                        </Form.Item>
                    </Col>

                </div>

                <div style={{ flex: 1 }}>


                    <Tabs defaultActiveKey="address">
                        <TabPane tab="Address" key="address">
                            <Space direction="vertical" style={{ width: '100%' }}>
                                <Button icon={<PlusOutlined />} onClick={handleAddAddress}>
                                    Add Address
                                </Button>
                                <Table
                                    columns={columns}
                                    dataSource={addresses}
                                    pagination={false}
                                    rowKey="key"
                                    size="small"
                                />
                            </Space>
                        </TabPane>
                        <TabPane tab="Contacts" key="contacts">
                            <Button icon={<PlusOutlined />} style={{ marginBottom: "10px" }} onClick={handleAddAddress}>
                                Add Contacts
                            </Button>
                            <Table
                                columns={columnsContacts}
                                dataSource={contacts}
                                pagination={false}
                                rowKey="key"
                                size="small"
                            />
                        </TabPane>
                        <TabPane tab="Groups" key="groups">
                               <Button icon={<PlusOutlined />} style={{ marginBottom: "10px" }} onClick={handleAddAddress}>
                                Add Groups
                            </Button>
                            <Table
                                dataSource={groups}
                                columns={columnsGroups}
                                pagination={false}
                                size="small"
                                rowKey="key"
                            />
                        </TabPane>
                        <TabPane tab="Material List" key="materials">
                            <p>Coming soon...</p>
                        </TabPane>
                        <TabPane tab="Others" key="others">
                            <p>Coming soon...</p>
                        </TabPane>
                    </Tabs>
                </div>
            </Form>
        </Modal>
    );
};

export default SupplierModal;
