import React from 'react';
import classNames from 'classnames';
import styles from './FormButton.module.css';
const FormButton = ({ text, className, ...props }) => {
  return (
    <button className={classNames(styles.formBtn, className)} {...props}>
      {text}
    </button>
  );
};

export default FormButton;
