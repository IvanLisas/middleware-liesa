import React from 'react'
import { DataGrid } from '@material-ui/data-grid'
import productStub from '../../stubs/ProductStub'
import MyBox from '../../components/MyBox'

const columns = [
  { field: 'sku', headerName: 'SKU' },
  { field: 'name', headerName: 'Nombre', width: 130 },
  {
    field: 'brand',
    headerName: 'Marca',
    width: 130,
    valueGetter: (params) => {
      console.log(params)
      return params.row.brand.name
    }
  },
  {
    field: 'stock',
    headerName: 'Stock',
    type: 'number',
    width: 90
  },
  {
    field: 'filledDataProgress',
    headerName: 'Stock',
    type: 'number',
    width: 90
  }
  /*   {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) => `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`
  } */
]

const rows = productStub.products

const DataTableImproved: React.FC = () => {
  return (
    <MyBox>
      <div style={{ height: 400, width: '1000px' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
      </div>
    </MyBox>
  )
}

export default DataTableImproved
