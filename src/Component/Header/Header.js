import React, { useState } from "react";
import "./Header.css";
import "./../../App.css";

const Header = (props) => {
  let sectionArr = [
    {
      name: "About",
    },
    {
      name: "Certificates",
    },
    {
      name: "Projects",
    },
    {
      name: "More",
    },
    {
      name: "Contact",
    },
  ];

  // onClickHeaderCat
  let [visibleSection, setVisibleSection] = useState("");
  let onClickHeaderCat = (e, index) => {
    console.log(sectionArr[index]);
    setVisibleSection(sectionArr[index].name);
  };

  return (
    <div className="header-container">
      <ul className="header-list">
        {sectionArr.map((item, idx) => {
          return (
            <li onClick={(e) => props.onClickHeaderCat(e, item.name)}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
