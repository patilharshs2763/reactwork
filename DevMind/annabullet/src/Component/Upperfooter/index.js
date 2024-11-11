import React from 'react'
import BlockDivWrap from "../BlockDivWrap";
import { Col, Row, Card, Typography, Button, Rate } from 'antd';
import image from "../../image/upperfooterimg.png"
import './upperfooter.css'
import Dataupperfooter from "../../Serverdata/Datauppderfooter"
const { Title } = Typography;
const Upperfooter = () => {
  console.log("Dataupperfooter", Dataupperfooter)
  return (
    <div className='devmind-upper-footer mt-4'>
      <BlockDivWrap>
      <div>
      <Row>
      {Dataupperfooter && Dataupperfooter.length>0 && Dataupperfooter.map((e,index) =>{
        return(
          <Col xs={24} sm={24} md={12} lg={6} xxl={6} className='mt-1'>
        <Row>
          <Col xs={12} sm={12} md={12} lg={10} xxl={10}>
          <div className='upper-footer-block'>
          <img src={e.image} className='upper-footer-image'/>
          </div>
        
          </Col>
          <Col xs={12} sm={12} md={12} lg={14} xxl={14}>
          <div className='upper-text-block'>
              <Title level={5} className='upper-footer-heading'>{e.heading}</Title>
              <p className='upper-footer-text'>{e.text}</p>
          </div>
          </Col>
        </Row>
      </Col>
        );
      })}
      


      
      {/* <Col xs={12} sm={12} md={12} lg={6} xxl={6}>col-6</Col>
      <Col xs={12} sm={12} md={12} lg={6} xxl={6}>col-6</Col>
      <Col xs={12} sm={12} md={12} lg={6} xxl={6}>col-6</Col> */}
      </Row>
      </div>
     
      </BlockDivWrap>
    </div>
  )
}

export default Upperfooter
