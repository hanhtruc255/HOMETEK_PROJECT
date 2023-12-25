import React from 'react'
import { Link } from 'react-router-dom'
import './Payment.scss';

const Confirm = () => {
  return (
    <div className='confirm'>
      <center><h3>XÁC MINH THÔNG TIN</h3></center>
      <h5>Xác thực</h5>
      <p>Nhập 6 số đã gửi về số điện thoại của bạn.</p>
      <input className='specint'/>
      <input/>
      <input/>
      <input/>
      <input/>
      <input/>
      <br/>
      <center>
      <button>Gửi lại (30s)</button> <br/>
      <Link to = '/thanh-toan/xac-minh/thanh-toan-tien' className='speclink'>XÁC MINH</Link> <br/>
      <Link to ='/thanh-toan'>Trở lại</Link>
      </center>
      

    </div>
  )
}

export default Confirm