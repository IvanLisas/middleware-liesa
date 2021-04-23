import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { RouteComponentProps } from 'react-router-dom'

/* const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    }
  })
) */

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

const MyBreadcrums: React.FC<string[]> = (props: string[]) => {
  /*   const classes = useStyles() */

  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        Categoria
        {console.log(props)}
        {console.log(['hola', 'hola2'])}
      </Link>
      {['hola'].map((route) => (
        <Link color="inherit" href="/" onClick={handleClick}>
          {route}
        </Link>
      ))}
    </Breadcrumbs>
  )
}

export default MyBreadcrums
