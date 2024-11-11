import React from 'react';
// import { useState } from 'react';
import { Col, Row, Typography, Input, Space, Button, Flex } from 'antd';
import './lowerheader.css';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';

// const items = [
//     {
//       key: '1',
//       label: (
//         <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
//           1st menu item
//         </a>
//       ),
//     },
//     {
//       key: '2',
//       label: (
//         <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
//           2nd menu item
//         </a>
//       ),
//     },
//     {
//       key: '3',
//       label: (
//         <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
//           3rd menu item
//         </a>
//       ),
//     },
//   ];

const { Title } = Typography;
const { Search } = Input;
// const [size, setSize] = useState('large');
const Functionlowerheader = () => (

  <>
    <Row>
      <Col span={7}>
        <div className="logo mt-3">
          <Title level={2}>अण्णा बुलेट</Title>
        </div>
      </Col>


      <Col span={8}>
        <Space.Compact className='mt-3'>
          <Search addonBefore="All Categories" placeholder="Search Product" allowClear />
        </Space.Compact>
      </Col>


      <Col span={9} className="gutter-row">

        <Flex gap="small" wrap="wrap">
          <Button type="primary" icon={<HeartOutlined />} className='buttonstyle mt-3' />
          <Button type="primary" icon={<ShoppingCartOutlined />} className='mt-3 buttonstyle1' />
          <Button type="primary" className='mt-3 buttonstyle2'>My Cart:$0.00</Button>
        </Flex>

      </Col>
    </Row>
  </>
);
export default Functionlowerheader;