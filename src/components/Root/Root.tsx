import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import { path } from '../../types/path'
import MyBreadcrumbs from '../MyStyledComponents/MyBreadcrumbs'
import Divider from '@material-ui/core/Divider'

const appBarHeight = 50

const useStyles = makeStyles((theme) => ({
  root: {
    display: ' flex',
    flexDirection: 'column',
    /* justifyContent: 'center',
    alignItems: 'center', */
    zIndex: 1,
    width: '100%',
    backgroundColor: theme.palette.background.default,
    marginLeft: 260,
    marginTop: appBarHeight,
    padding: 16,
    gap: 16,
    flexFlow: 'column'
  },
  tittle: {
    fontWeight: 600,
    fontSize: 22,
    paddingBottom: 8
  }
}))

interface RootProps {
  tittle: string
  paths?: path[]
}

const Root: React.FC<RootProps> = (props) => {
  const classes = useStyles()

  const { tittle, paths, children } = props

  const { user } = useContext(UserContext)

  if (!user) return null

  return (
    <div className={classes.root}>
      <MyBreadcrumbs paths={paths} />
      <Divider />
      <div style={{ alignSelf: 'center' }}>
        {/*   <div className={classes.tittle}> {tittle}</div> */}
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Root
