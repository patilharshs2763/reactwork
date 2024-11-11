import React from 'react';
import { Button, Form, Input, Col, Row, Typography } from 'antd';
import Upperheader from "../Upperheader/index";
import Desktopheader from "../Desktopheader/index";
import CategoriesNavbar from "../CategoriesNavbar/index";
import Upperfooter from "../Upperfooter/index";
import Lowerfooter from "../Lowerfooter/index";
import FooterNewsletter from "../FooterNewsletter/index";
import BlockDivWrap from "../BlockDivWrap";
import './contactpage.css';
import Mobileheader from "../Mobileheader"
const { Title } = Typography;

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Contactpage = () => {
  return (
    <>
      <Mobileheader/>
      <Upperheader />
      <Desktopheader />
      <CategoriesNavbar />
      <div className='devmind-contact-page mt-2 mt-lg-5'>
        <BlockDivWrap>
          <Title level={3} className='contact-page-heading'>Contact Us</Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12} xxl={12}>
              <Form
                name="basic"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[{ required: true, message: 'Please input your first name!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: 'Please input your email!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Mobile"
                  name="mobile"
                  rules={[{ required: true, message: 'Please input your mobile number!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="City"
                  name="city"
                  rules={[{ required: true, message: 'Please input your city!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Message"
                  name="message"
                  rules={[{ required: true, message: 'Please input your message!' }]}
                >
                  <Input.TextArea />
                </Form.Item>

                <Form.Item className='submit-button-block'>
                  <Button type="primary" htmlType="submit" className='contact-page-button'>Submit</Button>
                </Form.Item>
              </Form>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xxl={12}>
              <div className='map-container'>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15286.019947415445!2d74.2386178!3d16.7016366!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x3bc101004a8dc3d7%3A0xfade8d5db96d8248!2sDevMinds%20Software%20Company!5e0!3m2!1sen!2sin!4v1717500236150!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
          </Row>
        </BlockDivWrap>
        <Upperfooter />
        <Lowerfooter />
        <FooterNewsletter />
      </div>
    </>
  );
};

export default Contactpage;
