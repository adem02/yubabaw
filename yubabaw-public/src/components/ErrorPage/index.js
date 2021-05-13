import { makeStyles } from '@material-ui/styles'
import React from 'react'
import error from '../../images/error-404.png'

const useStyles = makeStyles({
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        display: 'block',
        width: '560px',
        height: '330'
    }
})

function Error() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <img className={classes.image} src={error} alt='ERROR 404 NOT FOUND'/>
        </div>
    )
}

export default Error
