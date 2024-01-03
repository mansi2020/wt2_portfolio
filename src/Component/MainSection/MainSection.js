import {useState} from 'react'
import Header from './../Header/Header'

const MainSection = (props) => {
  let [isVisibleCat,setIsVisible] = useState("About");
  let onChangeCat= (e,val)=>{
    setIsVisible(val);
    props.isVisibleData(val);
  }

  return (
    <div onLoad= {props.isVisibleData}>
      <Header onClickHeaderCat={onChangeCat}></Header>
    </div>
  )
}

export default MainSection
