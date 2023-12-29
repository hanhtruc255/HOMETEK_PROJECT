import React from 'react';
import styles from './RedirectLoginSignup.module.css';
import { Link } from 'react-router-dom';
const RedirectLoginSignup = (props) => {
  var pagePath = props.hasOwnProperty('pagePath') ? props.pagePath : '';
  var relative = props.hasOwnProperty('relative') ? props.relative : '';
  return (
    <div className={styles.container}>
      <span className={styles.question}>{props.question}</span>
      <Link className={styles.link} to={pagePath} relative={relative}>
        {props.page}
      </Link>
    </div>
  );
};

export default RedirectLoginSignup;
