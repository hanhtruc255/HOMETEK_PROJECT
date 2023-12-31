import { React, useState, useContext, useEffect, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import auth from "../../../firebase-config/FirebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import "./SignUpPage.css";
import FormButton from "../../../Components/form-btn/FormButton";
import RedirectLoginSignup from "../../../Components/redirect-login-signup/RedirectLoginSignup";
import VerificationOtpForm from "../../../Components/form/verification-otp-form/VerificationOtpForm";
import WrapperModal from "../../../Components/modals/WrapperModal";
import signupBackground from "../../../Assets/background/signup-background.png";
import { AppContext } from "../layout/Layout";
import xmark from "../../../Assets/icons/xmark.svg";
import NotificationForm from "../../../Components/form/notification-form/NotificationForm";
import PasswordModal from "../../../Components/modals/password-modal/PasswordModal";
import {
  CheckPasswordChars,
  CheckPasswordLength,
  CheckPasswordFormat,
} from "../../../functions/CheckPasswordFormat";

import CheckPhoneNumberFormat from "../../../functions/CheckPhoneNumberFormat";

//Call this function like this: SendOtp(phoneNumber) to send sms otp to phoneNumber
import SendOtp from "../../../functions/SendOtp";

//context of sign up page
export const SignUpPageContext = createContext();

const SignUpPage = () => {
  //Display footer
  const { setDisplayFooter } = useContext(AppContext);
  useEffect(() => {
    setDisplayFooter(false);
  }, []);

  //Call AppContext from Layout
  const {
    globalState,
    setGlobalState,
    enableOtpFormModalActive,
    disableOtpFormModalActive,
    disableSignupStatusModal,
  } = useContext(AppContext);

  //State to show password notification modal
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);

  //data storage(store user input data)
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    isReadTerms: false,
    otpStatus: false,
  });

  //state of formData(valid or invalid)
  const [formIsValid, setFormIsValid] = useState(false);

  //Check formValid when formData change
  useEffect(() => {
    const conditions =
      CheckPasswordFormat(formData.password) &&
      CheckPhoneNumberFormat(formData.phoneNumber) &&
      formData.name &&
      formData.isReadTerms &&
      formData.confirmPassword === formData.password;
    setFormIsValid(conditions);
  }, [formData]);

  //state to display error when user enter incorrect phone number format
  const [isPhoneNumberDirectionVisible, setIsPhoneNumberDirectionVisible] =
    useState(false);

  //State to display error when user enter confirm password != password
  const [
    siConfirmPasswordDirectionVisible,
    setIsConfirmPasswordDirectionVisible,
  ] = useState(false);

  //State to display error when user enter incorrect password format
  const [isPasswordDirectionVisible, setIsPasswordDirectionVisible] =
    useState(false);
  const history = useNavigate();

  //handle when click to send data to server
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    if (!formIsValid) {
      alert("Form is not valid, please check your inputs.");
      return;
    } else {
      try {
        await axios
          .post("http://localhost:3001/register/findPhone", {
            phone: formData.phoneNumber,
          })
          .then(() => {
            console.log("CHECK PHONE SUCCESSFULLY");
            SendOtp(formData.phoneNumber);
            enableOtpFormModalActive();
          });
      } catch (error) {
        const errorMsg = error.response.data.message;
        alert(errorMsg);
      }
    }
  };

  const [firebaseSignUpMsg, setFirebaseSignUpMsg] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (firebaseSignUpMsg) {
        try {
          await axios
            .post("http://localhost:3001/register", {
              userName: formData.name,
              phone: formData.phoneNumber,
              password: formData.password,
              OTP: firebaseSignUpMsg,
            })
            .then(() => {
              console.log("SIGN UP SUCCESSFULLY");
              setGlobalState({
                ...globalState,
                signupStatus: "success",
                signupStatusModalVisible: true,
              });
            });
        } catch (error) {
          const errorMsg = error.response.data.message;
          alert(errorMsg);
        }
      }
    }
    fetchData();
  }, [firebaseSignUpMsg]);

  return (
    <SignUpPageContext.Provider value={{ setFirebaseSignUpMsg }}>
      <div className="main-content">
        <div id="recaptcha-container"></div>
        <div className="wrap-form">
          <div className="form-background">
            <img src={signupBackground} alt="signup background" />
          </div>
          <form
            className="form form--signup"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="form__content">
              <div className="form__title">
                <h1>Đăng Ký</h1>
              </div>
              <div className="form__direction">Nhập các thông tin dưới dây</div>
              <div className="input-container">
                <div class="form-floating pb-3">
                  <input
                    class="form-control"
                    id="full-name"
                    name="full-name"
                    placeholder="Họ và tên"
                    onChange={(event) => {
                      const newName = event.target.value;
                      setFormData({ ...formData, name: newName });
                    }}
                    type="text"
                  />
                  <label for="full-name">Nhập họ và tên</label>
                </div>
              </div>
              <div className="input-container ">
                <div class="form-floating pb-3">
                  <input
                    class="form-control"
                    id="phone-number"
                    name="phone-number"
                    placeholder="Nhập số điện thoại"
                    type="tel"
                    onChange={(event) => {
                      const newPhoneNumber = event.target.value;
                      setFormData({ ...formData, phoneNumber: newPhoneNumber });
                      setIsPhoneNumberDirectionVisible(
                        !CheckPhoneNumberFormat(newPhoneNumber)
                      );
                    }}
                  />
                  <label for="phone-number">Nhập số điện thoại</label>
                  {isPhoneNumberDirectionVisible && (
                    <span className="notification-text">
                      Số điện thoại bạn nhập không hợp lệ
                    </span>
                  )}
                </div>
              </div>
              <div className="input-container ">
                {isPasswordModalVisible && (
                  <PasswordModal
                    firstCondition={CheckPasswordLength(formData.password)}
                    secondCondition={CheckPasswordChars(formData.password)}
                  />
                )}
                <div class="form-floating pb-3">
                  <input
                    class="form-control"
                    id="password"
                    name="password"
                    placeholder="Nhập mật khẩu"
                    type="password"
                    onChange={(event) => {
                      const newPassword = event.target.value;
                      setFormData({
                        ...formData,
                        password: newPassword,
                      });
                      if (!CheckPasswordFormat(newPassword)) {
                        setIsPasswordDirectionVisible(true);
                      } else {
                        setIsPasswordDirectionVisible(false);
                      }
                    }}
                    onFocus={() => {
                      setIsPasswordModalVisible(!isPasswordModalVisible);
                    }}
                    onBlur={() => {
                      setIsPasswordModalVisible(!isPasswordModalVisible);
                    }}
                  />
                  <label for="password">Nhập mật khẩu</label>
                  {isPasswordDirectionVisible && (
                    <span className="notification-text">
                      Mật khẩu không hợp lệ
                    </span>
                  )}
                </div>
              </div>
              <span className="pwd-direction pwd-direction--sign-up">
                (Mật khẩu phải nhiều hơn 8 ký tự, ít nhất 1 chữ thường, 1 chữ in
                hoa, 1 chữ số, 1 ký tự đặc biệt.)
              </span>
              <div className="input-container">
                <div class="form-floating pb-3">
                  <input
                    class="form-control"
                    id="confirm-password"
                    name="confirm-password"
                    placeholder="Nhập lại mật khẩu"
                    type="password"
                    onChange={(event) => {
                      const newConfirmPassword = event.target.value;
                      setFormData({
                        ...formData,
                        confirmPassword: newConfirmPassword,
                      });
                      if (newConfirmPassword === formData.password) {
                        setIsConfirmPasswordDirectionVisible(false);
                      } else {
                        setIsConfirmPasswordDirectionVisible(true);
                      }
                    }}
                  />
                  <label for="confirm-password">Nhập lại mật khẩu</label>
                  {siConfirmPasswordDirectionVisible && (
                    <span className="notification-text">
                      Mật khẩu không khớp
                    </span>
                  )}
                </div>
                <div className="wrapper-user-agreement-checkbox">
                  <input
                    type="checkbox"
                    name="user-agreement"
                    id="user-agreement"
                    className="checkbox"
                    checked={formData.isReadTerms}
                    onChange={(event) => {
                      setFormData({
                        ...formData,
                        isReadTerms: event.target.checked,
                      });
                    }}
                  />
                  <label htmlFor="user-agreement">
                    <p className="user-agreement-description">
                      Tôi đã đọc và đồng ý với{" "}
                      <Link className="user-greement-link">
                        Thỏa thuận người dùng
                      </Link>{" "}
                      và{" "}
                      <Link className="user-greement-link">
                        Chính sách quyền riêng tư
                      </Link>{" "}
                      của HomTek
                    </p>
                  </label>
                </div>
              </div>
              <FormButton
                className="form-btn"
                text="Đăng ký"
                style={{ marginTop: "10px", width: "300px" }}
                type="submit"
              />
              <RedirectLoginSignup
                question="Bạn đã có tài khoản?"
                page="Đăng nhập"
                pagePath="/login"
              />
            </div>
          </form>
          {globalState.otpFormModalActive && (
            <WrapperModal className="otp-form-modal">
              <VerificationOtpForm
                type="signup"
                heading="Đăng ký"
                btnText="Xác minh"
                smsOTP="123456"
              >
                <span
                  className="closeModal"
                  onClick={() => {
                    disableOtpFormModalActive();
                  }}
                >
                  <img src={xmark} alt="xmark" />
                </span>
              </VerificationOtpForm>
            </WrapperModal>
          )}
        </div>
        {globalState.signupStatusModalVisible && (
          <WrapperModal className="otp-form-modal">
            <NotificationForm
              type={globalState.signupStatus === "error" ? "error" : "success"}
              btnText={
                globalState.signupStatus === "error" ? "Nhập lại" : "Trở về"
              }
              heading={
                globalState.signupStatus === "error"
                  ? "Đăng ký không thành công"
                  : "Đăng ký thành công"
              }
              errorText={
                globalState.signupStatus === "error"
                  ? "Vui lòng nhập đúng mã OTP"
                  : "Mong bạn sẽ có trải nghiệm tuyệt vời"
              }
              handleClick={() => {
                if (globalState.signupStatus === "success") {
                  history("/login");
                  setGlobalState({
                    ...globalState,
                    otpFormModalActive: false,
                    signupStatusModalVisible: false,
                  });
                } else {
                  setGlobalState({
                    ...globalState,
                    signupStatusModalVisible: false,
                  });
                }
              }}
            >
              <span
                className="closeModal"
                onClick={() => {
                  disableSignupStatusModal();
                }}
              >
                <img src={xmark} alt="xmark" />
              </span>
            </NotificationForm>
          </WrapperModal>
        )}
      </div>
    </SignUpPageContext.Provider>
  );
};

export default SignUpPage;
