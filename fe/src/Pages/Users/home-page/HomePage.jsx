import React from "react";
import { useRef, useState, useEffect } from "react";

import "react-slideshow-image/dist/styles.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Slide } from "react-slideshow-image";
import Slider from "react-slick";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Scrollbar, FreeMode } from "swiper/modules";

import "./HomePage.css";
// import Product from '../../components/product/Product';
import Product from "../../../Components/product/Product";
// import banner from '../../assets/background/banner-1.png';
import banner from "../../../Assets/background/banner-1.png";
// import brandsImage from '../../assets/background/brands.png';
import brandsImage from "../../../Assets/background/brands.png";
// import SwiperBar from '../../components/swiper-bar/SwiperBar';
import SwiperBar from "../../../Components/swiper-bar/SwiperBar";
// import blogsImage from '../../assets/background/Blog.png';
import blogsImage from "../../../Assets/background/Blog.png";
// import BlogCard from '../../components/blog-card/BlogCard';
import BlogCard from "../../../Components/blog-card/BlogCard";
// import productData from '../../data_update/data/product.json';

// import blogData from '../../data_update/data/blog.json';
import blogData from "../../../data_update/data/blog.json";
// import SwiperBackground from '../../components/swiper-background/SwiperBackground';
import SwiperBackground from "../../../Components/swiper-background/SwiperBackground";

// import cupIcon from '../../assets/icons/cup.svg';
import cupIcon from "../../../Assets/icons/cup.svg";
// import handIcon from '../../assets/icons/hand.svg';
import handIcon from "../../../Assets/icons/hand.svg";
// import successIcon from '../../assets/icons/success.svg';
import successIcon from "../../../Assets/icons/success.svg";
// import assistantIcon from '../../assets/icons/assistant.svg';
import assistantIcon from "../../../Assets/icons/assistant.svg";

// import category1 from '../../assets/background/category1.png';
// import category2 from '../../assets/background/category2.png';
// import category3 from '../../assets/background/category3.png';

import category1 from "../../../Assets/background/category1.png";
import category2 from "../../../Assets/background/category2.png";
import category3 from "../../../Assets/background/category3.png";

// import BlogsSwiper from '../../components/blogs-swiper/BlogsSwiper';
import BlogsSwiper from "../../../Components/blogs-swiper/BlogsSwiper";

import data from "../../../data_update/data/product.json";
const HomePage = () => {
  console.log("data: ", data);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="homepage-content">
        <div className="wrapper-banner">
          <Slide>
            <div className="each-slide-effect">
              {/* <div style={{ backgroundImage: `url(${banner})` }}></div> */}
              <img src={banner} alt="" />
            </div>
            <div className="each-slide-effect">
              {/* <div style={{ backgroundImage: `url(${banner})` }}></div> */}
              <img src={banner} alt="" />
            </div>
            <div className="each-slide-effect">
              {/* <div style={{ backgroundImage: `url(${banner})` }}></div> */}
              <img src={banner} alt="" />
            </div>
          </Slide>
        </div>
        <div className="block-category">
          <div className="heading">DANH MỤC SẢN PHẨM</div>
          <div className="wrapper-category">
            <div className="category-item category-item-1">
              <img src={category1} alt="" />
            </div>
            <div className="category-item category-item-2">
              <img src={category2} alt="" />
            </div>
            <div className="category-item category-item-3">
              <img src={category3} alt="" />
            </div>
          </div>
        </div>
        <div className="block-swiper block-swiper--promotional-products">
          <div className="heading">SẢN PHẨM KHUYẾN MÃI</div>
          <SwiperBar>
            {data.map((product) => {
              if (product.note === "Sản phẩm khuyến mãi") {
                return (
                  <SwiperSlide>
                    <Product
                      imgSrc={product.image}
                      productName={product.name}
                      productPriceShow={product.sale_price}
                      productPriceThrough={product.price}
                    />
                  </SwiperSlide>
                );
              }
            })}
          </SwiperBar>
        </div>

        <div className="block-swiper block-swiper--latest-products">
          <div className="heading">SẢN PHẨM MỚI NHẤT</div>
          <SwiperBar>
            {data.map((product) => {
              if (product.note === "Sản phẩm mới nhất") {
                return (
                  <SwiperSlide>
                    <Product
                      imgSrc={product.image}
                      productName={product.name}
                      productPriceShow={product.sale_price}
                      productPriceThrough={product.price}
                    />
                  </SwiperSlide>
                );
              }
            })}
          </SwiperBar>
        </div>

        <div className="block-swiper block-swiper--best-selling-products">
          <div className="heading">SẢN PHẨM BÁN CHẠY</div>
          <SwiperBar>
            {data.map((product) => {
              if (product.note === "Sản phẩm bán chạy") {
                return (
                  <SwiperSlide>
                    <Product
                      imgSrc={product.image}
                      productName={product.name}
                      productPriceShow={product.price}
                      productPriceThrough={product.sale_price}
                    />
                  </SwiperSlide>
                );
              }
            })}
          </SwiperBar>
        </div>

        <div className="block-swiper block-swiper--recommended">
          <div className="heading">GỢI Ý CHO BẠN</div>
          <SwiperBar>
            {data.map((product) => {
              if (product.note === "Sản phẩm bán chạy") {
                return (
                  <SwiperSlide>
                    <Product
                      imgSrc={product.image}
                      productName={product.name}
                      productPriceShow={product.price}
                      productPriceThrough={product.sale_price}
                    />
                  </SwiperSlide>
                );
              }
            })}
          </SwiperBar>
        </div>

        <div className="wrapper-brands">
          <h1 className="wrapper-brands--heading">THƯƠNG HIỆU</h1>
          <div className="wrapper-brands--block-brands">
            <img src={brandsImage} alt="" />
          </div>
        </div>
        <div className="wrapper-blogs">
          {/* <BlogsSwiper>
            {blogData.map((blog) => {
              return (
                <SwiperSlide>
                  <div style={{ backgroundColor: 'red' }}></div>
                </SwiperSlide>
              );
            })}
          </BlogsSwiper> */}
          <Slider {...settings}>
            {blogData.map((blog) => {
              return (
                <div className="test-slide">
                  {/* <BlogCard
                    imgSrc={blog.image}
                    blogTitle={blog.title}
                    dateCreate={blog.created_at}
                  /> */}
                  1
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="wrapper-benefits">
        <div className="wrapper-signle-benefit">
          <div className="wrapper-image">
            <img src={cupIcon} alt="" className="img" />
          </div>
          <div className="benefit-content">
            <h3 className="benefit-title">High Quality</h3>
            <p className="benefit-description">Crafted from top materials</p>
          </div>
        </div>
        <div className="wrapper-signle-benefit">
          <div className="wrapper-image">
            <img src={successIcon} alt="" className="img" />
          </div>
          <div className="benefit-content">
            <h3 className="benefit-title">Warranty Protection</h3>
            <p className="benefit-description">Over 2 years</p>
          </div>
        </div>
        <div className="wrapper-signle-benefit">
          <div className="wrapper-image">
            <img src={handIcon} alt="" className="img" />
          </div>
          <div className="benefit-content">
            <h3 className="benefit-title">Free Shipping</h3>
            <p className="benefit-description">Orders Over 150$</p>
          </div>
        </div>
        <div className="wrapper-signle-benefit">
          <div className="wrapper-image">
            <img src={assistantIcon} alt="" className="img" />
          </div>
          <div className="benefit-content">
            <h3 className="benefit-title">24 / 7 Support</h3>
            <p className="benefit-description">Dedicated support</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
