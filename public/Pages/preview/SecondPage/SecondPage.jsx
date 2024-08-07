import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../../../assets/Logo.png"
import Img from "../../../assets/Second.png"
import "../Prew.scss"

export default function SecondPage() {
  return (
    <div className="PrevContainer">
      <header>
        <div className="logo2">
          <div className="Flex">
            <img src={Logo} alt="ImageError" />
            <h3>зеленый ресурс</h3>
          </div> 
        </div>
        <NavLink className="For" to="/SignIn"><h4>Пропустить</h4></NavLink>
      </header>
      <main>
        <img src={Img} alt="ImageError" />
        <div className="title">
          <h1>Переработка</h1>
          <h2 className='big'>уменьшает загрязнение окружающей среды</h2>
        </div>
      </main>
      <footer>
        <div className="PodBlock">
        <div className="Inder">
        <div></div>
        <div  className="active"></div>
        <div></div>
      </div>
      </div>
        <button className='Next'><NavLink to="/ThirdPage" className="Nav">Далее</NavLink></button>
      </footer>
    </div>
  )
}
