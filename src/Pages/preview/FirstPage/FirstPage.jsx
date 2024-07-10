import React from 'react'
import Logo from "../../assets/Logo.png"
import Img1 from "../../../assets/Group22.png"
import { NavLink } from 'react-router-dom'
import "./FirstPage.scss"

export default function FirstPage() {
  return (
    <div className="PrevContainer1">
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
        <img src={Img1} alt="ImageError" />
      </main>
    </div>
  )
}
