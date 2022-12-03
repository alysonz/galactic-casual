import React, { useState } from 'react';
import { makeStyles } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data (e.g. send to an API or database)
    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <TextField
        label="Name"
        className={classes.textField}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Email"
        className={classes.textField}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Message"
        multiline
        rows={4}
        className={classes.textField}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        type="submit"
      >
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
