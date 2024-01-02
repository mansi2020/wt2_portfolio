import React from "react";
import "./Certificates.css";
import Header from "./../Header/Header"; //Header component
import "./../../App.css";
import CertificateData from "./CertificateData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontawesome component
import { faLanguage, faLaptopCode, faUser } from "@fortawesome/free-solid-svg-icons";


const Certificates = () => {
  return (
    <div className="certificate-container">
      {/* header */}
      {/* <Header heading="My Certificates"></Header> */}

      {/* Technical Competence */}
      <section className="certificate-technical-competence">
        <div style={{ display: "flex" }}>
          <span className="certificate-icon">
            <FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon>
          </span>
          <h1>Technical Competence</h1>
        </div>
        <div className="certificate-technical-list">
          <ol>
            {CertificateData.map((item, idx) => {
              if (idx < 5) {
                return (
                  <li>
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                    <img src={item.img} alt="" />
                  </li>
                );
              }
            })}
          </ol>
        </div>
      </section>

      {/* Professional Skills */}
      <section className="certificate-technical-competence">
        <div style={{ display: "flex" }}>
          <span className="certificate-icon">
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </span>
          <h1>Professional Skills</h1>
        </div>

        <div className="certificate-technical-list">
          <ol>
            {CertificateData.map((item, idx) => {
              if (idx>=5 && idx < 11) {
                return (
                  <li>
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                    <img src={item.img} alt="" />
                  </li>
                );
              }
            })}
          </ol>
        </div>
      </section>

      {/*Language Proficiency */}
      <section className="certificate-technical-competence">
        <div style={{ display: "flex" }}>
          <span className="certificate-icon">
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </span>
          <h1>Professional Skills</h1>
        </div>

        <div className="certificate-technical-list">
          <ol>
            {CertificateData.map((item, idx) => {
              if ( idx >= 11) {
                return (
                  <li>
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                    <img src={item.img} alt="" />
                  </li>
                );
              }
            })}
          </ol>
        </div>
      </section>
    </div>
  );
};

export default Certificates;
