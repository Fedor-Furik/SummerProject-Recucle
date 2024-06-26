import './App.scss'
import React from 'react'
import {useState} from "react"
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom"
import {Home} from "../Pages"
function App() {
  return(
    <Router>
      <main>
        <Routes>
           <Route path="/" element={<Home />}/>;
        </Routes>
      </main>
      <footer></footer>
    </Router>
  )
    
  
}

export default App
