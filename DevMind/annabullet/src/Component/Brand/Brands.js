import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img15 from "../../Component/Anna Bullet/anna-bullet-and-auto-spare-kolhapur-1xjsm-250.jpg"
import img16 from "../../Component/Anna Bullet/anna-bullet-and-auto-spare-kolhapur-8h2oz-250.jpg"
import img17 from "../../Component/Anna Bullet/anna-bullet-and-auto-spare-kolhapur-cfiub1hpra-250.jpg"
import img18 from "../../Component/Anna Bullet/anna-bullet-and-auto-spare-kolhapur-cnsmi20i2g-250.jpg"
// import img19 from "../AutoImages/img19.avif"
import img20 from "../../Component/Anna Bullet/anna-bullet-and-auto-spare-kolhapur-wamege3kih-250.jpg"
import "./Brands.css"


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} devmind-arr dev-NextArrow`}
      style={style}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} devmind-arr dev-PrevArrow`}
      style={style}
      onClick={onClick}
    />
  );
}
function AutoPlay() {
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
          <h3 className="stores"><img src={img15} alt="im1" style={{ height: '100%', width: "100%" }} /></h3>
        </div>
        <div className="border border-dark">
          <h3 className="stores"><img src={img16} alt="im2" style={{ height: '100%', width: "100%" }} /></h3>
        </div>
        <div className="border border-dark">
          <h3 className="stores"><img src={img17} alt="im3" style={{ height: '100%', width: "100%" }} /></h3>
        </div>
        <div className="border border-dark">
          <h3 className="stores"><img src={img18} alt="im4" style={{ height: '100%', width: "100%" }} /></h3>
        </div>
        {/* <div className="border border-dark d-flex justify-content-center">
          <h3><img src={img19} style={{height: '100%',width: "100%"}}/></h3>
        </div> */}
        <div className="border border-dark">
          <h3 className="stores"><img src={img20} alt="im5" style={{ height: '100%', width: "100%" }} /></h3>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
