import React from 'react';
import { Image, Typography, Button, Flex } from 'antd';
import picture1 from "../ReImages/annabulletlogo.jpg";
import { CaretDownOutlined, SearchOutlined } from '@ant-design/icons';
import './carddesign.css';

const { Title } = Typography;

const CardFunction = () => (
  <div className="imageCardContainer mt-4">
    <Image src={picture1} preview={false} className="imagedesign" />
    <div className="carddesign">
      <Title level={3} style={{ color: 'white' }}>Select Your Vehicle</Title>
      <Title level={5} style={{ color: 'white' }}>Over 1,200,000 Automotive and Truck Parts</Title>
      <Flex gap="small" wrap="wrap" justify="center">
        <Button type="primary" className="cardbuttonstyle">Select Maker <CaretDownOutlined /></Button>
        <Button type="primary" className="cardbuttonstyle">Select Model <CaretDownOutlined /></Button>
        <Button type="primary" className="cardbuttonstyle">Select Year <CaretDownOutlined /></Button>
        <Button type="primary" className="cardbuttonstylesearch" icon={<SearchOutlined />}>Search</Button>
      </Flex>
    </div>
  </div>
);

export default CardFunction;
