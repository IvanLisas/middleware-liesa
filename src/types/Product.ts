import { BodyVolumen } from './BodyVoumen'
import { Brand } from './Brand'
import { Category } from './Category'
import { MarketPlace } from './MarketPlace'

export type Product = {
  name: string
  sku: number
  productCode: string
  alfaCode: string
  brandID: number
  categoryID: number
  brand: Brand
  category: Category
  /*   bodyVolumen: BodyVolumen */
  id: number
  filledDataProgress: number
  activeMarketPlaces: MarketPlace[]
  CategoryPath: Category[]
}

export default function createProduct(
  name: string,
  sku: number,
  productCode: string,
  alfaCode: string,
  brandID: number,
  categoryID: number,
  brand: Brand,
  category: Category,
  /*   bodyVolumen: BodyVolumen, */
  id: number,
  filledDataProgress: number,
  activeMarketPlaces: MarketPlace[],
  CategoryPath: Category[]
): Product {
  return {
    name,
    sku,
    productCode,
    alfaCode,
    brandID,
    categoryID,
    brand,
    category,
    /*     bodyVolumen, */
    id,
    filledDataProgress,
    activeMarketPlaces,
    CategoryPath
  }
}
