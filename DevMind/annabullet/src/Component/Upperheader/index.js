import React from 'react';
import { Button, Flex, Breadcrumb, Col, Row, Tooltip } from 'antd';
import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";
import './upperheader.css'
const Upperheader = () => {
  return (
    <div className='devminds-upper-header-desktop'>
      <Row>
        <Col xs={12} sm={18} md={18} lg={20} xxl={20}>
          <Flex gap="middle" vertical className='mt-2'>
            <Flex className='media'>
              <Tooltip title="Facebook"> <Button className='mediaicon' shape="circle" size='small' icon={<FaFacebookF />} /></Tooltip>
              <Tooltip title="Twitter"> <Button className='mediaicon' shape="circle" size='small' icon={<FaTwitter />} /></Tooltip>
              <Tooltip title="Google"> <Button className='mediaicon' shape="circle" size='small' icon={<FaGoogle />} /></Tooltip>
              <Tooltip title="LinkedinIn"> <Button className='mediaicon' shape="circle" size='small' icon={<FaLinkedinIn />} /></Tooltip>
              <Tooltip title="Pinterest"> <Button className='mediaicon' shape="circle" size='small' icon={<FaPinterestP />} /></Tooltip>
              <Tooltip title="Youtube"> <Button className='mediaicon' shape="circle" size='small' icon={<CiYoutube />} /></Tooltip>
            </Flex>
          </Flex>
        </Col>


        <Col xs={12} sm={6} md={6} lg={4} xxl={4}>
          <Breadcrumb className='mt-2 media-second'
            items={[
              {
                href: '',
                title: (
                  <>
                    <FaCircleUser className='breadcrumb-icon' />
                    <span className='breadcrumb-text'>Login</span>
                  </>
                ),
              },
              {
                title: (
                  <span className='breadcrumb-text'>Register</span>
                ),
              },
            ]}
          />
        </Col>
      </Row>

    </div>

  );
};
export default Upperheader;