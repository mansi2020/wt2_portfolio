import { useCallback, useEffect,useState } from "react";
import "./App.css";
import Aside from "./Component/Aside/Aside";
import About from "./Component/About/About";
import Certificates from './Component/Certificates/Certificates'
import Projectsmain from "./Component/Projects/ProjectMain/Projectsmain";
import Moremain from "./Component/More/Moremain/Moremain";
import MainSection from "./Component/MainSection/MainSection";
import Contact from './Component/Contact/Contact'

// import Abc from './Component/Abc'

function App() {
  let [isVisible,setIsVisible] = useState("About");
  let data = (value)=>{
    setIsVisible(value);
    // console.log(value,"value in app js");
  }
  return (
    <div className="app-container">
      <Aside></Aside>
      <div className="app-main-container">
        <MainSection isVisibleData={data}></MainSection>
        {/* {
          isVisible == "About" && <About></About>
        }
        {
          isVisible == "Certificates" && <Certificates></Certificates>
        }
        {
          isVisible == "Projects" && <Projectsmain></Projectsmain>
        }
        {
          isVisible == "More" && <Moremain></Moremain>
        }
        {
          isVisible == "Contact" && <Contact></Contact>
        } */}
        <Contact></Contact>
      </div>
    </div>
  );
}
export default App;
