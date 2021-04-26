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
import { globalStyles } from '../../styles/globalStyles'

const drawerWidth = 260

const appBarHeight = 65

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  appBar: {
    backgroundColor: theme.palette.background.paper,
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
    flexDirection: 'column'
  },
  drawerOpen: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: drawerWidth,
    backgroundColor: theme.palette.background.paper,
    marginTop: appBarHeight,
    maxHeight: `calc(100% - ${appBarHeight}px)`,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: 8
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
      outline: '1px solid slategrey',
      borderRadius: 7
    }
  },
  drawerClose: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    marginTop: appBarHeight,
    maxHeight: `calc(100% - ${appBarHeight}px)`,
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1
    }
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    color: theme.palette.text.primary,
    fontSize: '1.3rem'
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
    color: theme.palette.primary.main
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
    display: 'flex'
  },
  avatar: {
    width: '25px',
    height: '25px',
    borderRadius: '50%'
  },
  userContainer: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
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

  const history = useHistory()

  const [open, setOpen] = useState(true)

  const { user, setUser } = useContext(UserContext)

  const theme = useTheme()

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
              <Icon className={classes.icon}>widgets</Icon>
            </IconButton>
            <Button
              size="large"
              className={classes.logoContainer}
              onClick={() => history.push('/home')}
            >
              <img className={classes.logo} src={isDark ? logoNight : logoLight} />
              <img className={classes.logoLabel} src={isDark ? labelNight : labelLight} />
            </Button>
          </div>
          <a>{user.username}</a>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
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
