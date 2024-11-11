import React from 'react';
import './Login.css'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
const LoginForm = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = async (values) => {
    };
    return (
        <div className='form-main'>
            <Form
                name="login"
                initialValues={{
                    remember: true,
                }}
                style={{
                    maxWidth: 360,
                }}
                form={form}
                onFinish={onFinish}
                className='login-form'
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            type: 'email',
                            required: true,
                            message: 'Enter valid email as username!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>
                {/* <Form.Item
                    name="confirm"
                    // label="Confirm Password"
                    dependencies={['username']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The new password that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input prefix={<LockOutlined />} type='password' placeholder="Re-enter Password" />
                </Form.Item> */}
                <Form.Item>
                    <Flex justify="space-between" align="center">
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <a href="">Forgot password</a>
                    </Flex>
                </Form.Item>

                <Form.Item>
                    <Button block type="primary" htmlType="submit" onClick={onFinish}>
                        Log in
                    </Button>
                    or
                    <Link to={'/register'}>Register Now!</Link>
                    {/* <a href="">Register now!</a> */}
                </Form.Item>
            </Form>
        </div>
    );
};
export default LoginForm;