import { Button, Card, Col, Row } from 'antd'
import React from 'react'
import './NewArraival.css';
import newArraiv1 from '../ReImages/annabullet1.jpg'
import newArraiv2 from '../ReImages/annaBullt.jpg'
const NewArraival = () => {
    return (
        <div className='container mb-5 mt-5'>
            <Row gutter={[24, 22]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card cover={<img src={newArraiv1} alt='img1' className='new-arraival1' />}>
                        <div className='new-arraivaldisc'>
                            <h5 className='arr-head'>New Arraival</h5>
                            <h1 className='arr-head2'>Bullet Brand Parts</h1>
                            <Button type='primary' danger style={{ width: '45%', marginTop: '8px' }}>SHOP NOW</Button>
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card cover={<img src={newArraiv2} alt='img1' className='new-arraival2' />}>
                        <div className='new-arraivaldisc'>
                            <h5 className='arr-head'>Sale 70% Off</h5>
                            <h1 className='arr-head2'>Lexus Brand Parts</h1>
                            <Button type='primary' danger style={{ width: '45%', marginTop: '8px' }}>SHOP NOW</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div >
    )
}

export default NewArraival
