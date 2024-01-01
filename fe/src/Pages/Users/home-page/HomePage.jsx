import React from "react";
import { useRef, useState, useEffect, useContext } from "react";

import "react-slideshow-image/dist/styles.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Slide } from "react-slideshow-image";
import Slider from "react-slick";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Scrollbar, FreeMode } from "swiper/modules";

import "./HomePage.css";

import Product from "../../../Components/product/Product";

import banner from "../../../Assets/background/banner-1.png";

import brandsImage from "../../../Assets/background/brands.png";

import SwiperBar from "../../../Components/swiper-bar/SwiperBar";

import blogsImage from "../../../Assets/background/Blog.png";

import BlogCard from "../../../Components/blog-card/BlogCard";

// import blogData from "../../../data_update/data/blog.json";

import SwiperBackground from "../../../Components/swiper-background/SwiperBackground";

import cupIcon from "../../../Assets/icons/cup.svg";

import handIcon from "../../../Assets/icons/hand.svg";

import successIcon from "../../../Assets/icons/success.svg";
import assistantIcon from "../../../Assets/icons/assistant.svg";

import category1 from "../../../Assets/background/category1.png";
import category2 from "../../../Assets/background/category2.png";
import category3 from "../../../Assets/background/category3.png";

import banner1 from "../../../Assets/images/banners/banner-1.png";
import banner2 from "../../../Assets/images/banners/banner-2.png";
import banner3 from "../../../Assets/images/banners/banner-3.png";
import banner4 from "../../../Assets/images/banners/banner-4.png";
import banner5 from "../../../Assets/images/banners/banner-5.png";
import banner6 from "../../../Assets/images/banners/banner-6.png";
import banner7 from "../../../Assets/images/banners/banner-7.png";

import bannerVertical from "../../../Assets/images/bannerVertical/BannerVertical.png";

import coupleImg1 from "../../../Assets/images/coupleBanner/couple-banner-1.png";
import coupleImg2 from "../../../Assets/images/coupleBanner/couple-banner-2.png";

import BlogsSwiper from "../../../Components/blogs-swiper/BlogsSwiper";
import WrapperModal from "../../../Components/modals/WrapperModal";
import { AppContext } from "../layout/Layout";

const HomePage = () => {
  const { setDisplayFooter } = useContext(AppContext);

  const [images, setImages] = useState([]);

  const [productsData, setProductsData] = useState([]);
  const [blogsData, setBlogsData] = useState([]);
  useEffect(() => {
    setDisplayFooter(true);
    fetchData();
    // fetchImages();
  }, []);

  // const fetchImages = async () => {
  //   try {
  //     const res = await fetch("http://localhost:3001/images", {
  //       dirName: "banners",
  //     });
  //     const data = await res.json();
  //     setImages(data);
  //   } catch (err) {
  //     console.error("Error fetch images: ", err);
  //   }
  // };

  const fetchData = async () => {
    try {
      const [products, blogs] = await Promise.all([
        fetch("http://localhost:3001/Cua_hang"),
        fetch("http://localhost:3001/blog"),
      ]);

      if (!products.ok) {
        throw new Error("Products response was not ok");
      }

      if (!blogs.ok) {
        throw new Error("Products response was not ok");
      }

      const productsData = await products.json();
      const blogsData = await blogs.json();

      setProductsData(productsData);
      setBlogsData(blogsData);
      // console.log("data: ", data);
    } catch (error) {}
  };
  //setting for blogs slider
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },

      {
        breakpoint: 915,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
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
              <img key={1} src={banner1} alt="" />
            </div>
            <div className="each-slide-effect">
              <img key={2} src={banner2} alt="" />
            </div>
            <div className="each-slide-effect">
              <img key={3} src={banner3} alt="" />
            </div>
            <div className="each-slide-effect">
              <img key={4} src={banner4} alt="" />
            </div>
            <div className="each-slide-effect">
              <img key={5} src={banner5} alt="" />
            </div>
            <div className="each-slide-effect">
              <img key={6} src={banner6} alt="" />
            </div>
            <div className="each-slide-effect">
              <img key={7} src={banner7} alt="" />
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
        <div className="banner-vertical">
          <img src={bannerVertical} alt="" className="banner-ver-img" />
        </div>
        <div className="block-swiper block-swiper--promotional-products">
          <div className="heading">SẢN PHẨM KHUYẾN MÃI</div>
          <SwiperBar>
            {productsData.map((product) => {
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

        <div className="wrapper-couple-banner">
          <div className="couple-banner">
            <img src={coupleImg1} alt="" className="couple-img" />
          </div>
          <div className="couple-banner">
            <img src={coupleImg1} alt="" className="couple-img" />
          </div>
        </div>

        <div className="block-swiper block-swiper--latest-products">
          <div className="heading">SẢN PHẨM MỚI NHẤT</div>
          <SwiperBar>
            {productsData.map((product) => {
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
            {productsData.map((product) => {
              if (product.note === "Sản phẩm bán chạy") {
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

        <div className="block-swiper block-swiper--recommended">
          <div className="heading">GỢI Ý CHO BẠN</div>
          <SwiperBar>
            {productsData.map((product) => {
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
            })}
          </SwiperBar>
        </div>

        <div className="wrapper-brands">
          <div className="heading">THƯƠNG HIỆU</div>

          <div className="wrapper-brands--block-brands">
            <img src={brandsImage} alt="" />
          </div>
        </div>
        <div className="wrapper-blogs">
          <div className="heading">TIN TỨC</div>

          <Slider {...settings}>
            {blogsData.map((blog) => {
              return (
                <div className="wrapper-slide">
                  <BlogCard
                    // imgSrc={"/test-blog.jpg"}
                    path={`http://localhost:3000/blog-page/${blog.blogId}`}
                    imgSrc={blog.image}
                    blogTitle={blog.title}
                    dateCreate={blog.created_at}
                  />
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
