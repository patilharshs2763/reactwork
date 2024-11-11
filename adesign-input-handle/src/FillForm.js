import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Table, Radio, InputNumber } from 'antd';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import swal from 'sweetalert';
const FillForm = () => {
    const [data, setFormData] = useState([]);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: {
                compare: (a, b) => a.name.localeCompare(b.name),
                multiple: 6,
            },
        },
        {
            title: 'Email',
            dataIndex: 'email',
            sorter: {
                compare: (a, b) => a.email.localeCompare(b.email),
                multiple: 5,
            },
        },
        {
            title: 'Username',
            dataIndex: 'username',
            sorter: {
                compare: (a, b) => a.username.localeCompare(b.username),
                multiple: 4,
            },
        },
        {
            title: 'Password',
            dataIndex: 'password',
            sorter: {
                compare: (a, b) => a.password.localeCompare(b.password),
                multiple: 3,
            },
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            // render:(gender)=>(gender ? 'Male' : 'Female'),
            sorter: {
                compare: (a, b) => a.gender.localeCompare(b.gender),
                multiple: 2,
            },
        },
        {
            title: 'Age',
            dataIndex: 'age',
            sorter: {
                compare: (a, b) => a.age - b.age,
                multiple: 7,
            },
        },
        {
            title: 'Active',
            dataIndex: 'active',
            render: (remember) => (remember ? <CheckCircleTwoTone /> : <CloseCircleTwoTone />),
            // sorter: {
            //     compare: (a, b) => a.remember - b.remember,
            //     multiple: 1,
            // },
        },
        {
            title: 'Remember Me',
            dataIndex: 'remember',
            render: (remember) => (remember ? 'Yes' : 'No'),
            sorter: {
                compare: (a, b) => a.remember - b.remember,
                multiple: 0,
            },
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    const onFinish = (values) => {
        console.log('Success:', values);
        setFormData([...data, values]);
        toast.success('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Ok",
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="on"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item label="Gender" name='gender'>
                    <Radio.Group>
                        <Radio value="Male"> Male </Radio>
                        <Radio value="Female"> Female </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    // name={['username', 'age']}
                    name='age'
                    label="Age"
                    rules={[{
                        type: 'number',
                        min: 0,
                        max: 99
                    }
                    ]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    name="active"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Activate me</Checkbox>
                </Form.Item>
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            {/* <Table columns={columns} dataSource={data} onChange={onChange} /> */}
            <Table columns={columns} dataSource={data} onChange={onChange} />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                // transition:'Bounce'
            />
        </>
    );
};

export default FillForm;
