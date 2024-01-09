import React from "react";
import classNames from "classnames";
import styles from "./PasswordModal.module.css";
// import checkIcon from '../../../assets/icons/check.svg';
import checkIcon from "../../../Assets/icons/check.svg";
// import xmark from '../../../assets/icons/xmark.svg';
import xmark from "../../../Assets/icons/xmark.svg";

const PasswordModal = ({ firstCondition, secondCondition, className }) => {
  return (
    <div className={classNames(styles.wrapperPwdModal, className)}>
      <div className={styles.wrapperPwdDirection}>
        <div
          className={
            firstCondition
              ? classNames(styles.wrapperIcon, styles.wrapperSuccessIcon)
              : styles.wrapperIcon
          }
        >
          {firstCondition ? (
            <img src={checkIcon} alt="" className={styles.icon} />
          ) : (
            <img src={xmark} alt="" className={styles.icon} />
          )}
        </div>
        <p className={styles.text}>Mật khẩu nên chứa từ 9 đến 16 ký tự</p>
      </div>
      <div className={styles.wrapperPwdDirection}>
        <div
          className={
            secondCondition
              ? classNames(styles.wrapperIcon, styles.wrapperSuccessIcon)
              : styles.wrapperIcon
          }
        >
          {secondCondition ? (
            <img src={checkIcon} alt="" className={styles.icon} />
          ) : (
            <img src={xmark} alt="" className={styles.icon} />
          )}
        </div>
        <p className={styles.text}>
          Cần kết hợp ít nhất 4 trong số sau: 1 chữ thường, 1 chữ in hoa, 1 chữ
          số, 1 ký tự đặc biệt.
        </p>
      </div>
    </div>
  );
};

export default PasswordModal;
