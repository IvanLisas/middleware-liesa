import axios from 'axios'
import { SERVER_URL } from '../config/Rest'
import { Data } from '../types/Data'
import rows from '../stubs/DataStub'
import { Product } from '../types/Product'
import { ProductDetail } from '../types/ProductDetailt'
import productStub from '../stubs/ProductStub'

class ProductService {
  product: Product | undefined

  getProductsMock(): Product[] {
    return productStub.products
  }

  async getProducts() {
    const productsJSON = await axios.get(`${SERVER_URL}/api/catalog/products/overview`)
    console.log(productsJSON.data as Product[])
    return productsJSON.data as Product[]
  }

  async getProduct(product_id: number) {
    const productJSON = await axios.get(`${SERVER_URL}/api/catalog/products/detail/${product_id}`)
    this.product = productJSON.data as Product
  }

  getProductMock(product_id: number): void {
    this.product = productStub.products[product_id]
  }
}

export const productService = new ProductService()
