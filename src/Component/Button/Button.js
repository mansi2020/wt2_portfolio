import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontawesome component

const Button = (props) => {
  return (
    <>
      <button id={props.id} className={props.className}>
        <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
        {props.text}
      </button>
    </>
  );
};

export default Button;
