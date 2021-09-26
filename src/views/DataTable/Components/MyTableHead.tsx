import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { Order } from '../../../types/Order'
import clsx from 'clsx'
import Button from '@material-ui/core/Button'
import { Input, InputBase, withStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tableHead: {
      backgroundColor: theme.palette.type == 'dark' ? theme.palette.background.paper : theme.palette.background.default,
      filter: theme.palette.type == 'dark' ? 'brightness(70%)' : 'brightness(95%)',
      // backgroundColor: theme.palette.primary.main,
      // color: 'white'
      borderSpacing: '2px',

      fontSize: '1rem'
    },
    tableHeadLeft: {
      borderTopLeftRadius: 6
    },
    tableHeadRight: {
      borderTopRightRadius: 6
    },
    headLabel: {
      fontSize: '1rem',
      fontWeight: 700
    },
    checkbox: {
      color: theme.palette.primary.main + '!important'
    }
  })
)

interface HeadProps {
  label: string
  type: 'string' | 'number' | 'undefined'
}

const headCellsProps: HeadProps[] = [
  { label: 'Nombre', type: 'string' },
  { label: 'SKU', type: 'number' },
  { label: 'Cod de producto', type: 'number' },
  { label: 'Marca', type: 'string' },
  { label: 'Cod alfanumérico', type: 'number' },

  /*   { label: 'Stock' }, */
  /*   { label: 'Progreso' },
  { label: 'Estado' }, */
  /*   { label: 'Tiendas  ' }, */
  { label: ' ', type: 'undefined' },
  { label: ' ', type: 'undefined' }
]

interface MyTableHeadProps {
  numSelected: number
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  order: Order
  orderBy: string
  rowCount: number
}

const MyTableHead: React.FC<MyTableHeadProps> = (props) => {
  const classes = useStyles()

  const { onSelectAllClick, numSelected, rowCount } = props

  /*   const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property)
  } */

  //TODO REDONDEAR FINAL
  const headCell = (head: HeadProps, index: number) => (
    <TableCell key={head.label + index} className={classes.tableHead}>
      {head.label !== ' ' && (
        <div className="action-column">
          {/*           <Button>
            <span className="material-icons">arrow_up</span>
          </Button> */}
          {/* <TextField style={{ padding: 0 }} id="outlined-basic" label={placeholder} variant="filled" /> */}
          <BootstrapInput style={{ textAlign: 'end' }} placeholder={head.label}></BootstrapInput>
        </div>
      )}
      {/* {placeholder} */}
    </TableCell>
  )

  const BootstrapInput = withStyles((theme: Theme) =>
    createStyles({
      root: {
        'label + &': {}
      },
      input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontSize: 14,
        padding: 8,
        fontWeight: 600,
        border: '1px solid #ced4da',
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
          borderColor: theme.palette.primary.main,
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
        }
      }
    })
  )(InputBase)

  return (
    <TableHead>
      <TableRow>
        <TableCell className={clsx(classes.tableHead, classes.tableHeadLeft)} padding={'checkbox'}>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
            classes={{
              checked: classes.checkbox
            }}
          />
        </TableCell>
        {headCellsProps.map((headCellData, index) => headCell(headCellData, index))}
      </TableRow>
    </TableHead>
  )
}

export default MyTableHead
