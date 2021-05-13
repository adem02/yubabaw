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

const fileRef = 'maquettes'

const WebDesign = props => {
  const classes = useStyles()
  const {maquettes, deleteImage} = props

  return (
    <div className={classes.root}>
      <DisplayImages data={maquettes} handleClick={deleteImage} fileRef={fileRef}/>
      <Upload fileRef={fileRef}/>
    </div>
  )
}

export default WebDesign