import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import GrainIcon from '@material-ui/icons/Grain'
import { path } from '../../types/path'
import Icon from '@material-ui/core/Icon'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      display: 'flex'
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20
    }
  })
)

interface MyBreadcrumbsProps {
  paths?: path[]
}

const MyBreadcrumbs: React.FC<MyBreadcrumbsProps> = ({ paths }) => {
  const classes = useStyles()

  const history = useHistory()

  const handleChangeRoute = (url: string) => {
    history.push(url)
  }

  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      {paths?.map((path, index) =>
        index != paths.length - 1 ? (
          <Link
            key={'link' + index}
            color={'inherit'}
            href={path.url}
            onClick={() => handleChangeRoute(path.url)}
            className={classes.link}
          >
            <Icon className={classes.icon}>{path.icon}</Icon>
            {path.name}
          </Link>
        ) : (
          <Typography key={'typography' + index} color="textPrimary" className={classes.link}>
            <Icon className={classes.icon}>{path.icon}</Icon>
            {path.name}
          </Typography>
        )
      )}
    </Breadcrumbs>
  )
}

export default MyBreadcrumbs
