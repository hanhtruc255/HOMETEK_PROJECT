import React from 'react';
import { useState, useContext } from 'react';
import './SignUpPage.css';
import FormButton from '../../components/form-btn/FormButton';
import InputField from '../../components/input-field/InputField';
import RedirectLoginSignup from '../../components/redirect-login-signup/RedirectLoginSignup';
import VertificationOtpForm from '../../components/form/verification-otp-form/VerificationOtpForm';
import NewModal from '../../components/modals/NewModal';
import signupBackground from '../../assets/background/signup-background.png';
import Modal from '../../components/modals/Modal';
import { AppContext } from '../../App';

import xmark from '../../assets/icons/xmark.svg';
import NotificationForm from '../../components/form/notification-form/NotificationForm';

const SignUpPage = () => {
  const {
    otpFormModalActive,
    toggleOtpFormModalActive,
    notificationModalActive,
    toggleNotificationModalActive,
  } = useContext(AppContext);

  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const checkPasswordConditions = (password) => {
    // Conditions to check
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[^a-zA-Z\d\s:]/.test(password);
    const hasMinLength = password.length > 8;

    // Check if all conditions are met
    if (
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar &&
      hasMinLength
    ) {
      setErrorMsg('');
      return true;
    } else {
      setErrorMsg('Wrong password format');
      return false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!checkPasswordConditions(password)) {
      setErrorMsg('Password must have at least 1 special character');
      console.log('error: ' + errorMsg);
    } else {
      setErrorMsg('');
      console.log('error: ' + errorMsg);
      // Perform other validations and proceed with the submission
    }
  };
  return (
    <>
      <div className="main-content">
        <div className="wrap-form">
          <div className="form-background">
            <img src={signupBackground} alt="signup background" />
          </div>
          <form className="form form--signup" onSubmit={handleSubmit}>
            <div className="form__content">
              <div className="form__title">
                <h1>Đăng Ký</h1>
              </div>
              <div className="form__direction">Nhập các thông tin dưới dây</div>
              <div className="input-container input-container--signup">
                <label htmlFor="name">
                  Họ và tên{' '}
                  <span
                    style={{
                      color: 'red',
                      textAlign: 'center',
                      paddingLeft: '3px',
                    }}
                  >
                    *
                  </span>
                </label>
                <InputField
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nhập họ và tên"
                />
              </div>
              <div className="input-container input-container--signup">
                <label htmlFor="phone-number">
                  Số điện thoại
                  <span
                    style={{
                      color: 'red',
                      textAlign: 'center',
                      paddingLeft: '3px',
                    }}
                  >
                    *
                  </span>
                </label>
                <InputField
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  placeholder="Nhập số điện thoại"
                  pattern="^0[0-9]{3}[0-9]{3}[0-9]{3}"
                />
              </div>
              <div className="input-container input-container--signup">
                <label htmlFor="pwd">
                  Mật khẩu
                  <span
                    style={{
                      color: 'red',
                      textAlign: 'center',
                      paddingLeft: '3px',
                    }}
                  >
                    *
                  </span>
                </label>
                <InputField
                  type="password"
                  name="pwd"
                  id="pwd"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <span className="pwd-direction pwd-direction--sign-up">
                (Mật khẩu phải nhiều hơn 8 ký tự, ít nhất 1 chữ thường, 1 chữ in
                hoa, 1 chữ số, 1 ký tự đặc biệt.)
              </span>
              <div className="input-container input-container--signup">
                <label htmlFor="pwd">
                  Nhập lại mật khẩu
                  <span
                    style={{
                      color: 'red',
                      textAlign: 'center',
                      paddingLeft: '3px',
                    }}
                  >
                    *
                  </span>
                </label>
                <InputField
                  type="password"
                  name="repeat-pwd"
                  id="repeat-pwd"
                  placeholder="Nhập lại mật khẩu"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </div>
              <FormButton
                text="Đăng ký"
                style={{ marginTop: '10px', width: '300px' }}
                type="submit"
                onClick={toggleOtpFormModalActive}
              />
              <RedirectLoginSignup
                question="Bạn đã có tài khoản?"
                page="Đăng nhập"
                pagePath="/login"
              />
            </div>
          </form>
        </div>
        {otpFormModalActive && (
          <NewModal className="otp-form-modal">
            <VertificationOtpForm
              heading="Đăng ký"
              btnText="Xác minh"
              handleSubmit={toggleNotificationModalActive}
            >
              <span className="closeModal" onClick={toggleOtpFormModalActive}>
                <img src={xmark} alt="xmark" />
              </span>
            </VertificationOtpForm>
          </NewModal>
        )}
        {notificationModalActive && (
          <NewModal className="otp-form-modal">
            <NotificationForm
              type="error"
              btnText="Gửi lại mã"
              heading="Mã OTP sai, vui lòng nhập lại!"
              errorText="Vui lòng nhập lại mã"
            >
              <span
                className="closeModal"
                onClick={toggleNotificationModalActive}
              >
                <img src={xmark} alt="xmark" />
              </span>
            </NotificationForm>
          </NewModal>
        )}
        {/* <Modal
          type="error"
          btnText="Gửi lại mã"
          heading="Mã OTP sai, vui lòng nhập lại!"
          errorText="Vui lòng nhập lại mã"
        /> */}
      </div>
    </>
  );
};

export default SignUpPage;
