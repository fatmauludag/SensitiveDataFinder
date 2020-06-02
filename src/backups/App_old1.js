// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import Box from '@material-ui/core/Box';
// //import PetsIcon from '@material-ui/icons/Pets';//import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';



/*const tileData = [
  {
    title: 'Breakfast',
    author: 'jill111',
    featured: true,
    description: 'Breakfast Post'
  },
  {
    title: 'Tasty burger',
    author: 'director90',
    featured: true,
    description: 'Tasty burger Post'
  },
  {
    title: 'Camera',
    author: 'Danson67',
    featured: true,
    description: 'Camera Post'
  },
  {
    title: 'Morning',
    author: 'fancycrave1',
    featured: true,
    description: 'Morning Post'
  }
];

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

export default function SignIn() {
const classes = useStyles();
 
const onClicked = () => {
  alert('Bastın')
}
return (
  <Container component="main" maxWidth="xs" className="main-container">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        {<PetsIcon />}
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
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile key={tile.title} cols={tile.cols || 1}>
              <p onClick={() => onClicked()}>{tile.description}</p>
            </GridListTile>
          ))}
        </GridList>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
    <Box mt={8}>
      <Copyright />
    </Box>
  </Container>
);
}

export default class MyForm extends React.Component {
constructor() {
  super();
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  
  fetch('/api/form-submit-url', {
    method: 'POST',
    body: data,
  });
}

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label htmlFor="dataname">Enter dataname</label>
      <input id="dataname" name="dataname" type="text" />

      <label htmlFor="dataType">Enter your dataType</label>
      <input id="dataType" name="dataType" type="text" />

      <label htmlFor="categoryType">Enter your categoryType</label>
      <input id="categoryType" name="categoryType" type="text" />

      <label htmlFor="PersonalDataType">Enter your PersonalDataType</label>
      <input id="PersonalDataType" name="PersonalDataType" type="text" />

      <label htmlFor="RegexCode">Enter your RegexCode</label>
      <input id="RegexCode" name="RegexCode" type="text" />

      <label htmlFor="RegexCodeDescription">Enter your RegexCodeDescription</label>
      <input id="RegexCodeDescription" name="RegexCodeDescription" type="text" />

      <button>Send data!</button>
    </form>
  );
}
}*/

import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, FormRow } from '@material-ui/core';
import './App.css';

export default class App extends Component {

  //state
  //input onChange state update edeceksin
  //sendData onClickte fetch ile kendi apini çağıracaksın 
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItem: 'center' }}>
        <div className="container">
          <label>Enter dataname</label>
          <input/>
        </div>

        <div className="container">
          <label>Enter your dataType</label>
          <input />
        </div>

        <div className="container">
          <label>Enter your categoryType</label>
          <input />
        </div>
        <div className="container">
          <label className="text-white">Enter your PersonalDataType</label>
          <input />
        </div>
        <div className="container">
          <label>Enter your RegexCode</label>
          <input />
        </div>
        <div className="container">
          <label>Enter your RegexCodeDescription</label>
          <input />
        </div>
        <button style={{ width: 500 }}>Send data!</button>

      </div>
    );
  }
}