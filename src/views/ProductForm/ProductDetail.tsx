import React, { useState, useContext, ReactNode } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { userService } from '../../services/UserService'
import { useHistory } from 'react-router-dom'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Button, Divider, fade, Icon, IconButton, InputAdornment, InputBase, withStyles } from '@material-ui/core'
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
import InputLabel from '@material-ui/core/InputLabel'
import { AccountCircle } from '@material-ui/icons'
import Input from '@material-ui/core/Input'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import ChangeCategoryDialog from './Components/ChangeCategoryDialog'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 550,
      gap: 32
    },
    tittle: {
      fontSize: '24px'
      /*       fontWeight: 600 */
    },
    row: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
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
    detailContainer: {
      display: 'flex',
      gap: 100
      /*   justifyContent: 'space-between' */
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
    attribute: {
      display: 'flex',
      flexDirection: 'column'
    },
    categoryInput: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    },
    dataContainer: {
      padding: '16px 0px 0px 40px'
    },
    dataCategoryContainer: {
      padding: '8px 0px 0px 40px'
    },
    categoryContainer: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-end'
      /*  flexDirection: 'column' */
    },
    attributeGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      padding: '16px 0px 0px 32px'
    }
  })
)

const ProductForm: React.FC = () => {
  const classes = useStyles()
  const classesGlobal = useGlobalStyle()
  const history = useHistory()

  const { isDark, setIsDark } = useContext(ThemeContextDispatch)

  const [productDetail, setProductDetail] = useState(productService.productDetail)

  const [value, setValue] = React.useState('Mercadolibre')
  /* 
  const handleCategoryDia = () => setOpen(true) */

  const [open, setOpen] = useState(false)

  const logoLight = '/liesa-logo-negro.png'

  const labelLight = '/liesa-label-negro.png'

  const logoNight = '/liesa-logo-blanco.png'

  const labelNight = '/liesa-label-blanco.png'

  const goHome = () => {
    history.push('/home')
  }

  if (!productDetail) return null

  //TODO placeholders en los inputs
  return (
    <MyBox>
      {console.log(productDetail)}
      <form className={classes.root}>
        <div>
          <div className={classes.row}>
            <Icon color="primary">content_paste</Icon>
            <a className={classes.tittle}>Detalle del producto</a>
          </div>
          <div className={classes.dataContainer}>
            <div className={classes.detailContainer}>
              <TextField
                label="Nombre"
                value={productDetail.name}
                /*              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon>content_paste</Icon>
                  </InputAdornment>
                )
              }} */
              />
              <TextField
                label="Marca"
                disabled
                value={productDetail.brand.name}
                /*               InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon>inventory_2</Icon>
                  </InputAdornment>
                )
              }} */
              />
            </div>
          </div>
        </div>
        {/*   <Divider color="primary" /> */}
        <div>
          <div className={classes.row}>
            <Icon color="primary">category</Icon>
            <a className={classes.tittle}>Categoria</a>
          </div>

          <div className={classes.dataCategoryContainer}>
            <div className={classes.categoryContainer}>
              <div className={classes.row}>
                {/*   <Icon>map</Icon> */}
                <div className={classes.categoryPathContainer}>
                  <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    {productDetail.category.categoryPath.map((path) => (
                      <a>{path.name}</a>
                    ))}
                  </Breadcrumbs>
                </div>
              </div>
              <div className={classes.categoryInput}>
                <div className={classes.row}>{/*            {productDetail.category.name} */}</div>
                <IconButton color="primary" style={{ padding: 4 }} onClick={() => setOpen(true)}>
                  <Icon>edit</Icon>
                </IconButton>
                <ChangeCategoryDialog open={open} setOpen={setOpen} />
              </div>
            </div>
          </div>
        </div>
        {/*  <Divider color="primary" /> */}
        <div>
          <div className={classes.row}>
            <Icon color="primary">inventory_2</Icon>
            <a className={classes.tittle}>Atributos</a>
          </div>
          <div className={classes.attributeGrid}>
            {productDetail.category.attributes.map((attribute) => (
              <div className={classes.row}>
                <Icon>chevron_right</Icon>
                <TextField
                  label={attribute.name}
                  value={attribute.value}
                  /*  InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Icon>inventory_2</Icon>
                    </InputAdornment>
                  )
                }} */
                />
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
