import React from 'react'
import {Restore} from "../../Components/auth/Restore"
import Logo from "../../assets/Logo.png"
import { NavLink } from 'react-router-dom'
import "./ForgotePassword.scss"

export default function ForgotePassword() {
  return (
    <div className="ForContainer">
      <header>
        <div className="logo2">
          <img src={Logo} alt="ImageError" />
          <div className="UnFlex">
            <h3>зеленый ресурс</h3>
          </div>
        </div>
        <div className="title">
          <h1>Забыли пороль?</h1>
          <h2>Мы поможем вам его восстановить!</h2>
        </div>
      </header>
      <main>
        <Restore/>
      </main>
    </div>
    
  )
}

