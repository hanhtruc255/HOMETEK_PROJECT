import React from 'react';
import styles from './AssistsField.module.css';

const AssistsField = ({ text, icon, text2, ...props }) => {
  return (
    <div className={styles.gridContainer} {...props}>
      <div className={styles.item}>
        <img className={styles.icon} src={icon} alt="icon " />
      </div>
      <div className={styles.item}>
        <p>{text}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
};

export default AssistsField;
