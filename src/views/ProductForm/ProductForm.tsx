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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {}
  })
)

const ProductForm: React.FC = () => {
  const classes = useStyles()

  return (
    <MyBox>
      <form className={classes.form} noValidate>
        <TextField variant="outlined" margin="normal" required id="name" label="Nombre" autoFocus />
        <TextField variant="outlined" margin="normal" required name="brand" label="Marca" id="brnd" />

        <Button type="submit" fullWidth variant="contained" color="primary">
          Guardar
        </Button>
        <Button type="submit" fullWidth variant="contained" color="secondary">
          Cancelar
        </Button>
      </form>
    </MyBox>
  )
}

export default ProductForm
