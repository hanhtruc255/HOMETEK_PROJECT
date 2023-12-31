import React from "react";
import "./ModalStyle.css";
const WrapperModal = (props) => {
  return (
    <div className={`modal ${props.className}`} {...props}>
      <div className="overlay">{props.children}</div>
    </div>
  );
};

export default WrapperModal;
