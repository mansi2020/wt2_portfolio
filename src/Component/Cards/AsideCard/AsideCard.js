import './AsideCard.css' //css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //fontawesome component

const AboutAsideCard = (props) => {
  return (
    <div className='about-aside-card'>
        <div className="about-aside-card-icon" id={props.id}>
        <FontAwesomeIcon icon={props.icon}/>
        </div>
        <div className="about-aside-card-content">
            <h4>{props.title}</h4>
            <p>{props.subtitle}</p>
        </div>
    </div>
  )
}

export default AboutAsideCard
