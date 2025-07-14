import { Input, Select, Button, Space } from 'antd';
import {
  ExportOutlined,
  AppstoreOutlined,
  BarsOutlined
} from '@ant-design/icons';
import type { ReactNode } from 'react';
import { useState } from 'react';

const { Search } = Input;
const { Option } = Select;

type ToolbarActionsProps = {
  searchPlaceholder?: string;
  filterOptions?: { label: string; value: string }[];
  defaultFilterValue?: string;
  onSearch?: (keyword: string) => void;
  onFilterChange?: (value: string) => void;
  onExport?: () => void;
  onToggleView?: (view: 'grid' | 'list') => void;
  showExport?: boolean;
  showViewToggle?: boolean;
  extraActions?: ReactNode;
};

const ToolbarActions = ({
  searchPlaceholder = 'Search...',
  filterOptions = [],
  defaultFilterValue,
  onSearch,
  onFilterChange,
  onExport,
  onToggleView,
  showExport = true,
  showViewToggle = true,
  extraActions
}: ToolbarActionsProps) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  const handleToggleView = () => {
    const next = viewMode === 'list' ? 'grid' : 'list';
    setViewMode(next);
    onToggleView?.(next);
  };

  return (
    <div
      style={{
        background: '#f0f2f5',
        padding: '8px 12px',
        borderRadius: 4,
        marginBottom: 16,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 8
      }}
    >
      <Space wrap>
        <Search
          placeholder={searchPlaceholder}
          onSearch={onSearch}
          allowClear
          style={{ width: 220 }}
        />

        {filterOptions.length > 0 && (
          <Select
            defaultValue={defaultFilterValue}
            style={{ width: 150 }}
            onChange={onFilterChange}
          >
            {filterOptions.map(opt => (
              <Option key={opt.value} value={opt.value}>
                {opt.label}
              </Option>
            ))}
          </Select>
        )}
      </Space>

      <Space wrap>
        {showExport && (
          <Button icon={<ExportOutlined />} onClick={onExport}>
            Export
          </Button>
        )}

        {showViewToggle && (
          <Button
            icon={viewMode === 'list' ? <BarsOutlined /> : <AppstoreOutlined />}
            onClick={handleToggleView}
          />
        )}

        {extraActions}
      </Space>
    </div>
  );
};

export default ToolbarActions;
