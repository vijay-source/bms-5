import React, { Component, useState, useEffect, useContext } from "react";
import Details from "./details"
import {BookContext } from "../Context/BookContext";
import {getBookById} from "../services/service"
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Searchpart from "./searchpart"
import { StarComponent } from "./starrating";
import SearchBar from "./searchpart";
import { getAllBooks } from "../services/service";
import image1 from "../images/Book1.jpg"
import image2 from "../images/Book2.jpg"
import image3 from "../images/Book3.jpg"
import { Carousel } from "react-bootstrap";



function BookList() {
    const { state, dispatch } = useContext(BookContext);
   

    useEffect(() => {
        getAllBooks(dispatch)
    }, []
    )
  

   
    return (
        <div>
            {state.books.map((book: any) => {
                return (
                    <div>
                        <NavLink to={"/details/" + book._id}>
                            <div className="card"
                                id={book._id}
                                onClick={() => {
                                    getBookById(dispatch, book._id);
                                }}>

                                <div className="card-body">
                                    <img id="img" src={book.cover} alt={book.title} />
                                    <h1 className="card-title" id='ttl'>{book.title}</h1>
                                    <div>Rating:<span className="stars"><StarComponent  rating={book.rating} outof={5} minof={1}></StarComponent></span></div>
                                    <p className="card-subtitle mb-2 text-muted" id="cost"><strong>Cost:{book.cost}</strong></p>
                                </div><br></br><br></br>
                                <button className="detailsbtn"> Details</button>
                            </div>
                          
                        </NavLink>
                        <Route path={"/details/" + book._id} component={Details} />
                    </div>
                )

            })}
           
        </div>
    )
}

export default BookList;