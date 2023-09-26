import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './Cards.css'

function Cards({book_details}){
    let [count, setcount] = useState(0);
    const dispatch = useDispatch();
    const increaseCounter = (prev) => {
        if(count < 5){
            setcount(count + 1)
        }
    }
    const decreaseCounter = (prev) => {
        if(count >0){
            setcount(count - 1)
        }
       
        
    }

    const addCartHandler = () => {
       
        dispatch({type: 'ADD_TO_CART', val: {title: book_details.title, author: book_details.author, count: count, price: book_details.price}})
        fetch('http://localhost:8000/library/addtocart', {
                
         
                    // Adding method type
                    method: "POST",
                    body: JSON.stringify({
                       book_name: book_details.name,
                       count: count,
                       price: book_details.price
                    }),
                    headers: {
                        "token": localStorage.getItem('token'),
                        "Content-type": "application/json; charset=UTF-8",
                        'Accept': 'application/json',
                        'Access-Control-Allow-Origin': "*",
                        'Access-Control-Allow-Headers': "*"
                    }
            }).then(response => {
               console.log('add to cart==================')
               return response.json()
            })
                
            // Displaying results to console
            .then(json => {
                console.log("added===================================")
                
            }).
            catch(err => console.log(err));
    }
    return <>
        <div className='cards_container'>
            <p>{book_details.name}</p>
            <p>{book_details.author}</p>
            <p>{book_details.genre}</p>
            <p>{book_details.price}</p>
            <div id = 'button_container'>
                <div >
                    <button onClick={decreaseCounter}>-</button>
                    <button onClick={increaseCounter}>+</button>
                   
                </div>
                <p>{count}</p>
                <button onClick = {addCartHandler}>add</button>

            </div>
            
            

        </div>
    </>
}

export default Cards;