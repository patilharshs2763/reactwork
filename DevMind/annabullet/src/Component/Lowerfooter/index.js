import React from 'react'
import { Typography, Col, Row, List } from 'antd'
import BlockDivWrap from "../BlockDivWrap";
import Datalowerfooter from "../../Serverdata/Datalowerfooter"
import './lowerfooter.css'
const { Title } = Typography;
const Lowerfooter = () => {
    console.log("Datalowerfooter", Datalowerfooter);
    return (
        <div className='devmind-lower-footer mt-5'>
            <BlockDivWrap>
                <Row gutter={[16, 16]}>
                    {Datalowerfooter && Datalowerfooter.length > 0 && Datalowerfooter.map((e, index) => {
                        return (
                            <Col xs={24} sm={24} md={12} lg={6} xxl={6}>
                                <div style={{marginLeft:'10px'}}>
                                    <Title level={4} className='lower-footer-heading'>{e.heading}</Title>
                                    <List className='lower-footer-list' dataSource={e.subitems} renderItem={(item) => (
                                        <List.Item className='lower-footer-item'> {item.icon} {item.text} </List.Item>)} />
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </BlockDivWrap>
        </div>
    )
}

export default Lowerfooter
