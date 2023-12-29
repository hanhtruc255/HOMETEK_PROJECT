import React from 'react';
import styles from './InputField.module.css';
import classNames from 'classnames';

const InputField = ({ className, children, ...props }) => {
  // const width = props.hasOwnProperty('width') ? props.width : '300px';
  // const height = props.hasOwnProperty('height') ? props.height : '35px';
  return (
    <div>
      <input
        className={classNames(styles.input, className)}
        {...props}
        required
      />
      {children}
    </div>
  );
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
