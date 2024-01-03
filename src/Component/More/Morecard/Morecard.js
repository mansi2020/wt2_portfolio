import React from "react";
import "./Morecard.css";
import Button from "./../../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontawesome component
import { faGlobe, faCamera, faVideo } from "@fortawesome/free-solid-svg-icons";

const Morecard = (props) => {
  return (
    <div className="morecard-container">
      <div className="morecard-img">
        <img src={props.img} alt="" />
      </div>
      <div className="morecard-content">
        <div className="morcard-content-sub">
          <p className="morecard-heading">
            {props.projectName}
            <div></div>
            {props.projectType}
          </p>
          <h1>{props.projectTiitle}</h1>
          <p className="morecard-description">{props.description}</p>
        </div>
        <div className="morecard-buttons-container">
          <Button
            className="morecard-buttons"
            icon={faGlobe}
            text="Website"
          ></Button>
          <Button
            className="morecard-buttons"
            icon={faCamera}
            text="Instagram"
          ></Button>
          <Button
            className="morecard-buttons"
            icon={faVideo}
            text="YouTube"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Morecard;
