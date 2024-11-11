import React from 'react'
import './ProductShop.css';
import { Button, Card, Col, Row } from 'antd';
import img1 from '../ReImages/re12wheels.jpg'
const ProductShop = () => {
    return (
        <div className='container '>
            <Row gutter={[24, 24]}>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Card hoverable >
                        <img src={img1} alt='product' className='prod-img' />
                        <div className='prod-desc'>
                            <h6 className='h6Head'>WHEELS</h6>
                            <ul>
                                <li> Tires</li>
                                <li>Tires Accessories</li>
                                <li> Tire Chains</li>
                                <li> Wheels</li>
                                <li>Wheels Accessories</li>
                            </ul>
                            <Button size='small' className='viewebuton'>View More</Button>
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Card hoverable>
                        <img src={img1} alt='product' className='prod-img' />
                        <div className='prod-desc'>
                            <h6 className='h6Head'>WHEELS</h6>
                            <ul>
                                <li> Tires</li>
                                <li>Tires Accessories</li>
                                <li> Tire Chains</li>
                                <li> Wheels</li>
                                <li>Wheels Accessories</li>
                            </ul>
                            <Button size='small' className='viewebuton'>View More</Button>
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Card hoverable>
                        <img src={img1} alt='product' className='prod-img' />
                        <div className='prod-desc'>
                            <h6 className='h6Head'>WHEELS</h6>
                            <ul>
                                <li> Tires</li>
                                <li>Tires Accessories</li>
                                <li> Tire Chains</li>
                                <li> Wheels</li>
                                <li>Wheels Accessories</li>
                            </ul>
                            <Button size='small' className='viewebuton'>View More</Button>
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Card hoverable>
                        <img src={img1} alt='product' className='prod-img' />
                        <div className='prod-desc'>
                            <h6 className='h6Head'>WHEELS</h6>
                            <ul>
                                <li> Tires</li>
                                <li>Tires Accessories</li>
                                <li> Tire Chains</li>
                                <li> Wheels</li>
                                <li>Wheels Accessories</li>
                            </ul>
                            <Button size='small' className='viewebuton'>View More</Button>
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Card hoverable>
                        <img src={img1} alt='product' className='prod-img' />
                        <div className='prod-desc'>
                            <h6 className='h6Head'>WHEELS</h6>
                            <ul>
                                <li> Tires</li>
                                <li>Tires Accessories</li>
                                <li> Tire Chains</li>
                                <li> Wheels</li>
                                <li>Wheels Accessories</li>
                            </ul>
                            <Button size='small' className='viewebuton'>View More</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProductShop
