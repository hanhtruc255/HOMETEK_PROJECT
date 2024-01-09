import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SwiperBar.css";
import Product from "../product/Product";
import { Pagination, Navigation, Scrollbar, FreeMode } from "swiper/modules";
const SwiperBar = (props) => {
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
      // navigation={true}
      breakpoints={{
        0: { slidesPerView: 1, spaceBetween: 10 },
        480: { slidesPerView: 2, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      className="mySwiper"
    >
      {props.children}
    </Swiper>
  );
};

export default SwiperBar;
