import React from 'react';
import './LatestBlog.css';
import Slider from "react-slick";
import { blogSlider } from '../../Component/severdata/latestBlogSliderData';
function LatestBlogSlider() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
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
                breakpoint: 481,
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
        <div className='container mt-5'>
            <div class="title-group">
                <h3>Top Sale On This Week</h3>
                <span className='style-dot'></span><h2 className='title-m'>Best Sellars</h2>
            </div>
            {/* <h1 className='latestBlogTitle'>Latest Blog</h1> */}
            <div className="slider-container custom-slider">
                <Slider {...settings}>
                    {blogSlider.map((data, index) => (
                        <div key={index}>
                            <div class="card  col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 customCard"  >
                                {/* <img src="..." class="card-img-top" alt="..."> */}
                                <img
                                    src={data.image}
                                    alt={`Slide ${index + 1}`}
                                    class="card-img-top"
                                />
                                <div class="card-body">
                                    <h6 className='blogdate'>{data.bDate}</h6>
                                    <h6 className='blogHead'>{data.bHead}</h6>
                                    <a href="/home" class="btn viewebuton">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    ))}

                </Slider>
            </div>
        </div>
    );
}

export default LatestBlogSlider;
