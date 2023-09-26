import React from 'react'
import { useNavigate } from "react-router-dom";
import './LoginSignup.css'

function LoginSignup(props){
    const navigate = useNavigate();
    const Loginhandler = () => {
        navigate("/login")
    }
    const Signuphandler = () => {
        navigate("/signup")
    }
    return <>
        <div className = 'LoginSignup'>
            <button onClick = {Loginhandler}>Login</button>
            <button onClick = {Signuphandler}>Signup</button>

        </div>
    </>
}

export default LoginSignup;