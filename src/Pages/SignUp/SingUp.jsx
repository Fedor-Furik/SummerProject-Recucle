import React from 'react'
import { Signup } from '../../Components/auth/Signup'
import "./SingUp.scss"
import Logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";

export default function SingUp() {
  return (
    <div className="container3">
      <header>
        <div className="logo2">
          <img src={Logo} alt="ImageError" />
          <div className="UnFlex">
            <h3>зеленый ресурс</h3>
          </div>
        </div>
        <div className="title">
          <h1>Регистрация</h1>
        </div>
      </header>
      <main>
        <Signup/>
      </main>
    </div>
  );
}
