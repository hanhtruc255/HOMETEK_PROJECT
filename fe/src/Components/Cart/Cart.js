import React from 'react'
import { BsShop } from "react-icons/bs";
import './Cart.scss'
import { BsTicketPerforatedFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className='cart'>
        {/* breadcrum */}
        <p>Trang chủ  /  <b> Giỏ hàng</b></p>
        <div className='Frame_cart'>
            <div className="product-table table-responsive">
               <table className="table table-hover table-bordered table-striped">
                   <thead>
                     <tr>
                       <th>
                         <input type='checkbox'/><BsShop className='icon_shop'/>
                         <b>Sản phẩm</b>
                         </th>
                       <th>Đơn giá</th>
                       <th>Số lượng</th>
                       <th>Thành tiền</th>
                     </tr>
                  </thead>

                  <tbody>
                  <tr>
                      <td className='body'><input type='checkbox'/>hủ</td>
                      <td>vể</td>
                      <td>revrv</td>
                      <td>reverer</td>
                    </tr>
                  </tbody>
                    
                </table>
           
             </div>
        </div>
        <hr></hr>
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

        // {cartItems && cartItems.length > 0 ? (
        //   cartItems.map((item) => (
        //     <li key={item.id}>
        //       {item.name} - {item.price}
        //       {/* <button onClick={() => removeFromCart(item.id)}>Remove</button> */}
        //     </li>
        //   ))
        // ) : (
        //   <p>Your cart is empty</p>
        // )}
  
