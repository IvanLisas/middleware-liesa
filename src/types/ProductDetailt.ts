import { Brand } from './Brand'
import { Category } from './Category'

export type ProductDetail = {
  id: number
  sku: number
  name: string
  brand: Brand
  description: string
  activeMarketPlaces: string[]
  category: Category
  stock: number
  /*   categoryPath:  */
}
