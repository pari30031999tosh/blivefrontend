import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import './BooksList.css'



function BooksList(props){
    const [bookslist, setBookList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/library/listallbooks', {
                
         
                    // Adding method type
                    method: "GET",
                    headers: {
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
               
                setBookList((prev) => {
                    return json.result
                })
            }).
            catch(err => console.log(err));
    }, [])
    const a= localStorage.getItem('token');
    console.log("a", a);
    return <>
    <div className='bookslist'>
        {
            bookslist.map(item => <Cards book_details = {item}></Cards>)
        }
    </div>
    </>
}

export default BooksList;