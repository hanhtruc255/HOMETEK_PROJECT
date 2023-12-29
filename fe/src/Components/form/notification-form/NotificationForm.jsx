import React, { useContext } from "react";
import styles from "./Notification.module.css";
// import xmark from '../../../assets/icons/xmark.svg';
import xmark from "../../../Assets/icons/xmark.svg";
// import check from '../../../assets/icons/check.svg';
import check from "../../../Assets/icons/check.svg";
const NotificationForm = (props) => {
  var iconPath = props.type === "error" ? xmark : check;
  var primaryColor = props.type === "error" ? "red" : "#4cc29a";
  return (
    <div className={styles.container}>
      <div
        className={styles.wrapIcon}
        style={{ backgroundColor: primaryColor }}
      >
        <img className={styles.icon} src={iconPath} alt="iconPath" />
      </div>
      <div className={styles.heading}>{props.heading}</div>
      <div className={styles.errorText}>{props.errorText}</div>
      <button
        className={styles.formBtn}
        style={{ backgroundColor: primaryColor }}
        onClick={props.handleClick}
      >
        {props.btnText}
      </button>
      {props.children}
    </div>
  );
};

export default NotificationForm;
