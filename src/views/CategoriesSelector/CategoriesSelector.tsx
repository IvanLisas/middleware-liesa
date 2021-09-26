import React, { useEffect, useState, useContext } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { UserContext } from '../../contexts/UserContext'
import MyButton from '../../components/MyStyledComponents/MyButton'
import MyBox from '../../components/MyStyledComponents/MyBox'
import meliService from '../../services/MeliService'
import MyBreadcrums from './components/MyBreadcrums'
import { useHistory } from 'react-router-dom'
import { CategoryMeli } from '../../types/CategoryMeli'
import { Button } from '@material-ui/core'
import CategoriesList from './components/CategoriesList'
/* import { useSnackbar } from 'notistack' */

const useStyles = makeStyles((theme: Theme) => createStyles({}))

const CategoriesSelector: React.FC = () => {
  /*   const classes = useStyles()

  const history = useHistory() */

  const [categories, setCategories] = useState<CategoryMeli[]>([])

  const [routes, setRoutes] = useState<string[]>(['hola', 'hola2'])

  const handleCategory = async (category: CategoryMeli) => {
    setCategories(await meliService.getChildrenGategories(category.id))
    setRoutes([...routes, category.name])
  }

  useEffect(() => {
    const showCategories = async () => {
      setCategories(await meliService.getGategories())
    }
    showCategories()
  }, [])

  return (
    <MyBox>
      <MyBreadcrums {...routes} />
      <CategoriesList {...{ categories, handleCategory }} />
    </MyBox>
  )
}

export default CategoriesSelector
