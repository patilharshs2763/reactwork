import React from 'react';
import './Contact.css';
import { Row, Col, Typography, Layout, Button } from 'antd';
import TextField from '@mui/material/TextField';

const { Title } = Typography;
const { Content } = Layout;

const Contact = () => {
    return (
        <div className='harsh-contactMain'>
            <Content className='harsh-contactContent'>
                <Title level={5} className='harsh-contact'>Contact</Title>
                <Title level={3} className='harsh-getInTouch'>Get In Touch</Title>
                <Row gutter={[12, 12]} className='harsh-contactRow'>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} className='harsh-contactForm'>
                        <TextField
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            margin="normal"
                            className='harsh-nameInput'
                            required
                        />
                        <TextField
                            id="outlined-email"
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            className='harsh-emailInput'
                            type="email" // Sets type to email
                            required // Makes field required
                            value={email}
                            // onChange={handleEmailChange}
                            error={error && !email}
                            helperText={error && !email ? "Email is required" : ""}
                        />
                        <Button type="primary" className='harsh-contactBtn'>
                            Send Message
                        </Button>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} className='harsh-contactDetails'>
                        Contact Details
                    </Col>
                </Row>
            </Content>
        </div>
    );
}

export default Contact;
