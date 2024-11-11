import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import './SimpleSlider.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Col, Flex, Row, Button } from "antd";
import sideImge from '../../Component/Anna Bullet/classic.jpg'
import { StarFilled, StarOutlined, SyncOutlined, HeartFilled } from "@ant-design/icons";
import { sliderData } from "../severdata/dealOfdaySlider";

function renderStars(rating) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<StarFilled key={i} />);
        } else {
            stars.push(<StarOutlined key={i} />);
        }
    }
    return stars;
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arr customPrevArrow`}
            style={style}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arr customNextArrow`}
            style={style}
            onClick={onClick}
        />
    );
}

function SimpleSlider() {
    const [remainingSeconds, setRemainingSeconds] = useState(60); // Initial value for seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingSeconds(prevSeconds => {
                if (prevSeconds === 0) {
                    return 60; // Reset to 60 when it reaches 0
                } else {
                    return prevSeconds - 1;
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);// Empty dependency array to run only once

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // dotsClass: "custom-slick-dots",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="container-fluid C">
            <Row gutter={[30, 30]}>
                <Col xs={24} sm={24} md={24} lg={18} className="customCol">
                    <div className="slider-container custSlideContain mt-5 mb-5">
                        <div className="ribbon mt-5">
                            Deal Of the Day
                        </div>
                        <Slider {...settings} className="devmindSlider">
                            {sliderData.map((data, index) => (
                                <div key={index}>
                                    <Row>
                                        <Col xs={24} sm={24} md={12} lg={12} xl={12} >
                                            <img src={data.image} alt={`Slide ${index + 1}`} className="slide-image" />
                                        </Col>
                                        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="desc-right" >
                                            <h5 className="part-name">{data.name}</h5>
                                            <h6>{renderStars(data.rating)}</h6>
                                            <h5><span className="currentPrice">{data.price}</span> <span className="originalPrice">{data.originalPrice}</span></h5>
                                            <p className="desc-dealProd">{data.description}</p>

                                            <Row gutter={[12, 12]} >
                                                <Col>
                                                    <div className="time">
                                                        <span className="numCount">100</span>
                                                        <span className="parameterCount">DAYS</span>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="time">
                                                        <span className="numCount">45</span>
                                                        <span className="parameterCount">HRS</span>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="time">
                                                        <span className="numCount">37</span>
                                                        <span className="parameterCount">MINS</span>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="time">
                                                        <span className="numCount">{remainingSeconds}</span>
                                                        <span className="parameterCount">SECS</span>
                                                    </div>
                                                </Col>
                                            </Row>

                                            <Flex wrap="wrap" gap="small" style={{ marginTop: '20px' }} >
                                                <Button type="primary" danger value="large" >
                                                    ADD TO CART
                                                </Button>
                                                <Button value="large" className="customicon" >
                                                    <HeartFilled />
                                                </Button>
                                                <Button value="large" className="customicon" >
                                                    <SyncOutlined />
                                                </Button>
                                            </Flex>
                                        </Col>
                                    </Row>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6}>
                    <img src={sideImge} alt="side-img" className="sideImage" />
                </Col>
            </Row>
        </div>
    );
}

export default SimpleSlider;
