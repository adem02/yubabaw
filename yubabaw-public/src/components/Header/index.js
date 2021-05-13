import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import './style.css'
import Drawer from '../Drawer'
import { withRouter } from 'react-router-dom';
import Contact from '../Contact';

const useStyles = makeStyles((theme) => ({
    root: { 
        flexGrow: 1,
        color: 'white'
    },
    iconGrow: {
        flexGrow: 1
    },
    titleFont: {
        fontFamily: "'Lato', sans-serif",
        cursor: 'pointer',
        fontVariant: 'small-caps'
    }
}))

function Header(props) {
    const classes = useStyles()
    const [openDrawer, setOpenDrawer] = useState(false)
    const [openContactDrawer, setOpenContactDrawer] = useState(false)

    const { history }  = props

    const handleDrawerOpen = () => {
        setOpenDrawer(!openDrawer)
    };

    const navigateTo = (route) => {
        setOpenDrawer(!openDrawer)
        history.push(`/${route}`)
    }

    const handleContactDrawerOpen = () => {
        setOpenDrawer(!openDrawer);
        setOpenContactDrawer(!openContactDrawer)
    }

    const handleDrawerClose = () => {
        setOpenContactDrawer(!openContactDrawer)
    }

    return (
        <>
            <AppBar position="sticky" color="transparent" className={classes.root}>
                <Toolbar>
                    <Typography variant="body1" className={classes.titleFont} onClick={() => history.push('/')}>
                        yubabaw
                    </Typography>
                    <div className={classes.iconGrow}/>
                    <IconButton onClick={handleDrawerOpen}
                    edge='start'
                    color="inherit"
                    aria-label="open drawer"
                    size='medium'
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer handleDrawerOpen={handleDrawerOpen} openDrawer={openDrawer} navigateTo={navigateTo} handleContactDrawerOpen={handleContactDrawerOpen}/>
            <Contact openContactDrawer={openContactDrawer} handleDrawerClose={handleDrawerClose}/>
        </>
    )
}

export default withRouter(Header)
