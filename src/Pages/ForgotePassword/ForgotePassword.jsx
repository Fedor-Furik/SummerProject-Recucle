import React from 'react'
import {RestorePass} from "../../Components/auth/Jsx/RestorePass"
import Logo from "../../assets/Logo.png"
import St from "../../assets/Strl.png"
import { NavLink } from 'react-router-dom'
import "./ForgotePassword.scss"
import { useNavigate } from 'react-router-dom';

export default function ForgotePassword() {
  const navigate = useNavigate()
  function Nav(e){
    e.preventDefault()
    navigate("/SignIn")
  }
  return (
    <div className="ForContainer">
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
          <h1>Забыли пороль?</h1>
          <h2>Мы поможем вам его восстановить!</h2>
        </div>
      </header>
      <main>
        <RestorePass/>
      </main>
    </div>
    
  )
}

