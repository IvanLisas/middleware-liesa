import { Brand } from './Brand'
import { Category } from './Category'

export type Product = {
  id: number
  sku: number
  name: string
  brand: Brand
  filledDataProgress: number
  activeMarketPlaces: string[]
  CategoryPath: Category[]
  stock: number
}

export default function createProduct(
  id: number,
  sku: number,
  name: string,
  brand: Brand,
  filledDataProgress: number,
  activeMarketPlaces: string[],
  CategoryPath: Category[],
  stock: number
): Product {
  return { id, sku, name, brand, filledDataProgress, activeMarketPlaces, CategoryPath, stock }
}
