import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './AddUserStyle.css';
import { Button, Checkbox, Form, Input, Space } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import SweetAlert2 from 'react-sweetalert2';
import Swal from 'sweetalert2';

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const AddUser = () => {
    const [swalProps, setSwalProps] = useState({});

    const { updatedUserId } = useParams();
    const [userData, setUserData] = useState({});
    const [form] = Form.useForm();
    const navigate = useNavigate();

    useEffect(() => {
        if (updatedUserId) {
            fetchUserData()
        }
    }, [updatedUserId])

    const fetchUserData = async () => {
        try {
            axios.get('http://localhost:3000/users/' + updatedUserId)
                .then((response) => {
                    if (response.data && response.data.rows && response.data.rows.length > 0) {
                        setUserData(response.data?.rows[0])
                        // console.log("-----------------line 34", response.data.rows[0]);
                        form.setFieldsValue(response.data.rows[0])
                    } else {
                        setUserData({})
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        } catch (error) {

        }
    }
    // console.log("userData", userData)

    const onFinish = (values) => {
        console.log('Success:', values);
        if (updatedUserId) {
            // Update existing user
            axios.patch('http://localhost:3000/users/' + updatedUserId, values)
                .then((response) => {
                    // Handle success
                    Swal.fire({
                        title: 'Success!',
                        text: 'User successfully updated!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then(() => {
                        navigate('/'); // Navigate to another page
                        form.resetFields(); // Reset the input fields
                    });
                })
                .catch((error) => {
                    form.resetFields();
                    console.error("Error updating user:", error);
                    Swal.fire({
                        title: 'Error!',
                        text: 'There was an error updating the user.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                });
        } else {
            // Add new user
            axios.post('http://localhost:3000/users', values)
                .then((response) => {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User successfully added!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then(() => {
                        navigate('/'); // Navigate to another page
                        form.resetFields(); // Reset the input fields
                    });
                })
                .catch((error) => {
                    console.error("Error adding user:", error);
                    Swal.fire({
                        title: 'Error!',
                        text: 'There was an error adding the user.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                });
        }
    };

    // const onFinish = (values) => {
    //     console.log('Success:', values);
    //     if (updatedUserId) {
    //         axios.patch('http://localhost:3000/users/' + updatedUserId, values)
    //             .then(function (response) {
    //                 // handle success
    //                 alert("Successfully updated!");
    //                 navigate('/');
    //                 form.resetFields(); // Reset the input fields
    //             })
    //             .catch(function (error) {
    //                 form.resetFields();
    //                 console.log(error);
    //             });
    //     } else {
    //         axios.post('http://localhost:3000/users', values)
    //             .then(function (response) {
    //                 alert("Successfully added!");
    //                 navigate('/');
    //                 form.resetFields(); // Reset the input fields
    //             })
    //             .catch(function (error) {
    //                 console.log(error);
    //             });
    //     }
    // };
    
    const onReset = () => {
        form.resetFields();
    };
    console.log("id", updatedUserId)
    return (
        <>
            <Form
                form={form}

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
                // initialValues={{ name: "tests" }}
                onFinish={onFinish}
                className='adduser-form-style'
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Mobile"
                    name="mobile"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your mobile!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Department"
                    name="department"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Department!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="User Id"
                    name="u_id"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your User Id!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Address"
                    name="city"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your City!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    {...tailLayout}
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Space>
                        <RollbackOutlined onClick={() => navigate('/')} />
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>

                    </Space>
                </Form.Item>
            </Form>
        </>
    )

}
export default AddUser;