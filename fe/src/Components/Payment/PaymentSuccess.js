import React from 'react'

import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <div>
       
        <center className='confirm_success'>
            <BsCheckCircleFill className='iconcheck'/>
            <h3>Đặt hàng thành công</h3>
            <p>Bạn sẽ nhận được sản phẩm trong vài ngày tới</p>
            <Link to ='/'>Trở về trang chủ</Link>
            

        </center>
    </div>
  )
}

export default PaymentSuccess