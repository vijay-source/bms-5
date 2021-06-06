import React, { Component, useState, useContext } from "react";
import BookList from "./booklist";
import { Route, Link, HashRouter, useHistory } from "react-router-dom";
import { BookContext } from '../Context/BookContext'
import { addRegistration } from "../services/service";
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';


const Register = (props: any) =>
 { 

        
  const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
  const headerStyle = { margin: 0 }
  const marginTop = { marginTop: 5 }

  
      const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    }
  )


  
    const { dispatch } = useContext(BookContext);
    const history = useHistory();
    function handleUserChange(event: any) {
        setUser({ ...user, [event.target.name]: event.target.value });
    }


    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        console.log(user)
        addRegistration(dispatch, user);
        history.push('/');
    }

    return (
       
<Grid container justify='center'>
            <Paper elevation={20} style={paperStyle}>
                <h2 style={headerStyle}>Sign Up</h2>
                <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>

                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name"
                     name="name"
                        value={user.name}
                        onChange={handleUserChange} />
                         <TextField fullWidth label='Email' placeholder="Enter your email"
                     name="email"
                        value={user.email}
                        onChange={handleUserChange} />

                    <TextField fullWidth label='Password' type='password' placeholder="Enter your password"
                     name="password"
                        value={user.password}
                        onChange={handleUserChange} />

                    <FormControl component="fieldset" style={marginTop}>
                    </FormControl>
                   
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit'  variant='contained' color='primary' onClick={handleFormSubmit}>Sign up</Button>
                </form>
            </Paper>
        </Grid>


    )
}

export default Register;


