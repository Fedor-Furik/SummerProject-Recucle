import React from 'react'
import { Signup } from '../../Components/auth/Signup'
import "./SingUp.scss"
import Logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";

export default function SingUp() {
  return (
    <div className="SignContainer1">
      <header>
        <div className="logo2">
          <img src={Logo} alt="ImageError" />
          <div className="UnFlex">
            <h3>зеленый ресурс</h3>
          </div>
        </div>
        <div className="title">
          <h1>Регистрация</h1>
          <h2>Введите электронную почту</h2>
        </div>
      </header>
      <main>
        <Signup/>
      </main>
    </div>
  );
}
