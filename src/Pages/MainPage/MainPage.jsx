import React from 'react'
import { NavLink } from 'react-router-dom'

import Fir1 from "../../assets/Fir1.png"
import Fir2 from "../../assets/Fir2.png"

import Sett from "../../assets/Sett.png"

import DomGreen from "../assets/navGreen/DomGreen.png"
import SkanerGray from "../assets/navG/SkanerGray.png"
import MapGray from "../assets/navG/MapGray.png"
import ProfileGray from "../assets/navG/ProfileGray.png"

import Line11 from "../assets/TypesTrash/Line11.png"
import Line12 from "../assets/TypesTrash/Line12.png"
import Line13 from "../assets/TypesTrash/Line13.png"

import Line21 from "../assets/TypesTrash/Line21.png"
import Line22 from "../assets/TypesTrash/Line22.png"
import Line23 from "../assets/TypesTrash/Line23.png"

import { useState } from 'react'
import "./MainPage.scss"

export default function MainPage() {
  let name = "NullR"
  //Имя до оформления базы данных 
  function Change(){

  }
  return (
    <div className='container2'>
      <header>
        <div className="head"><img src={Fir1} alt="ImgError" /> <div className="FullName"><p className='p1'>Привет,</p> <p className='p2'>{name}!</p></div></div>
        <div className="finder"><img id='Search' src={Fir2} alt="ImgError" /> <input type="text" placeholder='Поиск'/> <img id='Sett' src={Sett} alt="ImgError" /></div>
        <div className="article"></div>
        <div className="trashTypes"></div>
      </header>
      <main>
         <div className="States">
          <h2>Статьи</h2>
          <div className="slider">

          </div>
         </div>
         <div className="TrashTypes">
          <h2>Типы отходов</h2>
          <div className="line1">
            <NavLink className="block" to="">
              <img src={Line11} alt="ImgError" />
              <p>Стекло</p>
            </NavLink>
            <NavLink className="block" to="">
              <img src={Line12} alt="ImgError" />
              <p>Пластик</p>
            </NavLink>
            <NavLink className="block" to="">
              <img src={Line13} alt="ImgError" />
              <p>Бумага</p>
            </NavLink>
          </div>
          <div className="line2">
          <NavLink className="block" to="">
              <img src={Line21} alt="ImgError" />
              <p>Металл</p>
            </NavLink>
            <NavLink className="block" to="">
              <img src={Line22} alt="ImgError" />
              <p>Органика</p>
            </NavLink>
            <NavLink className="block" to="">
              <img src={Line23} alt="ImgError" />
              <p>Опасные</p>
            </NavLink>
          </div>
         </div>
      </main>
      <footer>
        <NavLink to=""><img className='noP' src={DomGreen} alt="ImgError" /></NavLink> 
        <NavLink to=""><img src={SkanerGray} alt="ImgError" /></NavLink> 
        <NavLink to=""><img src={MapGray} alt="ImgError" /></NavLink> 
        <NavLink to=""><img src={ProfileGray} alt="ImgError" /></NavLink> 
      </footer>
    </div>
  )
}
