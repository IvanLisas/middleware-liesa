import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import MyChip from './MyChip'
import MyLinearProgress from './MyLinearProgress'
import { Data } from '../../../types/Data'
import { Order } from '../../../types/Order'
import Markets from './Markets'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    itemLogo: {
      width: '25px',
      height: '25px',
      marginRight: '5px'
    },
    tableCell: {
      fontSize: '1rem'
    },
    chip: {
      /*       paddingRight: 0,
      paddingLeft: 50 */
    },
    market: {
      /*      paddingRight: 30, */
      /*    paddingLeft: 30 */
    }
  })
)

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

export function getComparator<Key extends keyof number | string | symbol>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: number | string | string[] }, b: { [key in Key]: number | string | string[] }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

export function stableSort<T>(array: T[], comparator: (a: T, b: T) => number): T[] {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

interface MyTableBodyProps {
  rows: Data[]
  order: Order
  orderBy: keyof Data
  page: number
  rowsPerPage: number
  isSelected: (value: number) => boolean
  handleClick: (event: React.MouseEvent<unknown>, sku: number) => void
  handleClickCheckBox: (event: React.MouseEvent<unknown>, sku: number) => void
  emptyRows: number
  dense: boolean
}

const MyTableBody: React.FC<MyTableBodyProps> = (props) => {
  const classes = useStyles()

  const {
    rows,
    order,
    orderBy,
    page,
    rowsPerPage,
    isSelected,
    handleClick,
    handleClickCheckBox,
    emptyRows,
    dense
  } = props

  return (
    <TableBody>
      {stableSort(rows, getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          const isItemSelected = isSelected(row.sku)
          const labelId = `enhanced-table-checkbox-${index}`
          return (
            <TableRow
              hover
              /*    onClick={(event) => handleClick(event, row.sku)} */
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={row.sku}
              selected={isItemSelected}
            >
              <TableCell className={classes.tableCell} padding="checkbox">
                <Checkbox
                  onClick={(event) => handleClickCheckBox(event, row.sku)}
                  checked={isItemSelected}
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </TableCell>
              <TableCell className={classes.tableCell} align="right" id={labelId}>
                {row.sku}
              </TableCell>
              <TableCell className={classes.tableCell} size="medium" align="left">
                {/*                 <Link style={{ cursor: 'pointer', color: 'none' }} onClick={(event) => handleClick(event, row.id)}>
                  {row.nombre} 
                </Link>*/}
                <a style={{ cursor: 'pointer' }} onClick={(event) => handleClick(event, row.id)}>
                  {row.nombre}
                </a>
              </TableCell>
              {/*               <a style={{ cursor: 'pointer' }} onClick={(event) => handleClick(event, row.id)}>
                  {row.nombre}
                </a> */}
              <TableCell className={classes.tableCell} align="left">
                {row.marca}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {row.stock}
              </TableCell>
              <TableCell align="right">
                <MyLinearProgress value={row.progreso} />
              </TableCell>
              <TableCell align="left">
                <MyChip progress={row.progreso} />
              </TableCell>
              <TableCell className={classes.market} align="left">
                <Markets markets={row.tienda} />
              </TableCell>
            </TableRow>
          )
        })}
      {emptyRows > 0 && (
        <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  )
}

export default MyTableBody
