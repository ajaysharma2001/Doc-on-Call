import React from 'react';
import './DoctorView.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Button from 'react-bootstrap/Button';
import Dashboard from './Dashboard/Dashboard'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Doc on Call
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',

  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  },
}));

export default function DoctorView() {
  const classes = useStyles();

  return (
    <div class = "Center">
      <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
      <div>
        <Typography variant="h2" component="h1" gutterBottom>
          Hi Mr. Shah,
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Click the button to start receiving patient calls'}
        </Typography>
        <form action="./VideoPatient">
        <Button type ="submit" variant ="primary" size ="lg" block>
          Connect
          </Button>
          </form>
        </div>
      </Container>
        
        

    </div>
    </div>
    
  );
}