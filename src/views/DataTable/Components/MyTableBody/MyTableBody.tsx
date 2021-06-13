import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import MyLinearProgress from '../MyLinearProgress'
import { Product } from '../../../../types/Product'
import { Order } from '../../../../types/Order'
import Markets from './components/Markets'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import { fade } from '@material-ui/core/styles/colorManipulator'
import MyChip from './components/MyChip'
import useWindowScrollPosition from '../../../../hooks/useWindowScrollPosition'

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
    tableCellProgressLinear: {
      width: 150
    },

    tableRow: {
      '&$selected': {
        backgroundColor: theme.palette.primary.main,
        opacity: 0.16
      }
    },
    rowSelected: {
      backgroundColor: fade(theme.palette.primary.main, 0.08) + '!important'
    },
    checkbox: {
      color: theme.palette.primary.main + '!important'
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
  rows: Product[]
  order: Order
  orderBy: keyof Product
  page: number
  rowsPerPage: number
  isSelected: (value: number) => boolean
  handleGoToProductClick: (productId: number) => void
  handleClickCheckBox: (event: React.MouseEvent<unknown>, sku: number) => void
  emptyRows: number
  dense: boolean
  loading: boolean
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
    handleGoToProductClick: handleClick,
    handleClickCheckBox,
    emptyRows,
    dense,
    loading
  } = props

  /*   const isTheLastPage = page > rows.length / rowsPerPage

  const calculeteTailOfPage = () => {
    if (isTheLastPage) return rows.length - page * rowsPerPage
    else return page * rowsPerPage + rowsPerPage
  }
 */
  return (
    <TableBody>
      {/*   <LoadingCircularProgress></LoadingCircularProgress> */}
      {rows.map((row, index) => {
        {
          /*   {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => { */
        }
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
            className={classes.tableRow}
            classes={{
              selected: classes.rowSelected
            }}
          >
            <TableCell className={classes.tableCell} padding="checkbox">
              <Checkbox
                onClick={(event) => handleClickCheckBox(event, row.sku)}
                checked={isItemSelected}
                inputProps={{ 'aria-labelledby': labelId }}
                classes={{
                  checked: classes.checkbox
                }}
              />
            </TableCell>
            <TableCell className={classes.tableCell} align="right" id={labelId}>
              {row.sku}
            </TableCell>
            <TableCell className={classes.tableCell} size="medium" align="left">
              {row.name}
            </TableCell>
            <TableCell className={classes.tableCell} align="left">
              {row.brand.name}
            </TableCell>
            {/*             <TableCell className={classes.tableCell} align="right">
              {row.stock}
            </TableCell> */}
            <TableCell className={classes.tableCellProgressLinear} align="right">
              <MyLinearProgress value={row.filledDataProgress} />
            </TableCell>
            <TableCell align="left">
              <MyChip progress={row.filledDataProgress} />
            </TableCell>
            {/*             <TableCell align="left">
              <Markets markets={row.activeMarketPlaces} />
            </TableCell> */}
            <TableCell align="left">
              <IconButton onClick={() => handleClick(row.id)}>
                <Icon color="primary">edit_note</Icon>
              </IconButton>
            </TableCell>
          </TableRow>
        )
      })}

      {/*      {emptyRows > 0 && (
        <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )} */}
    </TableBody>
  )
}

export default MyTableBody
