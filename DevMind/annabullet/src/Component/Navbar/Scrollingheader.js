// import React, { useState, useEffect } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row, Typography, Menu } from 'antd';
import { HomeOutlined,ShoppingOutlined ,CameraOutlined,PhoneOutlined,BellOutlined,FileOutlined} from '@ant-design/icons';
// Assuming you're importing CSS for .devminds-visible and .devminds-hidden
import './navbar.css';
const { Title } = Typography;
const ScrollingHeader = () => {
  // State to manage whether the header is scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  // Event listener for scroll events
  const listenScrollEvent = () => {
    if (window.scrollY > 150) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Hook to add/remove scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    // Apply dynamic class based on scroll position
    <div className={isScrolled ? "devminds-visible" : "devminds-hidden"}>
      <Row className='scrollingheaderstyle'>
        <Col span={7}>
          <div className="logo mt-3">
            <Title level={2} className='logofontstyle'>अण्णा बुलेट</Title>
            {/* <h1>अण्णा बुलेट</h1> */}
          </div>
        </Col>
        <Col span={17} className='navbarscrollingdesign'>
          <Menu theme="" mode="horizontal" defaultSelectedKeys={['1']} className='navbaritemforscrollingheader'>
            <Menu.Item key="1" style={{ color: 'black' }} className='menuforscrollingheader'><HomeOutlined className='iconscrollingheader'/> Home</Menu.Item>
            <Menu.Item key="2" style={{ color: 'black' }} className='menuforscrollingheader'><ShoppingOutlined className='iconscrollingheader'/> Shop</Menu.Item>
            <Menu.Item key="3" className='menuforscrollingheader'> <FileOutlined className='iconscrollingheader' /> Pages</Menu.Item>
            <Menu.Item key="4" style={{ color: 'black' }} className='menuforscrollingheader'><CameraOutlined className='iconscrollingheader' /> Gallary</Menu.Item>
            <Menu.Item key="5" style={{ color: 'black' }} className='menuforscrollingheader'> <PhoneOutlined className='iconscrollingheader'/> Contact</Menu.Item>
            <Menu.Item key="6" style={{ color: 'black' }} className='menuforscrollingheader'> <BellOutlined className='iconscrollingheader'/> New Arrivals</Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default ScrollingHeader;
