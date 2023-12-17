import React from 'react';
import './ChangePasswordForm.css';
import FormButton from '../../form-btn/FormButton';
import InputField from '../../input-field/InputField';

const ChangePasswordForm = (props) => {
  return (
    <form className="form form--change-pwd form-otp">
      <div className="form__content">
        <h2 className="heading">PHỤC HỒI MẬT KHẨU</h2>
        <span className="direction">Nhập các thông tin dưới đây</span>
        <div className="input-container">
          <label htmlFor="new-pwd">Nhập mật khẩu mới</label>
          <InputField
            type="text"
            placeholder="Nhập mật khẩu mới"
            id="new-pwd"
            name="new-pwd"
          />
        </div>
        <span className="pwd-direction pwd-direction--new">
          (Mật khẩu phải nhiều hơn 8 ký tự, ít nhất 1 chữ thường, 1 chữ in hoa,
          1 chữ số, 1 ký tự đặc biệt.)
        </span>
        <div className="input-container input-container--repeat-new-pwd">
          <label htmlFor="repeat-new-pwd">Nhập lại mật khẩu</label>
          <InputField
            type="text"
            placeholder="Nhập lại mật khẩu"
            id="repeat-new-pwd"
            name="repeat-new-pwd"
          />
        </div>
        <FormButton
          type="button"
          text="Xác minh"
          onClick={props.handleSubmit}
        />
      </div>
    </form>
  );
};

export default ChangePasswordForm;
