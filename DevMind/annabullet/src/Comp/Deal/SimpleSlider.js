import React from "react";
import Slider from "react-slick";
import './SimpleSlider.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../ReImages/fly.png'
import img2 from '../ReImages/gd14.png'
import img3 from '../ReImages/re12wheels.jpg'
import img4 from '../ReImages/silencer11.jpg'
import { Col, Flex, Row, Button } from "antd";
import sideImge from '../ReImages/spare.jpeg'
import { StarFilled, StarOutlined, SyncOutlined, HeartFilled } from "@ant-design/icons";

const sliderData = [
    {
        image: img1,
        name: 'FLY',
        price: 'Rs.1800',
        originalPrice: 'Rs.2400',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
        rating: 4,
    },
    {
        image: img2,
        name: 'FLY',
        price: 'Rs.1800',
        originalPrice: 'Rs.2400',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
        rating: 4,
    },
    {
        image: img3,
        name: 'FLY',
        price: 'Rs.1800',
        originalPrice: 'Rs.2400',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
        rating: 4,
    },
    {
        image: img4,
        name: 'FLY',
        price: 'Rs.1800',
        originalPrice: 'Rs.2400',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
        rating: 4,
    },

];
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
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="container-fluid customSlider">
            <Row gutter={[30, 30]}>
                <Col xs={24} sm={24} md={24} lg={18} className="customCol">
                    <div className="slider-container custSlideContain mt-5 mb-5">
                        <div className="ribbon mt-5">
                            Deal Of the Day
                        </div>
                        <Slider {...settings}>
                            {sliderData.map((data, index) => (
                                <div key={index}>
                                    <Row>
                                        <Col xs={24} sm={24} md={12} lg={12} xl={12} >
                                            <img src={data.image} alt={`Slide ${index + 1}`} className="slide-image" />
                                        </Col>
                                        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="desc-right" >
                                            <h5 className="part-name">{data.name}</h5>
                                            <h6>{renderStars(data.rating)}</h6>
                                            <h5><span className="currentPrice">{data.price}</span> <span style={{ textDecoration: 'line-through', opacity: '0.5' }}>{data.originalPrice}</span></h5>
                                            <p className="desc-dealProd">{data.description}</p>

                                            <Row gutter={[12, 12]} >
                                                <Col>
                                                    <div className="time">Days</div>
                                                </Col>
                                                <Col>
                                                    <div className="time">Hours</div>
                                                </Col>
                                                <Col>
                                                    <div className="time">Mins</div>
                                                </Col>
                                                <Col>
                                                    <div className="time"> Secs</div>
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
