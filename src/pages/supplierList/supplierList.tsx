import {
    Row,
    Col,
    Tabs,
    Tag,
    Button,
    Table, Rate,
    Typography,
    Input,
    Checkbox
} from 'antd';
import {
    CheckCircleOutlined,
    StopOutlined
} from '@ant-design/icons';

const { TabPane } = Tabs;
const { Title, Text } = Typography;

// Dummy Data
const materials = [
  { key: '1', group: 'IT - Device', id: 'Computer / Notebook', active: true },
  { key: '2', group: 'IT - Device', id: 'Computer / PC', active: true },
];

const invoices = [
  { key: '1', invoice: 'INV1234', project: 'Project ABC', amount: 123000, aging: 34 },
];

const ratings = [
  {
    key: '1',
    title: 'Price',
    value: 4,
    notes: 'Notes',
    date: 'Feb 14, 2025',
    by: 'User Legal',
  },
  {
    key: '2',
    title: 'Delivery Time',
    value: 3,
    notes: 'Notes',
    date: 'Feb 12, 2025',
    by: 'User Legal',
  },
];

// Stage Component
const StepperStage = () => {
  return (
    <div style={{ border: '1px solid #ddd', padding: 16, borderRadius: 8 }}>
      <Title level={5}>Stage: Supplier Creation</Title>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <Text type="secondary">Elapsed</Text>
        <Text>SLA: 72 hour(s)</Text>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {['Draft', 'In Review', 'Assessment', 'Active'].map((label, index) => (
          <div key={label} style={{ textAlign: 'center', flex: 1 }}>
            <div
              style={{
                background: index === 0 ? '#1677ff' : '#ccc',
                width: 16,
                height: 16,
                margin: '0 auto',
                borderRadius: '50%',
              }}
            />
            <Text type={index === 0 ? 'default' : 'secondary'}>{label}</Text>
          </div>
        ))}
      </div>
      <Input.TextArea rows={2} placeholder="Notes" className="my-2" />
      <Button type="primary" size="small">Next Stage</Button>
    </div>
  );
};

// Rating Component
const RatingBox = () => (
  <div style={{ border: '1px solid #ddd', padding: 16, borderRadius: 8 }}>
    <Title level={5}>Performance Ratings</Title>
    {ratings.map(rating => (
      <div key={rating.key} style={{ marginBottom: 12 }}>
        <Text strong>{rating.title}:</Text> <Rate disabled defaultValue={rating.value} />
        <br />
        <Text type="secondary">{rating.notes}</Text>
        <br />
        <Text>{rating.date} by {rating.by}</Text>
      </div>
    ))}
  </div>
);

// Invoice Table
const InvoiceTable = () => (
  <div style={{ border: '1px solid #ddd', padding: 16, borderRadius: 8 }}>
    <Title level={5}>Outstandings</Title>
    <Table
      columns={[
        { title: '#', dataIndex: 'key', width: 50 },
        { title: 'Invoice Number', dataIndex: 'invoice' },
        { title: 'Project Name', dataIndex: 'project' },
        {
          title: 'Amount',
          dataIndex: 'amount',
          render: (val: number) => `Rp ${val.toLocaleString()}`,
        },
        { title: 'Aging (days)', dataIndex: 'aging' },
      ]}
      dataSource={invoices}
      size="small"
      pagination={false}
    />
  </div>
);

// Material Table
const MaterialTable = () => (
  <div>
    <Title level={5}>Materials provided by Supplier</Title>
    <Table
      columns={[
        { title: 'Material Group', dataIndex: 'group' },
        { title: 'Material ID', dataIndex: 'id' },
        {
          title: 'Active',
          dataIndex: 'active',
          render: (val: boolean) => <Checkbox checked={val} />,
        },
      ]}
      dataSource={materials}
      size="small"
      pagination={false}
    />
    <Button className="mt-2" size="small">Edit / Save</Button>
  </div>
);

// MAIN PAGE
const SupplierList = () => {
  return (
    <div style={{ padding: 24, background: "#FFFF" }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',  }}>
        <div>
          <Text type="secondary">Supplier Management &gt; Supplier List &gt; </Text>
          <Text strong>Supplier Detail</Text>
          <Title level={4} style={{ margin: 0 }}>PT Setroom Indonesia</Title>
          <Text>Fatmawati Raya St, 33</Text><br />
          <Text type="secondary">Jakarta Selatan</Text><br />
          <Tag color="green" icon={<CheckCircleOutlined />}>Active</Tag> <Text>Setroom</Text>
        </div>
        <div>
          <Button danger icon={<StopOutlined />}>Block / Unblock</Button>
          <div className="text-right text-xs mt-1 text-gray-500">1 of 32</div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultActiveKey="1" className="mt-6">
        <TabPane tab="Overview" key="1">
          <Row gutter={16}>
            <Col span={14}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Address" key="1">
                  <MaterialTable />
                </TabPane>
                <TabPane tab="Contacts" key="2">Coming Soon</TabPane>
                <TabPane tab="Groups" key="3">Coming Soon</TabPane>
                <TabPane tab="Material List" key="4">Coming Soon</TabPane>
                <TabPane tab="Others" key="5">Coming Soon</TabPane>
              </Tabs>
            </Col>
            <Col span={10}>
              <StepperStage />
              <RatingBox />
            </Col>
          </Row>
          <Row gutter={16} className="mt-6">
            <Col span={12}>
              <InvoiceTable />
            </Col>
            <Col span={12} />
          </Row>
        </TabPane>
        <TabPane tab="Assessment" key="2">Coming Soon</TabPane>
        <TabPane tab="Material Catalog" key="3">Coming Soon</TabPane>
        <TabPane tab="Orders" key="4">Coming Soon</TabPane>
        <TabPane tab="Invoices" key="5">Coming Soon</TabPane>
        <TabPane tab="Projects" key="6">Coming Soon</TabPane>
        <TabPane tab="Services" key="7">Coming Soon</TabPane>
        <TabPane tab="History" key="8">Coming Soon</TabPane>
      </Tabs>
    </div>
  );
};

export default SupplierList;
