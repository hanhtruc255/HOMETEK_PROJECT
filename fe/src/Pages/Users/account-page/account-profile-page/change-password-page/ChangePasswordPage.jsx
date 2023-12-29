import React from "react";
import { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
// import FormButton from '../../../../components/form-btn/FormButton';
import FormButton from "../../../../../Components/form-btn/FormButton";
import styles from "./ChangePasswordPage.module.css";
// import { useContext } from 'react';
// import { AccountProfileContext } from '../AccountProfilePage';
// import InputField from '../../../../components/input-field/InputField';
import InputField from "../../../../../Components/input-field/InputField";
// import PasswordModal from '../../../../components/modals/password-modal/PasswordModal';
import PasswordModal from "../../../../../Components/modals/password-modal/PasswordModal";
import {
  CheckPasswordFormat,
  CheckPasswordChars,
  CheckPasswordLength,
} from "../../../../../functions/CheckPasswordFormat";
// import NotificationModal from '../../../../components/modals/notification-modal/NotificationModal';
import NotificationModal from "../../../../../Components/modals/notification-modal/NotificationModal";
const ChangePasswordPage = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
  const [isConfirmPwdModalVisible, setIsConfirmPwdModalVisible] =
    useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("current pwd: " + currentPassword);
    console.log("new pwd: " + newPassword);
    console.log("confirm new pwd: " + confirmNewPassword);
  };

  const canSubmit =
    currentPassword &&
    newPassword &&
    confirmNewPassword &&
    CheckPasswordFormat(newPassword) &&
    newPassword === confirmNewPassword;
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
                onChange={(e) => setCurrentPassword(e.target.value)}
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
                    CheckPasswordFormat(newPassword)
                      ? "inputFocus"
                      : "inputFocus inputFocusError"
                  }
                  type="password"
                  id="new-password"
                  placeholder="Nhập mật khẩu mới"
                  onChange={(e) => setNewPassword(e.target.value)}
                  onFocus={() => setIsPasswordModalVisible(true)}
                  onBlur={() => setIsPasswordModalVisible(false)}
                />
                {isPasswordModalVisible && (
                  <PasswordModal
                    firstCondition={CheckPasswordLength(newPassword)}
                    secondCondition={CheckPasswordChars(newPassword)}
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
                    newPassword === confirmNewPassword
                      ? "inputFocus"
                      : "inputFocus inputFocusError"
                  }
                  type="password"
                  id="repeat-new-password"
                  placeholder="Nhập lại mật khẩu"
                  onFocus={() => setIsConfirmPwdModalVisible(true)}
                  onBlur={() => setIsConfirmPwdModalVisible(false)}
                  onChange={(e) => {
                    setConfirmNewPassword(e.target.value);
                  }}
                />
                {isConfirmPwdModalVisible && (
                  <NotificationModal
                    text={"Đảm bảo mật khẩu bạn nhập giống nhau"}
                  />
                )}
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
