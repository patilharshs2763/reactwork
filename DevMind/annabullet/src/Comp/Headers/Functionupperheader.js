import React from 'react';
import { Button, Flex,  Slider, Breadcrumb, Col, Row } from 'antd';
import { FacebookFilled, TwitterOutlined, GooglePlusOutlined, LinkedinOutlined, PinterestOutlined, YoutubeOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import './upperheader.css'
const Functionupperheader = () => {
  const [gapSize, setGapSize] = React.useState('small');
  const [customGapSize, setCustomGapSize] = React.useState(0);
  return (
    <div className='uppderheader'>

      <Row>
        <Col span={12}>
          <Flex gap="middle" vertical className='mt-2'>
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
        </Col>


        <Col span={4} offset={8}>
          <Breadcrumb className='mt-2'
            items={[
              //   {
              //     href: '',
              //     title: <HomeOutlined />,
              //   },
              {
                href: '',
                title: (
                  <>
                    <UserOutlined className="crumbstyleicon" />
                    <span className='crumbstyle'>Login</span>
                  </>
                ),
              },
              {
                // title: 'Application',
                title: (
                  <span className="crumbstyle">Register</span>
                ),
              },
            ]}
          />
        </Col>
      </Row>

    </div>

  );
};
export default Functionupperheader;