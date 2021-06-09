import React, { useState } from 'react'
import { createStyles, lighten, makeStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import MyDraggableDialog from './MyDraggableDialog'
import Draggable from 'react-draggable'

const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1)
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.primary.main,
            backgroundColor: lighten(theme.palette.primary.light, 0.85)
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.primary.dark
          },
    title: {
      flex: '1 1 100%'
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    draggable: {
      position: 'absolute',
      background: 'white',
      padding: 8,
      zIndex: 10,
      opacity: 100,
      borderRadius: 15,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: theme.palette.primary.main,

      cursor: 'pointer',
      right: 9
    },
    filters: {
      padding: '16px 0px',
      display: 'flex'
    }
  })
)

interface MyTableToolbarProps {
  numSelected: number
}

const MyTableToolbar: React.FC<MyTableToolbarProps> = (props) => {
  const classes = useToolbarStyles()

  const { numSelected } = props

  const [column, setColumn] = useState('SKU')

  const [operator, setOperator] = useState('=')

  const [value, setValue] = useState('')

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Toolbar>
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        Productos
      </Typography>
      {/*       <Button variant="outlined" color="primary" onClick={() => handleClickOpen()}>
        Filtros
      </Button> */}
      {/*       {open && (
        <Draggable>*/}
      {/*       <div className={classes.filters}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Columna</InputLabel>
          <Select
            onChange={(event) => setColumn(event.target.value as string)}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={column}
          >
            <MenuItem value={'SKU'}>SKU</MenuItem>
            <MenuItem value={'Nombre'}>Nombre</MenuItem>
            <MenuItem value={'Marca'}>Marca</MenuItem>
            <MenuItem value={'Progreso'}>Progreso</MenuItem>
            <MenuItem value={'Estado'}>Estado</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Operador</InputLabel>
          <Select
            onChange={(event) => setOperator(event.target.value as string)}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={operator}
          >
            <MenuItem value={'='}>=</MenuItem>
            <MenuItem value={'!='}>!=</MenuItem>
            <MenuItem value={'<'}>{'<'}</MenuItem>
            <MenuItem value={'>'}>{'>'}</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            InputLabelProps={{
              shrink: true
            }}
            label="Valor"
          />
        </FormControl>
      </div> */}
      {/*       <a onClick={() => setOpen(false)} style={{ padding: 8, width: 8 }}>
        X
      </a> */}
      {/*           </div>
        </Draggable>
      )} */}
    </Toolbar>

    /*  <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} seleccionados
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Productos
        </Typography>
        
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar> */
  )
}

export default MyTableToolbar
