import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase"

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
            <form onSubmit={register}>
                <h2>Create account</h2>
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
                <button>Create</button>
                <div className="Forgot"><NavLink className="For" to="/ForgotePassword"><h4>Забыли пороль?</h4></NavLink></div>

                <button className='loginBut' onClick={login}><NavLink className="Nav">Войти в учетную запись</NavLink></button>
                <div className="choice"><div className="line"></div><h3>Или</h3><div className="line"></div></div>
                <button className='regBut'><NavLink className="Nav" to="/SignUp">Регистрация</NavLink></button>
                
            </form>
        </div>
    )
}
export {Signup}