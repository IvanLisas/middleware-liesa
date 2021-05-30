import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '4px 16px'
  }
}))

interface MyBreadcrumbsProps {
  categories: string[]
}

const MyBreadcrumbs: React.FC<MyBreadcrumbsProps> = ({ categories }) => {
  const classes = useStyles()

  return (
    <Breadcrumbs
      className={classes.root}
      maxItems={20}
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {categories.map((category) => (
        <Link color="inherit" href="/">
          {' '}
          {category}
        </Link>
      ))}
      {/*<Typography color="textPrimary">Categoria final</Typography> */}
    </Breadcrumbs>
  )
}

export default MyBreadcrumbs
