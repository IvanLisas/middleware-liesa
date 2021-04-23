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

const MercadolibreRuta1: React.FC = () => {
  const classes = useStyles()

  const history = useHistory()

  /*   let categoriesJSON: CategotyType[] = [] */

  const { user, setUser } = useContext(UserContext)

  const [categories, setCategories] = useState<CategotyType[]>([])

  const [routes, setRoutes] = useState<string[]>(['hola', 'hola2'])

  const logout = () => {
    setUser(null)
    history.push('/')
  }

  const showCategory = async (category: CategotyType) => {
    setCategories(await meliService.getGategory(category.id))
    setRoutes([...routes, category.name])
  }

  useEffect(() => {
    const showCategories = async () => {
      setCategories(await meliService.getGategories())
    }
    showCategories()
  }, [])

  if (!user) return null

  return (
    <MyBox>
      <MyBreadcrums {...routes} />
      <div className={classes.categoriesTable}>
        {categories.map((category) => (
          <Button
            className={classes.category}
            onClick={() => showCategory(category)}
            color="primary"
          >
            {category.name}
          </Button>
        ))}
      </div>
    </MyBox>
  )
}

export default MercadolibreRuta1
