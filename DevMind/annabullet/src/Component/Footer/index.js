/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Divider, List, Typography, Button, Flex, Radio, Slider, Breadcrumb, Col, Row } from 'antd';
import { FacebookFilled, TwitterOutlined, GooglePlusOutlined, LinkedinOutlined, PinterestOutlined, YoutubeOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import './footer.css';
const { Title } = Typography;

const data = [
  '5611 Wellington Road, Suite 115, Gainesville',
  '888 9344 6000 - 888 1234 6789.',
  'autostore@magentech.com',
  '7 Days a week from 10-00 am to 6-00 pm',
];

const data1 = [
  'Los Angeles - USA',
  'New York - USA',
  'California - USA',
  'Bangkok - Thailand',
];

const data2 = [
  'Customer Service',
  'Shipping & Returns',
  'Track Your Order',
  'Help Center',
];

const data3 = [
  'Caps & Hats',
  'Hoodies & Sweatshirts',
  'Jacket & Coats',
  'Jumpers & Cardigans',
];
const Footerfunction = () => {
  const [value, setValue] = React.useState('horizontal');
  const [gapSize, setGapSize] = React.useState('small');
  const [customGapSize, setCustomGapSize] = React.useState(0);
  return (
    <>
      <Row className='uppderfooterstyle'>
        <Col lg={6} xl={6} md={6} sm={24}>
          <Title level={4} className='footerheading'>CONTACT   US</Title>
          <List className='mx-3' dataSource={data} renderItem={(item) => (
            <List.Item> {item}
            </List.Item>
          )}
          />
        </Col>
        <Col lg={6} xl={6} md={6} sm={24}>
          <Title level={4} className='footerheading'>STORE LOCATION</Title>
          <List dataSource={data1} renderItem={(item) => (
            <List.Item> {item}
            </List.Item>
          )}
          />
        </Col>
        <Col lg={6} xl={6} md={6} sm={24}> <Title level={4} className='footerheading'>CUSTOMER SERVICE</Title>
          <List dataSource={data2} renderItem={(item) => (
            <List.Item> {item}
            </List.Item>
          )}
          /></Col>
        <Col lg={6} xl={6} md={6} sm={24}> <Title level={4} className='footerheading'>INFORMATION</Title>
          <List dataSource={data3} renderItem={(item) => (
            <List.Item> {item}
            </List.Item>
          )}
          /></Col>
      </Row>


      <Row className='container lowerfooterstyle'>
        {/* <Col span={12}>
          <Flex gap="middle" vertical className='mt-2 uppderheadermedia'>
      {gapSize === 'customize' && <Slider value={customGapSize} onChange={setCustomGapSize} />}
      <Flex gap={gapSize !== 'customize' ? gapSize : customGapSize}>
        <Button className='buttonstyleupperheader'><FacebookFilled /></Button>
        <Button className='buttonstyleupperheader'><TwitterOutlined /></Button>
        <Button className='buttonstyleupperheader'><GooglePlusOutlined /></Button>
        <Button className='buttonstyleupperheader'><LinkedinOutlined /></Button>
        <Button className='buttonstyleupperheader'><PinterestOutlined /></Button>
        <Button className='buttonstyleupperheader'><YoutubeOutlined /></Button>
      </Flex>
    </Flex>
       </Col> */}
      </Row>
    </>
  );
};
export default Footerfunction;