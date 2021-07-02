import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import useGlobalStyle from '../../styles/globalStyles'
import { productService } from '../../services/ProductService'
import { Product } from '../../types/Product'
import { useSnackbar } from 'notistack'
import Root from '../../components/Root/Root'
import { path } from '../../types/path'
import ProductCard from './Components/ProductCard'
import ProductInput from './Components/ProductInput'
import ProductInputWithAdorment from './Components/ProductInputWithAdorment'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      gap: 16,
      minWidth: '100%'
    },

    attributeGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  })
)

const ProductForm: React.FC = (props: any) => {
  const classes = useStyles()

  const classesGlobal = useGlobalStyle()

  const history = useHistory()

  const { enqueueSnackbar } = useSnackbar()

  const [productDetail, setProductDetail] = useState<Product | null>(null)

  const [open, setOpen] = useState(false)

  const { id } = useParams<{ id: string }>()

  const goBack = () => {
    history.goBack()
  }

  useEffect(() => {
    const getProduct = async () => {
      if (props.location.state) {
        console.log(props.location.state.data)
        setProductDetail(props.location.state.data)
      } else
        try {
          setProductDetail((await productService.getProduct(Number(id))).data)
        } catch (error) {
          enqueueSnackbar('Error al obtener el producto, vuelva a intentarlo', { variant: 'error' })
          goBack() //TODO hacer un 404 page
        }
    }
    getProduct()
  }, [])

  if (!productDetail) return null

  const paths = [
    { name: 'Catalogo', icon: 'home', url: '/' } as path,
    { name: 'Producto', icon: 'inventory_2', url: '/product' } as path
  ]

  return (
    <Root paths={paths} tittle="Producto">
      <form className={classes.root}>
        <ProductCard title="Detalle del producto" icon="content_paste">
          <div className={classes.attributeGrid}>
            <ProductInput label="SKU" value={productDetail.sku} disabled />
            <ProductInput label="Nombre" value={productDetail.name} disabled />
            <ProductInput label="Marca" value={productDetail.brand ? productDetail.brand.name : 'Sin marca'} disabled />
            <ProductInput label="Codigo alfanumerico" value={productDetail.alfaCode} />
            <ProductInput label="Codigo de producto" value={productDetail.productCode} disabled />
          </div>
        </ProductCard>
        <ProductCard title="Pesos y Medidas" icon="straighten">
          <div className={classes.attributeGrid}>
            <ProductInputWithAdorment label="Provisorio" value={35} />
            <ProductInputWithAdorment label="Provisorio" value={35} />
            <ProductInputWithAdorment label="Provisorio" value={35} />
          </div>
        </ProductCard>
      </form>
      <div style={{ padding: '16px 0px' }}>
        <div className={classesGlobal.endButtonContainer}>
          <Button onClick={goBack} type="submit" variant="contained" color="primary">
            Guardar
          </Button>
          <Button onClick={goBack} variant="contained" color="secondary">
            Cancelar
          </Button>
        </div>
      </div>
    </Root>
  )
}

export default ProductForm

{
  /* Categoria */
}
{
  /*       <MyBox>
          <div className={classes.detailContainer}>
            <div className={classes.labelWithIcon}>
              <Icon color="primary">category</Icon>
              <a className={classes.tittle}>Categoria</a>
            </div>
            <div className={classes.labelWithIcon}>
              <Icon color="primary">chevron_right</Icon>
              <OutlinedInput
                
                disabled
                id="outlined-adornment-password"
                value={'Categoria del producto'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      color="primary"
                      aria-label="toggle password visibility"
                      onClick={() => setOpen(true)}
                      edge="end"
                    >
                      <Edit />
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </div>
            <ChangeCategoryDialog open={open} setOpen={setOpen} />

          </div>
        </MyBox> */
}
{
  /* Atributos */
}
{
  /*         <MyBox>
          <div className={classes.detailContainer}>
            <div className={classes.labelWithIcon}>
              <Icon color="primary">inventory_2</Icon>
              <a className={classes.tittle}>Atributos</a>
            </div>
            <div className={classes.attributeGrid}>
              <div className={classes.labelWithIcon}>
                <Icon color="primary"> chevron_right</Icon>
                <TextField variant="outlined" label="Atributo" value="Valor" />
              </div>
              <div className={classes.labelWithIcon}>
                <Icon color="primary">chevron_right</Icon>
                <TextField variant="outlined" label="Atributo" value="Valor" />
              </div>
              <div className={classes.labelWithIcon}>
                <Icon color="primary">chevron_right</Icon>
                <TextField variant="outlined" label="Atributo" value="Valor" />
              </div>
              <div className={classes.labelWithIcon}>
                <Icon color="primary"> chevron_right</Icon>
                <TextField variant="outlined" label="Atributo" value="Valor" />
              </div>
              <div className={classes.labelWithIcon}>
                <Icon color="primary">chevron_right</Icon>
                <TextField variant="outlined" label="Atributo" value="Valor" />
              </div>
              <div className={classes.labelWithIcon}>
                <Icon color="primary">chevron_right</Icon>
                <TextField variant="outlined" label="Atributo" value="Valor" />
              </div>
            </div>
          </div>
        </MyBox> */
}
