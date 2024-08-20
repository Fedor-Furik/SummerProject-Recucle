import React, { useState } from 'react'
import { createUserWithEmailAndPassword,signInWithPopup} from "firebase/auth";

import { useNavigate, NavLink } from 'react-router-dom';
import { auth } from "../../../../firebase"

import "../Scss/Passwords.scss"

export default function Passwords() { 

    const navigate = useNavigate();

    const [email, setEmail] = useState(localStorage.getItem("email"))
    const [name, setName] = useState("Red")

    const [password, setPassword] = useState("")
    const [copyPassword, setCopyPassword] = useState("")
    const [error, setError] = useState("")
    function register(e){
        e.preventDefault()
        if(password <= 6){
            setName("Green")
            return
        }
        if(copyPassword !== password) {
            setError("Пароли не совпадают")
            return
        }
        if(copyPassword == password) {
            setError("")
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
            console.log(email)
          })
    }

    function Reset(e){
        e.preventDefault()
        return
    }
    function ChangeInpPass(e){
        setPassword(e.target.value)
        if(e.target.value.length <= 6){
            setName("Red")
        }else{
            setName("Green")
        }
        
    }
    return (
        <div className='Passwords'>
            <form onSubmit={Reset}>
                {error ? <p className='error'>{error}</p> : ""}
                <input 
                    className='pass'
                    placeholder='Пароль'
                    value={password} 
                    onChange={ChangeInpPass} 
                    type="password" 
                />
                <input
                    className='pass'
                    placeholder='Повтор пароля'
                    value={copyPassword} 
                    onChange={(e)=>setCopyPassword(e.target.value)} 
                    type="password" 
                />
                <div className="FirstReq">
                    <p className={name} >Пароль должен состоять больше чем из 6 символов </p>
                </div>
                <button className='loginBut'><NavLink className="Nav" onClick={register}>Регистрация</NavLink></button>
            </form>
        </div>
    )
}
export {Passwords}