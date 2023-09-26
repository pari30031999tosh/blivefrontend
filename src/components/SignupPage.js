import { useState } from 'react';
import './SignupPage.css'
import { useNavigate } from 'react-router-dom';
function SignupPage(){
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
    const [verifyPassword, setVerifyPassword] = useState('') 
    const [name, setName] = useState('') 
    const [phone, setPhone] = useState('') 
    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const signupHandler = () => {
        //call backend with all these data
        
        fetch('http://localhost:8000/users/signup', {
            
     
                // Adding method type
                method: "POST",
                 
                // Adding body or contents to send
                body: JSON.stringify({
                    email: email,
                    password: password,
                    name: name
                }), headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
        }).then(response => response.json())
 
        // Displaying results to console
        .then(json => {
            console.log("navigating========================")
            navigate('/login')
        }).
        catch(err => console.log(err));
    }
    return <>
        <div className="signup_container">
          <div className='signup_child'>
            <input placeholder='email' onChange = {emailHandler}></input>
            <input placeholder='password' onChange = {passwordHandler}></input>
            <input placeholder='verify password'></input>
            <input placeholder='name' onChange = {nameHandler}></input>
            <input placeholder='phone'></input>

            <button onClick = {signupHandler}>signup</button>
          </div>
        </div>
    </>

}

export default SignupPage;