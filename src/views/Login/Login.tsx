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
  const classes = useStyles()

  const history = useHistory()

  const { user, setUser } = useContext(UserContext)

  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')

  const { isDark, setIsDark } = useContext(ThemeContextDispatch)

  /*   const { enqueueSnackbar } = useSnackbar() */

  const login = async () => {
    /*     setUser(pepe)
        console.log(setUser)
        */
    setUser(await userService.getUser())
    history.push('/home')
  }

  const logoLight = '/liesa-logo-negro.png'

  const labelLight = '/liesa-logo-login.png'

  const logoNight = '/liesa-logo-blanco.png'

  const labelNight = '/liesa-label-blanco.png'

  /*  const onKeyPress = async (key) => key === 'Enter' ? await login() : null
   */
  return (
    <Container className={classes.root} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/*       <img className={classes.logo} src={isDark ? logoNight : logoLight} /> */}
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
            /*             autoComplete="email" */
            autoFocus
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
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Recordar" />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={login}
          >
            Ingresar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Olvido su contraseña?
              </Link>
            </Grid>
            {/*             <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default Login
