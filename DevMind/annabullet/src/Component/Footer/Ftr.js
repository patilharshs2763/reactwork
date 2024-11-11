import React from 'react'
import "./Ftr.css";
import { Row, Col, Flex,Button } from 'antd';
import { Typography } from 'antd';
import {  PhoneFilled,YoutubeOutlined,FacebookOutlined,InstagramOutlined,HomeOutlined,UserOutlined  } from '@ant-design/icons';

const { Title } = Typography;

const Ftr = () => {
    return (
        <div className='mt-5 footer'>
            <Row gutter={16}>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <Title className='store text-white footerheadingstyle'>अण्णा बुलेट</Title>
                    <p className='storebullet'>bullet spare parts expert</p>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <Title level={3} className='text-white mt-3'>Customer Service</Title>
                    <div className='cservice mt-2'>                   
                    <Title level={5} className='text-white '>Shipping & returns</Title>
                    <Title level={5} className='text-white'>Track your order</Title>
                    <Title level={5} className='text-white'>Help center</Title>
                    <Title level={5} className='text-white'><HomeOutlined /> Home</Title>
                    <Title level={5} className='text-white'> <UserOutlined /> About</Title>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <Title level={3} className='text-white footerheadingstyle2'>Contact Us <PhoneFilled /></Title>
                    <h6 className="email">autostore@magentech.com</h6>
                    <h6 className="address">5611 Wellington Road, Suite 115, Gainesville</h6>
                    <h6 className='number'>888 9344 6000 - 888 1234 6789.</h6>
                    <Flex gap="middle" justify='center'>
                        <Button  className='btnn yutube'><YoutubeOutlined /></Button>
                        <Button  className='btnn facebook' ><FacebookOutlined /></Button>
                        <Button  className='btnn  insta'><InstagramOutlined /></Button>
                    </Flex>
                </Col>
            </Row>
        </div>
    )
}

export default Ftr