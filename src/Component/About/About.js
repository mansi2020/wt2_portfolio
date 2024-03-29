import { useEffect, useState } from "react";
import "./About.css"; //about cs
import Header from "../Header/Header"; //header component
import AboutCard from "./../Cards/AboutCard/AboutCard"; //about cards component
import cardData from "./AboutCardData.json"; //card data
import languageData from "./ProgramminglanData.json"; //languages data
import DeveopmentSkill from "./DevelopmentSkill/DevelopmentSkill"; //DeveopmentSkill section
import Button from "./../Button/Button";
import "./../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //fontawesome component
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  // use state for para text--------------
  let [aboutDetail, setAboutDetail] = useState(false);

  // onChangeAboutDetails--------------
  let onChangeAboutDetails = () => {
    setAboutDetail(!aboutDetail);
  };

  return (
    <div className="about-container">
      {/* header */}

      <div className="common-header">
        <h1>About Me</h1>
        <div></div>
      </div>

      {/* about description */}
      <section className="about-description">
        {aboutDetail ? (
          <p>
            Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a
            Full-Stack software developer. Currently honing my skills at
            Geekster, I am passionate about creating captivating and
            user-friendly websites.
            <br />
            While I am still in the process of expanding my expertise, my
            enthusiasm for front-end development has allowed me to immerse
            myself in crafting visually appealing interfaces. I find joy in the
            meticulous process of transforming ideas into reality, leveraging my
            knowledge in HTML, CSS, and JavaScript.
            <br />
            In addition to my coding pursuits, I am an avid learner with a
            diverse set of interests. Drawing inspiration from my surroundings,
            I'm keen on incorporating creativity into my work. Outside the
            digital realm, I enjoy engaging in activities like drawing and
            playing badminton during my leisure time.
            <br />
            Embracing the ever-evolving landscape of technology, I am
            enthusiastic about the potential of Web3, crypto, NFTs, and
            blockchain technology. I believe these innovations have the power to
            revolutionize online interactions and business practices.
            <br />
            Beyond coding, I explore my creative side through photography and
            dabble in music production, finding unique outlets to express my
            creativity.
          </p>
        ) : (
          <p>
            Hello there! 👋 I'm Mansi Sorathiya, a dedicated front-end developer
            and Geekster student based in Surat, Gujarat. My journey into the
            world of web development began with a focus on mastering HTML, CSS,
            and JavaScript. Currently honing my skills at Geekster, I am
            passionate about creating captivating and user-friendly websites.
          </p>
        )}

        <button className="about-showmore-btn" onClick={onChangeAboutDetails}>
          {aboutDetail ? "Hide Text" : "Show more"}
        </button>
      </section>

      {/* primary focus section */}
      <section className="about-primary-focus">
        <h3>Primary Focus</h3>
        <div className="about-primary-focus-cards">
          {cardData.map((item, idx) => {
            if (idx < 4) {
              return (
                <AboutCard
                  key={idx}
                  {...item}
                  className="about-primary-focus-card"
                ></AboutCard>
              );
            }
          })}
        </div>
      </section>

      {/* Exploring Creativity */}
      <section className="about-explore-activity">
        <h3>Exploring Creativity</h3>
        <div className="about-explore-activity-cards">
          {cardData.map((item, idx) => {
            if (idx > 3 && idx < 6) {
              return (
                <AboutCard
                  key={idx}
                  {...item}
                  className="about-primary-focus-card"
                ></AboutCard>
              );
            }
          })}
        </div>
      </section>

      {/* Programming Languages */}
      <section className="about-programming-lang">
        <h3>Programming Languages</h3>
        <div className="about-programming-scroll">
          {languageData.map((item, idx) => {
            if (idx <= 4) {
              return (
                <div className="about-programming-scroll-input">
                  <label htmlFor="">{item.language}</label>
                  <span>{item.percentage}%</span>
                  <br />
                  <input
                    type="range"
                    value={item.percentage}
                    className="scroll-input"
                  ></input>
                </div>
              );
            }
          })}
        </div>
      </section>

      {/* Human Languages */}
      <section className="about-programming-lang">
        <h3>Human Languages</h3>
        <div className="about-programming-scroll">
          {languageData.map((item, idx) => {
            if (idx > 4) {
              return (
                <div className="about-programming-scroll-input">
                  <label htmlFor="">{item.language}</label>
                  <span>{item.type}</span>
                  <br />
                  <input type="range" value={item.percentage}></input>
                </div>
              );
            }
          })}
        </div>
      </section>

      {/* Development Skills */}
      <section className="about-development-skill">
        <DeveopmentSkill></DeveopmentSkill>
      </section>

      {/* Favorite Activities */}
      <section className="about-favourite-activities">
        <h3 style={{ marginBottom: "0" }}>Favorite Activities</h3>
        <div className="about-favourite-activity">
          {cardData.map((item, idx) => {
            if (idx >= 6) {
              return (
                <AboutCard
                  key={idx}
                  {...item}
                  className="about-primary-focus-card"
                  style={{ padding: "1rem", background: "#22455e" }}
                ></AboutCard>
              );
            }
          })}
        </div>
      </section>

      {/* next button */}
      <div className="next-button-container">
        <button className="nextBtn">
          Next
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default About;
