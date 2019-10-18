/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import MUIContainer from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import Copyright from '../Utils/Copyright';
import Typography from '@material-ui/core/Typography';








const styles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


function Login(props){

const [ username, setUsername ] = useState('');
const [ password, setPassword ] = useState('');    

const classes = styles();

const handleSignin = () => {
  if(username === 'admin' && password === 'password') {
      localStorage.setItem('loggedIn', true);
      props.history.push('/dashboard');
  }
  else {
    toast.error("Username or password is incorrect");  
  }
}

return (
<Container bsPrefix="login-container">
   <div className="login-form-container">
   <MUIContainer component="main" maxWidth="xs">
   <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(event) => {setUsername(event.target.value);}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event) => { setPassword(event.target.value);}}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSignin}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </MUIContainer>
   </div>
</Container>)
}

export default withRouter(Login);
