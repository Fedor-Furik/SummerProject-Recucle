import React from 'react'
import Logo from "../../assets/Logo.png"
import Img from "../../../assets/First.png"
import { NavLink } from 'react-router-dom'
import "../Prew.scss"

export default function FirstPage() {
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
          <h1>Сортировка</h1>
          <h2>разделяет отходы по категориям</h2>
        </div>
      </main>
      <footer>
        <div className="PodBlock">
        <div className="Inder">
        <div className="active"></div>
        <div></div>
        <div></div>
      </div>
      </div>
        <button className='Next'><NavLink to="/SecondPage" className="Nav">Далее</NavLink></button>
      </footer>
    </div>
  )
}
