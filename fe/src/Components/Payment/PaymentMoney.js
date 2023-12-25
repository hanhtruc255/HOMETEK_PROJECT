import React from 'react'
import Navbar from '../Navbar/Navbar';
import ipayment from '../.././Assets/payment.png';
import { Link } from 'react-router-dom';

const PaymentMoney = () => {
  return (
    <div>
        <Navbar/>
         <center className='payment_money'>
            <h3>THÔNG TIN THANH TOÁN</h3>
            <Link to= '/thanh-toan/thanh-cong'><img src={ipayment}/></Link>
            <p>Mã có hiệu lực trong
                <span> (time)</span>
            </p>
            <Link to ='/thanh-toan'>Trở lại</Link>
         </center>
    </div>
   
  )
}

export default PaymentMoney