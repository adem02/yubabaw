import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/styles'
import { IconButton, Typography } from '@material-ui/core'
import { Close } from '@material-ui/icons'


const useStyles = makeStyles( (theme) => ({
    paperDrawer: {
        backgroundColor: '#1d1b1b',
        boxSizing: 'border-box',
        padding: '15px 25px',
        color: 'white'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    drawer: {
        width: 240
    },
    formStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        margin: '40px auto'
    },
    chevronStyle: {
        color: 'white'
    },
    dividerLight: {
    backgroundColor: 'gray'
    },
    labelStyle: {
        width: '100%',
        margin: '10px 0'
    },
    inputStyle: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#474747',
        color: '#A7A7A7',
        fontFamily: "'Lato', sans-serif",
        fontWeight: 'lighter',
        border: 'none',
        boxSizing: 'border-box',
        fontSize: '17px'
    },
    // textAreaStyle: {
    //     width: '100%',
    //     backgroundColor: '#474747',
    //     color: '#A7A7A7',
    //     padding: '10px',
    //     border: 'none',
    //     fontWeight: 'lighter',
    //     fontFamily: "'Lato', sans-serif",
    //     boxSizing: 'border-box',
    //     fontSize: '22px'

    // }
    buttonStyle: {
        padding: '8px 23px',
        border: "1px solid #DADADA",
        backgroundColor: 'transparent'
    },
    textStyle : {
        fontFamily: "'Lato', sans-serif",
        color: '#DADADA'
    },
    iconButtonStyle: {
        margin: '0 -15px 0 0'
        
    }
}))

function Contact(props) {

    const classes = useStyles()

    const { openContactDrawer, handleDrawerClose } = props
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handleContactChange = e => {
        setMessage(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const contactForm = (
        <form className={classes.formStyle}>
            <label className={classes.labelStyle}>
                <input 
                    value={email} 
                    type='mail' 
                    onChange={handleEmailChange} 
                    className={classes.inputStyle}
                    placeholder='votre adresse email'
                />
            </label>

            <label className={classes.labelStyle}>
                <textarea 
                    value={message} 
                    type='text' 
                    onChange={handleContactChange} 
                    className={classes.inputStyle}
                    placeholder="Ecrivez moi ! une idée ? la description de votre projet ?"
                    rows="8"
                />
            </label>

            <div>
                <button type='submit' className={classes.buttonStyle} onClick={handleSubmit}>Envoyer</button>
            </div>
        </form>
    )

    const drawer = (
        <div className={classes.drawer}>
            <div className={classes.drawerHeader}>
                <Typography variant='h5' className={classes.textStyle}>On prend contact ? </Typography>
                <IconButton onClick={handleDrawerClose} className={classes.iconButtonStyle}>
                    <Close classes={{root: classes.chevronStyle}}/>
                </IconButton>
            </div>
            {contactForm}
        </div>
    )

    return (
        <Drawer
          variant="persistent"
          anchor="right"
          open={openContactDrawer}
          classes={{paper: classes.paperDrawer}}
        >
            {drawer}
        </Drawer>
    )
}

export default Contact
