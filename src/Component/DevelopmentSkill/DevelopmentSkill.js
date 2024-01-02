import {useEffect,useState} from 'react';
import './DevelopmentSkill.css';
import skillData from './DevelopmentSkillData.json';

const DevelopmentSkill = () => {

    // todo useeffect for scroll bar
    const [scrollVal,setScrollVal] = useState(0);
    // useEffect(()=>{
    //     // const interval = setInterval(() => {
    //     //     setCurrentIndex((prevIndex) => (prevIndex + 1) % skillData.length);
    //     // }, 1000);
    //     const interval = setInterval(() => {
    //         const container = document.querySelector('.development-skill-carasouel');
    //         if (container) {
    //             setScrollVal((prevScrollVal) => {
    //                 const newScrollVal = prevScrollVal + 1;
    //                 container.scrollLeft = newScrollVal * container.clientWidth;
    //                 return newScrollVal >= skillData.length ? 0 : newScrollVal;
    //             });
    //         }
    //       }, 2000);
    //     return () => clearInterval(interval);
    // },[scrollVal])

  return (
    <>
    <h1>Development Skills</h1>
    <div className="development-skill-container">
    <div className='development-skill-carasouel'>
        {
            skillData.map((item)=>{
                return <img src={item.url}></img>
            })
        }
    </div>
    </div>
    
    </>
  )
}

export default DevelopmentSkill
