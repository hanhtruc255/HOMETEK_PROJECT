import React, { useEffect} from 'react';
import './Cart.scss';
import { BsTicketPerforatedFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { BsFillGeoAltFill } from 'react-icons/bs';
import { useState } from 'react';



const Cart = () => {

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
  }, []);

  //modal for address
  const Modaladdress = () => {
    useEffect(() => {
      document.body.style.overflowY = "hidden";
      return () => {
        document.body.style.overflowY = "scroll";
      };
    }, []);
    return (
        <>
        <div className='modal_wrapper'></div>
        <div className='modal_container'>
            <h2>Địa chỉ mới</h2>
            <div className='new_add1'> 
              <label>Họ và tên<span>* </span><br/><input/></label>
              <label>Số điện thoại<span>* </span><br/><input/></label>
            </div>
            <div className='new_add2'> 
              <label>Tỉnh/ Thành phố<span>* <br/></span><select></select></label>
              <label>Quận/ Huyện<span>* </span><br/><select></select></label>
              <label>Phường/ Xã<span>* </span><br/><select></select></label>
            </div>
            <div className='new_add3'> 
              <label>Địa chỉ cụ thể<span>* </span><br/><input className='spe'/></label>
            </div>
            <div className='new_add4'> 
              <label className='specheck'><input  type='checkbox'/><span>Đặt làm địa chỉ mặc định</span></label>
            </div>
            <center>
              <button className='spebut'>Hoàn Thành</button>
            <button onClick={() => setShowModal(false)}>Quay lại</button>
            </center>
        </div>
        </>
    )
    }
  return (
    <div className='cart'>
        <div className='Frame_cart'>
            <div className="address">
            <div className="add1">
              <BsFillGeoAltFill /> <b>Địa Chỉ Nhận Hàng</b>
            </div>

            <div className='add_address'>
              <span>Chưa có địa chỉ nhận hàng</span>
              <button onClick={()=> setShowModal(true)}>Thêm địa chỉ mới</button>  
            </div>
            <>{showModal && <Modaladdress closeModal={closeModal}/>} </>
            </div>
            
            <div className='Cart_1'>
                <table>
                  <thead>
                    <tr>
                      <th>Tên sản phẩm</th>
                      <th>Đơn giá</th>
                      <th>Số lượng</th>
                      <th>Thành tiền</th>
                    </tr>
                  </thead>

                  <tbody>
                  {cartItems.map((item) => (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.price}đ</td>
                      <td>{item.price}đ</td>
                      <td>{item.price}đ</td>
                    </tr>
                  ))}
                  </tbody>
              </table>
           
             </div>
        </div>
       
        <div className='voucher'>
          <BsTicketPerforatedFill className='icon_voucher'/> <p>HomeTek Voucher</p>
          <button>Chọn Voucher</button>
        </div>

        <div className='buy'>
          <div className='buy_child'>
              <input type='checkbox'/>
              <p> Chọn tất cả</p>
          </div>
          <div className='buy_child'> 
              <p>Tổng thanh toán</p>
              <div>(Tiền)</div>
          </div>
          
          <Link to = '/thanh-toan'>Đặt hàng</Link>
        </div>
    </div>
  )
}


export default Cart
