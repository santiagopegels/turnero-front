import React from 'react'
import { Form, Modal, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { addCallPlace } from '../../actions/queues';

export const SetNamePlaceModal = ({isVisible}) => {  
    const [form] = Form.useForm();
    const dispatch = useDispatch()

        
    const onCreate = (values) => {
        dispatch(addCallPlace(values))
      };

    return (
        <Modal
        title="Nombre del lugar de llamado"
        visible={isVisible}
        closable={false}
        cancelButtonProps={{ hidden: true }}
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
        >
        <Form
          form={form}
          name="form_call_place"
          initialValues={{
            modifier: 'public',
          }}
        >
          <Form.Item
            name="name"
            label="Lugar"
            rules={[
              {
                required: true,
                message: 'Ingresar el nombre del lugar donde realiza el llamado.',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    )
}
