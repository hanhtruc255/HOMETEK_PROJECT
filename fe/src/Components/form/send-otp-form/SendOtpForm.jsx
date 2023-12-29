import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SendOtpForm.css";
// import FormButton from '../../form-btn/FormButton';
import FormButton from "../../form-btn/FormButton";
// import InputField from '../../input-field/InputField';
import InputField from "../../input-field/InputField";
// import CheckPhoneNumberFormat from '../../../functions/CheckPhoneNumberFormat';
import CheckPhoneNumberFormat from "../../../functions/CheckPhoneNumberFormat";
// import { ForgetPasswordPageContext } from '../../../pages/login-page/forget-password-page/ForgetPasswordPage';
import { ForgetPasswordPageContext } from "../../../Pages/Users/login-page/forget-password-page/ForgetPasswordPage";

const SendOtpForm = (nextPage) => {
  const sampleUser = {
    phoneNumber: "0123456789",
  };

  const { forgetPasswordPageState, setForgetPasswordPageState } = useContext(
    ForgetPasswordPageContext
  );
  const [isPhoneNumberDirectionVisible, setIsPhoneNumberDirectionVisible] =
    useState(false);

  const history = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!CheckPhoneNumberFormat(phoneNumber)) {
      console.log("phone number: " + phoneNumber);
      return;
    } else {
      if (phoneNumber != sampleUser.phoneNumber) {
        setForgetPasswordPageState({
          ...forgetPasswordPageState,
          confirmPhoneNumberModalVisible: true,
          confirmPhoneNumber: "notExist",
        });
        return;
      }
      history("/forget-password/vertify-otp");
    }
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <form className="form--send-otp form-otp" onSubmit={handleSubmit}>
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
            onChange={(event) => {
              const newPhoneNumber = event.target.value;
              setPhoneNumber(newPhoneNumber);
              setIsPhoneNumberDirectionVisible(
                !CheckPhoneNumberFormat(newPhoneNumber)
              );
            }}
          />
          {isPhoneNumberDirectionVisible && (
            <span className="notification-text">
              Số điện thoại bạn nhập không hợp lệ
            </span>
          )}
        </div>
        <FormButton text="Gửi mã" type="submit" />
      </div>
    </form>
  );
};

export default SendOtpForm;
