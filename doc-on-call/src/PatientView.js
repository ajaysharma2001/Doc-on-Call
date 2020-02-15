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
    width: 700,
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
          style={{ margin: 8 }}
          placeholder=""
          fullWidth
          margin="dense"
        />
        <TextField
          label="Date of Birth"
          id="margin-none"
          defaultValue=""
          margin="dense"
          className={classes.textField}
        />
        <TextField
          label="Gender"
          id="margin-dense"
          defaultValue=""
          className={classes.textField}
          margin="dense"
        />
        <TextField
          label="Have you used Doc On Call before?"
          id="margin-normal"
          defaultValue=""
          className={classes.textField}
          margin="dense"
        />
      </div>
      <div>
        <TextField
          id="filled-full-width"
          label="What brought you in today"
          style={{ margin: 8 }}
          placeholder="What is your current issue?"
          helperText=" "
          fullWidth
          margin="dense"
          variant="filled"
        />
        <TextField
          label="Telephone"
          id="filled-margin-none"
          placeholder="647-"
          className={classes.textField}
          helperText=" "
          margin="dense"
          variant="filled"
        />
        <br />
        <TextField
          label="Is there anything you would like us to know in terms of your medical history"
          id="filled-margin-normal"
          placeholder="Nothing"
          className={classes.textField}
          helperText=" "
          margin="dense"
          variant="filled"
        />
         <TextField
          id="filled-full-width"
          label="What languages do you prefer your doctor spoke"
          style={{ margin: 8 }}
          placeholder="English"
          helperText=" "
          fullWidth
          margin="dense"
          variant="filled"
        />
      </div>
      <br />
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

