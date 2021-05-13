import React from 'react'
import { FirebaseContext } from '../../firebase'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import background from '../../images/BG3.png'
import './style.css'

const useStyles = makeStyles(theme => ({
    root: {
        padding: '0px 4px',
        height: 'calc(100vh - 50px)',
        color: 'white',
        backgroundImage: `url(${background})`,
        backgroundSize:'100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        margin: 0
    },
    gridListRoot: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        width: 500,
        height: 450,
      },
    subTextStyle: {
        fontStyle: 'italic',
        fontWeight: 'lighter',
        textAlign: 'right',
        fontSize: '22px',
        marginTop: 0
    },
    divContainer:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        color: 'white',
        boxSizing: 'border-box',
        [theme.breakpoints.down('xs')] : {
            alignItems: 'center',
            padding: 0
        },
        paddingLeft: 24
    },
    logosContainer: {
        width: '80%',
        height: 400,
        minWidth: 250,
        margin: 'auto',
        [theme.breakpoints.down(500)] : {
            width: 285
        },
        [theme.breakpoints.up(500)] : {
            width: '85%'
        },
        [theme.breakpoints.up('md')] : {
            width: '75%',
        },
    },
    paper: {
        backgroundColor: 'gray',
        height: 180,
        width: 180
    }
}))

function Logo(props) {
    const classes = useStyles()
    const firebase = React.useContext(FirebaseContext)
    const [logos, setLogos] = React.useState(undefined)

    React.useEffect(() => {
        const local = localStorage.getItem('logos')
        if(!local) {
            firebase.getImageURL('logos').get().then(function(querySnapshot) {
                const images = []
                const storage = []
                querySnapshot.forEach(function(doc) {
                    images.push({name: doc.data().name, url: doc.data().url})
                    storage.push({name: doc.data().name, url: doc.data().url});
                })
                setLogos(images)
                localStorage.setItem('logos', JSON.stringify(storage));
            })
        }
        else {
            console.log(JSON.parse(local));
            setLogos(JSON.parse(local))
        }
    }, [])

   
    return (
        <div className={classes.root}>
            <Grid
              container
              spacing={1}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              alignContent="stretch"
              wrap="wrap"
            >
                <Grid item xs={12}>
                    <div className={classes.divContainer}>
                        <Typography variant="h4" color="initial">
                            <span style={{fontFamily: "initial"}}>LOGO</span>
                            <p className={classes.subTextStyle} >
                                Projets
                            </p>
                        </Typography>
                    </div>
                </Grid>

                <Grid item xs={12}
                >
                    <div className={classes.logosContainer}>
                        
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Logo
