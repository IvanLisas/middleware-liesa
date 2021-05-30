import React, { useState, useEffect, useRef } from 'react'
import { Icon, Button, ButtonGroup, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MyDialog from '../../../../components/MyStyledComponents/MyDialog'
import brandStub from '../../../../stubs/BrandStub'
import MyButton from '../../../../components/MyStyledComponents/MyButton'
import MySearchBar from '../../../../components/MyStyledComponents/MySearchBar'
import useGlobalStyle from '../../../../styles/globalStyles'
import MyBreadcrumbs from './Components/MyBreadcrumbs'
import measureDomNode from './Tools/MeasureDomNode'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    minWidth: 600
  },
  tittle: {
    fontSize: '24px',
    padding: '16px 16px 0px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  }
}))

interface ChangeCategoryDialogProps {
  open: boolean
  setOpen: (value: boolean) => void
}

const ChangeCategoryDialog: React.FC<ChangeCategoryDialogProps> = (props) => {
  const classes = useStyles()

  const classesGlobal = useGlobalStyle()

  const [categorias, setCategorias] = useState<string[]>([])

  const [categorias2, setCategorias2] = useState(categorias)

  const [altura, setAltura] = useState(0)

  const [value, setValue] = useState(brandStub.getRandomBrand.name)

  const { setOpen, open } = props

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleCancel = () => setOpen(false)

  const copiar = () => {
    setCategorias2([...categorias, 'Categoria ' + categorias.length])
    setAltura(measureDomNode(<MyBreadcrumbs categories={categorias2} />).width)
  }

  useEffect(() => {
    console.log(altura, altura < 560)
    if (altura < 500) {
      //es la altura del fuente mas padding del bread (8)
      categorias.push('Categoria ' + categorias.length)
      setCategorias([...categorias])
    }
  }, [altura])

  return (
    <MyDialog setOpen={setOpen} open={open}>
      <div className={classes.root}>
        <div className={classes.tittle}>
          <a>Cambiar categoria</a>
          <Divider />
        </div>

        <div style={{ width: '100%', padding: '4px 16px' }}>
          <MySearchBar></MySearchBar>
        </div>

        <MyBreadcrumbs categories={categorias} />

        <div style={{ maxHeight: 350 }}>
          <ButtonGroup
            orientation="vertical"
            color="primary"
            aria-label="vertical contained primary button group"
            variant="outlined"
            style={{ width: '100%', padding: '0px 16px' }}
          >
            {brandStub.brands.map((brand, index) => (
              <Button
                key={brand.name + index}
                color="default"
                style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontWeight: 500 }}
                onClick={() => copiar()}
              >
                <div />
                {brand.name}

                <Icon>chevron_right</Icon>
              </Button>
            ))}
          </ButtonGroup>
        </div>
        <div style={{ padding: '0px 16px 16px' }}>
          <div className={classesGlobal.endButtonContainer}>
            <MyButton variant="contained" color="primary" autoFocus onClick={handleCancel}>
              Confirmar
            </MyButton>
            <MyButton onClick={handleCancel}>Cancelar</MyButton>
          </div>
        </div>
      </div>
    </MyDialog>
  )
}

export default ChangeCategoryDialog
