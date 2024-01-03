import { useState } from "react";
import "./Projectsmain.css";
import "./../../../App.css";
import Header from "./../../Header/Header"; //header
import Projectcard from "../Projectcard/Projectcard"; //projectcard
import ProjectcardsData from "./../Projectcards.json"; //project cards alll data

const Projectsmain = () => {
  let projectCategories = ["All", "Websites", "Applications", "Games"];
  let projectCategoriesDetail = ["all", "website", "application", "game"];

  //filter data according categories
  let [updatedProjectsCardsData, setUpdatedProjectsCardsData] = useState([
    ...ProjectcardsData,
  ]);
  let onClickFilterProjectData = (e, idx) => {
    let updatedData = ProjectcardsData.filter((card) => {
      if (projectCategoriesDetail[idx] == "game") {
        return (
          card.detail
            .toLowerCase()
            .indexOf(projectCategoriesDetail[idx].toLowerCase()) != -1
        );
      } else if (projectCategoriesDetail[idx] == "website") {
        return (
          card.detail.indexOf("Website") != -1 ||
          card.detail.indexOf("Design + Frontend") != -1
        );
      } else if (projectCategoriesDetail[idx] == "application") {
        return (
          card.detail.indexOf("Application") != -1 ||
          card.detail.indexOf("Fullstack Project") != -1
        );
      } else {
        return true;
      }
    });
    setUpdatedProjectsCardsData(updatedData);
  };

  return (
    <div className="project-main-container">
      {/* header */}
      <div className="common-header">
        <h1>About Me</h1>
        <div></div>
      </div>

      {/* categories */}
      <ul className="project-category">
        {projectCategories.map((item, idx) => {
          return (
            <li key={idx} onClick={(e) => onClickFilterProjectData(e, idx)}>
              {item}
            </li>
          );
        })}
      </ul>

      {/* project cards */}
      <div className="project-main-cards">
        {updatedProjectsCardsData.map((item, idx) => {
          return <Projectcard key={idx} {...item}></Projectcard>;
        })}
      </div>
    </div>
  );
};

export default Projectsmain;
