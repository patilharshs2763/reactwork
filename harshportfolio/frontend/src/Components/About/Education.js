import React from 'react';
import { Content } from 'antd/es/layout/layout'; // Ensure 'antd' is installed
import { Typography, Row, Col, Steps } from 'antd';
import { CalendarOutlined, HomeOutlined } from '@ant-design/icons'; // Import the icons
import './Education.css';

const { Title } = Typography;

const Education = () => {
    return (
        <div>
            <Content className='harsh-educationContent'>
                <Row gutter={[12, 12]}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Title level={5} className='harsh-qualification'>My Qualification</Title>
                        <Title level={3} className='harsh-educationJourney'>Awesome Journey</Title>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} className='harsh-experienceCol'>
                        <div className='harsh-education'>
                            <Title level={5} className='harsh-academics-details'>Academics</Title>
                            <hr className='horizonatl-line' />
                            <div className='harshSetpper'>
                                <Steps
                                    progressDot
                                    current={3} // Set to the last actual item index
                                    direction='vertical'
                                    items={[
                                        {
                                            title: 'B.Tech | Computer Science',
                                            description: (
                                                <Row>
                                                    <Row>
                                                        <Col>
                                                            <HomeOutlined className='harsh-eduIcon' />
                                                            D.Y.Patil College of Engg. & Tech. Kolhapur <br />
                                                            <CalendarOutlined className='harsh-eduDate' />
                                                            Sept 2022 - June 2025
                                                        </Col>
                                                    </Row>
                                                </Row>
                                            ),
                                        },
                                        {
                                            title: 'Diploma | Information Technology',
                                            description: (
                                                <Row>
                                                    <Row>
                                                        <Col>
                                                            <HomeOutlined className='harsh-eduIcon' />
                                                            Government Polytechnic kolhapur <br />
                                                            <CalendarOutlined className='harsh-eduDate' />
                                                            Aug 2019 - June 2022
                                                        </Col>
                                                    </Row>
                                                </Row>
                                            ),
                                        },
                                        {
                                            title: 'SSC | High School',
                                            description: (
                                                <Row>
                                                    <Col>
                                                        <HomeOutlined className='harsh-eduIcon' />
                                                        Shree Snt. Dnyaneshwar Highschool Ghungur <br />
                                                        <CalendarOutlined className='harsh-eduDate' />
                                                        June 2018 - July 2019
                                                    </Col>
                                                </Row>
                                            ),
                                        },
                                        {},
                                    ]}
                                />
                            </div>
                        </div>

                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} className='harsh-experienceCol'>
                        <div className='harsh-experience'>
                            <Title level={5} className='harsh-experience-details'>Experience/Internships</Title>
                            <hr className='horizonatl-line' />
                            <div className='harshSetpper2'>
                                <Steps
                                    progressDot
                                    current={2} // Set to the last actual item index
                                    direction='vertical'
                                    items={[
                                        {
                                            title: 'DevMind Software',
                                            description: (
                                                <Row>
                                                    <Col>
                                                        Position: React Developer Intern <br />
                                                        <CalendarOutlined className='harsh-eduDate' />
                                                        Dec 2023 - May 2024
                                                    </Col>
                                                </Row>
                                            ),
                                        },
                                        {
                                            title: 'Comtrans Technology',
                                            description: (
                                                <Row>
                                                    <Col>
                                                        Position: Frontend Developer Intern <br />
                                                        <CalendarOutlined className='harsh-eduDate' />
                                                        June 2023 - July 2023
                                                    </Col>
                                                </Row>
                                            ),
                                        },
                                        {},
                                    ]}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Content>
        </div>
    );
};

export default Education;
