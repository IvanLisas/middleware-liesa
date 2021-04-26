import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: ' flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
    padding: '65px 0px' //Tiene que depender del tamaño del nav
  },

  box: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 20,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    /*  gap: '4px', */
    marginTop: 18 //Espacio entre el nav y el bOX
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
      <div className={classes.box}>{children}</div>
    </div>
  )
}

export default Box
