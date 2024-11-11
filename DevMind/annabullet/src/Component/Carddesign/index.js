import React from 'react'
import { Col, Row, Typography, Flex, Button } from 'antd';
import cardimage from "../../image/cardimge.jpg"
import './carddesign.css'
import { FaSearch } from "react-icons/fa";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
const { Title } = Typography;

const Carddesign = () => {
  return (
    <div className='devmind-cardesign-desktop'>
      {/* <Row>
      <Col xs={1} sm={1} md={1} lg={1} xxl={1}></Col>

      <Col xs={22} sm={22} md={22} lg={22} xxl={22} className='mt-5'>
      <div className='main-div'>
      <img src={cardimage} className='cardimage'/>
      </div>

        <div className='second-div'>
        <Title className='carddesign-text'>Select Your Vehicle</Title>
        <Title level={5} className='carddesign-text'>Over 1,200,000 Automotive and Truck Parts</Title>
        <Row>
            <Col xs={12} sm={12} md={6} lg={6} xxl={6}> 
                <Button type="default" size='large' className='card-button'>Select Maker<span className='card-menu-button'><MdOutlineArrowDropDownCircle /></span></Button>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xxl={6}>
            <Button type="default" size='large' className='card-button'>Select Model<span className='card-menu-button'><MdOutlineArrowDropDownCircle /></span></Button>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xxl={6}>
                  <Button type="default" size='large' className='card-button'>Select Year<span className='card-menu-button'><MdOutlineArrowDropDownCircle /></span></Button>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xxl={6}>
                <Button type="default" size='large' className='card-button'>Search<span className='card-menu-button'><FaSearch /></span></Button>
            </Col>
        </Row>
        </div>
      </Col>
      <Col xs={1} sm={1} md={1} lg={1} xxl={1}></Col>
    </Row> */}

      <Row>
          <Col xs={1} sm={1} md={1} lg={1} xxl={1}></Col>
          <Col xs={22} sm={22} md={22} lg={22} xxl={22} className='mt-4'>
            <div className='background-photo'>
                <Title className='carddesign-text'>Select Your Vehicle</Title>
                <Title level={5} className='carddesign-text-sub'>Over 1,200,000 Automotive and Truck Parts</Title>
              <Row>
                <Col xs={24} sm={12} md={12} lg={6} xxl={6} className='mt-2'>
                  <Button type="default" size='large' className='card-button'>Select Maker<span className='card-menu-button'><MdOutlineArrowDropDownCircle /></span></Button>
                </Col>

                <Col xs={24} sm={12} md={12} lg={6} xxl={6} className='mt-2'>
                  <Button type="default" size='large' className='card-button'>Select Model<span className='card-menu-button'><MdOutlineArrowDropDownCircle /></span></Button>
                </Col>

                <Col xs={24} sm={12} md={12} lg={6} xxl={6} className='mt-2'>
                  <Button type="default" size='large' className='card-button'>Select Year<span className='card-menu-button'><MdOutlineArrowDropDownCircle /></span></Button>
                </Col>

                <Col xs={24} sm={12} md={12} lg={6} xxl={6} className='mt-2'>
                  <Button type="default" size='large' className='card-button-search'><span className='card-menu-button'><FaSearch /></span>Search</Button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={1} sm={1} md={1} lg={1} xxl={1}></Col>
      </Row>
    </div>
  )
}

export default Carddesign
