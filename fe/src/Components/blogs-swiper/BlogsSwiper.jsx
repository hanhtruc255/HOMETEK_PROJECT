import React from 'react';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './BlogsSwiper.css';
import { Pagination, Navigation, Scrollbar, FreeMode } from 'swiper/modules';
const BlogsSwiper = (props) => {
  return (
    <Swiper
      grabCursor={true}
      modules={[Navigation]}
      loop={false}
      navigation={{
        clickable: true,
      }}
      pagination={{
        clickable: true,
      }}
      slidesPerView={3}
      spaceBetween={15}
      // navigation={true}
      //   breakpoints={{
      //     0: { slidesPerView: 1, spaceBetween: 10 },
      //     480: { slidesPerView: 2, spaceBetween: 10 },
      //     640: { slidesPerView: 2, spaceBetween: 20 },
      //     768: {
      //       slidesPerView: 3,
      //       spaceBetween: 25,
      //     },
      //     1024: {
      //       slidesPerView: 4,
      //       spaceBetween: 25,
      //     },
      //     1280: {
      //       slidesPerView: 5,
      //       spaceBetween: 25,
      //     },
      //   }}
      className="mySwiper"
    >
      {props.children}
    </Swiper>
  );
};

export default BlogsSwiper;
