import React, { useState, useEffect } from 'react'
import { Transfer, Button, Input, Form } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { queuesStartLoading } from '../../actions/queues';


export const SelectQueues = ({onFinish}) => {
    const [targetKeys, setTargetKeys] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [data, setData] = useState([]);
    const { queues } = useSelector(state => state.queue)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(queuesStartLoading())
    }, [dispatch])

    useEffect(() => {
        const data = queues.map(({ _id: key, name: title, description }) => {
            if (description) {
                title = description + '-' + title
            }
            return { key, title, description }
        })
        setData(data)
    }, [queues])

    const onChange = (nextTargetKeys) => {
        setTargetKeys(nextTargetKeys);
    };

    const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 24,
            }}
            wrapperCol={{
                span: 24,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                label="Seleccione las filas"
                name="queues"
                rules={[
                    {
                        required: true,
                        message: 'Debe seleccionar al menos 1 Fila!',
                    },
                ]}
            >
                <Transfer
                    dataSource={data}
                    titles={['Todas las filas', 'Filas Públicas']}
                    targetKeys={targetKeys}
                    selectedKeys={selectedKeys}
                    onChange={onChange}
                    onSelectChange={onSelectChange}
                    render={item => `${item.title}`}
                    listStyle={{
                        width: '100%',
                        height: 250,
                    }}
                />
            </Form.Item>
            <Form.Item
                label="Nombre de la pantalla"
                name="name"

            >
                <Input />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 11,
                }}
            >
                <Button type="primary" htmlType="submit" size="large">
                    SIGUIENTE
        </Button>
            </Form.Item>

        </Form>

    )
}
