import React, { useState, useEffect } from 'react'
import "./styleproduct.scss"
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BsHeart } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";

const DetailProduct = () => {
    const {category,id} = useParams();
    const [product, setProduct] = useState(null);
    const [activeTab, setActiveTab] = useState('description'); 
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://dummyjson.com/products/${id}`);
          setProduct(response.data);
        } catch (error) {
          console.error('Error fetching product details:', error);
        }
      };
  
      fetchData();
    }, [id]);
    const handleTabChange = (tab) => {
        setActiveTab(tab);
      };
      console.log(this)
  return (
    <div>
        {product ? (
            <div>
                <div  className='Detail_Product'>
                <div className='Image'>
                  <div className='Image_large'>
                      <img src={'https://i.ibb.co/dbnMxGQ/img1.jpg'} alt="hinh"/>
                  </div>

                  <div className='Image_small'>
                    <img src={'https://i.ibb.co/dbnMxGQ/img1.jpg'} alt="hinh"/>
                    <img src={'https://i.ibb.co/dbnMxGQ/img1.jpg'} alt="hinh"/>
                    <img src={'https://i.ibb.co/dbnMxGQ/img1.jpg'} alt="hinh"/>
                  </div>
              </div>

              <div className='Infomation'>

              <h4>Hometek/{product.category}/{product.title}</h4>

                <div className='name'>
                  {product.title}
                  </div>
                <div>
                  <BsStar className='icon'/>
                  <BsStar className='icon'/>
                  <BsStar className='icon'/>
                  <BsStar className='icon'/>
                  <BsStar className='icon'/>
                  <BsHeart className='heart'/> </div>

                <div className='price'>{product.price}$</div>
                  
                <p>Số lượng</p>

                <div className='qty'>
                  <button>-</button>
                  <div><input type='text'/></div>
                  <button>+</button>
                </div>


                <div className='buy_product'>
                  <Link to="/gio-hang">MUA HÀNG</Link>

                  <button>THÊM VÀO GIỎ HÀNG</button>
                </div>

                <div className='Deli'>
                  <div className='Deli1'>
                    <BsTruck/>
                    <h5>Giao nhanh - Miễn phí cho đơn từ 2 triệu đồng</h5></div>
                    
                    <Link>Enter your postal code for Deliverty Availability</Link>
                  
                  <hr></hr>
                  <div className='Deli2'>
                    <BsArrowRepeat/>
                    <h5>Chính sách Bảo hành - Đổi trả</h5>
                    </div>
                    Free 30 Days Delivery<Link to ="#"> Detail</Link>

                  
                </div>
              </div>   
                </div>
                     {/* Đường line */}
                     <hr className='line'/>

                {/* Mô tả và kỷ thuật */}
                <div className='frame_descrip'>
                    <div className='descrip_title'>
                        <hr className='hr_des'/>
                            <button onClick={() => handleTabChange('description')} className='s1' >Mô tả</button>
                            <button onClick={() => handleTabChange('specifications')} >Thông số kỹ thuật</button>
                        <hr className='hr_des'/>
                    </div>
                {/* mô tả */}
                <div className='frame_content'>
                    {activeTab === 'description' && (
                        <div>
                        {product.description}
                        </div>)}
                    {/* kỷ thuật */}
                    {activeTab === 'specifications' && (
                        <div>
                        {product.rating}
                        </div>)}       
                </div>
                
            </div>
            

{/* Kết thúc */}
        </div>
            
              
              
              
              ) : (<></>)}

       

    </div>
  )
}

export default DetailProduct