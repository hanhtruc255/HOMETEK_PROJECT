import React from "react";
import styles from "./FormButton.module.css";
import classNames from "classnames";
const FormButton = ({ text, className, ...props }) => {
  // var marginTop = props.hasOwnProperty('marginTop') ? props.marginTop : '0';
  // var width = props.hasOwnProperty('width') ? props.width : '300px';
  // var type = props.hasOwnProperty('type') ? props.width : 'button';
  return (
    <button className={classNames(styles.formBtn, className)} {...props}>
      {text}
    </button>
  );
};

export default FormButton;
