import React from 'react';
import './Tracking.scss';
import img from '../../Assets/images/tra-cuu-van-don.png';
import './Responsive.scss'
function Tracking() {
  return (
    <div  className='track_frame'>
      <div><img src={img}/></div>
        <div className='tracking_top'>
            <h3>Kiểm tra thông tin đơn hàng và tình trạng vận chuyển</h3>
            <input placeholder='Số điện thoại (bắt buộc)'/> <br/>
            <input placeholder='Mã đơn hàng (bắt buộc)'/> <br/>
            <button>Kiểm tra</button>
        </div>
    </div>

    
  )
}

export default Tracking