import React, { useState, useContext, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './style.css'
import { FirebaseContext } from '../../firebase';
import { withRouter } from 'react-router-dom'



const useStyles = makeStyles({
    root: {
        height: '55px',
        color: 'red',
        margin: 0
    },
    toolBarRoot: {
        justifyContent: 'center',
        minHeight: '100%'
    },
    headerFont: {
        fontFamily: "'Georgia', sans-serif"
    },
    typoRoot: {
      margin: 'auto'
    }
})

const Header = () => {

  const classes = useStyles()

  const [loggedIn, setLoggedIn] = useState(false)

  const firebase = useContext(FirebaseContext)

  useEffect(() => {
    let listenner = firebase.auth.onAuthStateChanged(user => {
      if(user)
        setLoggedIn(true);
      else setLoggedIn(false)
    })
    return () => {
      listenner()
    }
  }, [firebase, loggedIn, setLoggedIn])

  const handleChange = () => {
    firebase.logOut()
  }

  return (
      <AppBar position="static" color="transparent" classes={{root: classes.root}}>
        <Toolbar classes={{regular: classes.toolBarRoot}}>
          <Typography variant="h6" className={classes.headerFont} classes={{root: classes.typoRoot}}>
            YUBABAW - ADMIN
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={loggedIn} onChange={() => handleChange()}/>}
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
  )
}

export default withRouter(Header)
