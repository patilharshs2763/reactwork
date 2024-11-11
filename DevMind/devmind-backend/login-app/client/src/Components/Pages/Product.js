import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import './ProductStyle.css';
import iPhone1 from '../Images/iphoneW.png';
import iPhone2 from '../Images/iphoneP.png';
import iPhone3 from '../Images/iphoneG.png';
import iPhone4 from '../Images/iphoneB.png';
import iPhone5 from '../Images/iphoneY.png';

const { Meta } = Card;

const products = [
    { img: iPhone1, title: "iPhone 15 White", description: "www.instagram.com" },
    { img: iPhone2, title: "iPhone 15 Pink", description: "www.instagram.com" },
    { img: iPhone3, title: "iPhone 15 Green", description: "www.instagram.com" },
    { img: iPhone4, title: "iPhone 15 Black", description: "www.instagram.com" },
    { img: iPhone5, title: "iPhone 15 Yellow", description: "www.instagram.com" },
];

export const Product = () => {
    return (
        <div className='productsCard'>
            <h1>Products</h1>
            <Row gutter={[12, 12]}>
                {products.map((product, index) => (
                    <Col
                        key={index}
                        className="productCol"
                        xs={24}
                        sm={24}
                        md={8}
                        lg={6}
                    >
                        <div className="cardClass">
                            <Card hoverable>
                                <img src={product.img} alt='product' className='iphoneimg' />
                                <Meta title={product.title} description={product.description} />
                                <Button className="buyBtn">Buy Now</Button>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};
