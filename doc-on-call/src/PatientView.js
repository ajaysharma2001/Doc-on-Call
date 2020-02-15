import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import './Button.css';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: window.screen.width/2.055,
  },
  Button: {
    borderRadius: '20px'
  }
}))

export default function PatientView() {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');
  const handleChange = event => {
    setValue(event.target.value);
  }
  return (

    <div className={classes.root}>
    <div>
      <div>
        <TextField
          id="standard-full-width"
          label="Name"
          placeholder=""
          className={classes.textField}
          margin="dense"
          variant="filled"
        />
        <TextField
          label="Date of Birth"
          id="margin-none"
          defaultValue=""
          margin="dense"
          fullWidth
          className={classes.textField}
          variant="filled"
        />
        <TextField
          label="Gender"
          id="margin-dense"
          defaultValue=""
          className={classes.textField}
          fullWidth
          margin="dense"
          variant="filled"
        />
        <TextField
          label="Telephone Number"
          id="margin-none"
          placeholder="(647)"
          margin="dense"
          fullWidth
          className={classes.textField}
          variant="filled"
        />
        <TextField
          id="standard-full-width"
          label="Is there anything you would like us to know about your medical history?"
          placeholder="N/A"
          className={classes.textField}
          margin="dense"
          variant="filled"
        />
        <TextField
          label="Have you used Doc On Call before?"
          id="margin-normal"
          defaultValue=""
          className={classes.textField}
          margin="dense"
          variant="filled"
        />
        <TextField
          id="filled-full-width"
          label="What brought you in today?"
          placeholder="What is your current issue?"
          helperText=" "
          className={classes.textField}
          margin="dense"
          variant="filled"
        />
         <TextField
          id="filled-full-width"
          label="What languages are you comfortable with?"
          placeholder="English"
          helperText=" "
          className={classes.textField}
          margin="dense"
          variant="filled"
        />
      </div>
      <div class = "Button">
      <form action="./VideoPatient">
      <Button type="submit" variant="outlined" color="secondary">
      Submit
      </Button>
      </form>
      </div>
      <br />
    </div>
      </div>


  )
}

