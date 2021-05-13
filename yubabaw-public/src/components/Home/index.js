import { makeStyles, Grid, Typography } from '@material-ui/core'
import React from 'react'
import background from '../../images/BG2.png'
import backgroundDessin from '../../images/bg-dessin-1-resize.png'
import backgroundLogo from '../../images/bg-logo-1-resize.png'
import backgroundWeb from '../../images/bg-webdesign-1-resiz.png'
import classNames from 'classnames'

const useStyles = makeStyles( (theme) => ({
    root: {
        height: 'calc(100vh - 50px)',
        color: 'white',
        backgroundImage: `url(${background})`,
        backgroundSize:'100%',
        [theme.breakpoints.up('md')] : {
            backgroundSize: 'contain',
        },
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'transparent',
        objectFit: 'cover',
        margin: 0
    },
    gridItem: {
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100vh - 50px)'
        },
        [theme.breakpoints.down('xs')]: {
            height: 'calc((100vh - 50px) / 3)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: '0.5s'
        
    },
    designHover: {
        '&:hover': {
            [theme.breakpoints.down('xs')]: {
                height: 'calc((100vh - 50px) / 2)'
            },
            height: 'calc(100vh - 50px)',
            backgroundImage: `url(${backgroundDessin})`,
            backgroundSize:'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'transparent',
            objectFit: 'cover',
            opacity: 0.78
        }
    },
    logoHover: {
        '&:hover': {
            [theme.breakpoints.down('xs')]: {
                height: 'calc((100vh - 50px) / 2)',
            },
            height: 'calc(100vh - 50px)',
            backgroundImage: `url(${backgroundLogo})`,
            backgroundSize:'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'transparent',
            objectFit: 'cover',
            opacity: 0.8
        }
    },
    webHover: {
        '&:hover': {
            [theme.breakpoints.down('xs')]: {
                height: 'calc((100vh - 50px) / 2)',
            },
            height: 'calc(100vh - 50px)',
            backgroundImage: `url(${backgroundWeb})`,
            backgroundSize:'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'transparent',
            objectFit: 'cover',
            opacity: 0.8
        }
    },
    divContainer:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white'
    },
    subTextStyle: {
        fontStyle: 'italic',
        fontWeight: 'lighter',
        textAlign: 'right',
        fontSize: '22px',
        marginTop: 0
    }
}))

function Home(props) {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid className={classNames(classes.gridItem, classes.designHover)} item sm={4} xs={12}>
                    <div className={classes.divContainer}>
                        <Typography variant="h4" color="initial">
                            DESSIN
                            <p className={classes.subTextStyle} >
                                Ps, AI
                            </p>
                        </Typography>
                    </div>
                </Grid>
                <Grid className={classNames(classes.gridItem, classes.logoHover)} item sm={4} xs={12}>
                    <div className={classes.divContainer}>
                        <Typography variant="h4" color="initial">
                            LOGO
                            <p className={classes.subTextStyle}>
                                Projets
                            </p>
                        </Typography>
                    </div>
                </Grid>
                <Grid className={classNames(classes.gridItem, classes.webHover)} item sm={4} xs={12}>
                    <div className={classes.divContainer}>
                        <Typography variant="h4" color="initial">
                            WEBDESIGN
                            <p className={classes.subTextStyle}>
                                Projets
                            </p>
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home
