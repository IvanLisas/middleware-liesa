import React, { useState, useContext, ReactNode } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { userService } from '../../services/UserService'
import { useHistory } from 'react-router-dom'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
/* import showError from '../../Errors/Error'
import { useSnackbar } from 'notistack' */

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 20,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '4px',
      width: '100%'
    },
    logo: {
      width: '9rem',
      height: '9rem'
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    button: {
      borderRadius: '16px',
      /* backgroundColor:  theme.palette.secondary.main, */
      outline: '0px',
      /*     fontWeight: '500', */
      cursor: 'pointer',
      border: 'none',
      color: theme.palette.text.secondary,
      textTransform: 'none',
      width: '100%'
    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  })
)

const Login: React.FC = () => {
  const classes = useStyles()

  const history = useHistory()

  const { user, setUser } = useContext(UserContext)

  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')

  /*   const { enqueueSnackbar } = useSnackbar() */

  const login = async () => {
    /*     setUser(pepe)
        console.log(setUser)
        */
    setUser(await userService.getUser())
    history.push('/home')
  }

  /*  const onKeyPress = async (key) => key === 'Enter' ? await login() : null
   */
  return (
    <div>
      {' '}
      login
      {console.log(user)}
      <Button onClick={login}>Login</Button>
    </div>
  )
}

export default Login
