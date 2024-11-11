import React from "react";
import { Col, Row,Typography} from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./shopbybrandslider.css";
import Datashopbybrand from "../../Serverdata/Datashopbybrand";
import { RxDotFilled } from "react-icons/rx";
import BlockDivWrap from "../BlockDivWrap"

const { Title } = Typography;

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

const Slidershopbybrand = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
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

  if (!Datashopbybrand || Datashopbybrand.length === 0) {
    return null;
  }

  return (
    <div className="devmind-slider-shopbybrand mt-5">
      <BlockDivWrap>
        <div>
          <Title level={5} className='shopbybrand-text'>TOP QUALITY PARTNER</Title>
          <Title level={3} className='shopbybrand-heading'>
            <RxDotFilled className='shopbybrand-heading-icon' />SHOP BY BRANDS<RxDotFilled className='shopbybrand-heading-icon' /></Title>
        </div>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xxl={24}>
            <div className="container">
              <Slider {...settings} className="devminnds-messageslider">
                {Datashopbybrand.map((Datashopbybrand, index) => (
                  <div key={index} className="slider-item">
                    <img src={Datashopbybrand.img} alt={`Image ${index + 1}`} className="img-fluid devminds-img" />
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </BlockDivWrap>
    </div>
  );
};

export default Slidershopbybrand;
