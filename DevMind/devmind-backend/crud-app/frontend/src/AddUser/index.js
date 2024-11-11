import { InputNumber, Form, Input, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AddUser = ({ refreshUserList, updatedUserId, setUpdateUserId }) => {
    const [userData, setUserData] = useState({});
    const [form] = Form.useForm(); // Create a form instance
    useEffect(() => {
        if (updatedUserId) {
            fetchUserData()
        }
    }, [updatedUserId])
    const fetchUserData = async () => {
        try {
            axios.get('http://localhost:3000/getuser/' + updatedUserId)
                .then(function (response) {
                    if (response.data && response.data.rows && response.data.rows.length > 0) {
                        setUserData(response.data?.rows[0])
                        form.setFieldsValue(response.data?.rows[0])
                    } else {
                        setUserData({})
                    }

                    // handle success
                    // form.resetFields(); // Reset the input fields
                    // refreshUserList(); // Refresh the user list
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (error) {

        }
    }

    const onFinish = (values) => {
        console.log('Success:', values);
        if (updatedUserId) {
            // Make a request to create a user
            axios.patch('http://localhost:3000/updateuser/' + updatedUserId, values)
                .then(function (response) {
                    // handle success
                    alert("Successfully updated!");
                    setUpdateUserId("")
                    form.resetFields(); // Reset the input fields
                    refreshUserList(); // Refresh the user list
                })
                .catch(function (error) {
                    // handle error
                    form.resetFields();
                    console.log(error);
                    setUpdateUserId("")
                });
        } else {
            // Make a request to create a user
            axios.post('http://localhost:3000/createusers', values)
                .then(function (response) {
                    // handle success
                    alert("Successfully added!");
                    form.resetFields(); // Reset the input fields
                    setUpdateUserId("")
                    refreshUserList(); // Refresh the user list
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                    setUpdateUserId("")
                });
        }

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <h1>Create User</h1>
            <Form
                form={form} // Bind the form instance
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
                autoComplete="off"
            >
                <Form.Item
                    label="Employee ID"
                    name="eid"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the Employee ID!',
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item
                    label="Employee Name"
                    name="ename"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the Employee Name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Mobile Number"
                    name="emobile"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the Mobile Number!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Salary"
                    name="esalary"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the Salary!',
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item
                    label="Address"
                    name="eaddress"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the Address!',
                        },
                    ]}
                >
                    <Input />
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
        </div>
    );
};

export default AddUser;
