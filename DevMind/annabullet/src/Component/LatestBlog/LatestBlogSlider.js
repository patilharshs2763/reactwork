import React from 'react';
import './LatestBlog.css';
import img1 from '../../Component/Anna Bullet/bike1.jpg';
import Slider from "react-slick";
import { Button, Card } from 'antd';

function LatestBlogSlider() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        dotsClass: "slick-dots",
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
                breakpoint: 760,
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
                    slidesToScroll: 1,
                    // prevArrow: false,
                    // nextArrow:false
                }
            }
        ],
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };

    function CustomPrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-arrow custom-prev-arrow`}
                style={style}
                onClick={onClick}
            />
        );
    }

    function CustomNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-arrow custom-next-arrow`}
                style={style}
                onClick={onClick}
            />
        );
    }

    return (
        <>

            <div className='container'>Hii
                <h1 className="latest-blog-heading">Latest Blog</h1>
                {/* <h1>Hello</h1> */}
                <div className="slider-container custom-slider">
                    <Slider {...settings}>
                        <div>
                            <div class="card  col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 customCard"  >
                                {/* <img src="..." class="card-img-top" alt="..."> */}
                                <img
                                    alt="example"
                                    src={img1}
                                    class="card-img-top"
                                />
                                <div class="card-body">
                                    <h6 className='blogdate'>2024-3-27</h6>
                                    <h6 className='blogHead'>Moving from ticket system to forum</h6>
                                    <a href="#" class="btn  viewebuton">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="card  col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 customCard"  >
                                {/* <img src="..." class="card-img-top" alt="..."> */}
                                <img
                                    alt="example"
                                    src={img1}
                                    class="card-img-top"
                                />
                                <div class="card-body">
                                    <h6 className='blogdate'>2024-3-27</h6>
                                    <h6 className='blogHead'>Moving from ticket system to forum</h6>
                                    <a href="#" class="btn  viewebuton">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="card col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 customCard"  >
                                {/* <img src="..." class="card-img-top" alt="..."> */}
                                <img
                                    alt="example"
                                    src={img1}
                                    class="card-img-top"
                                />
                                <div class="card-body">
                                    <h6 className='blogdate'>2024-3-27</h6>
                                    <h6 className='blogHead'>Moving from ticket system to forum</h6>
                                    <a href="#" class="btn  viewebuton">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="card  col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 customCard"  >
                                {/* <img src="..." class="card-img-top" alt="..."> */}
                                <img
                                    alt="example"
                                    src={img1}
                                    class="card-img-top"
                                />
                                <div class="card-body">
                                    <h6 className='blogdate'>2024-3-27</h6>
                                    <h6 className='blogHead'>Moving from ticket system to forum</h6>
                                    <a href="#" class="btn  viewebuton">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="card  col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 customCard"  >
                                {/* <img src="..." class="card-img-top" alt="..."> */}
                                <img
                                    alt="example"
                                    src={img1}
                                    class="card-img-top"
                                />
                                <div class="card-body">
                                    <h6 className='blogdate'>2024-3-27</h6>
                                    <h6 className='blogHead'>Moving from ticket system to forum</h6>
                                    <a href="#" class="btn  viewebuton">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="card col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 customCard"  >
                                {/* <img src="..." class="card-img-top" alt="..."> */}
                                <img
                                    alt="example"
                                    src={img1}
                                    class="card-img-top"
                                />
                                <div class="card-body">
                                    <h6 className='blogdate'>2024-3-27</h6>
                                    <h6 className='blogHead'>Moving from ticket system to forum</h6>
                                    <a href="#" class="btn  viewebuton">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default LatestBlogSlider;
