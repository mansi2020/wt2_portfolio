import React from 'react'
import './Moremain.css'
import Morecard from '../Morecard/Morecard'

const Moremain = () => {
    const moreProjectsData = [

        {"projectName" : "Marketing & BizDev",
        "projectType" : "Content Creator",
        "projectTiitle" : "Pigletz",
        "img" : "https://oktayshakirov.com/assets/images/projects/pigletz.jpg",
        "description" : "I create and manage the Pigletz community's social media presence, including producing and editing high-quality Web3 content for their YouTube channel. I also work on expanding the community's reach and impact through partnerships in the Web3 space."},

        {"projectName" : "Beat Making",
        "projectType" : "Sound Design",
        "projectTiitle" : "Music Production",
        "img" : "https://oktayshakirov.com/assets/images/projects/sha-beats.jpg",
        "description" : "Produced over 100 instrumentals in different genres, collaborated with artists and my beats are on popular streaming platforms like Spotify, iTunes, Amazon and Deezer. They can also be purchased exclusively on my beatstore for musicians to create their unique sound."},

        {"projectName" : "Multimedia Design",
        "projectType" : "3D Rendering",
        "projectTiitle" : "Digital Content Creation",
        "img" : "https://oktayshakirov.com/assets/images/projects/sha-pixels.png",
        "description" : "My digital art portfolio, which includes a wide collection of graphic designs, 3D models and short video animations created for various purposes. I have long experience working with popular softwares like Adobe Photoshop, After Effects, Premiere Pro and Blender."}
    ] 
  return (
    <div className='moremain-container'>
      {/* header */}
      <div className="common-header">
      <h1>About Me</h1>
      <div></div>
      </div>
      {/* cards */}
      <div className="moremain-cards">
        {
            moreProjectsData.map((item,idx)=>{
                return <Morecard {...item} key={idx}></Morecard>
            })
        }
      </div>
    </div>
  )
}

export default Moremain
