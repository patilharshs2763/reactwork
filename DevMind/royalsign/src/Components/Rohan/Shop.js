import React from 'react';
import "./Shop.css"
import RB from "./Images/RB.jpg"
import { Col, Row } from 'antd';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import AOS from 'aos';
import Commonbtn from './Commonbtn';

const Shop = () => {
    return (
        <div className='container devminds-sign-shop'>
            <div>
                <Row>
                    <Col xs={24} sm={24} md={16} lg={16} xl={16} >
                        <h4 className='devminds-shop'>The sign shop provides </h4>
                        <h4 className='devminds-shops'>innovative and lively designs</h4>
                        <p className='devminds-shop-para'> The sign shop knows how to boost your sales or business. We will
                            use its techniques of innovation to design a perfect sign for your
                            business that will uttract your  customers. We deal with anything
                            that includes graphics Uke posters, banners, and brochures.
                            Contact us for more information</p>
                        <Commonbtn text="call now" endIcon={<SendIcon />}className="devminds-btns" />
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} className='devminds-rb'>
                        <img src={RB} alt="shop" className='devminds-shop-img' />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Shop;
