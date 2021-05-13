import React from 'react'
import Upload from '../UploadField'
import { makeStyles } from '@material-ui/core'
import DisplayImages from '../DisplayImages';

const useStyles = makeStyles( theme => ({
  root: {
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1
  }
}))

const fileRef = 'dessins'

const Dessin = props => {
  const {dessins, deleteImage} = props
  const classes = useStyles()
  
  return (
      <div className={classes.root}>
        <DisplayImages data={dessins} handleClick={deleteImage} fileRef={fileRef}/>
        <Upload fileRef={fileRef}/>
      </div>
  )
}

export default Dessin
