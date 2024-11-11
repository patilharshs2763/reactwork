import React from 'react'
import { Col, Row } from 'antd';
import { Card } from 'antd';
import img1 from "../../Component/Anna Bullet/bike1.jpg"
import img2 from "../../Component/Anna Bullet/bike3.jpg"
import "./Banner.css"

const { Meta } = Card;


const Banner = () => {
    return (
        <div className='container mt-4'>
            <Row gutter={16} className=' mb-2'>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card className='extra mt-2'
                        hoverable
                        style={{
                            width: '100%',
                        }}
                        cover={<img alt="example" src={img1} className='large' />}
                    >
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card className='extra mt-2'
                        hoverable
                        style={{
                            width: '100%',
                        }}
                        cover={<img alt="example" src={img2} />}
                    >
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Banner