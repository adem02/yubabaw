import { Avatar, Hidden, List, ListItem, ListItemAvatar, makeStyles } from '@material-ui/core'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import popo from '../../images/popo.png'
import whatAbout from '../../images/what-about-me.png'
import photoshop from '../../images/photoshop.png'
import xd from '../../images/xd.png'
import illustrator from '../../images/illustrator.png'
import logoSouche from '../../images/logoSouche.png'

const useStyles = makeStyles( (theme) => ({
  root: {
    flexGrow: 1,
    padding: 8
  },

  whatAboutContainer: {
    width: '100%',
    height: 80,
    display: 'flex', 
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
    }
  },

  whatAboutImage: {
    maxHeight: '100%',
    maxWidth: 440,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 250,
      maxHeight: 70
    }
  },

  popoContainer: {
    objectFit: 'fill',
    width:190,
    height: 400,
    margin: '10px 0',
    [theme.breakpoints.down('xs')]: {
      objectFit: 'fill',
      width:160,
      height: 300,
      margin: '10px 0',
    },
  },

  popoImage: {
    maxWidth: '100%',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      border: '1px solid gray'
    },
  },

  item: {
    display: 'flex',
    justifyContent: 'center'
  },

  gridContainer: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse'
    },
  },

  textStyle: {
    color: '#FAA5AC',
    fontFamily: "'Dancing Script', sans-serif",
    fontSize: '1.6em',
    textAlign: 'justify'
  },

  iconsStyle: {
    width: 60,
    height: 60
  },

  mainContent: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    margin: 'auto'
  },

  ul: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  
  whatAboutGridItem: {
    height: 100,
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      marginBottom: 40
    },
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
      margin: '5px auto'
    }, 
  },

  mainContentGridItem: {
    marginTop: '-40px',
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
      marginTop: 0,
    },
  },

  yubabawIcon: {
    height: 50,
    width: '90%',
    display: 'flex',
    justifyContent:'flex-end',
    marginTop: '-50px',
    [theme.breakpoints.down('sm')]: {
      justifyContent:'center',
      marginTop: 0,
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent:'flex-end',
      marginTop: 0
    }
  },

  displayPopoSm: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexBasis: '100%',
      justifyContent: 'center'
    }
  }

}))

function About() {
    const classes = useStyles()

    return (
      <div className={classes.root}>
        <Grid container spacing={1}>

          <Grid container item xs={12} md={9} sm={8}>

            <Grid item xs={12} classes={{item: classes.whatAboutGridItem}}>
              <div className={classes.whatAboutContainer}>
                <img alt='what about' src={whatAbout} className={classes.whatAboutImage}/>
              </div>
            </Grid>

            <Grid item xs={12} className={classes.displayPopoSm}>
              <div className={classes.popoContainer}>
                <img alt='what about' src={popo} className={classes.popoImage}/>
              </div>
            </Grid>

            <Grid item md={12} classes={{item: classes.mainContentGridItem}}>
              <div className={classes.mainContent}>
                <Hidden smDown implementation='css'>
                  <List classes={{root: classes.ul}}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar variant='square' alt='illutrator' src={illustrator} />
                      </ListItemAvatar>
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar variant='square' alt='xd' src={xd} />
                      </ListItemAvatar>
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar variant='square' alt='photoshop' src={photoshop} />
                      </ListItemAvatar>
                    </ListItem>
                  </List>
                </Hidden>
                <p className={classes.textStyle}>
                  Je m'appelle Pauline, j'ai 25 ans et je débute dans le webdesign, 
                  je dessine je dessine sur papier depuis que je sais tenir un crayon, 
                  mais j'ai commencé avec la tablette il y a peu. Je débute dans le webdesign aussi. 
                  J'ai toujours aimé l'univers du design et vous découvrirez mon nouveau challenge sur ce portfolio.<br />
                  Je suis ouverte à toute proposition professionnelle, 
                  alors n'hésite pas à me soumettre tes idées et/ou projet dans l'onglet "Contact" du menu. <br />
                  <small style={{fontSize: '16px'}}>Site développé par Ahmed DEM</small>
                </p>
              </div>
            </Grid>
            
          </Grid>

          <Hidden xsDown implementation="css">
            <Grid item xs={12} sm={4} md={3}>
              <div className={classes.popoContainer}>
                <img alt='what about' src={popo} className={classes.popoImage}/>
              </div>
            </Grid>
          </Hidden>

          <Grid item xs={12} sm={9}>
            <div className={classes.yubabawIcon}>
                <img src={logoSouche} width='90px' alt='Logo Souche' />
            </div>
          </Grid>

        </Grid>
      </div>
    )
}

export default About
