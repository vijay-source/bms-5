import { BookContext } from "../Context/BookContext";

const axios = require("axios");

// Get all books from server
export async function getAllBooks(dispatch: any) {
  let response = await axios.get("http://localhost:5000/books");
  dispatch({ type: "GET_BOOKS", payload: response.data });
  console.log("response", response.data);
}

export async function getBookById(dispatch: any, id: any) {
  let response = await axios.get("http://localhost:5000/books/" + id);
  dispatch({ type: "BOOK_BY_ID", selectedBook: response.data });
}

export async function addBook(book: any, dispatch: any) {
  let response = await axios.post("http://localhost:5000/books", book);
  dispatch({ type: "ADD_BOOK", payload: response.data });
}

export async function deleteBook(id: any, dispatch: any) {
  let response = await axios.delete("http://localhost:5000/books/" + id);
  if (response.status === 200) {
    dispatch({ type: "DELETE_BOOK", payload: id });
  }
}

export async function searchBooks( dispatch: any, selected: any, searchinput: any ) {
  console.log("search input",searchinput)
  if(searchinput==="")
  {
     console.log("search level")
     getAllBooks(dispatch)
  }
  else if (selected== "author") {

    console.log("searchednewAuthor", selected);
    console.log("searched input1 author", selected);
    let response = await axios.get(
      "http://localhost:5000/books/by/author/" + searchinput
    );
    let data = await response.data;
    // console.log("response new", data);
    dispatch({ type: "SEARCH_BOOKS_BY_AUTHOR", payload: data });
  } 
  
  
  else if (selected == "title") {
    console.log("value", selected);
    let response = await axios.get(
      "http://localhost:5000/books/by/title/" + searchinput
    );
    let data = await response.data;
    dispatch({ type: "SEARCH_BOOKS_BY_TITLE", payload: data });
  }
  
  
  else if (selected === "rating") {
  let response = await axios.get( "http://localhost:5000/books/by/rating/" + searchinput);
  let data = await response.data;
    dispatch({ type: "SEARCH_BOOKS_BY_RATING", payload: data });
  } 
  
  else if (selected === "price") {
  let result=searchinput.split(' ')
  console.log(result,"my result from ")
  let response = await axios.get(`http://localhost:5000/priced/${result[0]}/${result[1]}` +searchinput);
  let data = await response.data;
  dispatch({ type: "SEARCH_BOOKS_BY_PRICE", payload:data });
  }
}


export async function addRegistration(dispatch: any,user: any ) {
  console.log("recieving",user)
  let response = await axios.post("http://localhost:5000/registration", user);
  console.log("response from registration",response.data)
  dispatch({ type: "USER_REGISTRATION", payload: response.data });
}

// User Login

export async function loginUser(dispatch:any,user:any){
  try{
    let response=await axios.post("http://localhost:5000/login", user);
  console.log("token",response.data.token);
  localStorage.setItem("login",response.data.token);
  
  dispatch({type:"USER_LOGIN",payload:{token:response.data.token}});
  }
  catch(err:any){
    if(err){
      alert("Invalid Credentials");
    }
  }
}
