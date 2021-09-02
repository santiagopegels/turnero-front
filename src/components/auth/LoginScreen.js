import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';
import { useHistory } from 'react-router-dom';

export const LoginScreen = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const onFinish = ({ email, password }) => {
        dispatch(startLogin(email, password))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleRegisterButton = () => {
        history.push('/register')
    }
    
    return (

        <Row className="auth-container">
            <Col span={12}>
                <Row className="auth-container-box">
                    <Col span={24} className="auth-form-container">
                        <h1 className="auth-title">Sign in</h1>
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
                                    LOGIN
                            </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Col>
            <Col span={12} className="overlay-container">
                <Row className="overlay">
                    <div className="overlay-panel overlay-right">
                        <h1 className="text-header">Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                            <Button ghost={true} block onClick={handleRegisterButton}>Sign Up</Button>
                    </div>
                </Row>
            </Col>
        </Row>
    );
};