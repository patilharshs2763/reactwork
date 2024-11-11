import React from 'react';
import { Card, Row, Col, Typography, Button } from 'antd';
import './multiplecarddesign.css';
import { cardImages } from '../severdata/CardsImages';
const { Title } = Typography;
const Functionmultiplecarddesign = () => {
    return (
        <>
            <div className='container'>
                <Title level={5} style={{ color: 'orangered' }} className='mt-4'>TOP FEATURED COLLECTIONS</Title>
                <Title style={{ marginTop: '0' }} className='multiplecardheader'>SHOP BY CATEGORIES</Title>
                <div className=''>
                    <Row gutter={[16, 16]}>
                        {cardImages.map((data, index) => (
                            <Col lg={8} xl={8} md={12} sm={24} key={index}>
                                <Card className='multiplecardstyle multicardhovereffect'>
                                    <Row>
                                        <Col span={12}>
                                            <img src={data.image} alt={`Card ${index}`} className='d-block w-100 multiplecardimage' />
                                        </Col>
                                        <Col span={12}>
                                            <Title level={5} className='multiplecardheading'>{data.title}</Title>
                                            <ul className='unorderedlist'>
                                                <li className='unorderedlistitems'>{data.item1}</li>
                                                <li className='unorderedlistitems'>{data.item2}</li>
                                                <li className='unorderedlistitems'>{data.item3}</li>
                                                <li className='unorderedlistitems'>{data.item4}</li>
                                                <li className='unorderedlistitems'>{data.item5}</li>
                                            </ul>
                                            <Button type="primary" className='multiplecardbutton'> View More</Button>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>

            </div>
        </>
    );

};

export default Functionmultiplecarddesign;
