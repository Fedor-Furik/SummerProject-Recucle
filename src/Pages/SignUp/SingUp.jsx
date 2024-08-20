import React from 'react'
import { Signup } from '../../Components/auth/Jsx/SignUp'
import "./SingUp.scss"

import Logo from "../assets/Logo.png";

import St from "../../assets/Strl.png"

import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function SingUp() {
  const navigate = useNavigate()
  function Nav(e){
    e.preventDefault()
    navigate("/SignIn")
  }
  return (
    <div className="SignContainer1">
      <header>
        <div className="logo2">
          <img onClick={Nav} className='fir' src={St} alt="" />
          <div className="Logot">
          <img className='sec' src={Logo} alt="ImageError" />
          <div className="UnFlex">
            <h3>зеленый ресурс</h3>
          </div>
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
