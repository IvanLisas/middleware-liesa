import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withRouter } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import MyAppBar from './components/MyAppBar'
import MyDrawer from './components/MyDrawer/MyDrawer'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxSizing: 'border-box',
    height: '100%'
  },
  content: {
    display: 'flex',
    height: '100%'
  }
}))

const Menu: React.FC = ({ children }) => {
  const classes = useStyles()

  const appBarHeight = 65

  const { user } = useContext(UserContext)

  if (!user) return null

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MyAppBar height={appBarHeight} />
      <div className={classes.content}>
        <MyDrawer marginTop={appBarHeight} />
        {children}
      </div>
    </div>
  )
}

export default withRouter(Menu)
