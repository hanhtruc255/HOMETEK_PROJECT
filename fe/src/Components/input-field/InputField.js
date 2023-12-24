import React from 'react';
import styles from './InputField.module.css';
const InputField = (props) => {
  // const width = props.hasOwnProperty('width') ? props.width : '300px';
  // const height = props.hasOwnProperty('height') ? props.height : '35px';
  return <input className={styles.input} {...props} required></input>;
};

export default InputField;

{
  /* <input
      className={styles.input}
      type={props.type}
      placeholder={props.placeholder}
      id={props.id}
      name={props.name}
      style={{ width: width, height: height }}
      required
    ></input> */
}
