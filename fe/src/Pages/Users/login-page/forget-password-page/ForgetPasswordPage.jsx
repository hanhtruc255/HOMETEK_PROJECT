import React from "react";
import { useState, createContext, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./ForgetPasswordPage.css";
import "../../../../styles/FormStyle.css";
import WrapperModal from "../../../../Components/modals/WrapperModal";
import NotificationForm from "../../../../Components/form/notification-form/NotificationForm";
import xmark from "../../../../Assets/icons/xmark.svg";
import { AppContext } from "../../layout/Layout";
export const ForgetPasswordPageContext = createContext();
const ForgetPasswordPage = () => {
  const { setDisplayFooter } = useContext(AppContext);
  setDisplayFooter(false);
  const history = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [forgetPasswordPageState, setForgetPasswordPageState] = useState({
    confirmPhoneNumber: "",
    otpStatus: "",
    confirmPhoneNumberModalVisible: false,
    confirmOtpModalVisible: false,
  });

  return (
    <ForgetPasswordPageContext.Provider
      value={{
        phoneNumber,
        setPhoneNumber,
        forgetPasswordPageState,
        setForgetPasswordPageState,
      }}
    >
      <div
        id="forget-password-page"
        className="main-content .main-content--forget-pwd"
      >
        <div className="wrapper-content">
          <Outlet />
          {forgetPasswordPageState.confirmPhoneNumberModalVisible && (
            <WrapperModal className="otp-form-modal">
              <NotificationForm
                type={
                  forgetPasswordPageState.confirmPhoneNumber === "notExist"
                    ? "error"
                    : "success"
                }
                btnText={
                  forgetPasswordPageState.confirmPhoneNumber === "notExist"
                    ? "Nhập lại"
                    : "Tiếp tục"
                }
                heading={
                  forgetPasswordPageState.confirmPhoneNumber === "notExist"
                    ? "Số điện thoại không thuộc tài khoản nào"
                    : "Bước tiếp theo"
                }
                errorText={
                  forgetPasswordPageState.confirmPhoneNumber === "notExist"
                    ? "Vui lòng kiểm tra lại số điện thoại"
                    : ""
                }
                handleClick={() => {
                  if (
                    forgetPasswordPageState.confirmPhoneNumber === "notExist"
                  ) {
                    setForgetPasswordPageState({
                      ...forgetPasswordPageState,
                      confirmPhoneNumberModalVisible: false,
                    });
                  } else {
                    history("/forget-password/verify-otp");
                    setForgetPasswordPageState({
                      ...forgetPasswordPageState,
                      confirmPhoneNumberModalVisible: false,
                    });
                  }
                }}
              >
                <span
                  className="closeModal"
                  onClick={() => {
                    setForgetPasswordPageState({
                      ...forgetPasswordPageState,
                      confirmPhoneNumberModalVisible: false,
                    });
                  }}
                >
                  <img src={xmark} alt="xmark" />
                </span>
              </NotificationForm>
            </WrapperModal>
          )}

          {forgetPasswordPageState.confirmOtpModalVisible && (
            <WrapperModal className="otp-form-modal">
              <NotificationForm
                type={
                  forgetPasswordPageState.confirmPhoneNumber === "notExist"
                    ? "error"
                    : "success"
                }
                btnText={
                  forgetPasswordPageState.confirmPhoneNumber === "notExist"
                    ? "Nhập lại"
                    : "Tiếp tục"
                }
                heading={
                  forgetPasswordPageState.confirmPhoneNumber === "notExist"
                    ? "Số điện thoại không thuộc tài khoản nào"
                    : ""
                }
                errorText={
                  forgetPasswordPageState.confirmPhoneNumber === "notExist"
                    ? "Vui lòng kiểm tra lại số điện thoại"
                    : ""
                }
                handleClick={() => {
                  if (
                    forgetPasswordPageState.confirmPhoneNumber === "notExist"
                  ) {
                    setForgetPasswordPageState({
                      ...forgetPasswordPageState,
                      confirmPhoneNumberModalVisible: false,
                    });
                  }
                }}
              >
                <span
                  className="closeModal"
                  onClick={() => {
                    setForgetPasswordPageState({
                      ...forgetPasswordPageState,
                      confirmPhoneNumberModalVisible: false,
                    });
                  }}
                >
                  <img src={xmark} alt="xmark" />
                </span>
              </NotificationForm>
            </WrapperModal>
          )}
        </div>
      </div>
    </ForgetPasswordPageContext.Provider>
  );
};

export default ForgetPasswordPage;
