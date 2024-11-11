import React from 'react'
import { Col, Row } from 'antd';
import './Dedication.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Commonbtn from '../CommonBtns/Commonbtn';

const Dedication = () => {
    return (
        <>
            <Row className='container py-3'>
                <Col xs={24} sm={24} md={4} lg={6} xl={6}></Col>
                <Col xs={24} sm={24} md={16} lg={12} xl={12}>
                    <h3 className='devminds-goalhead'>Our dedication</h3>
                    <h3 className='devminds-goalheadcur'>enriching urban<br /> environments.</h3>
                    <p className='devminds-focus'>Our focus is on providing engaging content, convenient services,
                        and powerful advertising solutions tailored to the pulse of city life</p>
                    <Commonbtn text="Find Audience" endIcon={<SendIcon />} className="devmind-dedicationbtn"/>
                </Col>
                <Col xs={24} sm={24} md={4} lg={6} xl={6}></Col>
            </Row>
        </>
    )
}

export default Dedication