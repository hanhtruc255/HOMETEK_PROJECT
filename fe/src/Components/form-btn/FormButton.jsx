import React from 'react';
import styles from './FormButton.module.css';
const FormButton = ({ text, ...props }) => {
  // var marginTop = props.hasOwnProperty('marginTop') ? props.marginTop : '0';
  // var width = props.hasOwnProperty('width') ? props.width : '300px';
  // var type = props.hasOwnProperty('type') ? props.width : 'button';
  return (
    <button className={styles.formBtn} {...props}>
      {text}
    </button>
  );
};

export default FormButton;
