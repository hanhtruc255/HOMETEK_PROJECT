import React, { useState, useEffect } from 'react'
import "./styleproduct.scss";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { BsHeart } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";
import { BsCamera } from "react-icons/bs";
import Breadcrumb from '../Breadcrumb/Breadcrumb';
// 

const DetailProduct = () => {
    const {_id} = useParams();
    console.log(">>>", _id)
    const navigate = useNavigate(); 
    const [cartItems, setCartItems] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [product, setProduct] = useState(null);
    const [activeTab, setActiveTab] = useState('description'); 
    const [whishlistItems, setWhishlistItems] = useState([]);
    const [wishlistChanged, setWishlistChanged] = useState(false);



//đánh giá sao trong đánh giá
    const [selectedStarIndex, setSelectedStarIndex] = useState(null);

    const handleStarClick = (index) => {
      setSelectedStarIndex(index === selectedStarIndex ? null : index);
    };
    
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/Cua_hang/${_id}`);
          setProduct(response.data);
        } catch (error) {
          console.error('Error fetching product details:', error);
        }
      };
      fetchData();
    }, [_id]);
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
                <p>Đánh giá và nhận xét</p>
                <button onClick={() => setShowModal(false)}>X</button>
            </div>
           

            <div className='evalua_body'>
              <div className='evalua_product'>
                  <img src={product.image}/>
                  <b>{product.name}</b>
                  
              </div>
              <label>Mã đơn hàng: <input/></label>
              <p>Đánh giá chung</p>

              <div className='evalua_star' >
              {Array(5).fill().map((_, index) => (
                <div key={index} onClick={() => handleStarClick(index)} className={index === selectedStarIndex ? 'selected' : ''}>
                  <BsStarFill color={index === selectedStarIndex ? 'rgb(216, 216, 18)' : ''} />
                  <p>
                    {index === 0 ? 'Rất tệ' : index === 1 ? 'Tệ' : index === 2 ? 'Bình thường' : index === 3 ? 'Tốt' : 'Tuyệt vời'}
                  </p>
                </div>
              ))}
              </div>
              <div className='inputtext'>
                <span>Nhận xét</span>
                <input className='input_text' placeholder='Xin mời chia sẻ một số cảm nhận về sản phẩm'/> </div>

                <div className='input_image'>
                  <BsCamera className='cam'/>
                  <input type="file"  className="form-control"/>
                </div>
                
              <button>GỬI ĐÁNH GIÁ</button>
              
            </div>
              
          </div>
          </>
      )
      }
  //end đánh giá

    //add to cart
    const addToCart = (item) => {
      alert('Đã thêm vào giỏ hàng thành công');
      const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
      const newCart = [...existingCart, item];
      localStorage.setItem('cart', JSON.stringify(newCart));
      setCartItems(newCart);
    };

  ///add to whishlist
    useEffect(() => {
    setWhishlistItems(JSON.parse(localStorage.getItem('Whishlist')) || []);
    setWishlistChanged(false);
    }, [wishlistChanged]); 

    const isItemInWishlist = (itemId) => {
    return whishlistItems.some((wishlistItem) => wishlistItem._id === itemId);
  };
    const addToWhishlist = (item) => {
      const isDuplicate = isItemInWishlist(item._id);
      if (isDuplicate) {
        const updatedWhishlist = whishlistItems.filter((wishlistItem) => wishlistItem._id !== item._id);
        setWhishlistItems(updatedWhishlist);
        localStorage.setItem('Whishlist', JSON.stringify(updatedWhishlist));
        setWishlistChanged(true);
        alert('Đã xóa khỏi sản phẩm yêu thích.');
      } else {
        const updatedWhishlist = [...whishlistItems, item];
        setWhishlistItems(updatedWhishlist);
        localStorage.setItem('Whishlist', JSON.stringify(updatedWhishlist));
        setWishlistChanged(true);
        alert('Đã thêm vào sản phẩm yêu thích.');
      }
    };

      ///format price
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
    
  return (
    <div>
        {product ? (
            <div>
                <div  className='Detail_Product'>
                    <div className='Image'>
                        <div className='Image_large'>
                            <img src={product.image} alt="hinh"/>
                        </div>

                        <div className='Image_small'>
                          <img src={product.sub_image[0]} alt="hinh"/>
                          <img src={product.sub_image[1]} alt="hinh"/>
                          <img src={product.sub_image[2]} alt="hinh"/>
                          
                        </div>
                    </div>

                    <div className='Infomation'>
                        <div className='breadcrumdetail'><Breadcrumb/></div>
                      <div className='name'>
                        {product.name}
                        </div>
                      <div>
                        <BsStar className='icon'/>
                        <BsStar className='icon'/>
                        <BsStar className='icon'/>
                        <BsStar className='icon'/>
                        <BsStar className='icon'/>
                        <BsHeart className='heart' style={{ color: isItemInWishlist(product._id) ? 'rgb(170, 4, 4)' : 'inherit' }} onClick={() => addToWhishlist(product)}/> </div>

                      <div className='price'>{formatPrice(product.price)}đ</div>
                        
                      <h4>Số lượng</h4>

                      <div className='qty'>
                        <button>-</button>
                        <div><input type='text'/></div>
                        <button>+</button>
                      </div>
                      <div className='buy_product'>
                        <Link to="/thanh-toan">MUA HÀNG</Link>

                        <button onClick={() => addToCart(product)}>THÊM VÀO GIỎ HÀNG</button>
                      </div>

                      <div className='Deli'>
                     
                        <div className='Deli1'>
                        <BsTruck className='icon'/>
                          <p>Giao nhanh - Miễn phí cho đơn từ 2 triệu đồng <br/><Link>Enter your postal code for Deliverty Availability</Link></p>
                          </div>
                        <div className='Deli2'>
                          <BsArrowRepeat className='icon'/>
                          <p>Chính sách Bảo hành - Đổi trả
                          <br/>Free 30 Days Delivery
                          <Link to ="#"> Detail</Link>
                          </p>
                          
                          </div>
                          
                        
                      </div>
                    </div>   
                </div>
                     {/* Đường line */}
                     <hr className='line'/>

                {/* Mô tả và kỷ thuật */}
                <div className='frame_descrip'>
                    <div className='descrip_name'>
                        <hr className='hr_des'/>
                            <button onClick={() => handleTabChange('description')} >Mô tả</button>
                            <button onClick={() => handleTabChange('tech_detail')} >Thông số kỹ thuật</button>
                        <hr className='hr_des'/>
                    </div>
                {/* mô tả */}
                <div className='frame_content'>
                    {activeTab === 'description' && (
                        <div>
                        {product.description}
                        </div>)}
                    {/* kỷ thuật */}
                    {activeTab === 'tech_detail' && (
                        <div>
                        {product.tech_detail}
                        </div>)}       
                </div>
            
              </div>

                {/* đánh giá */}
                  <div className='frame_evalua'>
                    {/* frame chỉnh */}
                    <h3>Đánh giá sản phẩm {product.name}</h3>
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
                    <p>Bình luận về {product.name}</p>
                    <input placeholder="Xin mời để lại câu hỏi, Hometek sẽ nhanh chóng giải đáp những thắc mắc của bạn."/>
                    <div className='ask_inf'>
                        <input placeholder="Nhập họ tên*"/>
                        <input placeholder="Nhập số điện thoại"/>
                        <button >Gửi</button>
                    </div>
                  </div>
{/* Kết thúc */}
            </div>
              ) : (<></>)}
    </div>
  )
}

export default DetailProduct