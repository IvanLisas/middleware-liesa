import axios from 'axios'
import { SERVER_URL } from '../config/Rest'
import { Data } from '../types/Data'
import rows from '../stubs/DataStub'
import { Product } from '../types/Product'

class ProductService {
  getProductsMock(): Data[] {
    return rows
  }

  async getProducts() {
    const productsJSON = await axios.get(`${SERVER_URL}/products`)
    console.log(productsJSON.data as Product)
    return productsJSON.data as Product[]
  }
}

export const productService = new ProductService()
