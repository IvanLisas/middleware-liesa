import React from 'react'
import clsx from 'clsx'
import { createStyles, lighten, makeStyles, Theme } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox'
import { withStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'
import MyBox from '../../components/MyBox'
import MyCircularProgress from './Components/MyCircularProgress'
import MyLinearProgress from './Components/MyLinearProgress'
import useGlobalStyle from '../../styles/globalStyles'
import { NumberLiteralType } from 'typescript'

type Data = {
  sku: number
  nombre: string
  marca: string
  precio: number
  tienda: string
  porcentaje: number
  progreso: number
  stock: number
}

function createData(
  sku: number,
  nombre: string,
  marca: string,
  precio: number,
  tienda: string,
  porcentaje: number,
  progreso: number,
  stock: number
): Data {
  return { sku, nombre, marca, precio, tienda, porcentaje, progreso, stock }
}

const rows = [
  createData(1, 'Termonoseque', 'HP', 787542, 'googleshopping-logo.png', Math.random() * 100, 100, 456),
  createData(2, 'La kuka', 'Siemens', 6000000, 'mercadolibre-logo.png', Math.random() * 100, Math.random() * 100, 121),
  createData(3, 'Termica', 'Manaos', 4568, 'magento-logo.png', 100, Math.random() * 100, 865),
  createData(4, 'Cosa rara', 'Microsft', 5635, 'googleshopping-logo.png', Math.random() * 100, Math.random() * 100, 1),
  createData(5, 'Aparato', 'Apple', 1, 'tiendanube-logo.png', Math.random() * 100, Math.random() * 100, 2241),
  createData(6, 'Otro aparato', 'Siemens', 5742, 'tiendanube-logo.png', 100, Math.random() * 100, 124),
  createData(7, 'Transformador', 'Dell', 8522, 'mercadolibre-logo.png', Math.random() * 100, Math.random() * 100, 632),
  createData(8, 'Termotanque', 'Samsung', 1755, 'magento-logo.png', 100, Math.random() * 100, 21),
  createData(9, 'Termonoseque', 'HP', 787542, 'googleshopping-logo.png', Math.random() * 100, 100, 85),
  createData(10, 'La kuka', 'Siemens', 6000000, 'mercadolibre-logo.png', Math.random() * 100, Math.random() * 100, 454),
  createData(11, 'Termica', 'Manaos', 4568, 'magento-logo.png', Math.random() * 100, Math.random() * 100, 231),
  createData(
    12,
    'Cosa rara',
    'Microsft',
    5635,
    'googleshopping-logo.png',
    Math.random() * 100,
    Math.random() * 100,
    282
  ),
  createData(13, 'Aparato', 'Apple', 1, 'tiendanube-logo.png', Math.random() * 100, Math.random() * 100, 231),
  createData(14, 'Otro aparato', 'Siemens', 5742, 'tiendanube-logo.png', Math.random() * 100, Math.random() * 100, 89),
  createData(15, 'Transformador', 'Dell', 8522, 'mercadolibre-logo.png', Math.random() * 100, Math.random() * 100, 111),
  createData(16, 'Termotanque', 'Samsung', 1755, 'magento-logo.png', 96, 12, 21),
  createData(17, 'Termonoseque', 'HP', 787542, 'googleshopping-logo.png', Math.random() * 100, Math.random() * 100, 15),
  createData(18, 'La kuka', 'Siemens', 6000000, 'mercadolibre-logo.png', 4, 12, 4),
  createData(19, 'Termica', 'Manaos', 4568, 'magento-logo.png', 12, 12, 675),
  createData(
    20,
    'Cosa rara',
    'Microsft',
    5635,
    'googleshopping-logo.png',
    Math.random() * 100,
    Math.random() * 100,
    231
  ),
  createData(21, 'Aparato', 'Apple', 1, 'tiendanube-logo.png', 23, 12, 765),
  createData(22, 'Otro aparato', 'Siemens', 5742, 'tiendanube-logo.png', Math.random() * 100, Math.random() * 100, 231),
  createData(23, 'Transformador', 'Dell', 8522, 'mercadolibre-logo.png', 0, 12, 566),
  createData(24, 'Termotanque', 'Samsung', 1755, 'magento-logo.png', Math.random() * 100, Math.random() * 100, 231)
]

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

type Order = 'asc' | 'desc'

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

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
  { id: 'porcentaje', numeric: true, disablePadding: false, label: 'Porcentaje' },
  { id: 'stock', numeric: true, disablePadding: false, label: 'Stock' },
  { id: 'progreso', numeric: true, disablePadding: false, label: 'Progreso' },
  { id: 'tienda', numeric: true, disablePadding: false, label: 'Tienda' }
]

