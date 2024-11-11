import React, { useState, useEffect } from 'react';
import { Col, Row, Card, Typography, Rate, Button, Flex, Statistic } from 'antd';
import BlockDivWrap from "../BlockDivWrap"
import dealofdayimage from "../../image/multicard1.jpg"
import seconddealofdayimage from "../../image/dealofday.jpg"
import { FaHeart } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaSearch } from "react-icons/fa";
import './dealofday.css';
import Datadealofday from "../../Serverdata/Datadealofday";

// import moment from 'moment';
const { Title } = Typography;



// useEffect(() => {
//     const interval = setInterval(() => {
//       const now = moment();
//       const duration = moment.duration(deadline.diff(now));
//       setTimeLeft({
//         days: Math.floor(duration.asDays()),
//         hours: duration.hours(),
//         minutes: duration.minutes(),
//         seconds: duration.seconds(),
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [deadline]);


//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

// const { Countdown } = Statistic;
// const deadline = moment().add(914, 'days').add(8, 'hours').add(38, 'minutes').add(15, 'seconds'); 

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


const Dealofday = () => {


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
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

    if (!Datadealofday || Datadealofday.length === 0) {
        return null;
    }
    return (
        <div className='devmind-desktop-deal-of-day mt-5'>
            <BlockDivWrap>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={12} lg={19} xxl={19}>
                        <div>
                            {/* <Card className='dealofday-card'>
                                <Row>
                                    <Col xs={24} sm={24} md={12} lg={12} xxl={12}>
                                        <img src={dealofdayimage} className='dealofday-image'/>
                                    </Col>
                                    <Col xs={24} sm={24} md={12} lg={12} xxl={12}>
                                        <div className='card-second-block mt-5'>
                                            <Title level={4}> 20x9 Wheels Fit GMC Chevy </Title>
                                            <Rate allowHalf defaultValue={5} />
                                            <Title level={3}> <span>$100.00</span>    <span>$120.00</span> </Title>
                                            <p className='dealofday-text'>
                                                Dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te Dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te</p>

                                            <Flex gap="small" wrap>
                                                <Button className='addtocard-button'>ADD TO CART</Button>
                                                <Button className='icon-button'><FaHeart className='icon-style'/></Button>
                                                <Button className='icon-button'><TbRefresh className='icon-style' /></Button>
                                            </Flex>
                                        </div>
                                    </Col>
                                </Row>
                            </Card> */}

                            <div className="container">
                                <Slider {...settings} className="devminnds-messageslider">
                                    {Datadealofday.map((e, index) => (
                                        <div key={index} className="slider-item">
                                            <Card className='dealofday-card'>
                                                <Row>
                                                    <Col xs={24} sm={24} md={12} lg={12} xxl={12}>
                                                        <div className='image-container'>
                                                            <img alt="example" src={e.img} className='dealofday-image' />
                                                            <div className="overlay">
                                                                <div className="text">
                                                                    <FaSearch />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} sm={24} md={12} lg={12} xxl={12}>
                                                        <div className='card-second-block mt-5'>
                                                            <Title level={4}> {e.title} </Title>
                                                            <Rate allowHalf defaultValue={e.rating} />
                                                            <Title level={3}> <span>{e.price}</span><span className='card-second-block-text'>$120.00</span> </Title>
                                                            <p className='dealofday-text'>{e.Description}</p>
                                                            <Flex gap="small">
                                                                <Button className='addtocard-button'>ADD TO CART</Button>
                                                                <Button className='icon-button'><FaHeart className='icon-style' /></Button>
                                                                <Button className='icon-button'><TbRefresh className='icon-style' /></Button>
                                                            </Flex>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={5} xxl={5}>
                        <div className='mt-4 blend-image-container'>
                            <img src={seconddealofdayimage} className='dealofday-second-image' />
                        </div>
                    </Col>
                </Row>
            </BlockDivWrap>
        </div>
    )
}

export default Dealofday
