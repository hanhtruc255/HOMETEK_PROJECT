import React from 'react';
import { useContext } from 'react';

import { Link } from 'react-router-dom';
import '../../styles/FormStyle.css';
import FormButton from '../../components/form-btn/FormButton';
import InputField from '../../components/input-field/InputField';
import GoogleIcon from '../../assets/icons/google-icon.svg';
import FacebookIcon from '../../assets/icons/facebook-icon.svg';
import xmark from '../../assets/icons/xmark.svg';
import RedirectLoginSignup from '../../components/redirect-login-signup/RedirectLoginSignup';
import NewModal from '../../components/modals/NewModal';
import NotificationForm from '../../components/form/notification-form/NotificationForm';
import loginBackground from '../../assets/background/login-background.png';
import { AppContext } from '../../App';
const LoginPage = () => {
  const { notificationModalActive, toggleNotificationModalActive } =
    useContext(AppContext);
  return (
    <div className="main-content">
      <div className="wrap-form">
        <div className="form-background">
          <img src={loginBackground} alt="login background" />
        </div>
        <form className="form form--login">
          <div className="form__content">
            <div className="form__title">
              <h1>Đăng nhập</h1>
            </div>
            <div className="form__direction">Nhập các thông tin dưới dây</div>
            <div className="input-container">
              <label htmlFor="phone-number">
                Số điện thoại{' '}
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
              />
            </div>
            <div className="input-container">
              <label htmlFor="pwd">
                Mật khẩu{' '}
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
              />
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="save-pwd"
                id="save-pwd"
                value={true}
              />
              <label htmlFor="save-pwd">Lưu mật khẩu</label>
            </div>
            <FormButton
              text="Đăng nhập"
              style={{ width: '300px' }}
              onClick={toggleNotificationModalActive}
            />
            <Link className="nav-text" to={'/change-password'}>
              Quên mật khẩu?
            </Link>
            <div className="other-login-methods">
              <Link to={'/'} className="login-method">
                <img src={GoogleIcon} alt="google" />
                <span>Google</span>
              </Link>
              <Link to={'/'} className="login-method">
                <img src={FacebookIcon} alt="facebook" />
                <span>Facebook</span>
              </Link>
            </div>
            <RedirectLoginSignup
              question="Bạn chưa có tài khoản?"
              page="Đăng ký"
              pagePath="/signup"
            />
          </div>
        </form>
      </div>
      {notificationModalActive && (
        <NewModal className="otp-form-modal">
          <NotificationForm
            type="error"
            btnText="Nhập lại"
            heading="Đăng nhập không thành công!"
            errorText="Số điện thoại hoặc mật khẩu không chính sác"
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
    </div>
  );
};

export default LoginPage;
