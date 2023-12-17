import React from 'react';
import { useContext } from 'react';
import './ModalStyle.css';
import { AppContext } from '../../App';
const NewModal = (props) => {
  useContext(AppContext);
  return (
    <div className={`modal ${props.className}`}>
      <div className="overlay">{props.children}</div>
    </div>
  );
};

export default NewModal;
