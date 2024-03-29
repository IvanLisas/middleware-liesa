import React, { useState, useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { userService } from '../../services/UserService'
import { useHistory } from 'react-router-dom'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { ThemeContextDispatch } from '../../contexts/ThemeContext'
import { useSnackbar } from 'notistack'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      /*     justifyContent: 'center', */
      alignItems: 'center'
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    },
    logo: {
      width: '9rem',
      height: '9rem'
    },
    logoLabel: {
      width: '150px',
      height: '18px',
      marginRight: '0.5rem'
    },
    logoLogin: {
      width: '60%'
    }
  })
)

const Login: React.FC = () => {
  const labelLight = '/liesa-logo-login.png'

  const labelNight = '/liesa-label-blanco.png'

  const { isDark } = useContext(ThemeContextDispatch)

  const classes = useStyles()

  const history = useHistory()

  const { setUser } = useContext(UserContext)

  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')

  const { enqueueSnackbar } = useSnackbar()

  const login = async () => {
    try {
      setUser(await userService.login(username, password))
      history.push('/home')
    } catch (error) {
      console.log(error)
      enqueueSnackbar('Error al ingresar ver consola', { variant: 'error' })
    }
  }

  return (
    <Container className={classes.root} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img className={classes.logoLogin} src={isDark ? labelNight : labelLight} />
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="user"
            label="Usuario"
            name="user"
            autoFocus
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Recordar" />
          <Button fullWidth variant="contained" color="primary" className={classes.submit} onClick={login}>
            Ingresar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Olvido su contraseña?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default Login
