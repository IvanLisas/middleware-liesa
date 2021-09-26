import React, { useContext, useEffect, useRef, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import useGlobalStyle from '../../styles/globalStyles'
import { productService } from '../../services/ProductService'
import { Order } from '../../types/Order'
import { Product } from '../../types/Product'
import { useHistory } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { path } from '../../types/path'
import { Paper, TableContainer, Table, FormControlLabel, TablePagination, Switch } from '@material-ui/core'
import MyBox from '../../components/MyStyledComponents/MyBox'
import MyDialog from '../../components/MyStyledComponents/MyDialog'
import Root from '../../components/Root/Root'
import VolumenCard from '../../components/VolumenCard'
import MyTableBody from './Components/MyTableBody/MyTableBody'
import MyTableHead from './Components/MyTableHead'
import clsx from 'clsx'
import { trackPromise, usePromiseTracker } from 'react-promise-tracker'
import LinearProgress from '@material-ui/core/LinearProgress'
import { FiltersContext } from '../../contexts/FiltersContext'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 0
    },
    paper: {
      boxShadow: 'none'
    },
    tableContainer: {
      height: 'calc(100vh - 210px)' //TODO: Estos 237px tendrian que depender de componentes
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
  //Styles
  const classes = useStyles()
  const classesGlobal = useGlobalStyle()
  //Table state
  const { page, setPage, rowsPerPage, setRowsPerPage, rowsPerPageOptions, scrollPosition, setScrollPosition } =
    useContext(FiltersContext)
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<keyof Product>('sku')
  const [selected, setSelected] = useState<number[]>([])
  const [dense, setDense] = useState(true)
  /* const rowsPerPageOptions = [10, 25, 50, 100] */
  /* const [page, setPage] = useState(0) */
  /* const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]) */
  const [numberOfProducts, setNumberOfProducts] = useState(0)
  //Others
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [openDialog, setOpenDialog] = useState(false)
  const { enqueueSnackbar } = useSnackbar()
  const history = useHistory()
  const myRef = useRef(document.createElement('table'))
  const { promiseInProgress } = usePromiseTracker()
  //Route params

  const paths = [{ name: 'Catalogo', icon: 'home', url: '/' } as path]

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, products.length - page * rowsPerPage)

  const handleGoToProductClick = async (id: number) => {
    const product = await trackPromise(productService.getProduct(id))
    setScrollPosition(myRef.current.scrollTop)
    history.push('/productDetail/' + id, product)
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

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = products.map((n) => n.sku)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
    myRef.current.scrollTop = 0
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => setDense(event.target.checked)

  const isSelected = (sku: number) => selected.indexOf(sku) !== -1

  const handleOpenDialog = (id: number) => {
    setOpenDialog(true)
  }

  /*   const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Product) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  } */

  useEffect(() => {
    const getProducts = async () => {
      console.log(scrollPosition)
      try {
        // const productsData = await trackPromise(productService.getProducts(page + 1, rowsPerPage))
        // setNumberOfProducts(productsData.totalItem)
        //setProducts([...productsData.data])
        setProducts([...productService.getProductsMock(page, rowsPerPage)])
        setLoading(false)
      } catch (error) {
        console.log(error)
        enqueueSnackbar('No se pudieron obtener los productos: ' + error.message, { variant: 'error' })
      }
      setLoading(false)
    }
    getProducts()
  }, [page, rowsPerPage])

  useEffect(() => {
    myRef.current.scrollTop = scrollPosition
  }, [loading])

  return (
    <Root paths={paths} tittle="Catalogo">
      {promiseInProgress ? <LinearProgress /> : <div style={{ marginTop: 4 }}></div>}
      <MyBox className={classes.root}>
        <Paper className={classes.paper}>
          {/*     <MyTableToolbar numSelected={selected.length} /> */}

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
                rowCount={products.length}
              />

              <MyTableBody
                rows={products}
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
                handleOpenDialog={handleOpenDialog}
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
              count={numberOfProducts}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              labelDisplayedRows={(data) => (
                <div style={{ display: 'flex', gap: 36 }}>
                  <div>
                    Pagina: {data.page + 1} de {Math.ceil(data.count / rowsPerPage)}
                  </div>
                  <div>
                    {data.from}-{data.to} de {data.count}
                  </div>
                </div>
              )}
            />
          </div>
        </Paper>
        <MyDialog open={openDialog} setOpen={setOpenDialog}>
          <VolumenCard setOpen={setOpenDialog} />
        </MyDialog>
        {/*   {(myRef.current.scrollTop = scrollPosition)} */}
      </MyBox>
    </Root>
  )
}

export default DataTable
