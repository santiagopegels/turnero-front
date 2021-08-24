import React, { useState } from 'react'
import { Button, Input, Form } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import { useDispatch } from 'react-redux';
import { newQueue } from '../../actions/queues';

export const CreateQueueModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch()

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onCreate = (values) => {
    dispatch(newQueue(values))
    setIsModalVisible(false);
  };

  const [form] = Form.useForm();
  return (
    <>
      <Button
        type="primary"
        shape="rounded"
        size='small'
        onClick={showModal}
      >
        +
        </Button>
      <Modal
        title="Nueva Fila"
        visible={isModalVisible}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              form.resetFields();
              onCreate(values);
            })
            .catch(info => {
              console.log('Validate Failed:', info);
            });
        }}
        onCancel={handleCancel}>
        <Form
          form={form}
          name="form_in_modal"
          initialValues={{
            modifier: 'public',
          }}
        >
          <Form.Item
            name="name"
            label="Prefijo"
            rules={[
              {
                required: true,
                message: 'Ingresar el prefijo de la fila.',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
