import React from 'react'
import './Aboutus.css';
import { Row, Col } from 'antd';
import heroImg from '../Images/hero.gif'
// import { Link } from 'react-router-dom';
const Aboutus = () => {
    return (
        <div className='container-fluid'>
            <h1>Im in home</h1>
            <div className='container'>
                <Row>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <div className='hero-content'>
                            <p className='nameData'>I'm Harshvardhan</p>
                            <h1 className='headData'>Welcom to Harsh Technical</h1>
                            <p className='descData'>Are you ready to take your business to the next level with cutting-edge IT solution? Look no further! At Harsh Technical, we specialize in providing innovative IT services and solutions tollered to meet your unique needs.</p>
                            {/* <Flex gap="large" wrap="wrap">
                                <Link to={'/contact'} className='btn connect-now-button'>Connect Now</Link>
                                <Link to={'/aboutus'} className='btn  learnmore-button'>Learn More</Link>
                            </Flex> */}
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <img src={heroImg} alt='hero is loading' className='hero-img' />
                    </Col>
                </Row>
            </div>
        </div >
    )
}

export default Aboutus;
