import React from "react";
import styles from "./NotificationModal.module.css";
// import exclamation from '../../../assets/icons/exclamation.svg';
import exclamation from "../../../Assets/icons/exclamation.svg";
const NotificationModal = ({ text }) => {
  return (
    <div className={styles.wrapperNotificationModal}>
      <div className={styles.modalContent}>
        <div className={styles.wrapperIcon}>
          <img src={exclamation} alt="" className={styles.icon} />
        </div>
        <span className={styles.modalText}>{text}</span>
      </div>
    </div>
  );
};

export default NotificationModal;
