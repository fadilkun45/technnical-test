import { Button, Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router'; 
import React from 'react';

const ComingSoon: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f2f5',
      }}
    >
      <Result
        icon={<SmileOutlined />}
        title="Coming Soon"
        subTitle="Halaman ini sedang dalam pengembangan. Nantikan segera!"
        extra={
          <Button type="primary" onClick={() => navigate(-1)}>
            Kembali
          </Button>
        }
      />
    </div>
  );
};

export default ComingSoon;
