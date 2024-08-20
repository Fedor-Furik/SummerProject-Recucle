import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import { useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../../../firebase';
import "../Scss/RestorePass.scss"

export default function RestorePass() {
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
    <div className='restore'>
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
        </form>
    </div>
  )
}

export {RestorePass}