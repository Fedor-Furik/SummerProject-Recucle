import { useState } from "react";

const Form = (title,handleClick) => {
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    return (
        <div>
            <input type="email" value={email} onСhange={(e) => setEmail(e.target,value)} placeholder="Email"/>
            <input type="password" value={pass} onСhange={(e) => setPass(e.target,value)} placeholder="Password"/>
            <button onClick={handleClick}>{title}</button>
        </div>
    )
}

export{Form}