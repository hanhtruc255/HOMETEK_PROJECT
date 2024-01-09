import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SendOtpForm.css";
import FormButton from "../../form-btn/FormButton";
import InputField from "../../input-field/InputField";
import CheckPhoneNumberFormat from "../../../functions/CheckPhoneNumberFormat";
import SendOtp from "../../../functions/SendOtp";
import { ForgetPasswordPageContext } from "../../../Pages/Users/login-page/forget-password-page/ForgetPasswordPage";

const SendOtpForm = (nextPage) => {
  const [isPhoneNumberDirectionVisible, setIsPhoneNumberDirectionVisible] =
    useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const history = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!CheckPhoneNumberFormat(phoneNumber)) {
      console.log("phone number err: " + phoneNumber);
      return;
    } else {
      console.log("phone number: " + phoneNumber);

      try {
        await axios
          .post("http://localhost:3001/login/existedPhone", {
            phone: phoneNumber,
          })
          .then(async (res) => {
            try {
              await SendOtp("0946841813");
              history("/forget-password/verify-otp");
            } catch (err) {
              console.log("err forget pwd: ", err);
              history("/forget-password/verify-otp");
            }
          });
      } catch (error) {
        console.log("check phone error: ", error);
        alert(error.response.data.message);
      }
    }
  };

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
