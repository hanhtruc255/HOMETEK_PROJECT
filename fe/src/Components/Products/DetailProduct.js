import React, { useState, useEffect } from 'react'
import "./styleproduct.scss"
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BsHeart } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";
import { BsCamera } from "react-icons/bs";

const DetailProduct = () => {
    const {category,id} = useParams();
    const [product, setProduct] = useState(null);
    const [activeTab, setActiveTab] = useState('description'); 

    
//đánh giá sao trong đánh giá
    const [selectedStarIndex, setSelectedStarIndex] = useState(null);

    const handleStarClick = (index) => {
      setSelectedStarIndex(index === selectedStarIndex ? null : index);
    };
    
  
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

    //đánh giá
      const [showModal, setShowModal] = useState(false);
      const closeModal = () => setShowModal(false);
      const Modaladdress = () => {
        useEffect(() => {
          document.body.style.overflowY = "hidden";
          return () => {
            document.body.style.overflowY = "scroll";
          };
        }, []);
        return (
          <>
          <div className='modal_wrapper_evalua'></div>
          <div className='modal_evalua_container'>
            <div className='evalua_title'> 
                <h3>Đánh giá và nhận xét</h3>
                <button onClick={() => setShowModal(false)}>X</button>
            </div>

            <div className='evalua_body'>
              <div className='evalua_product'>
                  <img src={'https://i.ibb.co/dbnMxGQ/img1.jpg'}/>
                  <h4>{product.title}</h4>
              </div>
              
              <p>Đánh giá chung</p>

              <div className='evalua_star' >
              {Array(5).fill().map((_, index) => (
                <div key={index} onClick={() => handleStarClick(index)} className={index === selectedStarIndex ? 'selected' : ''}>
                  <BsStar color={index === selectedStarIndex ? 'rgb(216, 216, 18)' : ''} />
                  <p>
                    {index === 0 ? 'Rất tệ' : index === 1 ? 'Tệ' : index === 2 ? 'Bình thường' : index === 3 ? 'Tốt' : 'Tuyệt vời'}
                  </p>
                </div>
              ))}
              </div>
              <hr/>
              <div>
                <p>Theo trải nghiệm</p>
                <input className='input_text' placeholder='Xin mời chia sẻ một số cảm nhận về sản phẩm'/>

                <div className='input_image'>
                  <BsCamera className='cam'/>
                  <input type="file"  className="form-control"/>
                </div>
                
              </div>
                
              <button>GỬI ĐÁNH GIÁ</button>
              
            </div>
              
          </div>
          </>
      )
      }
  //end đánh giá
    
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
                            <button onClick={() => handleTabChange('description')} >Mô tả</button>
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

                {/* đánh giá */}
                  <div className='frame_evalua'>
                    {/* frame chỉnh */}
                    <h3>Đánh giá sản phẩm {product.title}</h3>
                    {/* tỏng đánh giá */}
                    <div>
                        <div>
                        <h2>(?)/5</h2>
                        <BsStar className='icon'/>
                        <BsStar className='icon'/>
                        <BsStar className='icon'/>
                        <BsStar className='icon'/>
                        <BsStar className='icon'/>
                        <span> (?) đánh giá</span>
                        <hr></hr>
                        <center>
                        <p>Bạn đánh giá sao về sản phẩm này?</p>
                        <button onClick={()=> setShowModal(true)}>Đánh giá ngay</button>
                        </center>
                        <>{showModal && <Modaladdress closeModal={closeModal}/>}</>
                        {/* popup */}
                        <br/>
                        <div className='frame_evalua_1'>
                          Khung những đánh giá hiển thị
                        </div>
                      </div>

                    </div>
                  </div>

                {/* hỏi đáp */}
                  <div className='ask'>
                    <h3>HỎI ĐÁP</h3>
                    <p>Bình luận về {product.title}</p>
                    <input placeholder="Xin mời để lại câu hỏi, Hometek sẽ nhanh chóng giải đáp những thắc mắc của bạn."/>
                    <div className='ask_inf'>
                     <input placeholder="Nhập họ tên*"/>
                     <input placeholder="Nhập số điện thoại"/>
                     <button>Gửi</button>

                    </div>
                  </div>

{/* Kết thúc */}
            </div>
              ) : (<></>)}
    </div>
  )
}

export default DetailProduct