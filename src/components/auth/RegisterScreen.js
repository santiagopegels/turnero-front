import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { useDispatch } from 'react-redux';
import { startRegister } from '../../actions/auth';
import { useHistory } from 'react-router-dom';
import useBodyClass from '../../hook/useBodyClass';

export const RegisterScreen = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    useBodyClass(`auth-body`);


    const onFinish = ({ email, password, name }) => {
        dispatch(startRegister(email, password, name))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleLoginButton = () => {
        history.push('/login')
    }

    return (
        <Row className="auth-container">
            <Col span={12}>
                <Row className="overlay">
                    <div className="overlay-panel overlay-right">
                        <h1 className="text-header">¿Estás Registrado?</h1>
                        <p>Para iniciar sesión, presiona en el botón</p>
                        <Button
                            ghost={true}
                            block
                            onClick={handleLoginButton}
                            className="auth-button"
                            size="large"
                        > 
                        INICIAR SESIÓN
                        </Button>
                    </div>
                </Row>
            </Col>
            <Col span={12}>
                <Row className="auth-container-box">
                    <Col span={24} className="auth-form-container">
                        <h1 className="auth-title">Registro</h1>
                        <Form
                            name="register"
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
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input a name!',
                                    },
                                ]}
                            >
                                <Input
                                    className="auth-input"
                                    placeholder="NAME"
                                />
                            </Form.Item>

                            <Form.Item
                                name="email"
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

                            <Form.Item
                                name="password2"
                                dependencies={['password']}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }

                                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password
                                    placeholder="PASSWORD CONFIRM"
                                    className="auth-input"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    block
                                    className="auth-button"
                                    size="large"
                                >
                                    REGISTRARSE
                                </Button>
                            </Form.Item>
                        </Form>

                    </Col>
                </Row>
            </Col>
        </Row>
    );
};