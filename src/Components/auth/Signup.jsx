import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, NavLink } from 'react-router-dom';
import { auth } from "../../../firebase"

import "./Auth.scss"

export default function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [copyPassword, setCopyPassword] = useState("")
    const [error, setError] = useState("")

    function register(e){
        e.preventDefault()
        if(copyPassword !== password) {
            setError("passwords didn't match")
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
          .then((user) => {
            console.log(user)
            setError("")
            setEmail("")
            setCopyPassword("")
            setPassword("")
          })
          .catch((error) => {
            console.log(error)
          })
    }
    return (
        <div>
            <form className='AuthSiUp' onSubmit={register}>
                {error ? <p>{error}</p> : ""}
                <input
                    placeholder='email'
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)} 
                    type="email" 
                />
                <input 
                    placeholder='password'
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)} 
                    type="password" 
                />
                <input
                    placeholder='repeat of password'
                    value={copyPassword} 
                    onChange={(e)=>setCopyPassword(e.target.value)} 
                    type="password" 
                />
                <button className='loginBut'><NavLink className="Nav" onClick={register}>Регестрация</NavLink></button>
                <div className="choice"><div className="line"></div><h3>Или войти с помощью</h3><div className="line"></div></div>
                {/* <div className="AuthApps"><img src={img1} alt="ImgError" /><img src={img2} alt="ImgError" /><img src={img3} alt="ImgError" /></div> */}
                <button className='regBut'><NavLink className="Nav">Продолжить без авторизации</NavLink></button>
                
            </form>
        </div>
    )
}
export {Signup}