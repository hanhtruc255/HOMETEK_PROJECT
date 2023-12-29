import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SwiperBackground.module.css";
import { Pagination, Navigation, Scrollbar, FreeMode } from "swiper/modules";
import background from "../../Assets/background/banner-1.png";
const SwiperBackground = (props) => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        slidesPerView={1}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={background} alt="" className="heading-background-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={background} alt="" className="heading-background-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={background} alt="" className="heading-background-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={background} alt="" className="heading-background-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={background} alt="" className="heading-background-img" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperBackground;
