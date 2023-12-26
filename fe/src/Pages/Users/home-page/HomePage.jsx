import React from "react";
import { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Scrollbar, FreeMode } from "swiper/modules";

import "./HomePage.css";
import Product from "../../../Components/product/Product";
import homepageHeadingBackground from "../../../Assets/background/homepage-heading-background.png";
import brandsImage from "../../../Assets/background/brands.png";
import SwiperBar from "../../../Components/swiper-bar/SwiperBar";
import blogsImage from "../../../Assets/background/Blog.png";
import BlogCard from "../../../Components/blog-card/BlogCard";
import productData from "../../../data_update/data/product.json";
import blogData from "../../../data_update/data/blog.json";
const HomePage = () => {
  return (
    <div className="homepage-content">
      <div className="heading-background">
        <img
          src={homepageHeadingBackground}
          alt=""
          className="heading-background-img"
        />
      </div>
      <div className="list-product-types">
        <h2 className="title">DANH MỤC SẢN PHẨM</h2>
        <div className="wraper-product-types">
          <div className="product-type">
            <div className="product-type-image">
              <img
                src={require("../../../test-data/images/Noichienkhongdau/e5af1-710s-angl-pr-1500x1500.png")}
                alt=""
                className="product-type-img"
              />
            </div>
            <p className="product-type-name">Nồi chiên không dầu</p>
          </div>
          <div className="product-type">
            <div className="product-type-image">
              <img
                src={require("../../../test-data/images/Noichienkhongdau/e5af1-710s-angl-pr-1500x1500.png")}
                alt=""
                className="product-type-img"
              />
            </div>
            <p className="product-type-name">Nồi chiên không dầu</p>
          </div>
          <div className="product-type">
            <div className="product-type-image">
              <img
                src={require("../../../test-data/images/Noichienkhongdau/e5af1-710s-angl-pr-1500x1500.png")}
                alt=""
                className="product-type-img"
              />
            </div>
            <p className="product-type-name">Nồi chiên không dầu</p>
          </div>
          <div className="product-type">
            <div className="product-type-image">
              <img
                src={require("../../../test-data/images/Noichienkhongdau/e5af1-710s-angl-pr-1500x1500.png")}
                alt=""
                className="product-type-img"
              />
            </div>
            <p className="product-type-name">Nồi chiên không dầu</p>
          </div>
        </div>
      </div>
      <div className="block-swiper block-swiper--promotional-products">
        <div className="heading">
          <h1>SẢN PHẨM KHUYẾN MÃI</h1>
        </div>
        <SwiperBar>
          {productData.map((product) => {
            if (product.sale_price) {
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

      <div className="block-swiper block-swiper--latest-products">
        <div className="heading">
          <h1>SẢN PHẨM MỚI NHẤT</h1>
        </div>
        <SwiperBar>
          {productData.map((product) => {
            if (product.note === "Sản phẩm mới nhất") {
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

      <div className="block-swiper block-swiper--best-selling-products">
        <div className="heading">
          <h1>SẢN PHẨM BÁN CHẠY</h1>
        </div>
        <SwiperBar>
          {productData.map((product) => {
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
      {/*
      <div className="block-swiper block-swiper--suggested-products">
        <div className="heading">
          <h1>GỢI Ý CHO BẠN</h1>
        </div>
        <SwiperBar>
          <Product />
        </SwiperBar>
      </div> */}

      <div className="wrapper-brands">
        <h1 className="wrapper-brands--heading">THƯƠNG HIỆU</h1>
        <div>
          <img
            className="wrapper-brands--block-brands"
            src={brandsImage}
            alt=""
          />
        </div>
      </div>

      <div className="wrapper-blogs-swiper">
        <div className="heading">
          <h1>TIN TỨC</h1>
        </div>
        <SwiperBar>
          {blogData.map((blog) => {
            return (
              <SwiperSlide>
                <BlogCard
                  // imgSrc={blog.image}
                  blogTitle={blog.title}
                  dateCreate={blog.created_at}
                />
              </SwiperSlide>
            );
          })}
        </SwiperBar>
      </div>
    </div>
  );
};

export default HomePage;
