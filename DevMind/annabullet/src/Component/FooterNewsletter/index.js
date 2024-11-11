import React from 'react'
import { Col, Row, Button, Flex, Typography, Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import BlockDivWrap from "../BlockDivWrap"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import './footernewsletter.css'
const { Title } = Typography;
const { Search } = Input;
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
        }}
    />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);

const FooterNewsletter = () => {
    return (
        <div className='devmind-footer-newsletter mt-5'>
            <BlockDivWrap>
                <Row>
                    <Col xs={24} sm={24} md={12} lg={8} xxl={8}>
                        <div className='flex-icon-block'>
                            <Flex className='footer-newsletter-flex'>
                                <Button className='footer-newsletter-button'><FaFacebookF /></Button>
                                <Button className='footer-newsletter-button'><FaTwitter /></Button>
                                <Button className='footer-newsletter-button'><FaGooglePlusG /></Button>
                                <Button className='footer-newsletter-button'><FaLinkedinIn /></Button>
                                <Button className='footer-newsletter-button'><FaPinterest /></Button>
                                <Button className='footer-newsletter-button'><FaYoutube /></Button>
                            </Flex>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={16} xxl={16}>
                        <div className='search-block'>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xxl={12}>
                                    <div>
                                        <Title level={4} className='text-newsletter'>SIGN UP FOR NEWSLETTER</Title>
                                    </div>
                                </Col>

                                <Col xs={12} sm={12} md={12} lg={12} xxl={12}>
                                    <Search placeholder="Your Email Address" allowClear enterButton="Subscribe"
                                        size="large" onSearch={onSearch} className="custom-search" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={24} sm={24} md={12} lg={12} xxl={12} className='mt-4'>
                        <div className='mt-2'>
                         <p>Copyright © 2023 - Devminds Software, Kolhapur.</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xxl={12} className='mt-4'>
                        <div>
                            <img src="https://magento2.magentech.com/themes/sm_autostore/pub/media/wysiwyg/footer/payment-footer.png" className='social-card-newsletter-image' />
                        </div>
                    </Col>
                </Row>
            </BlockDivWrap>
        </div>
    )
}

export default FooterNewsletter


{/*  */ }
