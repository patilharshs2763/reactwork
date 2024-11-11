import React from 'react'
import { Col, Row, Button, Input, Select, Space, Cascader, Flex, Radio, Badge } from 'antd';
import './desktopheader.css'
import mainlogo from "../../image/logowebsite.png"
import { FaHeart, FaShoppingBasket,FaSearch } from "react-icons/fa";

const { Option } = Select;
const Desktopheader = () => {
  const selectBefore = (
    <Select defaultValue="http://">
      <Option value="http://">All Categories</Option>
      <Option value="https://">https://</Option>
    </Select>
  );
  return (
    <>
    <div className='devminds-desktop-header'>
      <Row>
        <Col xs={1} sm={1} md={1} lg={1} xxl={1}></Col>
        <Col xs={5} sm={5} md={5} lg={5} xxl={5} >
          <img className='image-logo' src={mainlogo} />
        </Col>

        <Col xs={12} sm={12} md={9} lg={11} xxl={12}>
          <Input className='space-style' addonBefore={selectBefore} addonAfter={<FaSearch className='space-icon'/> } defaultValue="Search Product..." size='large' />
        </Col>

        <Col xs={5} sm={5} md={8} lg={6} xxl={5}>
          <div className='button-style'>
            <Flex gap="small" wrap className='button-flex'>
              <Button icon={<FaHeart className='button-icon'/>} size='large'  className='button-flex-hover'/>
              <Radio.Group size='large' className='button-flex-hover'>
                <Badge size="default" count={1}>
                  <Radio.Button value="a">{<FaShoppingBasket className='button-icon'/>}</Radio.Button>
                </Badge>
                <Radio.Button value="b" className='flex-text'>My Cart:₹8.00</Radio.Button>
              </Radio.Group>
            </Flex>
          </div>
        </Col>

        <Col xs={1} sm={1} md={1} lg={1} xxl={1}></Col>
      </Row>
    </div>
      </>
  )
}

export default Desktopheader
