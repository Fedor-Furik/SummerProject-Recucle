import { useDispatch } from "react-redux";
import {useHistory} from "react-router-dom"

import { getAuth, singInWithEmailAndPassword } from "firebase/auth"
import { Form } from "./Form"
import {setUser} from 'store/slices/userSlice'

const Login = () => {
    const dispatch = useDispatch();
    const {push} = useHistory();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        singInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email:user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
            }) 
    }
    return (
        <Form
          title="sign in"
          handleClick={handleLogin}       
        />
        
    )
}

export{Login}