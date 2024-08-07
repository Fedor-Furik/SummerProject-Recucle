import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import { useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../../firebase';
import "./Rest.scss"

export default function Restore() {
    const [email,setEmail] = useState("")
    const [error,setError] = useState("")
    function restore(e){
        e.preventDefault()
        sendPasswordResetEmail(auth,email)
        .then(() => {
            console.log("Sended")
            setEmail("")
        })
        .catch((error) => {
            setError("Неправильный email")
        })
    }
  return (
    <div className='restor'>
        <form onSubmit={restore}>
        {error ? <p className='error'>{error}</p> : ""}
        <input 
            placeholder='Введите email'
            value={email} 
            onChange={(e)=>setEmail(e.target.value)} 
            type="email"
            autoFocus
            />
            <button className='Tup'>Отправить письмо для сброса пороля</button>
            <div className="choice"><div className="line"></div><h3>Или</h3><div className="line"></div></div>
        </form>
        <button className='regBut'><NavLink className="Nav" to="/SignIn">Вернуться к авторизации</NavLink></button>
    </div>
  )
}

export {Restore}