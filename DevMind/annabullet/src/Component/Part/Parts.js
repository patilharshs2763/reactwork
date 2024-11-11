import React from 'react';
import { Col, Row } from 'antd';
import { Card } from 'antd';
import "./Parts.css";
import { partsData } from '../severdata/PartsData';

const Parts = () => {
    return (
        <div className='container mt-5'>
            <p className='text-danger'>TOP SALES ON THIS WEEK</p>
            <div class="word-container">
                <span class="dot"></span>
                <h1><span class="word">BEST SELLERS</span></h1>
                <span class="dot"></span>
            </div>

            <Row gutter={[16, 12]}>
                {partsData.map((part, index) => (
                    <Col key={index} xs={24} sm={24} md={12} lg={6} xl={6}>
                        <Card
                            className='sparepart hvr-underline-from-center'
                            hoverable
                            style={{ width: "100%" }}
                            cover={<img alt={`example-${index}`} src={part.image} style={{ height: '180px' }} />}
                        >
                            <div>
                                <hr />
                                <p className='sparetitle'>{part.title}</p>
                                <p>{part.rating}</p>
                                <p className='spareprice'>{part.price}</p>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Parts;
