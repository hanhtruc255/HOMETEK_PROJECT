import React, { useContext } from 'react';
import styles from './Modal.module.css';
import xmark from '../../assets/icons/xmark.svg';
import check from '../../assets/icons/check.svg';
import { AppContext } from '../../App';
import NotificationForm from '../../Components/form/notification-form';
const Modal = (props) => {
  const { modalActive, toggleModalActive } = useContext(AppContext);
  if (modalActive) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }
  var iconPath = props.type === 'error' ? xmark : check;
  var primaryColor = props.type === 'error' ? 'red' : '#4cc29a';
  return (
    <>
      {modalActive && (
        <div className={styles.modal}>
          <div className={styles.overlay}></div>
          {/* <div className={styles.modalContent}>
            <span className={styles.closeModal} onClick={toggleModalActive}>
              <img src={xmark} alt="xmark" />
            </span>
            <div
              className={styles.wrapIcon}
              style={{ backgroundColor: primaryColor }}
            >
              <img className={styles.icon} src={iconPath} alt="iconPath" />
            </div>
            <div className={styles.heading}>{props.heading}</div>
            <div className={styles.errorText}>{props.errorText}</div>
            <button
              className={styles.modalBtn}
              style={{ backgroundColor: primaryColor }}
            >
              {props.btnText}
            </button>
          </div> */}
          <NotificationForm
            type="error"
            heading="Mã OTP sai, vui lòng nhập lại."
            errorText="Nhập lại OTP"
            btnText="Gửi lại mã"
          />
        </div>
      )}
    </>
  );
};

export default Modal;
