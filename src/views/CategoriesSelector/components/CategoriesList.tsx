import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { CategotyType } from '../../../types/CategotyType'
import { Button } from '@material-ui/core'
/* import { useSnackbar } from 'notistack' */

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    categoriesTable: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px ',
      height: 380,
      width: 400,
      padding: 10,
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
    category: {
      width: '100%',
      borderWidth: 0.5,
      borderStyle: 'solid'
    }
  })
)

interface CategoriesListProps {
  readonly categories: CategotyType[]
  readonly handleCategory: (category: CategotyType) => void
}

const CategoriesList: React.FC<CategoriesListProps> = ({ categories, handleCategory }) => {
  const classes = useStyles()

  return (
    <div className={classes.categoriesTable}>
      {categories.map((category) => (
        <Button className={classes.category} onClick={() => handleCategory(category)} color="primary">
          {category.name}
        </Button>
      ))}
    </div>
  )
}

export default CategoriesList
