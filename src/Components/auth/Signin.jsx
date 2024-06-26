import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase"
import './Auth.scss'

export default function Signin() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function login(e){
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
          .then((user) => {
            navigate("/SuccessLogin")
            console.log(user)
            setError("")
            setEmail("")
            setPassword("")
          })
          .catch((error) => {
            console.log(error)
            setError("Incorrect email or password")
          })
    }
    return (
        <div className='AuthSiIn'>
            <form>
                {error ? <p>{error}</p> : ""}
                <input
                    placeholder='Введите email'
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)} 
                    type="email" 
                />
                <input 
                    placeholder='Введите пароль'
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)} 
                    type="password" 
                />

                <div className="Forgot"><h4>Забыли пороль?</h4></div>

                <button className='loginBut'  onClick={login}>Войти в учетную запись</button>
                <div className="choice"><div className="line"></div><h3>Или</h3><div className="line"></div></div>
                <button className='regBut'><NavLink className="Nav" to="/SignUp">Регистрация</NavLink></button>
                
            </form>
        </div>
    )
}
export {Signin}