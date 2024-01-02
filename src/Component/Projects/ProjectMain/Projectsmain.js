import {useState} from 'react'
import './Projectsmain.css'
import './../../../App.css'
import Header from './../../Header/Header' //header
import Projectcard from '../Projectcard/Projectcard'  //projectcard
import ProjectcardsData from './../Projectcards.json' //project cards alll data

const Projectsmain = () => {
    let projectCategories = ["All","Websites","Applications","Games"]

    // !filter data according categories
    let [updatedProjectsCardsData,setUpdatedProjectsCardsData] =useState([...ProjectcardsData]);
    let onClickFilterProjectData = (e,idx)=>{
        
        let updatedData = ProjectcardsData.filter((card)=>{
            if(projectCategories[idx] != "All"){
                console.log(card.detail.toLowerCase());
                return card.detail.toLowerCase().includes(projectCategories[idx].toLowerCase());
                
            }else{
                return true;
            }
            
        });
        setUpdatedProjectsCardsData(updatedData);

    }
  return (
    
    <div className='project-main-container'>
        {/* header */}
        

        {/* categories */}
        <ul className="project-category">
            {
                projectCategories.map((item,idx)=>{
                    return <li key={idx} onClick={(e)=>onClickFilterProjectData(e,idx)}>{item}</li>
                })
            }
        </ul>

        {/* project cards */}
        <div className="project-main-cards">
            {
                updatedProjectsCardsData.map((item,idx)=>{
                    return <Projectcard key={idx} {...item}></Projectcard>
                })
            }
        </div>
        
    </div>
  )
}

export default Projectsmain
