import { Brand } from './Brand'
import { Category } from './Category'
import { MarketPlace } from './MarketPlace'

export type Product = {
  id: number
  sku: number
  name: string
  brand: Brand
  filledDataProgress: number
  activeMarketPlaces: MarketPlace[]
  CategoryPath: Category[]
  stock: number
}

export default function createProduct(
  id: number,
  sku: number,
  name: string,
  brand: Brand,
  filledDataProgress: number,
  activeMarketPlaces: MarketPlace[],
  CategoryPath: Category[],
  stock: number
): Product {
  return { id, sku, name, brand, filledDataProgress, activeMarketPlaces, CategoryPath, stock }
}
