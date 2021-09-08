import React from 'react';
import { Form, Input, Button, Row, Col, Spin, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { startLogin } from '../../actions/auth';
import { useHistory } from 'react-router-dom';
import useBodyClass from '../../hook/useBodyClass';

export const LoginScreen = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { loading } = useSelector(state => state.ui)
    useBodyClass(`auth-body`);

    const onFinish = ({ email, password }) => {
        dispatch(startLogin(email, password))
            .then(res => {
                if (res) {
                    if (!res.status) {
                        message.error(res.message);
                    }
                }
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleRegisterButton = () => {
        history.push('/register')
    }

    return (
        <>
            {
                loading ?
                    <Spin size="large" />
                    :
                    <Row className="auth-container">
                        <Col span={12}>
                            <Row className="auth-container-box">
                                <Col span={24} className="auth-form-container">
                                    <h1 className="auth-title">Login</h1>
                                    <Form
                                        name="login"
                                        layout="vertical"
                                        wrapperCol={{
                                            span: 24,
                                        }}
                                        initialValues={{
                                            remember: true,
                                        }}
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                    >
                                        <Form.Item
                                            name="email"
                                            initialValue='1241254@test.com'
                                            rules={[
                                                {
                                                    required: true,
                                                    type: 'email',
                                                    message: 'Please input your email!',
                                                },
                                            ]}
                                        >
                                            <Input
                                                className="auth-input"
                                                placeholder="EMAIL"
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="password"
                                            initialValue='124124'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your password!',
                                                },
                                            ]}
                                        >
                                            <Input.Password
                                                className="auth-input"
                                                placeholder="PASSWORD"
                                            />
                                        </Form.Item>

                                        <Form.Item>
                                            <Button type="primary" htmlType="submit" block className="auth-button" size="large">
                                                INGRESAR
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12} className="overlay-container">
                            <Row className="overlay">
                                <div className="overlay-panel overlay-right">
                                    <h1 className="text-header">¿Eres Nuevo?</h1>
                                    <p>Para crear una cuenta, presiona el botón</p>
                                    <Button
                                        ghost={true}
                                        block
                                        onClick={handleRegisterButton}
                                        className="auth-button"
                                        size="large"
                                    >
                                        CREAR CUENTA
                        </Button>
                                </div>
                            </Row>
                        </Col>
                    </Row>
            }
        </>
    );
};