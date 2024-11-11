import React from "react";
import Slider from "react-slick";
import { Col, Row, Card, Typography, Button, Rate } from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./shopbybrands.css"
import Brand from "../../image/brandimage.jpg";
import BlockDivWrap from "../BlockDivWrap";
import { RxDotFilled } from "react-icons/rx";


const { Title } = Typography;
const { Meta } = Card;

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey" }}
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
function ShopByBrands() {
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
        <div className="devmind-ShopByBrand-slider mt-5">
            <BlockDivWrap>
            <div>
                <Title level={5} className="shopbybrand-text">TOP QUALITY PARTNER</Title>
                <Title level={2} className="shopbybrand-heading">
                <RxDotFilled className='shopbybrand-heading-icon' />SHOP BY BRANDS
                <RxDotFilled className='shopbybrand-heading-icon' /></Title>
            </div>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xxl={24}>
                        <div className="slider-container container mt-4 mb-2">
                            <Slider {...settings}>
                                <div className="image-block">
                                   <img src={Brand} className="shopbybrand-image"  />
                                </div>
                                <div className="image-block">
                                   <img src={Brand} className="shopbybrand-image" />
                                </div>
                                <div className="image-block">
                                   <img src={Brand} className="shopbybrand-image" />
                                </div>
                                <div className="image-block">
                                   <img src={Brand} className="shopbybrand-image" />
                                </div>
                                <div className="image-block">
                                   <img src={Brand} className="shopbybrand-image" />
                                </div><div className="image-block">
                                   <img src={Brand} className="shopbybrand-image" />
                                </div><div className="image-block">
                                   <img src={Brand} className="shopbybrand-image" />
                                </div>
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </BlockDivWrap>
        </div>

    );
}

export default ShopByBrands;
