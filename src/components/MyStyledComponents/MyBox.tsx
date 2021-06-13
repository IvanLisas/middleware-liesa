import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 6,
    padding: '16px', //El top tendria que conicidor con el margenTop/paddingTop del menu
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0px 0px 20px rgb(0 0 0 / 10%)'
  }
}))

const Box: React.FC = ({ children }) => {
  const classes = useStyles()

  return <div className={classes.box}>{children}</div>
}

export default Box
