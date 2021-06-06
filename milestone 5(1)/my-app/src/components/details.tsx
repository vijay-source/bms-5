import React, { useContext, useEffect, useState, Component } from 'react';
import { RouteComponentProps, useHistory, useParams } from 'react-router';
import { Route, Link, HashRouter } from "react-router-dom";
import { BookContext } from '../Context/BookContext'
import { deleteBook } from '../services/service'
import { StarComponent } from './starrating';




function Details(props: any) {
    const { id } = useParams<any>();
    const { state } = useContext(BookContext);
    let SelectedBook = state.selectedBook;
    // console.log("selectedBook: " + SelectedBook);
    const { dispatch } = useContext(BookContext);
    const history = useHistory();
 
   

    
    return (
        <div>
             <div > 
            <div className="detailpge" >
                <img id="imgDetails" src={SelectedBook.cover} />
                <p><strong>Author:{SelectedBook.author}</strong></p>
                <div>Rating:<span className="stars"><StarComponent  rating={SelectedBook.rating} outof={5} minof={1}></StarComponent></span></div>
                <p><strong>Price :₹{SelectedBook.cost}</strong></p> 
                <h1>{SelectedBook.title}</h1>
                <p><strong>{SelectedBook.description}</strong></p>
        {state.isLoggedIn? <button id='delbtn' onClick={() => {
                    deleteBook(id, dispatch);
                    history.push("/booklist")
                }}>DELETE</button> :null}
            </div>
            </div>
        </div>
    );
}
export default Details;