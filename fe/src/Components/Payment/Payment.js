import React, {useState, useEffect} from 'react';
import { BsCartFill } from 'react-icons/bs';
import { BsFillGeoAltFill } from 'react-icons/bs';
import './Payment.scss'
import 'reactjs-popup/dist/index.css';
import { BsTicketPerforatedFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Payment = () => {
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
   
    <div className='Frame_Payment'>
      <div className="payment_top">
        <BsCartFill />
        <h2>THANH TOÁN</h2>
      </div>

      <div className="address">
        <div className="add1">
          <BsFillGeoAltFill /> <b>Địa Chỉ Nhận Hàng</b>
        </div>

        <div className='add_address'>
          <span>Chưa có địa chỉ nhận hàng</span>
          <button onClick={()=> setShowModal(true)}>Thêm địa chỉ mới</button>  
        </div>
        <>  
            {showModal && <Modaladdress closeModal={closeModal}/>}
          </>

      </div>
      <div className='Payment_bottom'>
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
                {/* truyền data */}
                <tr>
                  <td>êffewf</td>
                  <td>fwew</td>
                  <td>ừef32w</td>
                  <td>ừewf23</td>
                </tr>
              </tbody>
          </table>
          <div className='voucher'>
              <BsTicketPerforatedFill className='icon_voucher'/> <p>HomeTek Voucher</p>
              <button>Chọn Voucher</button>
          </div>

          <div className='delivery'>
              <p>Đơn vị vận chuyện</p> 
              <div>Giao hàng nhanh</div>
              <button>Thay đổi</button>
              <div>(Tiền)</div>
            <hr></hr>
            
          </div> 
          <div className='tongtien'>
            <span>Tổng tiền:</span> ----Tiền---
          </div>


        <div className='money'>
              <div className='money_left'>
                <p>Phương thức thanh toán</p>
                <div className='money_left_child'>
                    <label><input type='radio' name ='payment'/><img src='/'/></label>
                    <label><input type='radio' name ='payment'/><img src='/'/></label>
                    <label><input type='radio' name ='payment'/><img src='/'/></label>
                    <label><input type='radio' name ='payment'/><img src='/'/></label>
                    <p>Thanh toán nhận hàng</p>
                    <b>Thời gian giao hàng dự kiến</b>
                </div>
              </div>
          
              <div className='money_right'>
                <div>Tổng cộng:   <span>   ----
                </span>
                </div>
                <div>Phía vận chuyển:<span> -----
                </span>
                </div>
                <div>Thành tiền<span> -----
                </span>
                </div>
              </div>
        </div>
        <div >
          <Link to ="/thanh-toan/xac-minh" className='dathang'>ĐẶT HÀNG</Link>
        </div>

      </div>
      <br></br>
    </div>
   
  );
};

export default Payment;
