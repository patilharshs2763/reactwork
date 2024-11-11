import React, { useState } from "react";
import { Menu, Button, Layout, Dropdown, Col, Row, Drawer } from "antd";
import { CrownOutlined, MenuOutlined, DownOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import "./AntHeader.css";
const { Header: AntHeader } = Layout;
const AntDNavbar = () => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    const menu = (
        <Menu>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
        </Menu>
    );
    return (
        <AntHeader className="devmind-navbar">
            <div className="devmind-navcontainer">
                <div className="menu-icon" onClick={showDrawer}>
                    <Row>
                        <Col xs={21} sm={21} md={21} lg={24} xl={24}>
                            <a className="devminds-mobile-navbar-brand" href="/">
                                <FontAwesomeIcon icon={faCrown} />
                            </a>
                        </Col>
                        <Col xs={3} sm={3} md={3} lg={24} xl={24}>
                            <div className="devminds-mobile-menuicon">
                                <MenuOutlined className="devmind-menubtn" />
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row className="devmind-row" align="middle">
                    <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                        <Menu mode="horizontal" className="devmind-menu">
                            <Menu.Item key="home">
                                <a href="/" className="devminds-menustitle">
                                    Home
                                </a>
                            </Menu.Item>
                            <Menu.Item key="about">
                                <a href="/" className="devminds-menustitle">
                                    About Us
                                </a>
                            </Menu.Item>
                            <Menu.Item key="resources">
                                <a href="/" className="devminds-menustitle">
                                    Gallary
                                </a>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={7}
                        lg={7}
                        xl={7}
                        className="navbar-brand-col"
                    >
                        <a className="devminds-navbar-brand" href="/">
                            {/* <CrownOutlined /> */}
                            <FontAwesomeIcon icon={faCrown} />
                        </a>
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={7}
                        lg={7}
                        xl={7}
                        className="button-group-col"
                    >
                        <div className="button-group">
                            <Dropdown overlay={menu}>
                                <Button className="devmind-signing">
                                    Signing <DownOutlined />
                                </Button>
                            </Dropdown>
                            <Button className="devmind-getintouch" type="primary">
                                Get in touch
                            </Button>
                        </div>
                        <Drawer
                            title="Royal sign"
                            placement="right"
                            closable={false}
                            onClose={onClose}
                            visible={visible}
                            className="devmind-drawer"
                            width={250}
                        >
                            <Menu mode="vertical">
                                <Menu.Item key="home" onClick={onClose}>
                                    <a href="/" className="devminds-menustitle">
                                        Home
                                    </a>
                                </Menu.Item>
                                <Menu.Item key="about" onClick={onClose}>
                                    <a href="/" className="devminds-menustitle">
                                        About Us
                                    </a>
                                </Menu.Item>
                                <Menu.Item key="resources" onClick={onClose}>
                                    <a href="/" className="devminds-menustitle">
                                        Resources
                                    </a>
                                </Menu.Item>
                            </Menu>
                        </Drawer>
                    </Col>
                </Row>
            </div>
        </AntHeader>
    );
};
export default AntDNavbar;