import React, { useState } from 'react';
import './mobileheader.css'
import { Col, Row, Button, Drawer,Menu } from 'antd';
import logo from "../../image/logowebsite.png"
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';

const Mobileheader = () => {
    
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className='devmind-mobile-header mt-2 mt-lg-0'>
            <Row>
                <Col xs={12} sm={12} md={12} lg={20} xxl={20}>
                    <div className='mobile-header-logo-block'>
                        <img src={logo}  className='mobile-header-image'/>
                    </div>
                </Col>

                <Col xs={12} sm={12} md={12} lg={4} xxl={4}>
                    <div className='mobile-header-drawer-block'>
                        <Button size="small" onClick={showDrawer} className='mobile-header-button'>
                            <IoMdMenu />
                        </Button>
                        <Drawer title="Anna Bullet" onClose={onClose} open={open}>
                            <Menu theme="light" mode="vertical" defaultSelectedKeys={['2']}>
                             <Menu.Item key="2" className="menu-item-gap"> <Link to={"/"} className='menu-link'>Home </Link> </Menu.Item>
                            <Menu.Item key="3" className="menu-item-gap"><Link to={"/Gallaryfunction"} className='menu-link'>Gallary </Link></Menu.Item>
                            <Menu.Item key="4" className="menu-item-gap"><Link to={"/Contactpage"} className='menu-link'>Contact</Link></Menu.Item>
                        </Menu>
                        </Drawer>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Mobileheader
