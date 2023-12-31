import React from "react";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/FormStyle.css";
import FormButton from "../../../Components/form-btn/FormButton";
import GoogleIcon from "../../../Assets/icons/google-icon.svg";
import FacebookIcon from "../../../Assets/icons/facebook-icon.svg";
import xmark from "../../../Assets/icons/xmark.svg";
import RedirectLoginSignup from "../../../Components/redirect-login-signup/RedirectLoginSignup";
import WrapperModal from "../../../Components/modals/WrapperModal";
import NotificationForm from "../../../Components/form/notification-form/NotificationForm";
import loginBackground from "../../../Assets/background/login-background.png";
import { AppContext } from "../layout/Layout";
const LoginPage = () => {
  const { setDisplayFooter, globalState, setGlobalState } =
    useContext(AppContext);
  useEffect(() => {
    setDisplayFooter(false);
  }, []);
  const history = useNavigate();

  const [notificationModalActive, setNotificationModalActive] = useState(false);

  const [loginData, setLoginData] = useState({
    phoneNumber: "",
    password: "",
  });

  const [loginStatus, setLoginStatus] = useState("success");
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("loginData: ", loginData);
    try {
      await axios
        .post("http://localhost:3001/login", {
          phone: loginData.phoneNumber,
          password: loginData.password,
        })
        .then((res) => {
          if (res) {
            setNotificationModalActive(true);
            const userId = res.data.userId;
            window.localStorage.setItem("userId", userId);
            window.localStorage.setItem("isLoggedIn", true);
          }
          console.log("LOGIN SUCCESSFULLY");
          setLoginStatus("success");
        });
    } catch (error) {
      console.log("ERROR: ", error);
      setLoginStatus("error");
      setNotificationModalActive(true);
    }
  };

  return (
    <div className="main-content">
      <div className="wrap-form">
        <div className="form-background">
          <img src={loginBackground} alt="login background" />
        </div>
        <form
          className="form form--login"
          onSubmit={(event) => handleSubmit(event)}
        >
          <div className="form__content">
            <div className="form__title">
              <h1>Đăng nhập</h1>
            </div>
            <div className="form__direction">Nhập các thông tin dưới dây</div>
            <div className="input-container">
              <div class="form-floating pb-3">
                <input
                  class="form-control"
                  id="phone-number"
                  name="phone-number"
                  type="tel"
                  placeholder="Nhập số điện thoại"
                  onChange={(event) => {
                    const newPhoneNumber = event.target.value;
                    setLoginData({ ...loginData, phoneNumber: newPhoneNumber });
                  }}
                />
                <label for="phone-number">Nhập số điện thoại</label>
              </div>
            </div>
            <div className="input-container">
              <div class="form-floating pb-3">
                <input
                  class="form-control"
                  id="password"
                  name="password"
                  placeholder="Nhập mật khẩu"
                  type="password"
                  onChange={(event) => {
                    const newPassword = event.target.value;
                    setLoginData({ ...loginData, password: newPassword });
                  }}
                />
                <label for="password">Nhập mật khẩu</label>
              </div>
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
              type="submit"
              style={{ width: "300px" }}
              className="form-btn"
            />
            <Link className="nav-text" to={"/forget-password/send-otp"}>
              Quên mật khẩu?
            </Link>
            <div className="other-login-methods">
              <Link to={"/"} className="login-method">
                <img src={GoogleIcon} alt="google" />
                <span>Google</span>
              </Link>
              <Link to={"/"} className="login-method">
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
        <WrapperModal className="otp-form-modal">
          <NotificationForm
            type={loginStatus === "error" ? "error" : "success"}
            btnText={loginStatus === "error" ? "Nhập lại" : "Trang chủ"}
            heading={
              loginStatus === "error"
                ? "Đăng nhập không thành công"
                : "Đăng nhập thành công"
            }
            errorText={
              loginStatus === "error"
                ? "Số điện thoại hoặc mật khẩu không chính xác"
                : "Chào mừng bạn quay lại"
            }
            handleClick={() => {
              if (loginStatus === "error") {
                history("/login");
              } else {
                history("/");
              }
              setNotificationModalActive(false);
            }}
          >
            <span
              className="closeModal"
              onClick={() => setNotificationModalActive(false)}
            >
              <img src={xmark} alt="xmark" />
            </span>
          </NotificationForm>
        </WrapperModal>
      )}
    </div>
  );
};

export default LoginPage;
