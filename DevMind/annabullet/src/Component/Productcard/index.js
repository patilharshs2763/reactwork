import React, { useEffect } from 'react';
import { Col, Row, Card, Typography, Button,Rate } from 'antd';
import multicard from '../../image/multicard1.jpg'
import './productcard.css'
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import Dataproduct from "../../Serverdata/Dataproduct";
import BlockDivWrap from "../BlockDivWrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

const { Title } = Typography;
const { Meta } = Card;

const Productcard = () => {
  console.log("Dataproduct", Dataproduct);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  },);

  return (
    <div className='devmind-desktop-Product-card mt-3'>
      {/* <Row justify="center" gutter={[16, 16]}> */}
      <div>
        <Title level={5} data-aos="fade-right" className='product-card-text'>TOP SALE ON THIS WEEK</Title>
        <Title level={2} className='product-card-heading'>
          <RxDotFilled className='product-card-heading-icon' />BEST SELLERS<RxDotFilled className='product-card-heading-icon' /></Title>
      </div>

          <BlockDivWrap>
          <Row gutter={[16, 16]}>
              {Dataproduct && Dataproduct.length > 0 && Dataproduct.map((e, index) => {
           return (
                <Col xs={24} sm={24} md={12} lg={6} xxl={6}>
                  <Card hoverable bordered={false} className='devminds-product-card'>
                    <div className='image-container'>
                      <img alt="example" src={e.img} className='devminds-product-image' />
                      <div className="overlay">
                        <div className="text">
                          <FaSearch />
                        </div>
                      </div>
                    </div>
                    <Button className='Product-card-button'>
                      <span className='button-span-style'><FaHeart /></span>
                      <span className='button-span-style'>ADD TO CART</span>
                      <span className='button-span-style'><FaCodeCompare /></span>
                    </Button>
                    <div className='main-card'>
                      <Meta title={e.title} description="" className='mt-1 one-line-clamp' />
                      <div>
                        <Rate allowHalf defaultValue={e.rating} />
                      </div>
                      <Title level={5}>{e.price}</Title>
                    </div>
                  </Card>
                </Col>
              );
          })}
              </Row>
          </BlockDivWrap>
            
       
      
    </div>
  )
}

export default Productcard
