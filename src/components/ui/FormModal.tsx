import { Modal, Button, Tabs, Form } from 'antd';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

const { TabPane } = Tabs;

type TabItem = {
  key: string;
  label: string;
  content: ReactNode;
};

type FormModalProps = {
  visible: boolean;
  title: string;
  onClose: () => void;
  onSave: (values: any) => void;
  tabs?: TabItem[];
  children?: ReactNode; 
  initialValues?: any;
  loading?: boolean;
};

const FormModal = ({
  visible,
  title,
  onClose,
  onSave,
  tabs,
  children,
  initialValues,
  loading
}: FormModalProps) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (visible) form.setFieldsValue(initialValues || {});
  }, [visible, initialValues]);

  const handleSubmit = () => {
    form.validateFields().then(values => {
      onSave(values);
    });
  };

  return (
    <Modal
      title={title}
      open={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="save" type="primary" loading={loading} onClick={handleSubmit}>
          Save
        </Button>
      ]}
      width={800}
    >
      <Form form={form} layout="vertical">
        {tabs ? (
          <Tabs defaultActiveKey={tabs[0]?.key}>
            {tabs.map(tab => (
              <TabPane tab={tab.label} key={tab.key}>
                {tab.content}
              </TabPane>
            ))}
          </Tabs>
        ) : (
          children
        )}
      </Form>
    </Modal>
  );
};

export default FormModal;
