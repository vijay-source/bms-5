import React, { Component, useState , useContext} from "react";
// import BookList from "./booklist";
import { Route, Link, HashRouter,useHistory  } from "react-router-dom";
import {BookContext} from '../Context/BookContext'
import { addBook } from "../services/service";
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';


function AddBook() {


  const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
  const headerStyle = { margin: 0 }
  const marginTop = { marginTop: 5 }


    const {dispatch}=useContext(BookContext); 
    const history = useHistory();
    const  [book, setBook] = useState({
        title: "",
        author: "",
        cost: "",
        rating:"",
        description:"",
        cover:""
    }
    )
    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        console.log(book)
        addBook(book,dispatch)
        history.push('/booklist');
    }

    function handleAddBook(event: any) {
        setBook({ ...book, [event.target.name]: event.target.value });
    }

    return (


                  
<Grid container justify='center'>
            <Paper elevation={20} style={paperStyle}>
                <h2 style={headerStyle}>Add Book</h2>
                <Typography variant='caption' gutterBottom>Please fill this form to Add Book!!!!</Typography>

                <form>
                    <TextField fullWidth label='Book Title' type='text' placeholder="Enter your title"
                     name="title"
                        value={book.title}
                        onChange={handleAddBook} />
                         <TextField fullWidth label='Book Author' type='text' placeholder="Enter the author of book"
                     name="author"
                        value={book.author}
                        onChange={handleAddBook} />
                          <TextField fullWidth label='Book Cost' type='text' placeholder="Enter the cost of book"
                     name="cost"
                        value={book.cost}
                        onChange={handleAddBook} />
                          <TextField fullWidth label= 'Book rating' type='text' placeholder="Enter the rating out of 5"
                     name="rating"
                        value={book.rating}
                        onChange={handleAddBook} />
                          <TextField fullWidth label=' Book Description' type='text' placeholder="Enter the book description"
                     name="description"
                        value={book.description}
                        onChange={handleAddBook} />
                    
                    <TextField fullWidth label=' Book Cover' type='text' placeholder="Enter the book cover url"
                     name="cover"
                        value={book.cover}
                        onChange={handleAddBook} />


                    <FormControl component="fieldset" style={marginTop}>
                    </FormControl> <br></br> <br></br>
                    <Button type='submit'  variant='contained' color='secondary' onClick={handleFormSubmit}>Add Book</Button>
                </form>
            </Paper>
        </Grid>
        // <div>
        //      <form>
        //   <div className="form-group">
        //     <label>Enter Book Title</label>
        //     <input
        //       type="text"
        //       className="form-control"
        //       id="exampleInputEmail1"
        //       aria-describedby="emailHelp"
        //       onChange={handleAddBook}
        //       name='title'
        //       value={book.title}
        //     />
        //   </div>

        //   <div className="form-group">
        //     <label>Enter Book Author</label>
        //     <input
        //       type="text"
        //       className="form-control"
        //       id="exampleInputEmail1"
        //       aria-describedby="emailHelp"
        //       onChange={handleAddBook}
        //       name='author'
        //       value={book.author}
        //     />
        //   </div>
        //   <div className="form-group">
        //     <label>Enter Book Cost</label>
        //     <input
        //       type="text"
        //       className="form-control"
        //       id="exampleInputEmail1"
        //       aria-describedby="emailHelp"
        //       onChange={handleAddBook}
        //       name='cost'
        //       value={book.cost}
        //     />
        //   </div>
        //   <div className="form-group">
        //     <label>Enter Book Rating</label>
        //     <input
        //       type="text"
        //       className="form-control"
        //       id="exampleInputPassword1"
        //       onChange={handleAddBook}
        //       name='rating'
        //       value={book.rating}
        //     />
        //   </div>
        //   <div className="form-group">
        //     <label>Enter Book Description</label>
        //     <input
        //       type="text"
        //       className="form-control"
        //       id="exampleInputPassword1"
        //       onChange={handleAddBook}
        //       name='description'
        //       value={book.description}
        //     />
        //   </div>
        //   <div className="form-group">
        //    <label>Enter Book Cover</label>
        //     <input
        //       type="text"
        //       className="form-control"
        //       id="exampleInputPassword1"
        //       onChange={handleAddBook}
        //       name='cover'
        //       value={book.cover}
        //     />
        //   </div>

        //   <button onClick={handleFormSubmit} type="submit" className="btn btn-primary" >
        //     Add Book
        //   </button>
        // </form>
        // </div>

    )
}
export { AddBook};