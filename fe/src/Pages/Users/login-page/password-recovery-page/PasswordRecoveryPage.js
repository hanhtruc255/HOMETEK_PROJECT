import React from 'react';
import { useState, useContext } from 'react';
import './PasswordRecoveryPage.css';
import '../../../styles/FormStyle.css';
import { AppContext } from '../../../../App';
import SendOtpForm from '../../../../Components/form/send-otp-form/SendOtpForm';
import ChangePasswordForm from '../../../../Components/form/change-password-form/ChangePasswordForm';
import VertificationOtpForm from '../../../../Components/form/verification-otp-form/VerificationOtpForm';
import NotificationForm from '../../../../Components/form/notification-form';
import NewModal from '../../../../components/modals/NewModal';
import xmark from '../../../assets/icons/xmark.svg';
const PasswordRecoveryPage = () => {
  const [changePwdStep, setChangePwdSetp] = useState(1);
  const { notificationModalActive, toggleNotificationModalActive } =
    useContext(AppContext);
  return (
    <div
      id="change-password-page"
      className="main-content main-content--change-pwd"
    >
      {changePwdStep === 1 && (
        <SendOtpForm
          handleSend={() => {
            setChangePwdSetp(2);
          }}
        />
      )}

      {changePwdStep === 2 && (
        <VertificationOtpForm
          heading="Phục hồi mật khẩu"
          btnText="Xác minh"
          handleSubmit={() => {
            setChangePwdSetp(3);
          }}
        />
      )}
      {changePwdStep === 3 && (
        <ChangePasswordForm handleSubmit={toggleNotificationModalActive} />
      )}

      {notificationModalActive && (
        <NewModal className="otp-form-modal">
          <NotificationForm
            type="success"
            btnText="Trở về"
            heading="Đổi mật khẩu thành câu"
            errorText="Bạn đã đổi mật khẩu thành công, mời bạn tiếp tục trải nghiệm dịch vụ."
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

export default PasswordRecoveryPage;
