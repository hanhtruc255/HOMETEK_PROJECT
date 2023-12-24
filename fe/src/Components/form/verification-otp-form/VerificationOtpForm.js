import React from 'react';
import { useState, useEffect, useContext } from 'react';
import './VerificationOtpForm.css';
import xmark from '../../../assets/icons/xmark.svg';
import FormButton from '../../form-btn/FormButton';
import { AppContext } from '../../../App';
const VertificationOtpForm = (props) => {
  const {
    toggleModalActive,
    toggleOtpFormModalActive,
    toggleNotificationModalActive,
  } = useContext(AppContext);
  var heading = props.heading.toUpperCase();
  var btnText = props.btnText;

  const [otp, setOtp] = useState(Array(6).fill(''));
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

  const handleClick = () => {
    setTime(30);
    setCountdown(true);
  };

  const handleInputChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;

    setOtp(newOtp);

    if (e.target.value) {
      const nextInput = document.querySelector(`#otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('OTP:', otp.join(''));
  // };

  return (
    <form className="form-otp">
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
        <span
          className="resend-otp-btn"
          onClick={countdown ? null : handleClick}
          disabled={countdown}
        >
          {countdown ? `Gửi lại(${time}s)` : 'Gửi lại'}
        </span>
        <FormButton text={btnText} type="button" onClick={props.handleSubmit} />
      </div>

      {props.children}
    </form>
  );
};

export default VertificationOtpForm;
