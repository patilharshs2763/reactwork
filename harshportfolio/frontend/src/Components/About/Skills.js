import React from 'react'
import './About.css';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJava, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { Col, Card, Flex, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Typography } from 'antd';
import cppIg from '../Images/cppIg.png';
import cIg from '../Images/cIg.png';
import dsaIg from '../Images/DSA.png';
import antDesignLogo from '../Images/antDesign.png'
import leetLogo from '../Images/leetcodeLogo.png'
import gfgLogo from '../Images/gfgLogoMain.png'
import hackerRankLogo from '../Images/HackerRank.png'
import codingNinjalogo from '../Images/codingNinjasLogo.png'

const { Title } = Typography;
const Skills = () => {
    return (
        <div>
            <Content className='harsh-skillContent'>
                <Row gutter={[12, 12]}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Title level={3} className='harsh-techSkills'>My Expertise Area</Title>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Card bordered={false} hoverable className='harsh-checkou-card'>
                            <Title level={5} className='harsh-checkout-skills'>Skills</Title>
                            <hr className='horizonatl-line' />
                            <Flex justify='center' wrap gap={'large'} >
                                <div className='harsh-skill'><FontAwesomeIcon icon={faHtml5} className="skill-html" />HTML</div>
                                <div className='harsh-skill'><FontAwesomeIcon icon={faCss3Alt} className="skill-css" />CSS</div>
                                <div className='harsh-skill'>
                                    <img src={cIg} alt='CPP Lang' className='harsh-skillCpp' />
                                    C
                                </div>
                                <div className='harsh-skill'>
                                    <img src={cppIg} alt='CPP Lang' className='harsh-skillCpp' />
                                    CPP
                                </div>
                                <div className='harsh-skill'><FontAwesomeIcon icon={faJava} className="skill-java" />Java</div>
                                <div className='harsh-skill'>
                                    <img src={dsaIg} alt='CPP Lang' className='harsh-skillCpp' />
                                    DSA</div>
                                <div className='harsh-skill'><FontAwesomeIcon icon={faReact} className="skill-react" />React Js</div>
                                <div className='harsh-skill'>
                                    <img src={antDesignLogo} alt='AntDesign' className='harsh-skillAntD' />
                                    AntDesign</div>
                                <div className='harsh-skill'><FontAwesomeIcon icon={faBootstrap} className="skill-bootstrap" />BootStrap</div>
                                <div className='harsh-skill'><FontAwesomeIcon icon={faCode} className="skill-mui" />MUI</div>
                            </Flex>

                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} >
                        <Card bordered={false} hoverable className='harsh-checkou-card platformCard'>
                            <Title level={5} className='harsh-checkout-skills'>Coding Platforms</Title>
                            <hr className='horizonatl-line' />
                            <Flex justify='center' wrap gap={'large'} >

                                <div className='harsh-skill skill-platform'>
                                    <img src={leetLogo} alt='CPP Lang' className='harsh-leetCode' />
                                    LeetCode
                                </div>
                                <div className='harsh-skill skill-platform'>
                                    <img src={codingNinjalogo} alt='CPP Lang' className='harsh-codingNinja' />
                                    Coding Ninjas
                                </div>
                                <div className='harsh-skill skill-platform'>
                                    <img src={gfgLogo} alt='CPP Lang' className='harsh-gfg' />
                                    GFG
                                </div>
                                <div className='harsh-skill skill-platform'>
                                    <img src={hackerRankLogo} alt='CPP Lang' className='harsh-hackerrank' />
                                    Hacker Rank
                                </div>
                            </Flex>

                        </Card>
                    </Col>
                </Row>
            </Content>
        </div>
    )
}

export default Skills
