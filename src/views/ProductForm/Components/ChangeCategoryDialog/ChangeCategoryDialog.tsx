import React, { useState } from 'react'
import { Icon, Button, ButtonGroup } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MyDialog from '../../../../components/MyStyledComponents/MyDialog'
import brandStub from '../../../../stubs/BrandStub'
import MyButton from '../../../../components/MyStyledComponents/MyButton'
import MySearchBar from '../../../../components/MyStyledComponents/MySearchBar'
import useGlobalStyle from '../../../../styles/globalStyles'
import MyBreadcrumbs from './Components/MyBreadcrumbs'
import measureDomNode from './Tools/MeasureDomNode'
import meliService from '../../../../services/MeliService'
import { useEffect } from 'react'
import { CategoryMeli } from '../../../../types/CategoryMeli'
import { useSnackbar } from 'notistack'
import clsx from 'clsx'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    minWidth: 600,
    padding: 16
  },
  tittle: {
    fontSize: '24px',
    display: 'flex',
    flexDirection: 'column'
  },
  categoryBottonGroup: {
    width: '100%',
    maxHeight: 300
  },
  categoryButton: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    fontWeight: 500
  }
}))

interface ChangeCategoryDialogProps {
  open: boolean
  setOpen: (value: boolean) => void
}

const ChangeCategoryDialog: React.FC<ChangeCategoryDialogProps> = (props) => {
  const classes = useStyles()

  const classesGlobal = useGlobalStyle()

  const [categoriesPath, setCategoriesPath] = useState<CategoryMeli[]>([])

  const [categoriesPath2, setCategoriesPath2] = useState<CategoryMeli[]>([])

  const [categories, setCategoriesToShow] = useState<CategoryMeli[]>([])

  const [value, setValue] = useState(brandStub.getRandomBrand.name)

  const { setOpen, open } = props

  const handleChange = (event) => setValue(event.target.value)

  const { enqueueSnackbar } = useSnackbar()

  const handleCancel = () => setOpen(false)

  const [count, setCount] = useState<number>(0)

  const addCategory = async (newcategory: CategoryMeli) => {
    try {
      let count = 0
      await getCategory(newcategory)
      categoriesPath.push(newcategory)
      //TODO este while podria traer problemas?
      while (
        measureDomNode(
          <MyBreadcrumbs
            categories={categoriesPath}
            categories2={categoriesPath2}
            handleChangeCategory={handleChangeCategory}
            resetCategories={resetCategories}
          />
        ).width > 560
      ) {
        count++
        categoriesPath2.push(categoriesPath[0])
        categoriesPath.shift()
      }
      setCategoriesPath([...categoriesPath])
      setCount(count)
    } catch (error) {
      enqueueSnackbar('Error al obtener la categeoria: ' + error.message, { variant: 'error' })
    }
  }

  const getCategory = async (category: CategoryMeli) => setCategoriesToShow(await meliService.getGategory(category.id))

  useEffect(() => {
    const getCategories = async () => {
      try {
        setCategoriesToShow(await meliService.getGategories())
      } catch (error) {
        enqueueSnackbar('Error al obtener las categeorias: ' + error.message, { variant: 'error' })
      }
    }

    getCategories()
  }, [])

  const finalCategory = categories.length == 0

  const handleChangeCategory = async (newcategory) => {
    categoriesPath.forEach((category) => categoriesPath2.push(category))

    const index = categoriesPath2.map((category) => category.name).indexOf(newcategory.name)
    const list = categoriesPath2.slice(0, index + 1)
    const list2: CategoryMeli[] = []
    console.log(categoriesPath2)
    console.log(list)

    await getCategory(newcategory)

    let count = 0

    //TODO este while podria traer problemas?
    while (
      measureDomNode(
        <MyBreadcrumbs
          resetCategories={resetCategories}
          categories={list}
          categories2={list2}
          handleChangeCategory={handleChangeCategory}
        />
      ).width > 560
    ) {
      count++
      list2.push(categoriesPath[0])
      list.shift()
    }

    //TODO este while podria traer problemas?

    setCategoriesPath([...list])
    setCategoriesPath2([...list2])
    setCount(count)
  }

  const resetCategories = async () => {
    try {
      setCategoriesToShow(await meliService.getGategories())
      setCategoriesPath([...[]])
      setCategoriesPath2([...[]])
    } catch (error) {
      enqueueSnackbar('Error al obtener las categeorias: ' + error.message, { variant: 'error' })
    }
  }

  return (
    <MyDialog setOpen={setOpen} open={open}>
      <div className={classes.root}>
        <div className={classes.tittle}>Cambiar categorias</div>
        <MySearchBar></MySearchBar>
        <MyBreadcrumbs
          resetCategories={resetCategories}
          categories={categoriesPath}
          categories2={categoriesPath2}
          handleChangeCategory={handleChangeCategory}
        />
        <ButtonGroup
          className={clsx(classes.categoryBottonGroup, classesGlobal.scrollbarStyles)}
          orientation="vertical"
          color="primary"
          aria-label="vertical contained primary button group"
          variant="outlined"
        >
          {categories.map((category, index) => (
            <Button
              className={classes.categoryButton}
              key={category.name + index}
              color="default"
              onClick={() => addCategory(category)}
            >
              <div />
              {category.name}
              <Icon>chevron_right</Icon>
            </Button>
          ))}
        </ButtonGroup>
        <div className={classesGlobal.endButtonContainer}>
          <MyButton disabled={!finalCategory} variant="contained" color="primary" autoFocus onClick={handleCancel}>
            Confirmar
          </MyButton>
          <MyButton onClick={handleCancel}>Cancelar</MyButton>
        </div>
      </div>
    </MyDialog>
  )
}

export default ChangeCategoryDialog
