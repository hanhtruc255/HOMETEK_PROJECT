import React from 'react';
import styles from './AssistsField.module.css';

const AssistsField = ({ text, icon, text2, ...props }) => {
  return (
    <div className={styles.container} {...props}>
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
