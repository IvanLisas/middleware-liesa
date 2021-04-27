import React, { useState, useContext } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import CssBaseline from '@material-ui/core/CssBaseline'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import { Icon } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import { useHistory } from 'react-router-dom'
import CollapseButton from './CollapseButton'
import { ThemeContextDispatch } from '../../contexts/ThemeContext'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import useGlobalStyle from '../../styles/globalStyles'
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import NotificationsIcon from '@material-ui/icons/Notifications'

const drawerWidth = 260

const appBarHeight = 65

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,
    borderBottom: '2px solid rgba(133, 133, 133, 0.1)',
    height: appBarHeight,
    position: 'fixed'
  },
  divider: {
    height: '1px'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 10,
    justifyContent: 'space-between',
    marginTop: appBarHeight,
    backgroundColor: theme.palette.background.paper,
    maxHeight: `calc(100% - ${appBarHeight}px)`,
    overflowX: 'hidden',
    boxShadow: '0px 0px 20px rgb(0 0 0 / 20%)'
  },
  drawerOpen: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1
    }
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    color: theme.palette.text.primary,
    boxShadow: '0px 0px 20px rgb(0 0 0 / 20%)'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  itemLabel: {
    fontSize: '1rem',
    marginLeft: '8px'
  },
  icon: {
    color: 'white'
  },
  itemList: {
    /*     margin: '16px 0', */
    display: 'flex',
    flexDirection: 'column'
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 15px 0 15px',
    color: theme.palette.text.primary
  },
  logo: {
    width: '28px',
    height: '28px',
    marginRight: '0.5rem'
  },
  logoLabel: {
    width: '150px',
    height: '18px',
    marginRight: '0.5rem'
  },
  toolbarLeft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  toolbarRight: {
    display: 'flex',
    width: '12%',
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
  colorModeContainer: {
    fontSize: '1rem'
  },
  drawerBottonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
    paddingTop: '1.5rem'
  },
  socialContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px'
  }
}))

const Menu: React.FC = ({ children }) => {
  const itemList = [
    {
      label: 'Mercadolibre',
      logo: 'mercadolibre-logo.png',
      ruta: '/mercadolibre',
      open: false,
      children: [
        {
          label: 'Ruta 1',
          ruta: '/ruta1',
          icon: 'shopping_cart'
        },
        {
          label: 'Configuracion',
          ruta: '/ruta2',
          icon: 'settings'
        }
      ]
    },
    {
      label: 'Tienda nube',
      logo: 'tiendanube-logo.png',
      ruta: '/tiendaNube',
      open: false,
      children: [
        {
          label: 'Ruta 1',
          ruta: '/ruta1',
          icon: 'shopping_cart'
        },
        {
          label: 'Ruta 2',
          ruta: '/ruta2',
          icon: 'shopping_bag'
        },
        {
          label: 'Ruta 3',
          ruta: '/ruta2',
          icon: 'store'
        }
      ]
    },
    {
      label: 'Google shopping',
      ruta: '/googleShopping',
      logo: 'googleshopping-logo.png',
      open: false,
      children: [
        {
          label: 'Ruta 1',
          ruta: '/ruta1',
          icon: 'shopping_cart'
        }
      ]
    },
    {
      label: 'Magento',
      ruta: '/magento',
      logo: '/magento-logo.png',
      open: false,
      children: [
        {
          label: 'Ruta 1',
          ruta: '/ruta1',
          icon: 'shopping_cart'
        },
        {
          label: 'Ruta 2',
          ruta: '/ruta2',
          icon: '/shopping_basket'
        },
        {
          label: 'Ruta 3',
          ruta: '/ruta3',
          icon: 'list'
        },
        {
          label: 'Ruta 4',
          ruta: '/ruta4',
          icon: 'home'
        }
      ]
    }
  ]

  const classes = useStyles()

  const classesGlobal = useGlobalStyle()

  const history = useHistory()

  const [open, setOpen] = useState(false)

  const { user, setUser } = useContext(UserContext)

  const { isDark, setIsDark } = useContext(ThemeContextDispatch)

  const logoLight = '/liesa-logo-negro.png'

  const labelLight = '/liesa-label-negro.png'

  const logoNight = '/liesa-logo-blanco.png'

  const labelNight = '/liesa-label-blanco.png'

  const handleDrawer = () => {
    itemList.forEach((item) => (item.open = false))
    setOpen(!open)
  }
  /*   const handleDrawerClose = () => setOpen(false) */

  const logout = () => {
    setUser(null)
    history.push('/')
  }

  if (!user) return null

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.toolbarLeft}>
            <IconButton onClick={handleDrawer} edge="start" className={clsx(classes.icon)}>
              <Icon className={classes.icon}>menu_open</Icon>
            </IconButton>
            <Button size="large" className={classes.logoContainer} onClick={() => history.push('/home')}>
              <img className={classes.logo} src={isDark ? logoNight : logoLight} />
              <img className={classes.logoLabel} src={isDark ? labelNight : labelLight} />
            </Button>
          </div>
          <div className={classes.toolbarRight}>
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon className={classes.icon} />
            </Badge>
            <div className={classes.userContainer}>
              <Avatar className={classes.avatar}>{user.username[0]}</Avatar>
              {user.username}
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx(classes.drawer, classesGlobal.scrollbarStyles, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <List className={classes.itemList}>
          {itemList.map((item) => (
            <CollapseButton item={item} drawerOpen={open} setDrawerOpen={setOpen} />
          ))}
        </List>
        <div className={classes.drawerBottonContainer}>
          <div className={classes.colorModeContainer}>
            {(open || isDark) && (
              <IconButton disableRipple disableFocusRipple onClick={() => setIsDark(false)}>
                <Icon color={isDark ? 'disabled' : 'primary'}>wb_sunny</Icon>
              </IconButton>
            )}
            {open && <a>/</a>}
            {(open || !isDark) && (
              <IconButton disableRipple disableFocusRipple onClick={() => setIsDark(true)}>
                <Icon color={isDark ? 'primary' : 'disabled'}>nightlight_round</Icon>
              </IconButton>
            )}
          </div>
          {open && (
            <div className={classes.socialContainer}>
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
          )}
        </div>
      </Drawer>
      {children}
    </div>
  )
}

export default withRouter(Menu)
