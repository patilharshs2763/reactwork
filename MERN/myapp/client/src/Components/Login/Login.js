import React, { useState } from 'react'
import './Login.css';
import { Row, Col } from 'antd'
import regimg from '../Images/login.png';
import {
  Button,
  Form,
  Input,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

// const URL = "";

const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //handling input values
  const handleInput = (e) => {
    console.log("Event:", e); // Add this line to see what's being passed
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });

  };

  const navigate = useNavigate();
  const { storetokenInLS } = useAuth();
  //handling submition of form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("Login form:", response);
      if (response.ok) {
        alert("Login Successfully");
        const resp_data = await response.json();
        console.log("Res from ervr:", resp_data);
        storetokenInLS(resp_data.token);

        setUser({ email: "", password: "" });
        navigate("/");
      }
      else {
        alert("Invalid credential!");
        console.log("Invalid credential!");
      }

    } catch (error) {
      console.log("Login error:", error);
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
                  autoComplete="email"

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
                  autoComplete="current-password"
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

export default Login
