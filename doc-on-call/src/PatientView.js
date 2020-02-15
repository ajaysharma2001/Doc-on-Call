import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 700,
  },
}))

export default function PatientView() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <div>
     <TextField
          label="None"
          id="margin-none"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
        />
        </div>
        <div>
        <TextField
          label="None"
          id="margin-none"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
        />
        </div>
        <div>
     <TextField
          label="None"
          id="margin-none"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
        />
        </div>
        <div>
        <TextField
          label="None"
          id="margin-none"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
        />
        </div>
        <div>
     <TextField
          label="None"
          id="margin-none"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
        />
        </div>
        <div>
        <TextField
          label="None"
          id="margin-none"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
        />
        </div>
    </div>


  )
}

const headerStyle = {
    background: '#267',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    fontFamily: 'Hevatica',
    fontSize: "22px",
  }