// components/supplier/StepperStage.tsx
import React from 'react';
import { Steps, Typography } from 'antd';

const { Title } = Typography;

const StepperStage: React.FC = () => {
  const currentStage = 0; // misal masih di Draft
  return (
    <div>
      <Title level={5}>Stage: Supplier Creation</Title>
      <Steps
        current={currentStage}
        size="small"
        items={[
          { title: 'Draft' },
          { title: 'In Review' },
          { title: 'Assessment' },
          { title: 'Active' },
        ]}
      />
      <div className="mt-2 text-sm text-gray-500">Elapsed: 05:00:10</div>
    </div>
  );
};

export default StepperStage;
