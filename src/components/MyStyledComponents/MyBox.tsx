import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const appBarHeight = 65

const paddingRoot = 12

const useStyles = makeStyles((theme) => ({
  root: {
    display: ' flex',
    justifyContent: 'center',
    /*     alignItems: 'center', */
    width: '100%',
    backgroundColor: theme.palette.background.default,
    //Tiene que depender del tamaño del nav
    marginTop: 65,
    padding: 12
  },

  box: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 12,
    padding: '16px', //El top tendria que conicidor con el margenTop/paddingTop del menu
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0px 0px 20px rgb(0 0 0 / 10%)'
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
