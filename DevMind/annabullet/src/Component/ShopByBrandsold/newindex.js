import React from "react";
import Slider from "react-slick";
import { Col, Row, Card, Typography, Button, Rate } from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./shopbybrands.css"
import Brand from "../../image/brandimage.jpg";
import BlockDivWrap from "../BlockDivWrap";
import { RxDotFilled } from "react-icons/rx";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import multicard from '../../image/multicard1.jpg';

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
        <div className="devmind-desktop-shopbybrands mt-5">
            <BlockDivWrap>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xxl={24}>
                        <div className="slider-container container mt-4 mb-2">
                            <Slider {...settings}>
                                <Card hoverable className='devmind-slider-card'>
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
                            </Slider>

                            
                        </div>
                    </Col>
                </Row>
            </BlockDivWrap>
        </div>

    );
}

export default ShopByBrands;
