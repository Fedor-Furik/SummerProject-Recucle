import React, { useState } from 'react'
import { createUserWithEmailAndPassword,signInWithPopup} from "firebase/auth";

import { GoogleAuthProvider } from 'firebase/auth';
import { OAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";

import { useNavigate, NavLink } from 'react-router-dom';
import { auth } from "../../../firebase"

import Img1 from "../../assets/Img1.png"
import Img2 from "../../assets/Img2.png"
import Img3 from "../../assets/Img3.png"

import "./Auth2.scss"

export default function Signup() { 
    const provider = new GoogleAuthProvider();
    const providerApple = new OAuthProvider('apple.com');
    const providerFacebook = new FacebookAuthProvider();

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
            // console.log(user)
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
        e.preventDefault();
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
  });
        
    }
    function AppleAuth(e){
        e.preventDefault()
        signInWithPopup(auth, providerApple)
        .then((result) => {
            const user = result.user;
            const credential = OAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
            const idToken = credential.idToken;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = OAuthProvider.credentialFromError(error);
        });

    }
    function FacebookAuth(e){
        e.preventDefault()
        signInWithPopup(auth, providerFacebook)
        .then((result) => {
            const user = result.user;
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = FacebookAuthProvider.credentialFromError(error);
  });

    }
    return (
        <div>
            <form className='AuthSiUp'>
                {error ? <p>{error}</p> : ""}
                <input
                    placeholder='email'
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)} 
                    type="email" 
                    autoFocus
                />
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
                <div className="choice"><div className="line"></div><h3>Или войти с помощью</h3><div className="line"></div></div>
                <div className="divAuthApps"><div className="ToFlex"><img src={Img1} alt="ImageError" onClick={GoogleAuth}/><img src={Img2} alt="ImageError" onClick={AppleAuth}/><img src={Img3} alt="ImageError" onClick={FacebookAuth}/></div></div>
                {/* <div className="AuthApps"><img src={img1} alt="ImgError" /><img src={img2} alt="ImgError" /><img src={img3} alt="ImgError" /></div> */}
                <button className='regBut'><NavLink className="Nav" to="/SignIn">Вернуться к авторизации</NavLink></button>
                
            </form>
        </div>
    )
}
export {Signup}