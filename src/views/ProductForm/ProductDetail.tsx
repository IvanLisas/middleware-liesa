import React, { useState, useContext, ReactNode } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { userService } from '../../services/UserService'
import { useHistory } from 'react-router-dom'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Button, Divider, Icon } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import MyBox from '../../components/MyBox'
import useGlobalStyle from '../../styles/globalStyles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import { productService } from '../../services/ProductService'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { ThemeContextDispatch } from '../../contexts/ThemeContext'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      minWidth: 550,
      padding: 24
    },
    tittle: {
      fontSize: '24px'
      /*       fontWeight: 600 */
    },
    row: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-end'
    },

    value: {
      fontWeight: 600
    },
    categoryPathContainer: {
      display: 'flex',
      gap: 8
    },
    table: {
      padding: '8px 24px',
      display: 'flex',
      gap: 8,
      flexDirection: 'column'
    },
    attributeRow: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 8
    },
    sub: {
      display: 'flex',
      gap: 100,
      justifyContent: 'space-between'
    },
    sub1: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      justifyContent: 'space-between'
    },
    logoLabel: {
      width: '120px',
      height: '120px'
      /*  marginRight: '0.5rem' */
    },
    sub2: {}
  })
)

const ProductForm: React.FC = () => {
  const classes = useStyles()
  const classesGlobal = useGlobalStyle()
  const history = useHistory()

  const { isDark, setIsDark } = useContext(ThemeContextDispatch)

  const [productDetail, setProductDetail] = useState(productService.productDetail)

  const [value, setValue] = React.useState('Mercadolibre')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }

  const logoLight = '/liesa-logo-negro.png'

  const labelLight = '/liesa-label-negro.png'

  const logoNight = '/liesa-logo-blanco.png'

  const labelNight = '/liesa-label-blanco.png'

  const goHome = () => {
    history.push('/home')
  }

  if (!productDetail) return null

  return (
    <MyBox>
      <a className={classes.tittle}>Detalle del producto</a>
      {console.log(productDetail)}
      <form className={classes.root}>
        <div className={classes.sub}>
          <div className={classes.sub1}>
            <div className={classes.row}>
              <Icon>content_paste</Icon>
              <div>
                <a>Nombre: </a>
                <a className={classes.value}>{productDetail.name}</a>
              </div>
            </div>
            <div className={classes.row}>
              <Icon>inventory_2</Icon>
              <div>
                <a>Marca: </a>
                <a className={classes.value}>{productDetail.brand.name}</a>
              </div>
            </div>
            <div>
              <div className={classes.row}>
                <Icon>category</Icon>
                <div>
                  <a>Catelogria:</a>
                  <a className={classes.value}> {productDetail.category.name}</a>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.sub2}>
            <img className={classes.logoLabel} src={isDark ? logoNight : logoLight} />
          </div>
        </div>
        <div className={classes.row}>
          <Icon>map</Icon>
          <div className={classes.categoryPathContainer}>
            <a>Ruta de la categoria:</a>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
              {productDetail.category.categoryPath.map((path) => (
                <a>{path.name}</a>
              ))}
            </Breadcrumbs>
          </div>
        </div>
        <div>
          <div className={classes.row}>
            <Icon>fact_check</Icon>
            <a>Atributos:</a>
          </div>
          <div className={classes.table}>
            {productDetail.category.attributes.map((attribute) => (
              <div className={classes.attributeRow}>
                <Icon>chevron_right</Icon>
                <div>
                  <a>{attribute.name}:</a>
                  <a className={classes.value}> {attribute.value}</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={classesGlobal.endButtonContainer}>
          <Button onClick={goHome} type="submit" variant="contained" color="primary">
            Guardar
          </Button>
          <Button onClick={goHome} variant="contained" color="secondary">
            Cancelar
          </Button>
        </div>
      </form>
    </MyBox>
  )
}

export default ProductForm

/* 

import React, { useState, useContext, ReactNode } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { userService } from '../../services/UserService'
import { useHistory } from 'react-router-dom'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { ThemeContextDispatch } from '../../contexts/ThemeContext'
import MyBox from '../../components/MyBox'
import useGlobalStyle from '../../styles/globalStyles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import { productService } from '../../services/ProductService'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {}
  })
)

const ProductForm: React.FC = () => {
  const classes = useStyles()
  const classesGlobal = useGlobalStyle()
  const history = useHistory()

  const [productDetail, setProductDetail] = useState(productService.productDetail)

  const [value, setValue] = React.useState('Mercadolibre')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }

  const goHome = () => {
    history.push('/home')
  }

  if (!productDetail) return null

  return (
    <MyBox>
      Detalle del producto
      {console.log(productDetail)}
      <form className={classes.form}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Nombre"
          value={productDetail.name}
          autoFocus
          disabled={true}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          name="brand"
          label="Marca"
          id="brnd"
          value={productDetail.brand.name}
          disabled={true}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          name="brand"
          label="Categoria"
          id="brnd"
          value={productDetail.category.name}
          disabled={true}
        />
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          {productDetail.category.categoryPath.map((path) => (
            <a>{path.name}</a>
          ))}
        </Breadcrumbs>
        {productDetail.category.attributes.map((attribute) => (
          <div>
            <a>{attribute.name}</a>:<a>{attribute.value}</a>
          </div>
        ))}

        <div className={classesGlobal.endButtonContainer}>
          <Button onClick={goHome} type="submit" variant="contained" color="primary">
            Guardar
          </Button>
          <Button onClick={goHome} variant="contained" color="secondary">
            Cancelar
          </Button>
        </div>
      </form>
    </MyBox>
  )
}

export default ProductForm
 */
