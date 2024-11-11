import React, { useState } from 'react'
import './Register.css';
import { Row, Col } from 'antd'
import regimg from '../Images/registration.png'
import { useNavigate } from 'react-router-dom';
import {
    Button,
    Form,
    Input,
} from 'antd';
import { useAuth } from '../store/auth';

const Register = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const navigate = useNavigate();
    const { storetokenInLS } = useAuth();

    //handling input values
    const handleInput = (e) => {
        console.log("Event:", e); // Add this line to see what's being passed
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value,
        });
        // setUser((prevUser) => ({
        //     ...prevUser,
        //     [name]: value,
        // }));
    };

    //handling submition of form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const respone = await fetch(`http://localhost:5000/api/auth/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                }
            );
            if (respone.ok) {
                alert("Registered Successfully!");

                const resp_data = await respone.json();
                console.log("Res from ervr:", resp_data);

                //store token in local store
                // localStorage.setItem("Tokens:", resp_data.token);
                storetokenInLS(resp_data.token);

                setUser({
                    username: "", email: "", phone: "", password: ""
                });
                navigate("/login");
            }
            else {
                alert("Invalid credential!");
                console.log("Invalid credential!");
            }
            console.log(respone);

        } catch (error) {
            console.log("Register:", error);
        }

    }


    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 6,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 14,
            },
        },
    }


    return (
        <div>
            <h1>Register now!</h1>
            <Row>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                    <div className='reg-img'>
                        <img src={regimg} alt='registration' className='reg-img' />
                    </div>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                    <div className='reg-details'>
                        <Form
                            onSubmitCapture={handleSubmit}
                            {...formItemLayout}
                            // variant="filled"
                            style={{
                                maxWidth: 600,
                            }}

                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter username!',
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Enter username"
                                    id='username'
                                    name="username"
                                    value={user.username}
                                    onChange={handleInput}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter email!',
                                        type: 'email'
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Enter email"
                                    id='email'
                                    name="email"
                                    value={user.email}
                                    onChange={handleInput}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Phone"
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter phone!',
                                        // type: 'number'

                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Enter phone number"
                                    style={{
                                        width: '100%',
                                    }}
                                    name="phone"
                                    value={user.phone}
                                    id='phone'
                                    onChange={handleInput}
                                />
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
                                <Input.Password
                                    placeholder='Enter password'
                                    id='password'
                                    name="password"
                                    value={user.password}
                                    onChange={handleInput}
                                />
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{
                                    offset: 6,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default Register
