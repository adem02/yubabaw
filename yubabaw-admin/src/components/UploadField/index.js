import { Button, CircularProgress, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { CloudUpload, Check, Save } from '@material-ui/icons';
import { FirebaseContext } from '../../firebase';
import Fab from '@material-ui/core/Fab';
import clsx from 'clsx';
import { green } from '@material-ui/core/colors';
import './style.css'

const useStyles = makeStyles(theme =>({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        display: 'none'
    },
    buttonRoot: {
        width: 120,
        padding: '5px 15px',
        margin: '5px',
        boxSizing: 'content-box',
        borderRadius: 9,
        border: '2px solid #4A6EC4'
    },
    saveRoot: {
        display: 'flex',
        alignItems: 'center',
      },
      wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
      },
      buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
          backgroundColor: green[700],
        },
      },
      fabProgress: {
        color: green[500],
        position: 'absolute',
        top: 2,
        left: 2,
        zIndex: 1,
      },
      buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
      },
}))

const Upload = props => {
    const { fileRef } = props
    const classes = useStyles()
    const [image, setImage] = useState(undefined)
    const firebase = React.useContext(FirebaseContext)
    const [loading, setLoading] = React.useState(false)
    const [success, setSuccess] = React.useState(false)

    const buttonClassname = clsx({
        [classes.buttonSuccess]: success,
      });
    

    const handleChange = e => {
        setImage(e.target.files[0])
        setSuccess(false)
    }

    const handleClick = (image) => {
    
        const { name } = image
        setSuccess(false);
        setLoading(true);
        
        const uploadTask = firebase.upload(`images/${fileRef}/${name}`).put(image)

        uploadTask.on('state_changed',
            () => {
            }, 
            (error) => {
            switch (error.code) {
                case 'storage/unauthorized':
                console.log(error.code);
                break;
            
                case 'storage/canceled':
                console.log(error.code);
                break;
            
                case 'storage/unknown':
                console.log(error.code);
                break;
                default: console.log(error.code);
            }
            }, 
            () => {
                setLoading(false);
                setSuccess(true);
                setTimeout(() => {
                    setImage(null)
                    setSuccess(false);
                }, 3000)
                firebase.download(`images/${fileRef}/${name}`).getDownloadURL()
                .then(url => {
                    firebase.setImageURL(fileRef).add({
                        url,
                        name
                    })
                    .catch(error => {
                        console.log(error);
                    })
                })
                .catch(error => {
                    console.log(error);
                })
            }
        )
    }

    const saveButton = image ? 
    (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Fab
                aria-label="save"
                color="primary"
                className={buttonClassname}
                onClick={() => handleClick(image)}
                >
                {success ? <Check /> : <Save/>}
                </Fab>
                {loading && <CircularProgress size={50} className={classes.fabProgress} />}
            </div>
        </div>
    ) :
    (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Fab
                aria-label="save"
                color="primary"
                className={buttonClassname}
                disabled
                >
                {success ? <Check /> : <Save/>}
                </Fab>
                {loading && <CircularProgress size={50} className={classes.fabProgress} />}
            </div>
        </div>
    )

    return (
        <div className={classes.root}>

            <div>
                <input 
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={handleChange}
                />
                <label htmlFor="contained-button-file">
                    <Button variant='outlined' component='span' startIcon={<CloudUpload />} classes={{root: classes.buttonRoot}}>
                        Importer
                    </Button>
                </label>
            </div>
            {saveButton}
        </div>
    )
}

export default Upload
