import './App.scss'
import React from 'react'
import {useState} from "react"
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom"
import {Main} from "../Pages"
function App() {
  return(
    <Router>
      <main>
        <Routes>
           <Route path="/" element={<Main />}/>;
        </Routes>
      </main>
      <footer></footer>
    </Router>
  )
    
  
}

export default App
