import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import img19 from "../AutoImages/img19.avif"
import img from "../../image/bike1.jpg"


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
    slidesToScroll: 4,
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
       <p className='text-danger'>TOP QUALITY PARTNER</p>
            <h1><span className='text-danger'>.</span>SHOP BY BRANDS<span className='text-danger'>.</span></h1>
      <Slider {...settings}>
        <div className="border border-dark">
          <h3><img src={img} /></h3>
        </div>
        <div className="border border-dark">
          <h3><img src={img} /></h3>
        </div>
        <div className="border border-dark">
          <h3><img src={img} /></h3>
        </div>
        <div className="border border-dark">
          <h3><img src={img} /></h3>
        </div>
        <div className="border border-dark">
          <h3><img src={img} /></h3>
        </div>
      </Slider>
    </div>
  );
}

export default Sliderfunction;
