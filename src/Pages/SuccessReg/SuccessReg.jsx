import React from 'react'
import Logo from "../assets/Logo.png";
import suc from "../assets/suc.png"
import { NavLink } from "react-router-dom";
import "./SuccessReg.scss"

export default function SuccessReg() {
  return (
    <div className='SucContainer2'>
      <header>
        <div className="logo2">
          <img src={Logo} alt="ImageError" />
          <div className="UnFlex">
            <h3>зеленый ресурс</h3>
          </div>
        </div>
        <div className="title">
          <h1>Поздравляем!</h1>
          <h2>Регестрация прошла успешно</h2>
        </div>
      </header>
      <main>
        <div className="ToF"><img src={suc} alt="" /></div>
        <button><NavLink to="/MainPage" className="Nav">Продолжить</NavLink></button>
      </main>
    </div>
  )
}