interface EnhancedTableProps {
  classes: ReturnType<typeof useStyles>
  numSelected: number
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  order: Order
  orderBy: string
  rowCount: number
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props
  const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property)
  }

  const WhiteCheckBox = withStyles({
    root: {
      color: 'white',
      '&$checked': {
        color: '#white'
      }
    },
    checked: {}
  })((props: CheckboxProps) => <Checkbox color="default" {...props} />)

  return (
    <TableHead>
      <TableRow>
        <TableCell className={classes.tableHead} padding={'checkbox'}>
          {/*           <Checkbox
            color="default"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          /> */}

          <WhiteCheckBox
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            name="checkedG"
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            className={classes.tableHead}
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
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

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
    }
  })
)

interface EnhancedTableToolbarProps {
  numSelected: number
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const classes = useToolbarStyles()

  const { numSelected } = props

  return (
    <Toolbar
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
    </Toolbar>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
      /*       maxHeight: 300 */
    },
    paper: {
      width: '100%',
      boxShadow: 'none',
      flexWrap: 'wrap',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'space-between'
      /*minWidth: '1000px' */
      /*maxHeight: '180px' */
    },
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
    itemLogo: {
      width: '25px',
      height: '25px',
      marginRight: '5px'
    },
    tableCell: {
      fontSize: '1rem'
    },
    circularProgress: {
      paddingRight: '35px'
    },
    linearProgress: {
      paddingRight: 0,
      paddingLeft: 50,
      width: '10%'
    },
    tableHead: {
      backgroundColor: theme.palette.primary.main,
      color: 'white'
    },
    tableContainer: {
      maxHeight: 'calc(100vh - 260px)'
    },
    bottomContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0px 12px'
    },
    paper2: {
      /*  display: 'flex' */
    },
    checkbox: {
      color: 'white',
      backgroundColor: 'white'
    },
    headLabel: {
      fontSize: '1rem'
    }
  })
)

const DataTable: React.FC = () => {
  const classes = useStyles()
  const classesGlobal = useGlobalStyle()
  const [order, setOrder] = React.useState<Order>('asc')
  const [orderBy, setOrderBy] = React.useState<keyof Data>('sku')
  const [selected, setSelected] = React.useState<number[]>([])
  const [page, setPage] = React.useState(0)
  const [dense, setDense] = React.useState(true)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const PrimaryCheckBox = withStyles({
    root: {
      color: '#399ead',
      '&$checked': {
        color: '#399ead'
      }
    },
    checked: {}
  })((props: CheckboxProps) => <Checkbox color="default" {...props} />)

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.sku)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleClick = (event: React.MouseEvent<unknown>, sku: number) => {
    const selectedIndex = selected.indexOf(sku)
    let newSelected: number[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, sku)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
    }

    setSelected(newSelected)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked)
  }

  const isSelected = (sku: number) => selected.indexOf(sku) !== -1

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  return (
    <MyBox>
      <Paper className={classes.paper}>
        <div className={classes.paper2}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer className={clsx(classes.tableContainer, classesGlobal.scrollbarStyles)}>
            <Table
              stickyHeader
              aria-label="sticky table"
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.sku)
                    const labelId = `enhanced-table-checkbox-${index}`

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.sku)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.sku}
                        selected={isItemSelected}
                      >
                        <TableCell className={classes.tableCell} padding="checkbox">
                          <PrimaryCheckBox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                        </TableCell>
                        <TableCell className={classes.tableCell} align="right" id={labelId}>
                          {row.sku}
                        </TableCell>
                        <TableCell className={classes.tableCell} size="medium" align="left">
                          {row.nombre}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="left">
                          {row.marca}
                        </TableCell>
                        <TableCell className={classes.tableCell} align="right">
                          ${row.precio}
                        </TableCell>
                        <TableCell className={classes.circularProgress} align="right">
                          <MyCircularProgress value={row.porcentaje} />
                        </TableCell>
                        <TableCell className={classes.tableCell} align="right">
                          {row.stock}
                        </TableCell>
                        <TableCell className={classes.linearProgress} align="right">
                          <MyLinearProgress value={row.progreso} />
                        </TableCell>
                        <TableCell className={classes.tableCell} align="right">
                          <img className={classes.itemLogo} src={row.tienda} />
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
            </Table>
          </TableContainer>
        </div>
        <div className={classes.bottomContainer}>
          <FormControlLabel
            control={<Switch color="primary" checked={dense} onChange={handleChangeDense} />}
            label="Margen denso"
          />
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </div>
      </Paper>
    </MyBox>
  )
}

export default DataTable
