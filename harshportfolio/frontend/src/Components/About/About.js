import React, { useEffect } from 'react'
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faCar, faEnvelope, faMusic, faPersonSwimming, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

import { Col, Flex, Row, Space } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Typography } from 'antd';
import aboutImage from '../Images/aboutimage.png';
import Skills from './Skills';
import Education from './Education';
import Contact from '../Contact/Contact';
const { Title } = Typography;
const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: false,    // Animation triggers on every scroll
        });
        AOS.refresh(); // Refresh AOS on component mount
    }, []);
    return (
        <div className='harsh-about'>
            <Content
                style={{
                    padding: '10px 35px',
                }
                }>
                <Row>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} className='harsh-about-image-main'>
                        <div className='myimg' data-aos="zoom-in-right">
                            <img src={aboutImage} alt='HarshAbt' className='harsh-about-myImage' />
                        </div>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} xl={12} className='harsh-about-description'>
                        <Flex vertical>
                            <div data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                            >
                                <Title level={5} className='harsh-intro'>My Intro</Title>
                                <Title level={3} className='harsh-aboutme'>About Me</Title>
                                <p className='harsh-about-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                            <div className='harsh-details' data-aos="fade-left"
                                data-aos-anchor="#example-anchor"
                                // data-aos-offset="500"
                                data-aos-duration="500"
                            >
                                <ul className='harsh-details-list'>
                                    <li>
                                        <Space>
                                            <Row align="middle">
                                                <Space>
                                                    <Col>
                                                        <FontAwesomeIcon className='harsh-name-iconStyle' icon={faUser} />
                                                    </Col>
                                                    <Col>
                                                        <span className='harsh-details-title'>Name :</span>
                                                    </Col>
                                                </Space>
                                                <Col className='harsh-mainData'>
                                                    <span className='harsh-details-data'>Harshvardhan Patil</span>
                                                </Col>
                                            </Row>
                                        </Space>
                                    </li>
                                    <li>
                                        <Space>
                                            <Row align="middle">
                                                <Space>
                                                    <Col>
                                                        <FontAwesomeIcon className='harsh-name-iconStyle' icon={faPhone} />
                                                    </Col>
                                                    <Col>
                                                        <span className='harsh-details-title'>Phone :</span>
                                                    </Col>
                                                </Space>
                                                <Col className='harsh-mainData'>
                                                    <span className='harsh-details-data'>9168398578</span>
                                                </Col>
                                            </Row>
                                        </Space>
                                    </li>
                                    <li>
                                        <Space>
                                            <Row align="middle">
                                                <Space>
                                                    <Col>
                                                        <FontAwesomeIcon className='harsh-name-iconStyle' icon={faEnvelope} />
                                                    </Col>
                                                    <Col>
                                                        <span className='harsh-details-title'>Email :</span>
                                                    </Col>
                                                </Space>
                                                <Col className='harsh-mainData'>
                                                    <span className='harsh-details-data'>patil@gmail.com</span>
                                                </Col>
                                            </Row>
                                        </Space>
                                    </li>
                                </ul>
                            </div>
                            <div
                                data-aos="fade-right"
                                // data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                            >
                                <Title level={5} className='harsh-intresr-title'>My Intrests</Title>
                                <Flex wrap gap={"large"} className='harsh-intrest-contains'>
                                    <span className='harsh-intrests'> <FontAwesomeIcon className='harsh-intrest-icons' icon={faCar} /> Driving</span>
                                    <span className='harsh-intrests'><FontAwesomeIcon className='harsh-intrest-icons' icon={faPersonSwimming} /> Swimming</span>
                                    <span className='harsh-intrests'> <FontAwesomeIcon className='harsh-intrest-icons' icon={faMusic} />Music</span>
                                    <span className='harsh-intrests'> <FontAwesomeIcon className='harsh-intrest-icons' icon={faCamera} />Photo</span>
                                </Flex>
                            </div>
                        </Flex>
                    </Col>
                </Row>
                <Skills />
                <Education />
            </Content >
        </div >
    )
}

export default About
