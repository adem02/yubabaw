import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import {AccountCircle, Lock} from '@material-ui/icons'
import { Button } from '@material-ui/core'
import { FirebaseContext } from '../../firebase'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formControl: {
    maxWidth: 250,
    margin: theme.spacing(1),
  },
}));

const Auth = (props) => {
  const classes = useStyles();
  const { history } = props;
  const firebase = React.useContext(FirebaseContext)

  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handlePwdChange = e => {
    setPwd(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    firebase.signIn(email, pwd)
    .then(() => {
      history.push('/menu')
    })
    .catch(error => {
      console.log(error);
    })
  }

  React.useEffect(() => {
    let listenner = firebase.auth.onAuthStateChanged(user => {
      if(user) {
        history.push('/menu')
      }
    })
    return () => {
      listenner()
    };
  }, [firebase, history])
 
  const submitButton = email && (pwd.length > 12) ? 
  (
    <Button variant="contained" color="primary" type='submit'>
      Connectes-toi
    </Button>
  ) :
  (
    <Button variant="contained" color="primary" disabled>
      Connectes-toi
    </Button>
  )

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl className={classes.formControl}>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={handleEmailChange}
          value={email}
          autoComplete="username"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Mot de passe</InputLabel>
        <Input
          value={pwd}
          onChange={handlePwdChange}
          type='password'
          autoComplete="current-password"
          startAdornment={
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          }
        />
      </FormControl>

      {submitButton}
    </form>
  );
}

export default Auth