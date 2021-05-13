import React from 'react'
import Upload from '../UploadField'
import { makeStyles } from '@material-ui/core'
import DisplayImages from '../DisplayImages'


const useStyles = makeStyles( theme => ({
    root: {
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexGrow: 1
    }
  }))

const fileRef = 'logos'

const Logo = props => {
    const classes = useStyles()
    const {logos, deleteImage} = props

    return (
        <div className={classes.root}>
            <DisplayImages data={logos} handleClick={deleteImage} fileRef={fileRef}/>
            <Upload fileRef={fileRef}/>
        </div>
    )
}

export default Logo
