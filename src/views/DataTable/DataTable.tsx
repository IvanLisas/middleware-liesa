import React, { useEffect, useRef, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import TablePagination from '@material-ui/core/TablePagination'
import Paper from '@material-ui/core/Paper'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import MyBox from '../../components/MyStyledComponents/MyBox'
import MyTableBody from './Components/MyTableBody/MyTableBody'
import useGlobalStyle from '../../styles/globalStyles'
import { productService } from '../../services/ProductService'
import MyTableToolbar from './Components/MyTableToolbar'
import clsx from 'clsx'
import { Order } from '../../types/Order'
import MyTableHead from './Components/MyTableHead'
import { Product } from '../../types/Product'
import { useHistory } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import LoadingLinearProgress from '../../components/LoadingComponents/LoadingLinearProgress'
import productStub from '../../stubs/ProductStub'
import useWindowScrollPosition from '../../hooks/useWindowScrollPosition'
import useLocalStorage from '../../hooks/useLocalStorage'

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
      height: 'calc(100vh - 280px)' //TODO: Estos 237px tendrian que depender de componentes
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
  const rowsPerPageOptions = [10, 25, 50, 100]
  const classes = useStyles()
  const classesGlobal = useGlobalStyle()
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<keyof Product>('sku')
  const [selected, setSelected] = useState<number[]>([])
  const [page, setPage] = useState(0)
  const [dense, setDense] = useState(true)
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0])
  const [rows, setRows] = useState<Product[]>([])
  const history = useHistory()
  const { enqueueSnackbar } = useSnackbar()
  const myRef = useRef(document.createElement('table'))
  const [loading, setLoading] = useState(true)
  const [scrollYStorage, setScrollYStorage] = useLocalStorage('table', 0)
  const [a, setA] = useState(myRef.current.scrollTop)

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

  const handleGoToProductClick = (id: number) => {
    console.log(myRef.current.scrollTop)
    setScrollYStorage(myRef.current.scrollTop)
    history.push('/productDetail/' + id)
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

  // look at this; easy as pie:
  useWindowScrollPosition('MyAwesomeComponent_ScrollY', !loading)

  // done :)

  useEffect(() => {
    const getProducts = async () => {
      try {
        // setRows([...(await trackPromise(productService.getProducts()))])
        setRows([...productStub.products])
        setLoading(false)
      } catch (error) {
        console.log(error)
        enqueueSnackbar('Error al conectar con el servidor: ' + error.message, { variant: 'error' })
      }
      setLoading(false)
    }
    getProducts()
    return () => {
      console.log(a)
    }
  }, [])

  useEffect(() => {
    myRef.current.scrollTop = scrollYStorage
  }, [loading])

  return (
    <MyBox>
      {a}
      <Paper className={classes.paper}>
        <MyTableToolbar numSelected={selected.length} />
        <LoadingLinearProgress />
        <TableContainer ref={myRef} className={clsx(classes.tableContainer, classesGlobal.scrollbarStyles)}>
          <Table
            ref={myRef}
            stickyHeader
            aria-label="sticky table"
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <MyTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
            />

            <MyTableBody
              rows={rows}
              order={order}
              orderBy={orderBy}
              page={page}
              rowsPerPage={rowsPerPage}
              isSelected={isSelected}
              handleGoToProductClick={handleGoToProductClick}
              handleClickCheckBox={handleClickCheckBox}
              emptyRows={emptyRows}
              dense={dense}
              loading={loading}
            />
          </Table>
        </TableContainer>
        <div className={classes.bottomContainer}>
          <FormControlLabel
            control={<Switch color="primary" checked={dense} onChange={handleChangeDense} />}
            label="Margen denso"
          />
          <TablePagination
            rowsPerPageOptions={rowsPerPageOptions}
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
