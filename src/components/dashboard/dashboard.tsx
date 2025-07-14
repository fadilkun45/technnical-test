import { Card } from 'antd';
import type {ReactNode} from 'react'

type Props = {
  title: string;
  value: string;
  subtitle: string;
  subtitleColor?: 'green' | 'red' | 'gray';
  icon?: ReactNode;
};

const DashboardCard = ({ title, value, subtitle, subtitleColor = 'gray', icon }: Props) => {
  const subtitleStyle = {
    color:
      subtitleColor === 'green' ? 'green' :
      subtitleColor === 'red' ? 'red' :
      '#999'
  };

  return (
    <Card style={{ height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontWeight: 'bold' }}>{title}</div>
          <div style={{ fontSize: 24 }}>{value}</div>
          <div style={subtitleStyle}>{subtitle}</div>
        </div>
        {icon && <div style={{ fontSize: 32 }}>{icon}</div>}
      </div>
    </Card>
  );
};

export default DashboardCard;
