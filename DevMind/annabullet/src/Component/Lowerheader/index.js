import React from 'react';
import { Col, Row, Typography, Input, Space, Button } from 'antd';
// import './lowerheader.css';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Search } = Input;

const Functionlowerheader = () => (
  <Row align="middle" className="lower-header">
    <Col xs={24} sm={24} md={8} lg={6}>
      <div className="logo mt-3">
        <Title level={2} className='logofontstyle'>अण्णा बुलेट</Title>
      </div>
    </Col>
    <Col xs={24} sm={24} md={12} lg={12}>
      <Space className='mt-3 lowerheadermediastyle'>
        <Search addonBefore="All Categories" placeholder="Search Product" allowClear />
      </Space>
    </Col>
    <Col xs={24} sm={24} md={4} lg={6}>
      <Space className='mt-3 lowerheadermediastyle' align="end">
        <Button type="primary" icon={<HeartOutlined />} className='buttonstyle' />
        <Button type="primary" icon={<ShoppingCartOutlined />} className='buttonstyle' />
        <Button type="primary" className='buttonstyle'>My Cart: $0.00</Button>
      </Space>
    </Col>
  </Row>
);

export default Functionlowerheader;
