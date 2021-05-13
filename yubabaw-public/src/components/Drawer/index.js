import React from 'react'
import {Drawer as MuiDrawer, List, ListItem, ListItemText, Divider} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import logoSouche from '../../images/logoSouche.png'

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 220,
        height: '100%',
        position: 'relative'
    },
    toolbar: {
        height: '50px'
    },
    listItemText: {
        textAlign: 'right'
    },
    paperDrawer: {
        backgroundColor: '#1d1b1b'
    },
    primary: {
        color: 'white'
    },
    dividerLight: {
        backgroundColor: 'gray'
    },
    listItemStyle: {
        margin: '20px 0'
    },
    drawerIcon: {
        height: 35,
        width: 75,
        position: 'absolute',
        bottom: 20,
        right: 16
    },
    '@media only screen and (max-height: 510px)': {
        drawerIcon: {
            display: 'none'
        }
    }
}))

function Drawer(props) {
    const classes = useStyles()


    const { navigateTo, handleContactDrawerOpen } = props;

    const firstItemList = [
        {
            text: 'Dessin',
            onclick: () => navigateTo('dessin')
        },
        {
            text: 'Logo',
            onclick: () => navigateTo('logo')
        },
        {
            text: 'Web Design',
            onclick: () => navigateTo('design')
        }
    ]

    const secondItemList = [
        {
            text: 'About',
            onclick: () => navigateTo('about')
        },
        {
            text: 'Contact',
            onclick: () => handleContactDrawerOpen()
        }
    ]

    const drawer = (
        <div className={classes.drawer}>
            <div className={classes.toolbar} />
            <Divider light classes={{light: classes.dividerLight}} />
            <List>
                {firstItemList.map((item) => {
                    const {text, onclick} = item
                    return (
                    <ListItem button key={text} className={classes.listItemStyle} onClick={onclick}>
                        <ListItemText classes={{primary: classes.primary}} primary={text} className={classes.listItemText}/>
                    </ListItem> 
                )})}
            </List>
            <Divider light classes={{light: classes.dividerLight}} />
            <List>
                {secondItemList.map((item) => {
                    const {text, onclick} = item
                    return (
                        <ListItem button key={text} className={classes.listItemStyle} onClick={onclick}>
                            <ListItemText classes={{primary: classes.primary}} primary={text} className={classes.listItemText}/>
                        </ListItem>
                )})}
            </List>
            
            <div className={classes.drawerIcon}>
                <img src={logoSouche} width='100%' alt='Logo Souche' />
            </div>
        </div>
    )
    
    return (
        <div>
            <MuiDrawer
              variant="temporary"
              anchor="right"
              open={props.openDrawer}
              onClose={props.handleDrawerOpen}
              ModalProps={{keepMounted: true}}
              classes={{paper: classes.paperDrawer}}
            >
                {drawer}
            </MuiDrawer>
        </div>
    )
}

export default Drawer
