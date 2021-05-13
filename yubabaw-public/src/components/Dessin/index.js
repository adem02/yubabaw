import React from 'react'
import { FirebaseContext } from '../../firebase'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import background from '../../images/BG2.png'
import './style.css'
import DessinsGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const useStyles = makeStyles(theme =>({
    root: {
        padding: '0px 4px',
        height: 'calc(100vh - 50px)',
        color: 'white',
        backgroundImage: `url(${background})`,
        backgroundSize:'90%',
        [theme.breakpoints.down('sm')] : {
            backgroundSize: '95% 100%',
        },
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        margin: 0
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
    dessinsContainer: {
        width: '80%',
        height: 400,
        minWidth: 250,
        margin: 'auto',
        [theme.breakpoints.down(500)] : {
            width: '100%'
        },
        [theme.breakpoints.up(500)] : {
            width: '85%'
        },
        [theme.breakpoints.up('md')] : {
            width: '75%',
        },
    },
    caroussel: {
        height: 280,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'gray'
    },
    imageContent: {
        height: 280, 
        [theme.breakpoints.down(500)] : {
            width: '100%'
        },
        [theme.breakpoints.up(500)] : {
            width: 320
        },
        [theme.breakpoints.up('md')] : {
            width: 320,
        },
    }
}))

function Dessin(props) {
    const [dessins, setDessins] = React.useState(undefined)
    const classes = useStyles()
    const firebase = React.useContext(FirebaseContext)


    React.useEffect(() => {
        const local = localStorage.getItem('dessins')
        if(!local) {
            firebase.getImageURL('dessins').get().then(function(querySnapshot) {
                const images = []
                const storage = []
                querySnapshot.forEach(function(doc) {
                    images.push({original: `${doc.data().url}`, thumbnail: `${doc.data().url}`})
                    storage.push({original: `${doc.data().url}`, thumbnail: `${doc.data().url}`});
                })
                setDessins(images);
                // setDessins()
                localStorage.setItem('dessins', JSON.stringify(storage));
            })
        }
        else {
            console.log(JSON.parse(local));
            setDessins(JSON.parse(local))
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
                            <span style={{fontFamily: "initial"}}>DESSIN</span>
                            <p className={classes.subTextStyle} >
                                Ps, AI
                            </p>
                        </Typography>
                    </div>
                </Grid>

                <Grid item xs={12}>
                    <div className={classes.dessinsContainer}>
                        {
                            dessins && 
                            <DessinsGallery 
                                items={dessins}
                            />
                        }
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dessin
