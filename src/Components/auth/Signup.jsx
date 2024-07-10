import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, NavLink } from 'react-router-dom';
import { auth } from "../../../firebase"

import Img1 from "../../assets/Img1.png"
import Img2 from "../../assets/Img2.png"
import Img3 from "../../assets/Img3.png"

import "./Auth2.scss"

export default function Signup() {
    const navigate = useNavigate();

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
            navigate("/SuccessReg")
            
          })
          .catch((error) => {
            console.log(error)
          })
    }
    function GoogleAuth(e){
        e.preventDefault()
        console.log("Google")
    }
    function AppleAuth(e){
        e.preventDefault()
        console.log("Apple")
    }
    function FacebookAuth(e){
        e.preventDefault()
        console.log("Facebook")
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
                <div className="divAuthApps"><div className="ToFlex"><img src={Img1} alt="ImageError" onClick={GoogleAuth}/><img src={Img2} alt="ImageError" onClick={AppleAuth}/><img src={Img3} alt="ImageError" onClick={FacebookAuth}/></div></div>
                {/* <div className="AuthApps"><img src={img1} alt="ImgError" /><img src={img2} alt="ImgError" /><img src={img3} alt="ImgError" /></div> */}
                <button className='regBut'><NavLink className="Nav" to="/SignIn">Вернуться к авторизации</NavLink></button>
                
            </form>
        </div>
    )
}
export {Signup}