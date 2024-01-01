import React from "react";
import styles from "./AssistsField.module.css";
import classnames from "classnames";
const AssistsField = ({ text, icon, text2, className, ...props }) => {
  return (
    <div className={classnames(styles.container, className)} {...props}>
      <div className={styles.wrapIcon}>
        <img className={styles.icon} src={icon} alt="icon " />
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{text}</p>
        <p className={styles.text}>{text2}</p>
      </div>
    </div>
  );
};

export default AssistsField;
