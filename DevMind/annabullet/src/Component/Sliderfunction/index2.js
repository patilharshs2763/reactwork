import React from "react";
import Slider from "react-slick";
import { Col, Row, Card, Typography, Button,Rate } from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderfunction.css"
import multicard from "../../image/bike1.jpg"
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const { Title } = Typography;
const { Meta } = Card;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",background: "grey" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}
function Sliderfunction() {
  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    
    <div className="slider-container container mt-4 mb-2">
      <Slider {...settings}>
        <div className="border border-dark">
          <h3 className="stores"><img src={multicard} style={{height: '100%',width: "100%"}}/></h3>
        </div>
        <div className="border border-dark">
          <h3 className="stores"><img src={multicard} style={{height: '100%',width: "100%"}}/></h3>
        </div>
        <div className="border border-dark">
          <h3 className="stores"><img src={multicard} style={{height: '100%',width: "100%"}}/></h3>
        </div>
        <div className="border border-dark">
          <h3 className="stores"><img src={multicard} style={{height: '100%',width: "100%"}}/></h3>
        </div>
        <div className="border border-dark">
          <h3 className="stores"><img src={multicard} style={{height: '100%',width: "100%"}}/></h3>
        </div><div className="border border-dark">
          <h3 className="stores"><img src={multicard} style={{height: '100%',width: "100%"}}/></h3>
        </div><div className="border border-dark">
          <h3 className="stores"><img src={multicard} style={{height: '100%',width: "100%"}}/></h3>
        </div>
      </Slider>
    </div>
  );
}

export default Sliderfunction;
