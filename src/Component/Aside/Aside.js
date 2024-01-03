import React, { useState, useEffect } from "react";
import "./Aside.css"; //css file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontawesome component
import {
  faLocationDot,
  faUser,
  faHourglassEnd,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import AboutAsideCard from "../Cards/AsideCard/AsideCard"; //about aside card import

const Aside = () => {
  // aside button text useeffect
  let [asideBtnText, setAsideBtnText] = useState("");
  useEffect(() => {
    let randomNum = "";
    let counter = 0;
    let interval = setInterval(() => {
      randomNum = "";
      for (let i = 0; i < 10; i++) {
        randomNum += Math.floor(Math.random() * 2);
      }
      counter++;
      setAsideBtnText(randomNum);
      if (counter == 20) {
        clearInterval(interval);
        setAsideBtnText("Hello, World!");
      }
    }, 100);
  }, []);

  // age use effect
  let [asideAge, setAsideAge] = useState(0);
  let age = 0;
  useEffect(() => {
    age = 0;
    let interval = setInterval(() => {
      age++;
      setAsideAge((preAge) => preAge + 1);
      if (age == 24) {
        clearInterval(interval);
      }
    }, 100);
  }, []);

  return (
    <div className="aside-container">
      <div className="aside-content">
        {/* name and image */}
        <div className="aside-name-image">
          <img
            src="https://oktayshakirov.com/assets/images/avatar.jpg"
            alt=""
          />
          <h2>Oktay Shakirov</h2>
          <button className="aside-button">{asideBtnText}</button>
        </div>
        <hr className="aside-line" />
        {/* personal details */}
        <div className="aside-personal-details">
          <AboutAsideCard
            title="AGE"
            subtitle={`${asideAge} years old`}
            icon={faHourglassEnd}
          ></AboutAsideCard>
          <AboutAsideCard
            title="LOCATION"
            subtitle="Surat,India"
            icon={faLocationDot}
          ></AboutAsideCard>
          <AboutAsideCard
            title="PERSONALITY TYPE"
            subtitle="INTJ-T"
            icon={faUser}
          ></AboutAsideCard>
        </div>
        {/* social icons */}
        <div className="aside-icons">
          <a href="">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aside;
