import React, { useEffect, useState } from 'react';
import './Register.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button,  Form, Input, Space } from 'antd';
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
                        navigate('/login-form'); // Navigate to another page
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
                    span: 24,
                }}
                style={{
                    maxWidth: 400,
                }}
                // initialValues={{ name: "tests" }}
                onFinish={onFinish}
                className='adduser-form-style'
            >
                <Form.Item
                    // label="First Name"
                    name="first_name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your first name!',
                        },
                    ]}
                >
                    <Input placeholder='Enter your First Name' />
                    {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
                </Form.Item>
                <Form.Item
                    // label="Last Name"
                    name="last_name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your last name!',
                        },
                    ]}
                >
                    <Input placeholder='Enter your Last Name' />
                </Form.Item>
                <Form.Item
                    // label="Email"
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            required: true,
                            message: 'Please input your mobile!',
                        },
                    ]}
                >
                    <Input placeholder='Enter your email' />
                </Form.Item>
                <Form.Item
                    // label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password placeholder='Enter your password' />
                </Form.Item>
                <Form.Item
                    // label="Mobile"
                    name="mobile"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your mobile number!',
                        },
                    ]}
                >
                    <Input placeholder='Enter your mobile' />
                </Form.Item>


                <Form.Item
                    {...tailLayout}
                    wrapperCol={{
                        offset: 4,
                        span: 16,
                    }}
                >
                    <Space>

                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>
                    </Space>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 4, // Make sure this aligns with your button placement
                        span: 16,
                    }}
                >
                    <Link to={'/'}>Already registered!</Link>
                </Form.Item>
            </Form>
        </>
    )

}
export default AddUser;