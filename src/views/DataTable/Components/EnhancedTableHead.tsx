import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { Order } from '../../../types/Order'
import { Data } from '../../../types/Data'
import clsx from 'clsx'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1
    },
    tableHead: {
      backgroundColor: theme.palette.type == 'dark' ? theme.palette.background.paper : theme.palette.background.default,
      filter: theme.palette.type == 'dark' ? 'brightness(70%)' : 'brightness(95%)'
      // backgroundColor: theme.palette.primary.main,
      // color: 'white'
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
    }
  })
)

interface HeadCell {
  disablePadding: boolean
  id: keyof Data
  label: string
  numeric: boolean
}

const headCells: HeadCell[] = [
  { id: 'sku', numeric: true, disablePadding: true, label: 'SKU' },
  { id: 'nombre', numeric: false, disablePadding: false, label: 'Nombre' },
  { id: 'marca', numeric: false, disablePadding: false, label: 'Marca' },
  { id: 'precio', numeric: true, disablePadding: false, label: 'Precio' },
  { id: 'stock', numeric: true, disablePadding: false, label: 'Stock' },
  { id: 'progreso', numeric: false, disablePadding: false, label: 'Progreso' },
  { id: 'progreso', numeric: false, disablePadding: false, label: 'Estado' },
  { id: 'tienda', numeric: false, disablePadding: false, label: 'Tienda' }
]

interface EnhancedTableProps {
  numSelected: number
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  order: Order
  orderBy: string
  rowCount: number
}

const EnhancedTableHead: React.FC<EnhancedTableProps> = (props) => {
  const classes = useStyles()
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props
  const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell className={clsx(classes.tableHead, classes.tableHeadLeft)} padding={'checkbox'}>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell, index) => (
          <TableCell
            className={clsx(
              classes.tableHead,
              headCells.length == index + 1 ? classes.tableHeadRight : classes.tableHead
            )}
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              className={classes.headLabel}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default EnhancedTableHead
