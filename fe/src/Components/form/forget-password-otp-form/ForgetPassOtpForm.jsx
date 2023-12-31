import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormButton from "../../form-btn/FormButton";
const ForgetPassOtpForm = ({ smsOTP, nextPage, type, ...props }) => {
  //display the red text when user enter incorrect OTP
  const [incorrectOTPNotifyVisible, setIncorrectOTPNotifyVisible] =
    useState(false);

  //handle input data when call this form
  var heading = props.heading.toUpperCase();
  var btnText = props.btnText;

  //State for otp input of user
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [time, setTime] = useState(30);
  const [countdown, setCountdown] = useState(true);
  useEffect(() => {
    let interval = null;
    if (countdown) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (!countdown && time === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [countdown, time]);

  useEffect(() => {
    if (time === 0) {
      setCountdown(false);
    }
  }, [time]);

  //handle function resend otp
  const handleClick = () => {
    setTime(30);
    setCountdown(true);
  };

  //update current otp when user enter otp
  const handleInputChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;

    setOtp(newOtp);
    if (e.target.value) {
      const nextInput = document.querySelector(`#otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  //handle when send OTP to server
  const handleSubmit = (e) => {
    e.preventDefault();

    const confirmation = (otpInput) => {
      if (window.confirmationResult) {
        window.confirmationResult
          .confirm(otpInput)
          .then((result) => {
            //Handle when OTP true
            console.log("OTP: ", otp.join(""));
            setIncorrectOTPNotifyVisible(false);
          })
          .catch((error) => {
            // User couldn't sign in (bad verification code?)
            console.log("INVALID OTP");
            console.log("CONFIRM OTP ERROR: ", error);
            setIncorrectOTPNotifyVisible(true);
            return;
          });
      }
    };

    confirmation(otp.join(""));
  };

  return (
    <form className="form-otp" onSubmit={handleSubmit}>
      <div className="form__content">
        <h2 className="heading">{heading}</h2>
        <div className="wrap-otp">
          <span className="confirm-text">Xác thực</span>
          <span className="description">
            Nhập 6 số đã gửi về điện thoại của bạn
          </span>
          <div className="otp-container">
            {otp.map((digit, index) => (
              <input
                className="otp-field"
                key={index}
                id={`otp-input-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleInputChange(e, index)}
              />
            ))}
          </div>
        </div>
        {incorrectOTPNotifyVisible && (
          <span
            className="notification-text"
            style={{ textAlign: "center", paddingTop: "10px" }}
          >
            Mã OTP không đúng
          </span>
        )}
        <span
          className="resend-otp-btn"
          onClick={countdown ? null : handleClick}
          disabled={countdown}
        >
          {countdown ? `Gửi lại(${time}s)` : "Gửi lại"}
        </span>
        <FormButton text={btnText} type="submit" />
      </div>

      {props.children}
    </form>
  );
};

export default ForgetPassOtpForm;
