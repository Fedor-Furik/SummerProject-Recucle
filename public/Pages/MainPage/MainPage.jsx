import React from 'react'
import { NavLink } from 'react-router-dom'
import Fir1 from "../../assets/Fir1.png"
import Fir2 from "../../assets/Fir2.png"
import { useState } from 'react'
import "./MainPage.scss"

export default function MainPage() {
  let [name,setName] = useState("NullR")
  function Change(){

  }
  return (
    <div className='container2'>
      <div className="head"><img src={Fir1} alt="ImgError" /> <div className="FullName">Привет,{name}!</div></div>
      <div className="finder"><img src={Fir2} alt="ImgError" /> <input type="text" placeholder='Поиск'/></div>
      <div className="article"></div>
      <div className="trashTypes"></div>
    </div>
  )
}
