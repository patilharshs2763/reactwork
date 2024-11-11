import React from 'react'
import { Col, Row, Button, Flex, Menu, Dropdown ,Typography } from 'antd';
import { IoMenu } from "react-icons/io5";
import { CaretDownOutlined } from '@ant-design/icons';
import { FaStar } from "react-icons/fa";
import './categories.css'
import navimage from '../../image/cardimge.jpg'
import { Link } from 'react-router-dom';
const { Title } = Typography;
const CategoriesNavbar = () => {

  const menu = (
    <Menu>
      <Menu.Item key="1" className="menu-item">Category 1</Menu.Item>
    <Menu.SubMenu key="sub1" title="Category 2" className="menu-item">
      <Row>
        <Col xs={12} sm={12} md={8} lg={8} xxl={8}>
          <Menu.ItemGroup title="WHEELS & TIRES">
            <Menu.Item key="2-1" className="menu-item">Tires Accessories</Menu.Item>
            <Menu.Item key="2-2" className="menu-item">Wheels Accessories</Menu.Item>
            <Menu.Item key="2-3" className="menu-item">Wheels Accessories</Menu.Item>
            <Menu.Item key="2-4" className="menu-item">Bluetooth Devices</Menu.Item>

            <Menu.ItemGroup title="SMART DEVICES">
            <Menu.Item key="2-5" className="menu-item">Lens Tape/Repair</Menu.Item>
            <Menu.Item key="2-6" className="menu-item">Wheels Accessories</Menu.Item>
            <Menu.Item key="2-7" className="menu-item">Wheels Accessories</Menu.Item>
          </Menu.ItemGroup>

            

          </Menu.ItemGroup>
        </Col>
        <Col xs={12} sm={12} md={8} lg={8} xxl={8}>
          <Menu.ItemGroup title="LIGHTS & LIGHTING">
            <Menu.Item key="2-8" className="menu-item">Rotating Warning Light</Menu.Item>
            <Menu.Item key="2-9" className="menu-item">Lens Tape/Repair</Menu.Item>
          </Menu.ItemGroup>

          <Menu.ItemGroup title="SMART DEVICES">
            <Menu.Item key="2-10" className="menu-item">Bluetooth Devices</Menu.Item>
            <Menu.Item key="2-11" className="menu-item">Lens Tape/Repair</Menu.Item>
            <Menu.Item key="2-12" className="menu-item">Lens Tape/Repair</Menu.Item>
            <Menu.Item key="2-13" className="menu-item">Lens Tape/Repair</Menu.Item>

          </Menu.ItemGroup>
        </Col>
        <Col xs={12} sm={12} md={8} lg={8} xxl={8} style={{ textAlign: 'center' }}>
          <img src={navimage} alt="Image" className='navimage'/>
          <div style={{textAlign:'start'}}>
          <Title level={5} >CAR PRECEDENT LED HEADLIGHT</Title>
          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          <Title level={5}>$86.00</Title>
          </div>
          
        </Col>
      </Row>
    </Menu.SubMenu>
    <Menu.Item key="3" className="menu-item">Category 3</Menu.Item>
    <Menu.Item key="4" className="menu-item">Category 4</Menu.Item> 
    <Menu.Item key="5" className="menu-item">Category 5</Menu.Item>
    </Menu>
  );

  return (
    <div className='devmind-desktop-categoriesNavbar'>
      <Row>
        <Col xs={1} sm={1} md={1} lg={1} xxl={1}></Col>
        <Col xs={5} sm={5} md={5} lg={5} xxl={5} className='mt-4'>
          <Flex>
            <Dropdown overlay={menu} trigger={['hover']}>
              <Button type="default" size='large' className='category-button'>
             All Categories
                <span className='category-menu-button'><IoMenu /></span>
              </Button>
            </Dropdown>
          </Flex>
        </Col>

        <Col xs={17} sm={17} md={17} lg={17} xxl={17} className='mt-4'>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="2" className="menu-item-gap"> <Link to={"/"} className='menu-link'>Home </Link> </Menu.Item>
            <Menu.Item key="3" className="menu-item-gap">Shop</Menu.Item>
            <Menu.SubMenu key="sub1" className="menu-item-gap" title={<span  >Parts <CaretDownOutlined /> </span>}>
              <Menu.Item key="4-1" className="menu-item-gap">About</Menu.Item>
              <Menu.Item key="4-2" className="menu-item-gap">Our Team</Menu.Item>
              <Menu.Item key="4-3" className="menu-item-gap">Faq</Menu.Item>
              <Menu.Item key="4-4" className="menu-item-gap">404</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="5" className="menu-item-gap"><Link to={"/Gallaryfunction"} className='menu-link'>Gallary </Link></Menu.Item>
            <Menu.Item key="6" className="menu-item-gap"><Link to={"/Contactpage"} className='menu-link'>Contact</Link></Menu.Item>
            <Menu.Item key="7" className="menu-item-gap">New Arravals</Menu.Item>
          </Menu>
        </Col>
        <Col xs={1} sm={1} md={1} lg={1} xxl={1}></Col>
      </Row>
    </div>
  )
}

export default CategoriesNavbar
