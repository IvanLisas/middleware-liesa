import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect, useState } from 'react'
import measureDomNode from '../Tools/MeasureDomNode'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { CategoryMeli } from '../../../../../types/CategoryMeli'

const useStyles = makeStyles((theme) => ({
  root: {}
}))

interface MyBreadcrumbsProps {
  categories: CategoryMeli[]
  categories2: CategoryMeli[]
  handleChangeCategory: (categories: CategoryMeli) => void
}

const MyBreadcrumbs: React.FC<MyBreadcrumbsProps> = ({ categories, categories2, handleChangeCategory }) => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Breadcrumbs
      className={classes.root}
      maxItems={20}
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {categories2.length !== 0 && (
        <div>
          <Button style={{ minWidth: '0px' }} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            ...
          </Button>

          <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            {categories2.map((category, index) => (
              <MenuItem onClick={handleClose}>{category.name}</MenuItem>
            ))}
          </Menu>
        </div>
      )}
      {categories.map((category, index) => (
        <a key={category.name + index} onClick={() => handleChangeCategory(category)}>
          {category.name}
        </a>
      ))}
      {/*<Typography color="textPrimary">Categoria final</Typography> */}
    </Breadcrumbs>
  )
}

export default MyBreadcrumbs
