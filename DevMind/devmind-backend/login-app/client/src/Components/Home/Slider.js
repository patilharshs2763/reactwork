import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import img1 from '../Images/slideImg1.jpg';
import img2 from '../Images/slideImg2.jpg';
import img3 from '../Images/slideImg3.jpg';
import img4 from '../Images/slideImg4.jpg';
import img5 from '../Images/slideImg5.jpg';
import img6 from '../Images/slideImg6.jpg';

const images = [img1, img2, img3, img4, img5, img6];

export default function Slider() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img src={img} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
