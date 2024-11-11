import React from 'react'
import "./Signs.css"
import { Col, Row } from 'antd';
import { Card } from 'antd';
import drill from "./Images/drill.jpg"
import sign from "./Images/sign.jpg"
import poster from "./Images/poster.jpg"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Commonbtn from './Commonbtn';
import { Flex } from 'antd';

const { Meta } = Card;

const Signs = () => {
    return (
        <div className='container my-3 devminds-types-sign'>
            <Row gutter={12}>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} >
                    <Card className='devminds-signs-card'>
                        <img alt="example" src={drill} className='signimg' />
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <Card className='devminds-signs-card'>
                        <img alt="example" src={sign} className='signimg' />
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <Card className='devminds-signs-card'>
                        <img alt="example" src={poster} className='signimg' />
                    </Card>
                </Col>
            </Row>
            <Row className='mt-2 devminds-resign'>
                <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                    <div className='devminds-quoat-contain'>
                        <h4 className='devminds-sign'>We make all type of </h4>
                        <h4 className='devminds-comsigns'>Commercial signs</h4>
                        <p className='devminds-quoat'> We collaborate with you to understand your needs and carefully
                            craft your signage using professional materials and techniques.
                            We  put our customers are at the heart of everything we do, so
                            we ensure exceptional quality as well as competitive prices. Plus,
                            if you have acquired a quote from any other sign maker,
                            we guarantee to beat it. For further information, or to learn more,
                            please speak with one of our team members today.</p>
                        <Commonbtn text="Request a qouat" endIcon={<SendIcon />} className="devminds-reqest" />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} className='px-1 mt-1'>
                    <Flex justify='justify' align='alignItems' vertical>
                        <Button className='devminds-signage firstbtn' variant="contained" endIcon={<SendIcon className='devminds-icon' />}>
                            LED Signage
                        </Button>
                        <Button className='devminds-signage' variant="contained" endIcon={<SendIcon className='devminds-icon' />}>
                            3D Signage
                        </Button>
                        <Button className='devminds-signage' variant="contained" endIcon={<SendIcon className='devminds-icon' />}>
                            Acrylic Signage
                        </Button>
                        <Button className='devminds-signage' variant="contained" endIcon={<SendIcon className='devminds-icon' />}>
                            Metal Signage
                        </Button>
                    </Flex>
                </Col>
            </Row>
        </div>
    )
}

export default Signs