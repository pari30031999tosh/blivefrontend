import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import BooksList from './components/BooksList';
import Cart from './components/Cart';
import { Route, BrowserRouter as Router, Routes, Redirect, Navigate } from 'react-router-dom'
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import { useState } from 'react';


function App() {
   
   const data = localStorage.getItem('token')
  
  let [token, settoken] = useState(data)

  return <>
      <Router> 
            <Navbar token = {token}></Navbar>

            <Routes>
              <Route path = "/" exact element={<BooksList></BooksList>}/>
              <Route path = "/login" exact element={<LoginPage />}/>
              <Route path = "/cart" exact element={<Cart/>}/>
              {<Route path = "/signup" exact element={<SignupPage/>}/> }
              
            </Routes>
            
        </Router>
     
       
  </>
}

export default App;
