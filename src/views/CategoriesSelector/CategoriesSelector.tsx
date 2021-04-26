import React, { useEffect, useState, useContext } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { UserContext } from '../../contexts/UserContext'
import MyButton from '../../components/MyButton'
import MyBox from '../../components/MyBox'
import { meliService } from '../../services/MeliService'
import MyBreadcrums from './components/MyBreadcrums'
import { useHistory } from 'react-router-dom'
import { CategotyType } from '../../types/CategotyType'
import { Button } from '@material-ui/core'
import CategoriesList from './components/CategoriesList'
/* import { useSnackbar } from 'notistack' */

const useStyles = makeStyles((theme: Theme) => createStyles({}))

const CategoriesSelector: React.FC = () => {
  /*   const classes = useStyles()

  const history = useHistory() */

  const [categories, setCategories] = useState<CategotyType[]>([])

  const [routes, setRoutes] = useState<string[]>(['hola', 'hola2'])

  const handleCategory = async (category: CategotyType) => {
    setCategories(await meliService.getGategory(category.id))
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