import { React, useState } from "react";
import "./PasswordRecoveryForm.css";
// import FormButton from '../../form-btn/FormButton';
import FormButton from "../../form-btn/FormButton";
// import InputField from '../../input-field/InputField';
import InputField from "../../input-field/InputField";
// import PasswordModal from '../../modals/password-modal/PasswordModal';
import PasswordModal from "../../modals/password-modal/PasswordModal";
// import Modal from '../../modals/WrapperModal';
import Modal from "../../modals/WrapperModal";
// import NotificationModal from '../../modals/notification-modal/NotificationModal';
import NotificationModal from "../../modals/notification-modal/NotificationModal";
// import NotificationForm from '../notification-form/NotificationForm';
import NotificationForm from "../notification-form/NotificationForm";
// import xmark from '../../../assets/icons/xmark.svg';
import xmark from "../../../Assets/icons/xmark.svg";
import {
  CheckPasswordChars,
  CheckPasswordFormat,
  CheckPasswordLength,
} from "../../../functions/CheckPasswordFormat";
const PasswordRecoveryForm = (props) => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const [firstConditionPwdModal, setFirstConditionPwdModal] = useState(false);
  const [secondConditionPwdModal, setSecondConditionPwdModal] = useState(false);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
  const [isPasswordErrorVisible, setIsPasswordErrorVisible] = useState(false);
  const [isConfirmPasswordErrorVisible, setIsConfirmPasswordErrorVisible] =
    useState(false);
  const [notificationModalActive, setNotificationModalActive] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("recovery pwd: ", formData);
    if (!CheckPasswordFormat(formData.newPassword)) {
      return;
    } else {
      if (formData.newPassword !== formData.confirmNewPassword) {
        setIsConfirmPasswordErrorVisible(true);
        return;
      }
      setNotificationModalActive(true);
    }
  };
  return (
    <>
      <form className="form form--recovery-password" onSubmit={handleSubmit}>
        <div className="form__content form__content--recovery-pwd">
          <h2 className="heading">PHỤC HỒI MẬT KHẨU</h2>
          <span className="direction">Nhập các thông tin dưới đây</span>
          <div className="input-container">
            <label htmlFor="new-pwd" className="label-input">
              Nhập mật khẩu mới
            </label>
            <InputField
              type="password"
              placeholder="Nhập mật khẩu mới"
              id="new-pwd"
              name="new-pwd"
              onFocus={() => setIsPasswordModalVisible(true)}
              onBlur={() => setIsPasswordModalVisible(false)}
              onChange={(event) => {
                const currentNewPassword = event.target.value;
                setFormData({
                  ...formData,
                  newPassword: currentNewPassword,
                });
                setFirstConditionPwdModal(
                  CheckPasswordLength(currentNewPassword)
                );
                setSecondConditionPwdModal(
                  CheckPasswordChars(currentNewPassword)
                );
                setIsPasswordErrorVisible(
                  !CheckPasswordFormat(currentNewPassword)
                );
              }}
            >
              {isPasswordModalVisible && (
                <PasswordModal
                  firstCondition={firstConditionPwdModal}
                  secondCondition={secondConditionPwdModal}
                  className="modal--revovery-pwd"
                />
              )}
            </InputField>
            {isPasswordErrorVisible && (
              <span className="notification-text">
                Mật khẩu không đúng định dạng
              </span>
            )}
          </div>
          <span className="pwd-direction pwd-direction--new">
            Mật khẩu phải nhiều hơn 8 ký tự, ít nhất 1 chữ thường, 1 chữ in hoa,
            1 chữ số, 1 ký tự đặc biệt.
          </span>
          <div className="input-container input-container--repeat-new-pwd">
            <label htmlFor="repeat-new-pwd" className="label-input">
              Nhập lại mật khẩu
            </label>
            <InputField
              type="password"
              placeholder="Nhập lại mật khẩu"
              id="repeat-new-pwd"
              name="repeat-new-pwd"
              onChange={(event) => {
                const currentConfirmNewPassword = event.target.value;
                setFormData({
                  ...formData,
                  confirmNewPassword: currentConfirmNewPassword,
                });
                setIsConfirmPasswordErrorVisible(
                  !(currentConfirmNewPassword === formData.newPassword)
                );
              }}
            />
            {isConfirmPasswordErrorVisible && (
              <span className="notification-text">Mật khẩu không khớp</span>
            )}
          </div>
          <FormButton
            type="submit"
            text="Xác minh"
            // onClick={() => {
            //   const active = true;
            //   setNotificationModalActive(active);
            //   console.log('active: ' + active);
            // }}
          />
        </div>
      </form>
      {notificationModalActive && (
        <Modal className="otp-form-modal">
          <NotificationForm
            type="success"
            btnText="Trang chủ"
            heading="Đổi mật khẩu thành công!"
            errorText="Chào mừng bạn quay lại"
            handleClick={() => setNotificationModalActive(false)}
          >
            <span
              className="closeModal"
              onClick={() => setNotificationModalActive(false)}
            >
              <img src={xmark} alt="xmark" />
            </span>
          </NotificationForm>
        </Modal>
      )}
    </>
  );
};

export default PasswordRecoveryForm;
