import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Button, Divider, Icon, IconButton } from '@material-ui/core'
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'grid',
      /*  flexDirection: 'column', */
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      minWidth: '100%',
      padding: 16
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
      fontSize: '1rem'
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

  return (
    <div>
      <form className={classes.root}>
        <MyBox>
          <div className={classes.detailContainer}>
            <div className={classes.labelWithIcon}>
              <Icon color="primary">content_paste</Icon>
              <a className={classes.tittle}>Detalle del producto</a>
            </div>
            {/*  <Divider /> */}
            <div className={classes.attributeGrid}>
              <div className={classes.labelWithIcon}>
                <Icon color="primary">chevron_rigsht</Icon>

                <TextField label="Nombre" variant="outlined" disabled value={productDetail.name} />
              </div>
              <div className={classes.labelWithIcon}>
                <Icon color="primary">chevrosn_right</Icon>

                <TextField label="Marca" variant="outlined" disabled value={productDetail.brand.name} />
              </div>
            </div>
          </div>
        </MyBox>
        <MyBox>
          <div className={classes.detailContainer}>
            <div className={classes.labelWithIcon}>
              <Icon color="primary">category</Icon>
              <a className={classes.tittle}>Categoria</a>
            </div>

            {/*   <Divider /> */}
            <div className={classes.labelWithIcon}>
              <Icon color="primary">chevron_right</Icon>
              <OutlinedInput
                fullWidth
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
              />{' '}
            </div>
            <ChangeCategoryDialog open={open} setOpen={setOpen} />
            {/*           <div className={classes.propertiesContainer}>
            <div className={classes.labelWithIcon}>Categoria del producto</div>
            <IconButton color="primary" style={{ padding: 4 }} onClick={() => setOpen(true)}>
              <Icon>edit</Icon>
            </IconButton>
            <ChangeCategoryDialog open={open} setOpen={setOpen} />
          </div> */}
          </div>
        </MyBox>
        <MyBox>
          <div className={classes.detailContainer}>
            <div className={classes.labelWithIcon}>
              <Icon color="primary">inventory_2</Icon>
              <a className={classes.tittle}>Atributos</a>
            </div>
            {/*  <Divider />
             */}
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
        </MyBox>
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
                <TextField variant="outlined" label="Largo" value="1 Metro" />
              </div>
              <div className={classes.labelWithIcon}>
                <Icon color="primary">chevron_right</Icon>
                <TextField variant="outlined" label="Largo" value="1 Metro" />
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
        </MyBox>
      </form>
      {/* <MyBox> */}
      <div style={{ padding: 16 }}>
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
    </div>
  )
}

export default ProductForm
