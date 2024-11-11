import React from 'react'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Col, Row, Card, Typography, Button, Rate } from 'antd';
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import multicard from '../../image/multicard1.jpg';
import BlockDivWrap from "../BlockDivWrap"
import './shopbybrands.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
const { Title } = Typography;
const { Meta } = Card;


export default function App() {

    return (
      <div className='devmind-desktop-shopbybrands mt-5'>
      <BlockDivWrap>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <Card hoverable  className='devmind-slider-card'>
            <div className='image-container'>
                        <img alt="example" src={multicard} className='devmind-slider-image' />
                        <div className="overlay">
                          <div className="text">
                            <FaSearch />
                          </div>
                        </div>
                      </div>
                      <Button className='devmind-slider-button'>
                        <span className='button-span-style'><FaHeart /></span>
                        <span className='button-span-style'>ADD TO CART</span>
                        <span className='button-span-style'><FaCodeCompare /></span>
                      </Button>
                      <div className='main-card'>
                        <Meta title="ACDELCO 335 PROFESSIONAL" description="" className='mt-1 one-line-clamp' />
                        <div>
                          <Rate allowHalf defaultValue='3' />
                        </div>
                        <Title level={5}>42342</Title>
                      </div>
  
            </Card>
          </SwiperSlide>
  
          <SwiperSlide>
            <Card hoverable  className='devmind-slider-card'>
            <div className='image-container'>
                        <img alt="example" src={multicard} className='devmind-slider-image' />
                        <div className="overlay">
                          <div className="text">
                            <FaSearch />
                          </div>
                        </div>
                      </div>
                      <Button className='devmind-slider-button'>
                        <span className='button-span-style'><FaHeart /></span>
                        <span className='button-span-style'>ADD TO CART</span>
                        <span className='button-span-style'><FaCodeCompare /></span>
                      </Button>
                      <div className='main-card'>
                        <Meta title="ACDELCO 335 PROFESSIONAL" description="" className='mt-1 one-line-clamp' />
                        <div>
                          <Rate allowHalf defaultValue='3' />
                        </div>
                        <Title level={5}>42342</Title>
                      </div>
  
            </Card>
          </SwiperSlide>
  
  
          <SwiperSlide>
            <Card hoverable  className='devmind-slider-card'>
            <div className='image-container'>
                        <img alt="example" src={multicard} className='devmind-slider-image' />
                        <div className="overlay">
                          <div className="text">
                            <FaSearch />
                          </div>
                        </div>
                      </div>
                      <Button className='devmind-slider-button'>
                        <span className='button-span-style'><FaHeart /></span>
                        <span className='button-span-style'>ADD TO CART</span>
                        <span className='button-span-style'><FaCodeCompare /></span>
                      </Button>
                      <div className='main-card'>
                        <Meta title="ACDELCO 335 PROFESSIONAL" description="" className='mt-1 one-line-clamp' />
                        <div>
                          <Rate allowHalf defaultValue='3' />
                        </div>
                        <Title level={5}>42342</Title>
                      </div>
  
            </Card>
          </SwiperSlide>
  
  
          <SwiperSlide>
            <Card hoverable  className='devmind-slider-card'>
            <div className='image-container'>
                        <img alt="example" src={multicard} className='devmind-slider-image' />
                        <div className="overlay">
                          <div className="text">
                            <FaSearch />
                          </div>
                        </div>
                      </div>
                      <Button className='devmind-slider-button'>
                        <span className='button-span-style'><FaHeart /></span>
                        <span className='button-span-style'>ADD TO CART</span>
                        <span className='button-span-style'><FaCodeCompare /></span>
                      </Button>
                      <div className='main-card'>
                        <Meta title="ACDELCO 335 PROFESSIONAL" description="" className='mt-1 one-line-clamp' />
                        <div>
                          <Rate allowHalf defaultValue='3' />
                        </div>
                        <Title level={5}>42342</Title>
                      </div>
  
            </Card>
          </SwiperSlide>
  
  
          <SwiperSlide>
            <Card hoverable  className='devmind-slider-card'>
            <div className='image-container'>
                        <img alt="example" src={multicard} className='devmind-slider-image' />
                        <div className="overlay">
                          <div className="text">
                            <FaSearch />
                          </div>
                        </div>
                      </div>
                      <Button className='devmind-slider-button'>
                        <span className='button-span-style'><FaHeart /></span>
                        <span className='button-span-style'>ADD TO CART</span>
                        <span className='button-span-style'><FaCodeCompare /></span>
                      </Button>
                      <div className='main-card'>
                        <Meta title="ACDELCO 335 PROFESSIONAL" description="" className='mt-1 one-line-clamp' />
                        <div>
                          <Rate allowHalf defaultValue='3' />
                        </div>
                        <Title level={5}>42342</Title>
                      </div>
  
            </Card>
          </SwiperSlide>
        </Swiper>
  
      </BlockDivWrap>
       
      </div>
    );
}
