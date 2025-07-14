// components/supplier/InvoiceTable.tsx
import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: '#',
    dataIndex: 'index',
    render: (_: any, __: any, index: number) => index + 1,
    width: 50,
  },
  {
    title: 'Invoice Number',
    dataIndex: 'invoiceNumber',
  },
  {
    title: 'Project Name',
    dataIndex: 'projectName',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    render: (text: number) => `Rp ${text.toLocaleString()}`,
  },
  {
    title: 'Aging (days)',
    dataIndex: 'aging',
  },
];

const data = [
  {
    key: '1',
    invoiceNumber: 'INV1234',
    projectName: 'Project ABC',
    amount: 123000,
    aging: 34,
  },
];

const InvoiceTable: React.FC = () => {
  return (
    <div className="border p-4 rounded-md">
      <Table columns={columns} dataSource={data} size="small" pagination={false} />
    </div>
  );
};

export default InvoiceTable;
