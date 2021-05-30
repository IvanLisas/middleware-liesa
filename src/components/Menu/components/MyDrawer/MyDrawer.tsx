import React, { useState, useContext } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import IconButton from '@material-ui/core/IconButton'
import { Icon } from '@material-ui/core'
import { UserContext } from '../../../../contexts/UserContext'
import { useHistory } from 'react-router-dom'
import CollapseButton from './components/CollapseButton'
import { ThemeContextDispatch } from '../../../../contexts/ThemeContext'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import useGlobalStyle from '../../../../styles/globalStyles'
import Divider from '@material-ui/core/Divider'
import { itemList } from './Itemlist'

interface StyleProps {
  marginTop: number
}

const appBarwidth = 260

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  drawer: {
    marginTop: (props: StyleProps) => props.marginTop,
    width: appBarwidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.paper,
    maxHeight: (props: StyleProps) => `calc(100% - ${props.marginTop}px)`,
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
      width: theme.spacing(7) + 8 //Probar en docker
    }
  },
  iconDisabled: {
    color: 'rgb(133 139 143)'
  },
  itemList: {
    display: 'flex',
    flexDirection: 'column'
  },
  colorModeContainer: {
    fontSize: '1rem'
  },
  drawerBottonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: '2rem',
    padding: '16px 16px'
  },
  socialContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px'
  }
}))

interface MyDrawerProps {
  marginTop: number
}

const MyDrawer: React.FC<MyDrawerProps> = ({ marginTop }) => {
  const classes = useStyles({ marginTop })

  const classesGlobal = useGlobalStyle()

  const [open, setOpen] = useState(false)

  const { user } = useContext(UserContext)

  const { isDark, setIsDark } = useContext(ThemeContextDispatch)

  if (!user) return null

  return (
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
        {itemList.map((item, index) => (
          <div key={'item_' + index}>
            <CollapseButton item={item} drawerOpen={open} setDrawerOpen={setOpen} />
            <Divider />
          </div>
        ))}
      </List>

      <div>
        <Divider variant="middle" />
        <div className={classes.drawerBottonContainer}>
          <div className={classes.colorModeContainer}>
            {(open || isDark) && (
              <IconButton disableRipple disableFocusRipple onClick={() => setIsDark(false)}>
                <Icon classes={{ colorDisabled: classes.iconDisabled }} color={isDark ? 'disabled' : 'primary'}>
                  wb_sunny
                </Icon>
              </IconButton>
            )}
            {open && <a>/</a>}
            {(open || !isDark) && (
              <IconButton disableRipple disableFocusRipple onClick={() => setIsDark(true)}>
                <Icon classes={{ colorDisabled: classes.iconDisabled }} color={isDark ? 'primary' : 'disabled'}>
                  nightlight_round
                </Icon>
              </IconButton>
            )}
          </div>
          {open && (
            <div className={classes.socialContainer}>
              <IconButton
                disableRipple
                disableFocusRipple
                onClick={() => window.open('https://gitlab.com/liesa/middleware/webapp')}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                color="primary"
                href="www.google.com.ar"
                disableRipple
                disableFocusRipple
                onClick={() => setIsDark(false)}
              >
                <TwitterIcon />
              </IconButton>
            </div>
          )}
        </div>
      </div>
    </Drawer>
  )
}

export default MyDrawer
