import React from 'react'
import './ProductShop.css';
import { Button, Card, Col, Row } from 'antd';
import img1 from '../../Component/Anna Bullet/anna-bullet-and-auto-spare-shahupuri-kolhapur-motorcycle-spare-part-dealers-v3dxoifhef.jpg';
import img2 from '../../Component/Anna Bullet/anna-bullet-and-auto-spare-kolhapur-wamege3kih-250.jpg';
import img3 from '../../Component/Anna Bullet/anna-bullet-and-auto-spare-shahupuri-kolhapur-motorcycle-spare-part-dealers-lzddq19og7-250 (1).avif';

const ProductShop = () => {
    return (
        <div className='container mt-5'>
            <Row gutter={[24, 24]}>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <Card hoverable >
                        <img src={img1} alt='product' className='prod-img' />
                        <div className='prod-desc'>
                            <h4>WHEELS</h4>
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
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <Card hoverable>
                        <img src={img2} alt='product' className='prod-img' />
                        <div className='prod-desc'>
                            <h4>WHEELS</h4>
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
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <Card hoverable>
                        <img src={img3} alt='product' className='prod-img' />
                        <div className='prod-desc'>
                            <h4>WHEELS</h4>
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
