import React, { useState } from "react";
import "./../../App.css";
import "./Contact.css";

const Contact = () => {
  let [copied, setCopied] = useState(false);
  const emailToCopy = "oktayshakirov@gmail.com";

  //handle copy email id
  const handleCopy = () => {
    navigator.clipboard
      .writeText(emailToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log("Unable to copy to clipboard", err);
      });
  };

  return (
    <div className="contact-container">
      {/* header */}

      <div className="common-header">
        <h1>Contact</h1>
        <div></div>
      </div>

      {/* content */}
      <div className="contact-content">
        {/* email */}
        <div className="contact-email">
          <h1>Email:</h1>
          <div className="contact-email-detail">
            <p>oktayshakirov@gmail.com</p>
            <button onClick={handleCopy}>
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </div>
        <br />
        {/* schedule */}
        <div className="conatct-schedule">
          <h1>Schedule Video Call With Me:</h1>
          <img
            src="	https://oktayshakirov.com/assets/images/calendar.png"
            alt=""
          />
        </div>
        <br />
        {/* socials */}
        <div className="contact-socials">
          <h1>Socials:</h1>
          <div className="contact-social-icons">
            <a href="">
              <img
                src="https://oktayshakirov.com/assets/images/socials/github.png"
                alt="github"
              />
            </a>
            <a href="">
              <img
                src="https://oktayshakirov.com/assets/images/socials/linkedin.png"
                alt="linkdin"
              />
            </a>
            <a href="">
              <img
                src="https://oktayshakirov.com/assets/images/socials/instagram.png"
                alt="instagram"
              />
            </a>
            <a href="">
              <img
                src="https://oktayshakirov.com/assets/images/socials/twitter.png"
                alt="twitter"
              />
            </a>
          </div>
        </div>
        <div className="contact-supportwork">
          <h1>Support My Work:</h1>
          <p>
            Your support fuels my development journey! With every small
            donation, you contribute to hostings, domains and other essential
            costs. All my work is open source and free for everyone to use.
          </p>
          <div className="contact-supportwork-images">
            <img
              src="https://oktayshakirov.com/assets/images/coffee-sponsort.png"
              alt=""
            />
            <img
              src="https://oktayshakirov.com/assets/images/github-sponsors.png"
              alt=""
            />
            <img
              src="	https://oktayshakirov.com/assets/images/paypalme.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
