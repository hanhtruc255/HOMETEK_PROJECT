import React, { useContext } from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";

import { useState } from "react";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FormButton from "../../../../../Components/form-btn/FormButton";
import styles from "./ChangePasswordPage.module.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import InputField from "../../../../../Components/input-field/InputField";
import PasswordModal from "../../../../../Components/modals/password-modal/PasswordModal";
import {
  CheckPasswordFormat,
  CheckPasswordChars,
  CheckPasswordLength,
} from "../../../../../functions/CheckPasswordFormat";

import { AppContext } from "../../../layout/Layout";
import { AccountContext } from "../../AccountPage";
const ChangePasswordPage = () => {
  const { globalState } = useContext(AppContext);
  const { setIsAccountPopupVisible } = useContext(AccountContext);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);

  const [changePasswordData, setChangePasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const history = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!canSubmit) {
      alert("Form is not valid, please check your inputs.");
      return;
    } else {
      try {
        await axios
          .patch(
            `http://localhost:3001/customer/change/${globalState.loginStatus.userId}`,
            {
              oldPassword: changePasswordData.currentPassword,
              newPassword: changePasswordData.newPassword,
            }
          )
          .then(() => {
            console.log("CHANGE PASSWORD SUCCESSFULLY");
            console.log("new pwd: ", changePasswordData.newPassword);
            alert("Đổi mật khẩu thành công!");
            history("/account/account-profile");
            // setIsAccountPopupVisible(true);

            // const accountModal = document.getElementById("account-modal");
            // const accountModalContainer = createRoot(accountModal);
            // accountModalContainer.render(<>Hello</>);
          });
      } catch (error) {
        console.log("USER ID: ", globalState.loginStatus.userId);
        console.log(error);
      }
    }
  };

  const canSubmit =
    changePasswordData.currentPassword &&
    changePasswordData.newPassword &&
    changePasswordData.confirmNewPassword &&
    CheckPasswordFormat(changePasswordData.newPassword) &&
    changePasswordData.newPassword === changePasswordData.confirmNewPassword;
  return (
    <>
      <div className={styles.wrapperChangePassword}>
        <h1 className={styles.heading}>Đổi mật khẩu mới</h1>
        <form>
          <div className={styles.changePasswordContent}>
            <div className={styles.wrapperInputField}>
              <div className={styles.wrapperLabel}>
                <label htmlFor="old-password">Nhập mật khẩu hiện tại</label>
              </div>

              <InputField
                className="inputFocus"
                type="password"
                id="current-password"
                placeholder="Nhập mật khẩu hiện tại"
                onChange={(e) => {
                  const currentPasswordTemp = e.target.value;
                  setChangePasswordData({
                    ...changePasswordData,
                    currentPassword: currentPasswordTemp,
                  });
                }}
              />
            </div>
            <div
              className={classNames(
                styles.wrapperInputField,
                styles.wrapperInputFieldWithModal
              )}
            >
              <div className={styles.wrapperLabel}>
                <label htmlFor="new-password">Nhập mật khẩu mới</label>
              </div>
              <div className={styles.inputContainer}>
                <InputField
                  className={
                    CheckPasswordFormat(changePasswordData.newPassword)
                      ? "inputFocus"
                      : "inputFocus inputFocusError"
                  }
                  type="password"
                  id="new-password"
                  placeholder="Nhập mật khẩu mới"
                  onChange={(e) => {
                    const newPasswordTemp = e.target.value;
                    setChangePasswordData({
                      ...changePasswordData,
                      newPassword: newPasswordTemp,
                    });
                  }}
                  onFocus={() => setIsPasswordModalVisible(true)}
                  onBlur={() => setIsPasswordModalVisible(false)}
                />
                {isPasswordModalVisible && (
                  <PasswordModal
                    firstCondition={CheckPasswordLength(
                      changePasswordData.newPassword
                    )}
                    secondCondition={CheckPasswordChars(
                      changePasswordData.newPassword
                    )}
                    className={styles.pwdModal}
                  />
                )}
              </div>
            </div>
            <div className={styles.pwdDirecton}>
              <span>
                (Mật khẩu phải có nhiều hơn 8 ký tự, ít nhất 1 chữ thường, 1 chữ
                in hoa, 1 chữ số, 1 ký tự đặc biệt.)
              </span>
            </div>
            <div className={styles.wrapperInputField}>
              <div className={styles.wrapperLabel}>
                <label htmlFor="repeat-new-password">Nhập lại khẩu mới </label>
              </div>
              <div className={styles.inputContainer}>
                <InputField
                  className={
                    changePasswordData.newPassword ===
                    changePasswordData.confirmNewPassword
                      ? "inputFocus"
                      : "inputFocus inputFocusError"
                  }
                  type="password"
                  id="repeat-new-password"
                  placeholder="Nhập lại mật khẩu"
                  onChange={(e) => {
                    const confirmNewPasswordTemp = e.target.value;
                    setChangePasswordData({
                      ...changePasswordData,
                      confirmNewPassword: confirmNewPasswordTemp,
                    });
                  }}
                >
                  {changePasswordData.newPassword !==
                    changePasswordData.confirmNewPassword && (
                    <span className="notification-text">
                      Đảm bảo mật khẩu bạn nhập giống nhau!
                    </span>
                  )}
                </InputField>
              </div>
            </div>
            <div className={styles.footer}>
              <Link to="/account/account-profile">Hủy</Link>
              <FormButton
                type="submit"
                text={"Đổi mật khẩu"}
                className={styles.changePasswordBtn}
                onClick={handleSubmit}
                disabled={!canSubmit}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePasswordPage;
