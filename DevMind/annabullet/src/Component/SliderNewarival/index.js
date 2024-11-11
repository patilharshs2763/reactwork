import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slickslider.css";
import testimonialsData from "../../Serverdata/testimonialsData";
import { Col, Row, Card, Typography, Button, Rate } from 'antd';
import { FaHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import multicard from '../../image/multicard1.jpg';
import BlockDivWrap from "../BlockDivWrap";
import { RxDotFilled } from "react-icons/rx";


const { Title } = Typography;
const { Meta } = Card;


const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#ff0000",
        right: "0px",
        width: "35px",
        padding: "8px",
        height: "35px",
        borderRadius: "50%",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#ff0000",
        width: "35px",
        padding: "8px",
        height: "35px",
        borderRadius: "50%",
        left: "0px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

const Slickslider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (!testimonialsData || testimonialsData.length === 0) {
    return null;
  }

  return (
    <div className="devmind-desktop-shopbybrands mt-5">
    <BlockDivWrap>
      <div>
          <Title level={5} className='shopbybrands-card-text'>TOP SALE ON THIS WEEK</Title>
          <Title level={2} className='shopbybrands-card-heading'>
            <RxDotFilled className='shopbybrands-card-heading-icon' />BEST SELLERS<RxDotFilled className='shopbybrands-card-heading-icon' /></Title>
        </div>
      <div className="container">
        <Slider {...settings} className="devminnds-messageslider">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="slider-item">
              {/* <img
                src={testimonial.imageUrl}
                alt={`Image ${index + 1}`}
                className="img-fluid devminds-img"
              /> */}

              <Card hoverable className='devmind-slider-card'>
                <div className='image-container'>
                  <img alt="example" src={testimonial.imageUrl} className='devmind-slider-image' />
                  <div className="overlay">
                    <div className="text">
                      <FaSearch />
                    </div>
                  </div>
                </div>
                <Button className='devmind-slider-button hvr-add-to-list'>
                  <span className='button-span-style'><FaHeart /></span>
                  <span className='button-span-style'>ADD TO CART</span>
                  <span className='button-span-style'><FaCodeCompare /></span>
                </Button>
                <div className='main-card'>
                  <Meta title={testimonial.title} description="" className='mt-1 one-line-clamp' />
                      <div>
                        <Rate allowHalf defaultValue={testimonial.rating} />
                      </div>
                  <Title level={5}>42342</Title>
                </div>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
      </BlockDivWrap>
    </div>
  );
};

export default Slickslider;
