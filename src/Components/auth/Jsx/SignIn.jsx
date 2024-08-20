import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase"
import '../Scss/AuthSignIn.scss'

import View from "../../../assets/View.png"
import NoView from "../../../assets/VectorLike.png"

export default function Signin() {
    const navigate = useNavigate();

    const [classN, setClassN] = useState("NoView")
    const [img, setImg] = useState(NoView)
    const [typeInp, setType] = useState("password")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    
    function Def(e){
        e.preventDefault()
        return
    }
    function login(e){
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
          .then((user) => {
            navigate("/SuccessLogin")
            setError("")
            setEmail("")
            setPassword("")
          })
          .catch((error) => {
            setError("Неправильный email или пароль")
          })
    }
    function Eye(e){
        e.preventDefault()
        if(img == NoView){
            setImg(View)
            setClassN("View")
            setType("text")
        }
        else{
            setImg(NoView)
            setClassN("NoView")
            setType("password")
        }
    }
    return (
        <div className='AuthSignIn'>
            <form onSubmit={Def}>
                {error ? <p id='error' className='error'>{error}</p> : ""}
                <input
                    id="i1"
                    placeholder='Введите email'
                    className='firstI'
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)} 
                    type="email"
                    autoFocus
                />
                <div className="Password">
                    <input 
                        id="i2"
                        placeholder='Введите пароль'
                        value={password} 
                        onChange={(e)=>setPassword(e.target.value)} 
                        type={typeInp}
                        maxLength="30"
                    />
                    <img className={classN} src={img} alt="ImageError" onClick={Eye}/>
                </div>
                

                <div className="Forgot"><NavLink className="For" to="/ForgotePassword"><h4>Забыли пароль?</h4></NavLink></div>

                <button className='loginBut' onClick={login}><NavLink className="Nav">Войти в учетную запись</NavLink></button>
                <div className="choice"><div className="line"></div><h3>Или</h3><div className="line"></div></div>
                <button className='regBut'><NavLink className="Nav" to="/SignUp">Регистрация</NavLink></button>
                
            </form>
        </div>
    )
}
export {Signin}