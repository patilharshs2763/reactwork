import React, { useState } from 'react'
import './Contact.css';
import { Row, Col, } from 'antd'
import regimg from '../Images/contact.png';
import {
  Button,
  Form,
  Input,
} from 'antd';
const TextArea = Input;
const Contact = () => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });

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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    alert(e);
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
                label="Message"
                name="message"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Message!',
                  },
                ]}
              >
                <Input.TextArea rows={3}
                  placeholder="Type message here..."
                  id='message'
                  name="message"
                  value={user.message}
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

export default Contact
