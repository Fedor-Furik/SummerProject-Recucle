import React, { useState } from 'react'
import { createUserWithEmailAndPassword,signInWithPopup} from "firebase/auth";

import { useNavigate, NavLink } from 'react-router-dom';
import { auth } from "../../../firebase"

import "./Auth2.scss"

export default function Passwords() { 

    const navigate = useNavigate();

    const [email, setEmail] = useState(sessionStorage.getItem("email"))

    const [password, setPassword] = useState("")
    const [copyPassword, setCopyPassword] = useState("")
    const [error, setError] = useState("")
    function register(e){
        e.preventDefault()
        if(copyPassword !== password) {
            setError("Пароли не совпадают")
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
          .then((user) => {
            setError("")
            setEmail("")
            setCopyPassword("")
            setPassword("")
            navigate("/SuccessReg")
            
          })
          .catch((error) => {
            console.log(error)
          })
    }

    function Reset(e){
        e.preventDefault()
        return
    }
    return (
        <div className='Reg'>
            <form className='AuthSiUp' onSubmit={Reset}>
                {error ? <p className='error'>{error}</p> : ""}
                <input 
                    placeholder='Пароль'
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)} 
                    type="password" 
                />
                <input
                    placeholder='Повтор пароля'
                    value={copyPassword} 
                    onChange={(e)=>setCopyPassword(e.target.value)} 
                    type="password" 
                />
                <button className='loginBut'><NavLink className="Nav" onClick={register}>Регистрация</NavLink></button>
            </form>
        </div>
    )
}
export {Passwords}