import { Product } from './Product'

export type ProductsData = {
  pageNumber: number
  pageSize: number
  totalItem: number
  succeeded: boolean
  message: string
  errors: string
  data: Product[]
}
