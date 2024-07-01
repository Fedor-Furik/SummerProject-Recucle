import './App.scss'
import React from 'react'
import {useState} from "react"
import { CSSTransition } from 'react-transition-group'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom"

import {Home,SignIn, SignUp,SignOut,ForgotePassword,   NotSuccessReg,SuccessLogin} from "../Pages"
import {FirstPage, SecondPage, ThirdPage} from "../Pages/preview"

function App() {

  return(
    <Router>
      <main className="app">
      <Routes>
           <Route path="/" element={<Home />}/>;

           <Route path="/SignIn" element={<SignIn />}/>;
           <Route path="/SignUp" element={<SignUp />}/>
           <Route path="/SignOut" element={<SignOut />}/>;
           <Route path="/ForgotePassword" element={<ForgotePassword />}/>;

           <Route path="/SuccessLogin" element={<SuccessLogin />}/>;
           <Route path="/NotSuccessReg" element={<NotSuccessReg />}/>;

           <Route path="/FirstPage" element={<FirstPage />}/>;
           <Route path="/SecondPage" element={<SecondPage />}/>;
           <Route path="/ThirdPage" element={<ThirdPage />}/>;
           
        </Routes>
      </main>
    </Router>
  )
    
  
}

export default App


        