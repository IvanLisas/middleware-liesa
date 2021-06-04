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
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    minWidth: 600,
    padding: 16,
    height: 568
  },
  tittle: {
    fontSize: '24px',
    display: 'flex',
    flexDirection: 'column'
  },
  categoryBottonGroup: {
    width: '100%',
    height: '100%'
  },
  categoryButton: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    fontWeight: 500
  },
  attributeGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 24
  },
  labelWithIcon: {
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    fontSize: '1rem'
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

  const [categoriesPathStack, setCategoriesPath2] = useState<CategoryMeli[]>([])

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
      await getChildrenCategories(newcategory)
      categoriesPath.push(newcategory)
      //TODO este while podria traer problemas?
      while (
        measureDomNode(
          <MyBreadcrumbs
            categories={categoriesPath}
            categories2={categoriesPathStack}
            handleChangeCategory={handleChangeCategory}
            resetCategories={resetCategories}
          />
        ).width > 560
      ) {
        count++
        categoriesPathStack.push(categoriesPath[0])
        categoriesPath.shift()
      }
      console.log(categoriesPathStack, categoriesPath)
      setCategoriesPath([...categoriesPath])
      setCount(count)
    } catch (error) {
      enqueueSnackbar('Error al obtener la categeoria: ' + error.message, { variant: 'error' })
    }
  }

  const getChildrenCategories = async (category: CategoryMeli) =>
    setCategoriesToShow(await meliService.getChildrenGategories(category.id))

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
    console.log(categoriesPathStack, categoriesPath)
    categoriesPath.forEach((category) => categoriesPathStack.push(category))
    console.log(categoriesPathStack)
    const index = categoriesPathStack.map((category) => category.name).indexOf(newcategory.name)
    const list = categoriesPathStack.slice(0, index + 1)
    const list2: CategoryMeli[] = []

    await getChildrenCategories(newcategory)
    console.log(list)
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
      list2.push(list[0])
      list.shift()
    }

    //TODO este while podria traer problemas?
    console.log(list, list2)
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
          categories2={categoriesPathStack}
          handleChangeCategory={handleChangeCategory}
        />
        <ButtonGroup
          className={clsx(classes.categoryBottonGroup, classesGlobal.scrollbarStyles)}
          orientation="vertical"
          color="primary"
          aria-label="vertical contained primary button group"
          variant="outlined"
          size="large"
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
          {finalCategory && (
            /*  <div
              style={{
                display: 'flex',
                height: '100%',
                width: '100%',

                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '1.5rem'
                }}
              >
                <Icon
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1.5rem'
                  }}
                  color="primary"
                >
                  inventory_2
                </Icon>
                <a>Sin childrens!</a>
              </div>
            </div> */
            <div
              style={{
                display: 'flex',
                /*   height: '100%', */
                width: '100%',
                gap: 16,
                paddingBottom: 8,
                fontSize: 20,
                flexDirection: 'column'
              }}
            >
              <div className={classes.labelWithIcon}>
                <Icon color="primary">inventory_2</Icon>
                <a className={classes.tittle}>Atributos</a>
              </div>

              <div className={classes.attributeGrid}>
                <div className={classes.labelWithIcon}>
                  <Icon color="primary">chevron_right</Icon>
                  <TextField variant="outlined" label="Peso" value="34 KG" />
                </div>
                <div className={classes.labelWithIcon}>
                  <Icon color="primary">chevron_right</Icon>
                  <TextField variant="outlined" label="Alto" value="4.5 Metros" />
                </div>
                <div className={classes.labelWithIcon}>
                  <Icon color="primary">chevron_right</Icon>
                  <TextField variant="outlined" label="Largo" value="1 Metro" />
                </div>
                <div className={classes.labelWithIcon}>
                  <Icon color="primary">chevron_right</Icon>
                  <TextField variant="outlined" label="Ancho" value="1.3 Centimetros" />
                </div>
              </div>
            </div>
          )}
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
