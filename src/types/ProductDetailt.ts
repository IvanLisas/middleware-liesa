import { Brand } from './Brand'
import { Category } from './Category'

export type ProductDetail = {
  id: number
  sku: number
  name: string
  filledDataProgress: number
  activeMarketPlaces: string[]
  stock: number
  brand: Brand
  category: Category
}
