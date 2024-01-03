import { useEffect, useState } from "react";
import "./DevelopmentSkill.css";
import skillData from "./DevelopmentSkillData.json";

const DevelopmentSkill = () => {
  // todo useeffect for scroll bar
  const [scrollVal, setScrollVal] = useState(0);
  useEffect(() => {
    const container = document.querySelector(".development-skill-carasouel");
    if (container) {
      const scroll = () => {
        setScrollVal((prevScrollVal) => {
          const newScrollVal = prevScrollVal + 100;
          if (newScrollVal >= skillData.length * 100) {
            container.style.transform = `translateX(0)`;
            return 0;
          } else {
            container.style.transform = `translateX(-${newScrollVal}px)`;
            return newScrollVal;
          }
        });
      };
      const interval = setInterval(scroll, 500);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <>
      <h1 style={{ color: "white", textAlign: "center", marginBottom: "2rem" }}>
        Development Skills
      </h1>
      <div className="development-skill-container">
        <div className="development-skill-carasouel">
          {skillData.map((item, index) => (
            <img key={index} src={item.url} alt="" />
          ))}
          {skillData.map((item, index) => (
            <img key={index + skillData.length} src={item.url} alt="" />
          ))}
        </div>
      </div>
    </>
  );
};

export default DevelopmentSkill;
