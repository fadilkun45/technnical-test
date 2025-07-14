// components/supplier/RatingBox.tsx
import React from 'react';
import { Rate, Typography } from 'antd';

const { Title, Text } = Typography;

const RatingBox: React.FC = () => {
  return (
    <div className="border p-4 rounded-md">
      <Title level={5}>Performance Ratings</Title>
      <div className="mb-3">
        <Text strong>Price:</Text> <Rate defaultValue={4} disabled />
        <br />
        <Text type="secondary">Notes</Text>
        <br />
        <Text>Feb 14, 2025 by User Legal</Text>
      </div>
      <div>
        <Text strong>Delivery Time:</Text> <Rate defaultValue={3} disabled />
        <br />
        <Text type="secondary">Notes</Text>
        <br />
        <Text>Feb 12, 2025 by User Legal</Text>
      </div>
    </div>
  );
};

export default RatingBox;
