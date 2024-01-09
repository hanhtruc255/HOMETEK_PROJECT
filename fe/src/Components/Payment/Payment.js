import React, { useState, useEffect } from 'react';
import { BsCartFill,  } from 'react-icons/bs';
import { BsFillGeoAltFill } from 'react-icons/bs';
import {BsShop} from "react-icons/bs";
import './Payment.scss';
import 'reactjs-popup/dist/index.css';
import { BsTicketPerforatedFill} from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import ModalAddress from '../Modal/ModalAddress';
import ip1 from '../../Assets/images/momo.png';
import ip2 from '../../Assets/images/zalopay.png';
import ip3 from '../../Assets/images/card.png';
import ip4 from '../../Assets/images/money.png';
import ModalVoucher from '../Modal/ModalVoucher';
import './Responsive.scss'


const Payment = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('productId');
  const selectedItemsParam = searchParams.get('selectedItems');
  const selectedItems = selectedItemsParam ? JSON.parse(decodeURIComponent(selectedItemsParam)) : [];
  const decodedSelectedItems = selectedItemsParam ? decodeURIComponent(selectedItemsParam) : null;
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [linkDestination, setLinkDestination] = useState("/thanh-toan/xac-minh");
  const [totalAmount, setTotalAmount] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [showModalVoucher, setShowModalVoucher] = useState(false);
  const closeModal = () => setShowModal(false);
  const closeModalVoucher = () => setShowModalVoucher(false);
  const [addressInfo, setAddressInfo] = useState(null);
  const [editAddress, setEditAddress] = useState(false);

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
  useEffect(() => {
    console.log('Product ID:', productId);
  }, [productId]);
    useEffect(() => {
      const newTotalAmount = selectedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      setTotalAmount(newTotalAmount);
    }, [selectedItems,  addressInfo]);

    console.log('addressInfo:', addressInfo);

     ///format price
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  
  return (
   
    <div className='Frame_Payment'>
      <div className="payment_top">
        <BsCartFill />
        <h2>| THANH TOÁN</h2>
      </div>

      <div className="address">
        <div className="add1">
          <BsFillGeoAltFill /> <b>Địa Chỉ Nhận Hàng</b>
        </div>

        <div className="add_address">
        {addressInfo ? (
          <span>
            {addressInfo.fullName}, {addressInfo.phone}, {addressInfo.detailAddress}, {addressInfo.ward}, {addressInfo.district}, {addressInfo.city}, {addressInfo.detailAddress} {addressInfo.isDefault && "(Mặc định)"}
          </span>
        ) : (
          <span>Chưa có địa chỉ nhận hàng....</span>
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
                  <th ><BsShop className='iconshop'/>Tên sản phẩm</th>
                  <th>Đơn giá</th>
                  <th>Số lượng</th>
                  <th>Thành tiền</th>
                </tr>
              </thead>

              <tbody>
                {/* push data */}
                {selectedItems &&
                  selectedItems.map((item, index) => (
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
              <span>Đơn vị vận chuyển</span> 
              <b>Giao hàng nhanh
                <p>Nhận hàng vào ngày {`${deliveryStartDate.toLocaleDateString('en-GB')} - ${deliveryEndDate.toLocaleDateString('en-GB')}`}</p>
              </b>
              
              <div>15.000đ</div>
            
          </div> 
          {selectedItems &&
                  selectedItems.map((item, index) => (
          <div className='tongtien' key={item._id}>
          Tổng tiền: ({item.quantity} sản phẩm) <span> {formatPrice( totalAmount + 15000)}đ</span>
          </div>))}
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
                  <div>Tổng cộng:  <span> {formatPrice(totalAmount)}đ
                  </span>
                  </div>
                  <div>Phía vận chuyển:<span> 15.000đ
                  </span>
                  </div>
                  <div>Thành tiền<span> {formatPrice( totalAmount + 15000)}đ
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

export default Payment;
