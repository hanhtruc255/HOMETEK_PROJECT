import React, {useEffect} from 'react';
import './style.scss';
import voucher from "../../Assets/images/voucher.png"

const ModalVoucher = ({closeModalVoucher}) => {
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
          document.body.style.overflowY = "scroll";
        };
      }, []);
  return (
    <div>
        <div className='modal_wrapper'></div>

            <div className='modal_evalua'>
                <div>
                    <h3>HomeTek Voucher</h3>
                    <div className='modal_evalua_1'>
                        <img src={voucher}/>
                        <div>
                            <b>Giảm 20%</b>
                            <p>Đơn Tối thiếu 10.000.000đ giảm tối đa 500.000đ</p>
                            <span>HSD: 12/1/2024</span>
                        </div>
                        <input type='radio' name='evalua'/>
                    </div>
                    <div className='modal_evalua_1'>
                        <img src={voucher}/>
                        <div>
                            <b>Giảm 10%</b>
                            <p>Đơn Tối thiếu 8.000.000đ giảm tối đa 300.000đ</p>
                            <span>HSD: 12/1/2024</span>
                        </div>
                        <input type='radio' name='evalua'/>
                    </div>
                </div>

                <div className='evalua2'>
                    <button onClick={closeModalVoucher} className='btnspec'>Trở lại</button>
                    <button  onClick={closeModalVoucher}>Xác nhận</button>
                </div>
                

            </div>        
    </div>
  )
}

export default ModalVoucher