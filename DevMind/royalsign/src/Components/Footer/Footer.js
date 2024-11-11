import React from 'react'
import "./Footer.css"
import { Col, Row, Flex } from 'antd';
import Button from '@mui/material/Button';
import { PhoneFilled, YoutubeOutlined, FacebookOutlined, InstagramOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import fb from '../Images/facebook.png'
import youtube from '../Images/youtube.png'
import insta from '../Images/insta.png'
import Royalsign from "../Images/Royalsign.png"

const Footer = () => {
    return (
        <div className='container-fluid devminds-footer'>
            <Row>
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <ol className='devminds-qicklink'>
                        <li className='devminds-main-link'>Quick Links</li>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Branding</li>
                        <li>Signage</li>
                        <li>Display Stand</li>
                    </ol>
                </Col>
                <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                    <ol className='devminds-qicklink'>
                        <li className='devminds-main-link'>INFORMATION</li>
                        <li>Pricing</li>
                        <li>About us</li>
                        <li>Feedback</li>
                    </ol>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <Row>
                        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                            <ol className='devminds-qicklink'>
                                <li className='devminds-main-link'>LEGAL</li>
                                <li>Terms of use</li>
                                <li>icense agreement</li>
                                <li>Privacy policy</li>
                                <li>Copyright information</li>
                                <li>Cookies policy</li>
                                <li> Cookies Settings</li>
                            </ol>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            <ol className='devminds-qicklink'>
                                <li className='devminds-main-link'>SUPPORT</li>
                                <li>FAQ</li>
                                <li>Contact</li>
                            </ol>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} sm={24} md={6} lg={6} xl={6} className='px-4'>
                    <ol className='devminds-qicklink'>
                        <li className='devminds-main-link'>SOCIAL MEDIA</li>
                    </ol>
                    <Flex gap="middle" justify='start' className='px-4 devminds-handle' >
                        <img className='socialmedia' src={fb} alt='facebook' />
                        <img className='socialmedia' src={youtube} alt="youtube" />
                        <img className='socialmedia' src={insta} alt="insta" />
                    </Flex>
                </Col>
            </Row>
            <hr className='devminds-line' />
            <Row className='mt-4 container-fluid'>
                <Col xs={24} sm={24} md={10} lg={4} xl={4}>
                    <img src={Royalsign} alt="royalsign" className='devminds-royalsign' />
                </Col>
                <Col xs={24} sm={24} md={14} lg={20} xl={20}>
                <p className='devminds-copyright'>Copyright © 2016-2024 Royal Sign S.L. All rights reserved.</p>
                </Col>
            </Row>
        </div>
    )
}

export default Footer