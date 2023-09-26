import './Cart.css'
import { useSelector } from "react-redux";
import CartItem from './CartItem';
import { useEffect, useState } from 'react';

function Cart(){
    
    const cartItems = useSelector(state => state.cartItems)
    const  [cartOrder, setCartOrder] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/library/getcartbyemail',{
            body:{

            },
            headers: {
                        "token": localStorage.getItem('token'),
                        "Content-type": "application/json; charset=UTF-8",
                        'Accept': 'application/json',
                        'Access-Control-Allow-Origin': "*",
                        'Access-Control-Allow-Headers': "*"
            }
        }).then(response => response.json()).
        then(json => {
            console.log(json)
            setCartOrder((prev) => json)
        })
    }, [])
    return  <>
       
        <div className='Cart_container'>
            {
                cartItems.map(item => <CartItem item = {item}></CartItem>)
            }
        </div>
    </>
}

export default Cart;