import {useEffect,useState} from 'react'
import './AboutCard.css'; //css file
 

const AboutCard = (props) => {
  return (
    <div className={props.className} style={props.style}>
        <div className="about-card-image">
            <img src={props.img} alt="" />
        </div>
        <div className="about-card-content">
            <h1>{props.title}</h1>
            <p>{props.details}</p>
        </div>
    </div>
  )
}

export default AboutCard
