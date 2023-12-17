import React from 'react';
import './SendOtpForm.css';
import FormButton from '../../form-btn/FormButton';
import InputField from '../../input-field/InputField';

const SendOtpForm = (props) => {
  return (
    <form className="form--send-otp form-otp">
      <div className="form__content">
        <h2 className="heading">PHỤC HỒI MẬT KHẨU</h2>
        <span className="direction">Nhập các thông tin dưới đây</span>
        <div className="input-container input-container--phone-otp">
          <label htmlFor="phone">Số điện thoại</label>
          <InputField
            type="text"
            placeholder="Nhập số điện thoại"
            id="phone"
            name="phone"
          />
        </div>
        <FormButton text="Gửi mã" onClick={props.handleSend} />
      </div>
    </form>
  );
};

export default SendOtpForm;
