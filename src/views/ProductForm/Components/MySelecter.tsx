import React from 'react'
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputBase from '@material-ui/core/InputBase'

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {}
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: 'none',
      fontSize: 16,

      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
      }
    }
  })
)(InputBase)

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1)
    }
  })
)

export default function MySelecter() {
  const classes = useStyles()
  const [age, setAge] = React.useState('')
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string)
  }
  return (
    <FormControl>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={10}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        <MenuItem value={10}>Cm</MenuItem>
        <MenuItem value={20}>Mm</MenuItem>
        <MenuItem value={30}>Kg</MenuItem>
      </Select>
    </FormControl>
  )
}
