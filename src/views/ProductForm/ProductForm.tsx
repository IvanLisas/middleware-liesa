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

  const [value, setValue] = React.useState('Mercadolibre')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }

  const goHome = () => {
    history.push('/home')
  }

  return (
    <MyBox>
      Producto
      <form className={classes.form}>
        <TextField variant="outlined" margin="normal" required fullWidth id="name" label="Nombre" autoFocus />
        <TextField variant="outlined" margin="normal" required fullWidth name="brand" label="Marca" id="brnd" />
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value="mercadolibre" control={<Radio />} label="Female" />
          <FormControlLabel value="tiendanube" control={<Radio />} label="Male" />
          <FormControlLabel value="googlesho" control={<Radio />} label="Other" />
          <FormControlLabel value="magento" control={<Radio />} label="Other" />
          <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
        </RadioGroup>
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
