import React, { useEffect} from 'react';
import './Cart.scss';
import { BsTicketPerforatedFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { BsFillGeoAltFill } from 'react-icons/bs';
import { useState } from 'react';
import { BsTrash, BsHeart } from "react-icons/bs";




const Cart = () => {

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

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
    )}
    const removeItem = (itemId) => {
      const isConfirmed = window.confirm('Bạn có muốn xóa sản phẩm không?');
      if (isConfirmed) {
        const updatedCart = cartItems.filter(item => item._id !== itemId);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      }
    };
  
    const decrementQuantity = (itemId) => {
      const updatedCart = cartItems.map(item =>
        item._id === itemId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      );
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
  
    const incrementQuantity = (itemId) => {
      const updatedCart = cartItems.map(item =>
        item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
  
    useEffect(() => {
      const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
  
      const aggregatedCartItems = storedCartItems.reduce((accumulator, currentItem) => {
        const existingItem = accumulator.find(item => item._id === currentItem._id);
  
        if (existingItem) {
          existingItem.quantity += parseInt(currentItem.quantity, 10) || 1;
        } else {
          accumulator.push({
            ...currentItem,
            quantity: parseInt(currentItem.quantity, 10) || 1,
          });
        }
  
        return accumulator;
      }, []);
  
      setCartItems(aggregatedCartItems);
    }, []);
  
    const calculateTotal = () => {
      return cartItems.reduce((total, item) => (item.selected ? total + item.price * item.quantity : total), 0);
    };
  
    const toggleItemSelection = (itemId) => {
      setCartItems(prevCartItems =>
        prevCartItems.map(item =>
          item._id === itemId ? { ...item, selected: !item.selected } : item
        )
      );
    };  

    const toggleSelectAll = () => {
      setSelectAll((prevSelectAll) => !prevSelectAll);
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) => ({
          ...item,
          selected: !selectAll,
        }))
      );
    };
  

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
                      <th className='th1'>Tên sản phẩm</th>
                      <th>Đơn giá</th>
                      <th>Số lượng</th>
                      <th>Thành tiền</th>
                    </tr>
                  </thead>

                  <tbody>
                  {cartItems.map((item) => (
                    <tr key={item._id}>
                      <td className='spec'>
                        <div className='check1'>
                          <input
                            type='checkbox'
                            checked={item.selected}
                            onChange={() => toggleItemSelection(item._id)}/>
                          {/* <img src={item.image} /> */}
                           <img src={'https://i.ibb.co/dbnMxGQ/img1.jpg'} alt="hinh"/>

                        </div>
                        <div>
                          <b>{item.name} </b> <br/>
                          <BsTrash className='icon_trash' onClick={() => removeItem(item._id)}/>
                          <BsHeart className='icon_heart'/>

                        </div>
                        
                      </td>
                      <td><b>{item.price}đ</b>
                      </td>
                      <td>
                        <div className='qty'>
                          <button onClick={() => decrementQuantity(item._id)}>-</button>
                          <div><input type='text' value={Math.max(1, parseInt(item.quantity) || 1)} readOnly /></div>
                          <button  onClick={() => incrementQuantity(item._id)}>+</button>
                        </div>
                          
                      </td>
                      <td><b>{item.price*item.quantity}</b></td>
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
              <input type='checkbox' onChange={toggleSelectAll} checked={selectAll}/>
              <p> Chọn tất cả</p>
          </div>
          <div className='buy_child'> 
              <p>Tổng thanh toán</p>
              <div> {calculateTotal()}</div>
          </div>
          
          <Link to = '/thanh-toan'>Đặt hàng</Link>
        </div>
    </div>
  )
}


export default Cart
