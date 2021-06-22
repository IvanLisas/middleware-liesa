import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Button, Divider, FormControl, Icon, IconButton, MenuItem, Select } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import MyBox from '../../components/MyStyledComponents/MyBox'
import useGlobalStyle from '../../styles/globalStyles'
import { productService } from '../../services/ProductService'
import ChangeCategoryDialog from './Components/ChangeCategoryDialog/ChangeCategoryDialog'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import { Edit } from '@material-ui/icons'
import { Product } from '../../types/Product'
import { useSnackbar } from 'notistack'
import Root from '../../components/Root/Root'
import { path } from '../../types/path'
import MySelecter from './Components/MySelecter'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      /* flexDirection: 'column', */
      /*      gridTemplateColumns: '1fr 1fr', */
      gap: 16,
      minWidth: '100%'
    },
    detailContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    },
    tittle: {
      fontSize: '24px'
    },
    labelWithIcon: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      fontSize: '1rem',
      width: 250
    },

    propertiesContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingLeft: '34px'
    },

    categoryInputContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    },
    volumenContainer: {
      display: 'flex',
      gap: 8
    },

    attributeGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  })
)

const ProductForm: React.FC = () => {
  const classes = useStyles()

  const classesGlobal = useGlobalStyle()

  const history = useHistory()

  const { enqueueSnackbar } = useSnackbar()

  const [productDetail, setProductDetail] = useState<Product | null>(null)

  const [open, setOpen] = useState(false)

  const { id } = useParams<{ id: string }>()

  const goHome = () => {
    history.goBack()
  }

  useEffect(() => {
    const getProduct = async () => {
      try {
        // await productService.getProduct(Number(id))
        setProductDetail(productService.getProductMock(Number(id)))
      } catch (error) {
        enqueueSnackbar('Error al obtener el producto, vuelva a intentarlo', { variant: 'error' })
        goHome()
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
        <MyBox>
          <div className={classes.detailContainer}>
            <div className={classes.labelWithIcon}>
              <Icon color="primary">content_paste</Icon>
              <a className={classes.tittle}>Detalle del producto</a>
            </div>
            {/*  <Divider /> */}
            <div className={classes.attributeGrid}>
              <div style={{ width: 250 }} className={classes.labelWithIcon}>
                <Icon color="primary">chevron_rigsht</Icon>
                <TextField label="Nombre" variant="outlined" disabled value={productDetail.name} />
              </div>
              <div className={classes.labelWithIcon}>
                <Icon color="primary">chevrosn_right</Icon>
                <TextField label="Marca" variant="outlined" disabled value={productDetail.brand.name} />
              </div>
              <div style={{ width: 250 }} className={classes.labelWithIcon}>
                <Icon color="primary">chevron_right</Icon>
                <TextField label="Codigo alfanumerico" variant="outlined" value={productDetail.name} />
              </div>
              <div style={{ width: 250 }} className={classes.labelWithIcon}>
                <Icon color="primary">chevron_right</Icon>
                <TextField label="Nombre" variant="outlined" value={productDetail.name} />
              </div>
            </div>
          </div>
        </MyBox>
        {/* Categoria */}
        {/*       <MyBox>
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
        </MyBox> */}
        {/* Atributos */}
        {/*         <MyBox>
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
        </MyBox> */}
        <MyBox>
          <div className={classes.detailContainer}>
            <div className={classes.labelWithIcon}>
              <Icon color="primary">straighten</Icon>
              <a className={classes.tittle}>Peso y medidas</a>
            </div>
            {/*   <Divider /> */}
            <div className={classes.attributeGrid}>
              <div className={classes.labelWithIcon}>
                <Icon color="primary">chevron_right</Icon>
                <div className={classes.volumenContainer}>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Provisorio</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      /*  type={values.showPassword ? 'text' : 'password'} */
                      value="35"
                      /*   onChange={handleChange('password')} */
                      endAdornment={
                        <InputAdornment position="end">
                          <FormControl variant="standard">
                            <MySelecter />
                          </FormControl>
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                  </FormControl>
                </div>
              </div>
              <div className={classes.labelWithIcon}>
                <Icon color="primary">chevron_right</Icon>
                <div className={classes.volumenContainer}>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Provisorio</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      /*  type={values.showPassword ? 'text' : 'password'} */
                      value="35"
                      /*   onChange={handleChange('password')} */
                      endAdornment={
                        <InputAdornment position="end">
                          <FormControl variant="standard">
                            <MySelecter />
                          </FormControl>
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                  </FormControl>
                </div>
              </div>
              <div className={classes.labelWithIcon}>
                <Icon color="primary">chevron_right</Icon>
                <div className={classes.volumenContainer}>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Provisorio</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      /*  type={values.showPassword ? 'text' : 'password'} */
                      value="35"
                      /*   onChange={handleChange('password')} */
                      endAdornment={
                        <InputAdornment position="end">
                          <FormControl variant="standard">
                            <MySelecter />
                          </FormControl>
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                  </FormControl>
                </div>
              </div>
              <div className={classes.labelWithIcon}>
                <Icon color="primary">chevron_right</Icon>
                <div className={classes.volumenContainer}>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Provisorio</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      /*  type={values.showPassword ? 'text' : 'password'} */
                      value="35"
                      /*   onChange={handleChange('password')} */
                      endAdornment={
                        <InputAdornment position="end">
                          <FormControl variant="standard">
                            <MySelecter />
                          </FormControl>
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                  </FormControl>
                </div>
              </div>
              <div className={classes.labelWithIcon}>
                <Icon color="primary">chevron_right</Icon>
                <div className={classes.volumenContainer}>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Provisorio</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      /*  type={values.showPassword ? 'text' : 'password'} */
                      value="35"
                      /*   onChange={handleChange('password')} */
                      endAdornment={
                        <InputAdornment position="end">
                          <FormControl variant="standard">
                            <MySelecter />
                          </FormControl>
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </MyBox>
      </form>
      {/* <MyBox> */}
      <div style={{ padding: '16px 16px 16px 16px' }}>
        <div className={classesGlobal.endButtonContainer}>
          <Button onClick={goHome} type="submit" variant="contained" color="primary">
            Guardar
          </Button>
          <Button onClick={goHome} variant="contained" color="secondary">
            Cancelar
          </Button>
        </div>
      </div>
      {/*  </MyBox> */}
    </Root>
  )
}

export default ProductForm
