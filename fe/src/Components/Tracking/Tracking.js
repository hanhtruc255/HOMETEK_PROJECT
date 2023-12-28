import React from 'react';
import './Tracking.scss'
function Tracking() {
  return (
    <center className='track_frame'>
        <div className='tracking_top'>
            <h3>Kiểm tra thông tin đơn hàng và tình trạng vận chuyển</h3>
            <input placeholder='Số điện thoại (bắt buộc)'/> <br/>
            <input placeholder='Mã đơn hàng (bắt buộc)'/> <br/>
            <button>Kiểm tra</button>
        </div>
    </center>
  )
}

export default Tracking