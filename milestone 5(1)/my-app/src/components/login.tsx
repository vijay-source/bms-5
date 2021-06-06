import React, { Component, useState, useContext } from "react";
import BookList from "./booklist";
import { Route, Link, HashRouter, useHistory } from "react-router-dom";
import { BookContext } from '../Context/BookContext'
import { loginUser } from "../services/service";
import { addRegistration } from "../services/service";
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';

const Login = (props: any) => {


    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const marginTop = { marginTop: 5 }
  
  
    
    const [user, setUser] = useState({

        email: "",
        password: "",
    })

    const { dispatch } = useContext(BookContext);
    const history = useHistory();


    function handleUserChange(event: any) {
        setUser({ ...user, [event.target.name]: event.target.value });
    }


    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        console.log(user)
        // dispatch({ type: "LOGIN_USER", user: user,isLoggedIn:true })
        loginUser(dispatch, user)
        history.push('/');
    }


    return (

              
<Grid container justify='center'>
            <Paper elevation={20} style={paperStyle}>
                <h2 style={headerStyle}>Sign Up</h2>
                <Typography variant='caption' gutterBottom>Please fill this form Login !</Typography>

                <form>
                    <TextField fullWidth label='Email' placeholder="Enter your mail"
                     name="email"
                        value={user.email}
                        onChange={handleUserChange} />
                         <TextField fullWidth label='password' type='password' placeholder="Enter your password"
                     name="password"
                        value={user.password}
                        onChange={handleUserChange} />

                    <FormControl component="fieldset" style={marginTop}>
                    </FormControl>
                   
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit'  variant='contained' color='primary' onClick={handleFormSubmit}>Login</Button>
                </form>
            </Paper>
        </Grid>

        // <div>
        //     <form id="addnewbook" >

        //         <label htmlFor='bookId'>Enter Mail</label><br></br>
        //         <input type="text" name='email' id="userEmail" value={user.email}
        //             onChange={handleUserChange}></input><br></br>



        //         <label htmlFor='bookId'>Enter User Password</label><br></br>
        //         <input type="password" name='password' id="userPassword" value={user.password}
        //             onChange={handleUserChange}></input><br></br><br></br>


        //         <button type='submit' id='sbmt' onClick={handleFormSubmit}>Submit</button>
        //     </form>
        // </div>
    )
}

export default Login;