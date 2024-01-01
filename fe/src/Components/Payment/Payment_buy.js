import React, { useState, useEffect } from 'react';
import { BsCartFill } from 'react-icons/bs';
import { BsFillGeoAltFill } from 'react-icons/bs';
import {BsShop} from "react-icons/bs";
import './Payment.scss';
import 'reactjs-popup/dist/index.css';
import { BsTicketPerforatedFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import ModalAddress from '../Modal/ModalAddress';
import ip1 from '../../Assets/images/momo.png';
import ip2 from '../../Assets/images/zalopay.png';
import ip3 from '../../Assets/images/card.png';
import ip4 from '../../Assets/images/money.png';
import ModalVoucher from '../Modal/ModalVoucher';



const Payment_buy = (props) => {
    const location = useLocation();
    const { state } = location;
    const [BuyItem, setBuyItem] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [linkDestination, setLinkDestination] = useState("/thanh-toan/xac-minh");
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModalVoucher, setShowModalVoucher] = useState(false);
  const closeModalVoucher = () => setShowModalVoucher(false);
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const [addressInfo, setAddressInfo] = useState(null);
  const [editAddress, setEditAddress] = useState(false);

  //mua ngay
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('payment')) || [];
    setBuyItem(storedItems);
    localStorage.removeItem('payment');
  }, []);
  console.log(">>>>>>>>>>>>>>>>>>", BuyItem)

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
    if (method === ip4) {
      setLinkDestination("/thanh-toan/xac-minh-1");
    } else {
      setLinkDestination("/thanh-toan/xac-minh");
    }
  };
  //time giao hàng dự kiến
  const today = new Date();
  const deliveryStartDate = new Date(today);
  deliveryStartDate.setDate(today.getDate() + 3); 

  const deliveryEndDate = new Date(today);
  deliveryEndDate.setDate(today.getDate() + 5); 

  const handleAddressSubmit = (address) => {
    setAddressInfo(address);
    setShowModal(false);
    console.log('>>>>', address); 
  };
  const handleEditAddress = () => {
    setShowModal(true);
    setEditAddress(true);
  };
    console.log('addressInfo:', addressInfo);
    //get prodduct

    ///modal for vận chuyển
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
            <button>GỬI ĐÁNH GIÁ</button>
          </div>
        </>
    )
    }
     ///format price
     const formatPrice = (price) => {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
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

        <div className="add_address">
        {addressInfo ? (
          <span>
            {addressInfo.fullName}, {addressInfo.phone}, {addressInfo.detailAddress}, {addressInfo.ward}, {addressInfo.district}, {addressInfo.city} {addressInfo.isDefault && "(Mặc định)"}
          </span>
        ) : (
          <span>Chưa có địa chỉ nhận hàng</span>
        )}
        {addressInfo ? (
          <button onClick={handleEditAddress}>Thay đổi</button>
        ) : (
          <button onClick={() => setShowModal(true)}>Thêm địa chỉ mới</button>
        )}
      </div>
        <>  
        {showModal && <ModalAddress closeModal={() => setShowModal(false)} onSubmitAddress={handleAddressSubmit} editAddress={editAddress} currentAddress={addressInfo} />}
          </>

      </div>
      <div className='Payment_bottom'>
          <table>
              <thead>
                <tr>
                  <th><BsShop/>Tên sản phẩm</th>
                  <th>Đơn giá</th>
                  <th>Số lượng</th>
                  <th>Thành tiền</th>
                </tr>
              </thead>

              <tbody>
                {/* push data */}
                {BuyItem&&
                  BuyItem.map((item, index) => (
                    <tr key={item._id}>
                      <td className='spec'>
                        <p>{index + 1}</p>
                        <img src={item.image} alt="hinh"/>                      
                        <b>{item.name}</b>
                      </td>
                      <td><b>{formatPrice(item.price)}đ</b></td>
                      <td>{item.quantity}</td>
                      <td><b>{formatPrice(item.price*item.quantity)}đ</b></td>
                    </tr>
                  ))}
              </tbody>
          </table>
          <div className='voucher'>
              <BsTicketPerforatedFill className='icon_voucher'/> <p>HomeTek Voucher</p>
              <button onClick={()=> setShowModalVoucher(true)}>Chọn Voucher</button>
          </div>
            <> {showModalVoucher && <ModalVoucher closeModalVoucher={() => setShowModalVoucher(false)}/>}</>

          <div className='delivery'>
              <p>Đơn vị vận chuyển</p> 
              <b>Giao hàng nhanh
                <p>Nhận hàng vào ngày {`${deliveryStartDate.toLocaleDateString('en-GB')} - ${deliveryEndDate.toLocaleDateString('en-GB')}`}</p>
              </b>
              
              <div>15.000đ</div>
            <hr></hr>
            
          </div> 
          <div className='tongtien'>
          Tổng tiền: <span> {formatPrice( totalAmount + 15000)}đ</span>
          </div>
          <div className='money'>
                <div className='money_left'>
                  <p>Phương thức thanh toán</p>
                  <div className='money_left_child'>
                  <label>
                        <input
                          type="radio"
                          name="payment"
                          onChange={() => handlePaymentMethodChange(ip1)}
                        />
                        <img src={ip1} />
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="payment"
                          onChange={() => handlePaymentMethodChange(ip2)}
                        />
                        <img src={ip2} />
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="payment"
                          onChange={() => handlePaymentMethodChange(ip3)}
                        />
                        <img src={ip3} />
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="payment"
                          onChange={() => handlePaymentMethodChange(ip4)}
                        />
                        <img src={ip4} />
                      </label>
                      <p>
                        {selectedPaymentMethod === ip4
                          ? "Thanh toán nhận hàng"
                          : selectedPaymentMethod
                          ? "Internet"
                          : ""}
                      </p>
                      <b>Thời gian giao hàng dự kiến</b>
                      <p>{`${deliveryStartDate.toLocaleDateString('en-GB')} - ${deliveryEndDate.toLocaleDateString('en-GB')}`}</p>

                  </div>
                </div>
            
                <div className='money_right'>
                  <div>Tổng cộng:  <span>{formatPrice(totalAmount)}đ
                  </span>
                  </div>
                  <div>Phía vận chuyển:<span> 15.000đ
                  </span>
                  </div>
                  <div>Thành tiền<span>  {formatPrice( totalAmount + 15000)}đ
                  </span>
                  </div>
                </div>
          </div>
          <Link to={linkDestination} className="dathang">
        ĐẶT HÀNG
      </Link>
      </div>
      <br></br>
    </div>
   
  );
};

export default Payment_buy;
