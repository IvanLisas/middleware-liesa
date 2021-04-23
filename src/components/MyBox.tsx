import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: ' flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 65
  },

  box: {
    /* minWidth:'500px', */
    backgroundColor: theme.palette.background.paper,
    borderRadius: 20,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    /*     marginTop: 250, */
    /*    paddingTop: '100px', */
    gap: '4px'
  },
  backgroundImage: {
    position: 'absolute',
    zIndex: -1,
    right: 0,
    bottom: 0,
    backgroundSize: 'cover',
    width: '25%',
    transform: 'rotateY(180deg)'
  }
}))

const Box: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <img className={classes.backgroundImage} src="back1.png" />
      <div className={classes.box}>{children}</div>
    </div>
  )
}

export default Box
