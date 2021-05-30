import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { UserContext } from '../../../contexts/UserContext'
import { useHistory } from 'react-router-dom'
import { ThemeContextDispatch } from '../../../contexts/ThemeContext'
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import NotificationsIcon from '@material-ui/icons/Notifications'

interface StyleProps {
  height: number
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,
    borderBottom: '2px solid rgba(133, 133, 133, 0.1)',
    height: (props: StyleProps) => props.height,
    boxShadow: '0px 0px 20px rgb(0 0 0 / 50%)',
    display: 'flex',
    justifyContent: 'center'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    background: 'linear-gradient(139.73deg, #399ead 0%, #399ead 100%)'
  },
  icon: {
    color: 'white'
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16
  },
  logo: {
    width: '28px',
    height: '28px'
  },
  logoLabel: {
    width: '150px',
    height: '18px'
  },
  toolbarLeft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  toolbarRight: {
    display: 'flex',
    width: '14%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  userContainer: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    color: 'white',
    fontSize: '24px'
  },
  avatar: {
    width: 36,
    height: 36,
    color: theme.palette.text.primary
  },
  notications: {
    padding: 24
  }
}))

interface MyAppBarProps {
  height: number
}

const MyAppBar: React.FC<MyAppBarProps> = ({ height }) => {
  const classes = useStyles({ height })

  const history = useHistory()

  const { user } = useContext(UserContext)

  const { isDark } = useContext(ThemeContextDispatch)

  const logoLight = '/liesa-logo-negro.png'

  const labelLight = '/liesa-label-negro.png'

  const logoNight = '/liesa-logo-blanco.png'

  const labelNight = '/liesa-label-blanco.png'

  if (!user) return null

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.toolbarLeft}>
          {/* <IconButton onClick={handleDrawer} edge="start" className={clsx(classes.icon)}>
              <Icon className={classes.icon}>menu_open</Icon>
            </IconButton> */}
          <Button size="large" onClick={() => history.push('/home')}>
            <div className={classes.logoContainer}>
              <img className={classes.logo} src={isDark ? logoNight : logoLight} />
              <img className={classes.logoLabel} src={isDark ? labelNight : labelLight} />
            </div>
          </Button>
        </div>
        <div className={classes.toolbarRight}>
          <div className={classes.notications}>
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon className={classes.icon} />
            </Badge>
          </div>
          <div className={classes.userContainer}>
            <Avatar className={classes.avatar}>{user.username[0]}</Avatar>
            {user.username}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default MyAppBar
