import React, { useState } from 'react'
import './Navbar.css'
import LoginSignup from './LoginSignup';
import { useNavigate } from 'react-router-dom';


function Navbar({token}) {
    const navigate = useNavigate();
    const [searchvalue, setseachvalue] = useState('')
    const changeHandler = (e) => {
        setseachvalue(e.target.value)
    }

    const libraryHandler =() => {
        navigate('/')
    }
    const searchHandler = () => {
        //backned me pass kardo searchvalue
    }
    const cartHandler = () => {
        
        navigate('/cart')
    }
    return <>
        <div className='nav_container'>
            <div className='library_icon' onClick = {libraryHandler}>Library</div>
            <div className='search'>
                <input id = 'search-bar' placeholder='enter book name, author or genre' value = {searchvalue} onChange={changeHandler}></input>
                <button id = 'search-btn' onClick= {searchHandler}>search</button>
            </div>
            {!token? <><LoginSignup></LoginSignup></>:<button onClick = {cartHandler}>cart</button>}
        </div>  
    </>
}

export default Navbar;