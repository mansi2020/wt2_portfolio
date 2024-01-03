import React from "react";
import "./Projectcard.css";
import Button from "./../../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontawesome component
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projectcard = (props) => {
  return (
    <div className="projectcard-container">
      <div className="project-card-img">
        <img src={props.img} alt="" />
      </div>
      <div className="project-card-content">
        <h4>{props.title}</h4>
        <p>{props.detail}</p>
        <p>{props.technology}</p>
      </div>
      <div className="project-card-button-container">
        <Button className="project-cards" text="Preview" icon={faEye}></Button>
        <Button
          className="project-cards"
          text="GitHub"
          icon={faGithub}
        ></Button>
      </div>
    </div>
  );
};

export default Projectcard;
