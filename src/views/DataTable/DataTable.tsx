import React, { useEffect, useRef, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import TablePagination from '@material-ui/core/TablePagination'
import Paper from '@material-ui/core/Paper'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import MyBox from '../../components/MyBox'
import MyTableBody from './Components/MyTableBody'
import useGlobalStyle from '../../styles/globalStyles'
import { productService } from '../../services/ProductService'
import EnhancedTableToolbar from './Components/EnhancedTableToolbar'
import clsx from 'clsx'
import { Order } from '../../types/Order'
import EnhancedTableHead from './Components/EnhancedTableHead'
import { Product } from '../../types/Product'
import { useHistory } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import CircularProgress from '@material-ui/core/CircularProgress'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    paper: {
      width: '100%',
      minWidth: 1100,
      boxShadow: 'none',
      flexWrap: 'wrap',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'space-between'
    },
    tableContainer: {
      maxHeight: 'calc(100vh - 260px)' //TODO: Estos 260px tendrian que depender de componentes
    },
    bottomContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0px 12px'
    }
  })
)

const DataTable: React.FC = () => {
  const classes = useStyles()
  const classesGlobal = useGlobalStyle()
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<keyof Product>('sku')
  const [selected, setSelected] = useState<number[]>([])
  const [page, setPage] = useState(0)
  const [dense, setDense] = useState(true)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [rows, setRows] = useState<Product[]>([])
  const history = useHistory()
  const { enqueueSnackbar } = useSnackbar()
  const myRef = useRef(document.createElement('table'))
  const [loading, setLoading] = useState(true)

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Product) => {
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

  const handleGoToProductClick = async (event: React.MouseEvent<unknown>, id: number) => {
    try {
      await productService.getProduct(id)
      history.push('/productDetail/' + id)
    } catch (error) {
      enqueueSnackbar('Error al obtener el producto, vuelva a intentarlo', { variant: 'error' })
    }
  }

  const handleClickCheckBox = (event: React.MouseEvent<unknown>, sku: number) => {
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
    console.log(myRef)
    setPage(newPage)
    myRef.current.scrollTop = 0
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked)
  }

  const isSelected = (sku: number) => selected.indexOf(sku) !== -1

  useEffect(() => {
    const getProducts = async () => {
      try {
        setRows([...(await productService.getProducts())])
        //setRows([...productStub.products])
        setLoading(false)
      } catch (error) {
        console.log(error)
        enqueueSnackbar('Error al conectar con el servidor: ' + error.message, { variant: 'error' })
      }
    }
    getProducts()
  }, [])

  return (
    <MyBox>
      <Paper className={classes.paper}>
        <div>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer ref={myRef} className={clsx(classes.tableContainer, classesGlobal.scrollbarStyles)}>
            <Table
              ref={myRef}
              stickyHeader
              aria-label="sticky table"
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                rowCount={rows.length}
              />
              {/*               {loading && (
                <div style={{ display: 'flex', width: '100%' }}>
                  <CircularProgress />
                </div>
              )} */}
              <MyTableBody
                rows={rows}
                order={order}
                orderBy={orderBy}
                page={page}
                rowsPerPage={rowsPerPage}
                isSelected={isSelected}
                handleClick={handleGoToProductClick}
                handleClickCheckBox={handleClickCheckBox}
                emptyRows={emptyRows}
                dense={dense}
              />
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
