import React from 'react'
import { Passwords } from '../../Components/auth/Passwords'
import "./Passwordsss.scss"
import Logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";

export default function Passwordsss() {
  return (
    <div className="SignContainer-1">
      <header>
        <div className="logo2">
          <img src={Logo} alt="ImageError" />
          <div className="UnFlex">
            <h3>зеленый ресурс</h3>
          </div>
        </div>
        <div className="title">
          <h1>Регистраци</h1>
          <h2>Введите электронную почту</h2>
        </div>
      </header>
      <main>
        <Passwords/>
      </main>
    </div>
  );
}
