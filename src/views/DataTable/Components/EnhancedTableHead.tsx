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
import Button from '@material-ui/core/Button'
import { Input } from '@material-ui/core'

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
      filter: theme.palette.type == 'dark' ? 'brightness(70%)' : 'brightness(95%)',
      // backgroundColor: theme.palette.primary.main,
      // color: 'white'
      borderSpacing: '2px',
      fontWeight: 600,
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
    }
  })
)

interface HeadProps {
  label: string
}

const headCellsProps: HeadProps[] = [
  { label: 'SKU' },
  { label: 'Nombre' },
  { label: 'Marca' },
  { label: 'Stock' },
  { label: 'Progreso' },
  { label: 'Estado' },
  { label: 'Tiendas  ' },
  { label: '' }
]

interface EnhancedTableProps {
  numSelected: number
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  order: Order
  orderBy: string
  rowCount: number
}

const EnhancedTableHead: React.FC<EnhancedTableProps> = (props) => {
  const classes = useStyles()

  const { onSelectAllClick, numSelected, rowCount } = props

  /*   const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property)
  } */

  //TODO REDONDEAR FINAL
  const headCell = (placeholder: string) => (
    <TableCell className={classes.tableHead}>
      {/*       <div className="action-column">
        <Input placeholder={placeholder} />
        <Button>
          <span className="material-icons">arrow_up</span>
        </Button> 
      </div> */}
      {placeholder}
    </TableCell>
  )

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
        {headCellsProps.map((headCellData, index) => headCell(headCellData.label))}
      </TableRow>
    </TableHead>
  )
}

export default EnhancedTableHead
