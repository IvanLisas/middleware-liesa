import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Icon, FormControl, InputLabel, OutlinedInput, InputAdornment, Button } from '@material-ui/core'
import { useSnackbar } from 'notistack'
import { productService } from '../services/ProductService'
import useGlobalStyle from '../styles/globalStyles'
import { Product } from '../types/Product'
import MySelecter from '../views/ProductForm/Components/MySelecter'
import MyBox from './MyStyledComponents/MyBox'

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

interface VolumenCardProps {
  setOpen: (value: boolean) => void
}

const VolumenCard: React.FC<VolumenCardProps> = ({ setOpen }) => {
  const classes = useStyles()

  const classesGlobal = useGlobalStyle()

  const history = useHistory()

  const { enqueueSnackbar } = useSnackbar()

  const [productDetail, setProductDetail] = useState<Product | null>(null)

  const { id } = useParams<{ id: string }>()

  const goHome = () => {
    history.goBack()
  }
  /* 
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
  }, []) */

  /*   if (!productDetail) return null */

  return (
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

      <div style={{ padding: '16px 16px 0px 16px' }}>
        <div className={classesGlobal.endButtonContainer}>
          <Button onClick={() => setOpen(false)} type="submit" variant="contained" color="primary">
            Guardar
          </Button>
          <Button onClick={() => setOpen(false)} variant="contained" color="secondary">
            Cancelar
          </Button>
        </div>
      </div>
    </MyBox>
  )
}

export default VolumenCard
