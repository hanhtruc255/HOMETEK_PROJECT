// import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { BsHeart } from "react-icons/bs";
import Navbar from "../../../COMPONENTS/Navbar/Navbar";
import './ProductDetailPage.scss';
import { useState } from 'react';
import img1 from "../../../ASSETS/img1.jpg"
import { BsStar } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";
import { Link } from 'react-router-dom';

const ProductDetailPage = ({data}) => {
  const {prodid} = useParams();
  // const information =[];
  // const Data = (){
  //   if (prodid === AllProductsData.map("id")) {

  //   }
  // }
  
  return (
    <div>
    <Navbar/>
    <div className='Frame_Product_Detail'>
        <h1> product is - {prodid}  

          <div className='Product_Detail_Top'>
              <div className='Product_Image'>
                <div className='Product_Imaeg_large'>
                  <img src={img1}/>
                </div>

                <div className='Product_Imaeg_small'>
                  <img src={img1}/>
                  <img src={img1}/>
                  <img src={img1}/>
                </div>
              </div>
              <div className='Product_Buy'>
                <div className='product_name'><h2>NAME</h2>
                <BsHeart/></div>
                <div className='Icon_star'>
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                </div>


                <p>Số lượng</p>

                <div className='Button_qty'>
                    <button>-</button>
                    <input type='text'/>
                    <button>+</button>
                </div>

                <div className='Button_buy'>
                  
                      <Link to="/hometek/gio-hang">MUA NGAY</Link>
                    <button>THÊM VÀO GIỎ HÀNG</button>
                </div>

                <div className='Delivery'>
                  <div className='De1'>
                    <BsTruck/>
                    <span>Giao nhanh - Miễn phí cho đơn từ ư triệu đồng</span>
                    <p>Enter your postal code for Delivery Availability</p>
                  </div>
                  <hr/>
                  <div className='De2'>
                    <BsArrowRepeat/>
                    <b>Chính sách Bảo hành -Đổi trả tốt nhất</b>
                    <p>Free 30 Day Delivry Return.</p>
                  </div>
                </div>

              </div>
          </div>


        </h1>

        </div>
    </div>
    // video 5,6,7
  )
}

export default ProductDetailPage