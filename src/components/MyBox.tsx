import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const appBarHeight = 65

const paddingRoot = 24

const useStyles = makeStyles((theme) => ({
  root: {
    display: ' flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.background.default,
    //Tiene que depender del tamaño del nav
    /*  paddingTop: 65 */
    padding: `${appBarHeight + paddingRoot}px ${paddingRoot}px ${paddingRoot}px ${paddingRoot}px`
  },

  box: {
    /*  margin: 50, */
    backgroundColor: theme.palette.background.paper,
    borderRadius: 12,
    padding: '16px', //El top tendria que conicidor con el margenTop/paddingTop del menu
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    //Espacio entre el nav y el boX
    /*     margin: '120px 60px 60px 60px', */
    /*   width: '100%', */
    /*   borderStyle: 'solid', */
    /*     borderColor: 'red', */
    boxShadow: '0px 0px 20px rgb(0 0 0 / 10%)'
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
