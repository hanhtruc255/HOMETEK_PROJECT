import React, { useState, useEffect } from 'react'
import "./styleproduct.scss";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { BsHeart, BsFillHeartFill  } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { BsArrowRepeat } from "react-icons/bs";
import { BsCamera } from "react-icons/bs";
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import ick from '../../Assets/background/Detail_product_background.jpg'
// 

const DetailProduct = () => {
    const {_id} = useParams();
    const navigate = useNavigate(); 
    const [BuyItem, setBuyItem] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [product, setProduct] = useState(null);
    const [activeTab, setActiveTab] = useState('description'); 
    const [whishlistItems, setWhishlistItems] = useState([]);
    const [wishlistChanged, setWishlistChanged] = useState(false);
    const [quantity, setQuantity] = useState(1);

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
      const ModalEvalua = () => {
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
                  <BsStarFill color={index === selectedStarIndex ? '#FFAD33' : ''} />
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
    const incrementQuantity = () => {
      setQuantity((prevQuantity) => Math.max(1, prevQuantity + 1));
    };
    const decrementQuantity = () => {
      setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
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
    //mua ngay
    const addToPayment = (item) => {
      const existingPayment = JSON.parse(localStorage.getItem('payment')) || [];
      const newPayment = [...existingPayment, item];
      localStorage.setItem('payment', JSON.stringify(newPayment));
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
                        <BsStarFill className='iconstar'/>
                        <BsStarFill className='iconstar'/>
                        <BsStarFill className='iconstar'/>
                        <BsStarFill className='iconstar'/>
                        <BsStarFill className='iconstar'/>
                        
                        <button onClick={() => addToWhishlist(product)}>
                          {isItemInWishlist(product._id) ? <BsFillHeartFill  className='icon_heartfill'/> : <BsHeart className='icon_heart'/>}
                        </button> </div>

                      <div className='price'>{formatPrice(product.price)}đ</div>
                        
                      <h4>Số lượng</h4>

                        <div className='qty'>
                          <button onClick={decrementQuantity}>-</button>
                          <div>
                            <input type='text' value={quantity} readOnly />
                          </div>
                          <button onClick={incrementQuantity}>+</button>
                        </div>
                      <div className='buy_product'>
                          <Link to={"/thanh-toan-mua-ngay"}onClick={() => addToPayment({ ...product, quantity })}>
                            MUA HÀNG
                          </Link>

                        <button onClick={() => addToCart({ ...product, quantity })}>
                          THÊM VÀO GIỎ HÀNG</button>
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
                     <p className='line'/>
            <div className='frame__bottom'>
                <div className='frame_1'><div className='frame_descrip'>
                  <div>
                        <div className='descrip_name'>
                            
                            <button onClick={() => handleTabChange('description')} >MÔ TẢ</button>
                            <button onClick={() => handleTabChange('tech_detail')} >THÔNG SỐ KỶ THUẬT</button>
                      
                        </div>
                    {/* mô tả */}
                        <div className='frame_content'>
                              <div>
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
                  </div>
                  <div>
                        <img src={product.image}/>
                  </div>
            
              </div>

                {/* đánh giá */}
                  <div className='frame_evalua'>
                    <div className='frame_evalua_1'>
                      <p>Đánh giá sản phẩm <span>5.0</span> </p>
                    
                    </div>
                    {/* tỏng đánh giá */}
                    <div className='frame_evalua_2'>
                        <div>
                          <p>Đánh giá về {product.name}</p>
                        <div className='evalua'>
                          <div>Tuyết Mai <span>5</span><BsStarFill className='icon'/>
                          <p>Giao hàng nhanh, nồi chiên không dầu, chiên đồ ăn rất ngon, giòn</p>
                          </div>
                        </div>
 
                        <center>
                          <button onClick={()=> setShowModal(true)}>Đánh giá ngay</button>
                        </center>
                        <>{showModal && <ModalEvalua closeModal={closeModal}/>}</>
                        {/* popup */}
                        <br/>

                      </div>

                    </div>
                  </div>
                {/* hỏi đáp */}
                  <div className='ask'>
                    <div className='ask_title'><p>HỎI ĐÁP</p></div>
                    <div className='ask_box'>
                      <p>Hỏi đáp về {product.name}</p>
                      <input placeholder="Mời bạn bình luận. Vui lòng nhập Tiếng Việt có dấu."/>
                      <div className='ask_inf'>
                          <input placeholder="Nhập họ tên*"/>
                          <input placeholder="Nhập số điện thoại"/>
                          <button >Gửi</button>
                      </div>
                    </div>
                    
                    
                  </div>
                </div>
                {/* end left frame */}
                <div  className='camket'>
                  <ul>
                    CAM KẾT CỦA HOMETEK
                    <li>Bảo đảm hàng chất lượng chính hãng 100%</li>
                    <li>Giao hàng nhanh nhất</li>
                    <li>30 ngày đổi trả, hoàn tiền 100% nếu không đúng chất lượng</li>
                    <li>Bảo hành 12 tháng chính hãng 1 đổi 1 trong 15 ngày nếu có lỗi phần cứng từ NSX. </li>
                    <li>Giá sản phẩm đã bao gồm VAT</li>
                  </ul>
                  <img src={ick}/>
                </div>

            </div>
                {/* Mô tả và kỷ thuật */}
                
{/* Kết thúc */}
            </div>
              ) : (<></>)}
    </div>
  )
}

export default DetailProduct