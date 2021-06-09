import axios from 'axios'
import { SERVER_URL } from '../config/Rest'
import { Product } from '../types/Product'
import productStub from '../stubs/ProductStub'

class ProductService {
  getProductsMock(): Product[] {
    return productStub.products
  }

  async getProducts(): Promise<Product[]> {
    const productsJSON = await axios.get(`${SERVER_URL}/product`)
    console.log(productsJSON.data as Product[])
    return productsJSON.data as Product[]
  }

  async getProduct(product_id: number): Promise<Product> {
    const productJSON = await axios.get(`${SERVER_URL}/products/${product_id}`)
    return productJSON.data as Product
  }

  getProductMock(product_id: number): Product {
    const product = productStub.products[product_id]
    if (product) return productStub.products[product_id]
    else throw new Error('El producto no se encuentra')
  }
}

export const productService = new ProductService()
