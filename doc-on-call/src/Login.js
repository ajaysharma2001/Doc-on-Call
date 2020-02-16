import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './Login.css';
import './header.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    margin: 0,
    marginTop: -55,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: -25,
	borderRadius: '25px'
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex-inline',
  },
  boxes: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    flexWrap: 'wrap',
    width: '85%',
  },
  leftbox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 50,
  },
  rightbox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -34,
  },
  forgot: {
    marginTop: theme.spacing(-3),
    textAlign: 'center',
  },
  bottom: {
    alignContent: 'center',
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}><LockOutlinedIcon /></Avatar>
        <Typography component="h1" variant="h5">Welcome!</Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
        </form>
      </div>  
      <div className = {classes.boxes}>
        <div className = {classes.leftbox}>
          <form action='./PatientView'><Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Sign In<br></br>(Patient)</Button></form>
        </div>
        <div className = {classes.rightbox}>
          <form action='./DoctorView'><Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Sign In<br></br>(Doctor)</Button></form>
        </div>
      </div>
         
      <div className={classes.forgot}>
          <Grid container><Grid item xs><Link href="#" variant="body2">Forgot password?</Link><br></br><Link href="#" variant = "body2">Don't have an account? Sign Up</Link></Grid></Grid>
      </div>
    </Container>
  );
}