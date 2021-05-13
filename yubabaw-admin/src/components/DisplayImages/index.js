import React from 'react'
import { makeStyles, 
         CircularProgress, 
         Grid, 
         Paper 
        } from '@material-ui/core'
import { Close } from '@material-ui/icons'

const useStyles = makeStyles( theme =>({
    root: {
        maxHeight: 260,
        margin: '20px auto',
        padding: 4,
        overflow: 'auto',
        [theme.breakpoints.up('sm')]: {
        width: '90%'
        },
        [theme.breakpoints.up('md')]: {
        width: '75%'
        }
    },
    iconRoot: {
        position: 'absolute',
        right: 3,
        fontSize: '2rem',
        color: 'red',
        cursor: 'pointer'
    },
}))

const DisplayImages = (props) => {
    const classes = useStyles()
    const {data, handleClick, fileRef} = props

    const getImage = (image) => {
        return (
          <Grid item xs={4} sm={3} key={image.id} style={{position: 'relative'}}>
            <Close classes={{root: classes.iconRoot}} onClick={() => handleClick(image, fileRef)}/>
            <Paper>
              <img src={image.url} alt="" id={image.name} heigh='100%' width='100%' style={{minHeight: '150px'}}/>
            </Paper>
          </Grid>
        )
      }

    return (
        <div className={classes.root}>
            <div className={classes.gridRoot}>
                { data ? 
                    (
                    <Grid container spacing={1}>
                    {data.map((image) => getImage(image))}
                    </Grid>
                    ) :
                    (
                    <div style={{height: 200, display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                        <CircularProgress />
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default DisplayImages
