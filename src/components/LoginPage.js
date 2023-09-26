import { useState } from 'react'

import './LoginPage.css'
import { useNavigate } from 'react-router-dom'
function LoginPage(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
    
    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    
    const loginHandler = () => {
        //call backend api with email and password
        fetch('http://localhost:8000/users/login', {
            
     
                // Adding method type
                method: "POST",
                
                 
                // Adding body or contents to send
                body: JSON.stringify({
                    email: email,
                    password: password,
                }), headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': "*",
                    'Access-Control-Allow-Headers': "*"
                }
        }).then(response => {
           
           return response.json()
        })
 
        // Displaying results to console
        .then(json => {
           
            if(json.status == 200){
                localStorage.setItem('token', json.jwt) 
                navigate('/')

            }
        }).
        catch(err => console.log(err));
    }
    return <>
        <div className="login_container">
          <div className='login_child'>
            <input placeholder='email' onChange = {emailHandler}></input>
            <input placeholder='password' onChange = {passwordHandler}></input>
            <button onClick = {loginHandler}>login</button>
          </div>
        </div>
    </>

}

export default LoginPage;