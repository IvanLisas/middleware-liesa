import axios from 'axios'
import { SERVER_URL } from '../config/Rest'
import { Data } from '../types/Data'
import rows from '../stubs/DataStub'
import { Product } from '../types/Product'
import { ProductDetail } from '../types/ProductDetailt'

class ProductService {
  productDetail: ProductDetail | undefined

  getProductsMock(): Data[] {
    return rows
  }

  async getProducts() {
    const productsJSON = await axios.get(`${SERVER_URL}/api/catalog/products/overview`)
    console.log(productsJSON.data as Product[])
    return productsJSON.data as Product[]
  }

  async getProduct(product_id: number) {
    const productJSON = await axios.get(`${SERVER_URL}/api/catalog/products/detail/${product_id}`)
    this.productDetail = productJSON.data as ProductDetail
  }
}

export const productService = new ProductService()
