import React from 'react';
import styles from './InputContainer.module.css';
import InputField from '../input-field/InputField';
const InputContainer = (props) => {
  var flexDirection = props.hasOwnProperty('flexDirection')
    ? props.flexDirection
    : 'column';
  return (
    <div
      className={styles.inputContainer}
      style={{ flexDirection: flexDirection }}
    >
      <label className={styles.label} htmlFor={props.id}>
        {props.text}
      </label>
      <InputField
        type={props.type}
        name={props.id}
        id={props.id}
        placeholder={'Nhập ' + props.text.toLowerCase()}
      />
    </div>
  );
};

export default InputContainer;
