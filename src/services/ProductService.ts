import axios from 'axios'
import { SERVER_URL } from '../config/Rest'
import { Product } from '../types/Product'
import productStub from '../stubs/ProductStub'
import { Data } from '../types/ProductsData'

class ProductService {
  async getProducts(PageNumber: number, PageSize: number): Promise<Data<Product[]>> {
    const productsJSON = await axios.get(`${SERVER_URL}/product`, {
      params: {
        PageNumber: PageNumber,
        PageSize: PageSize
      }
    })
    console.log(productsJSON.data as Data<Product[]>)
    return productsJSON.data as Data<Product[]>
  }

  async getProduct(product_id: number): Promise<Data<Product>> {
    const productJSON = await axios.get(`${SERVER_URL}/product/${product_id}`)
    console.log(productJSON.data as Data<Product>)
    return productJSON.data as Data<Product>
  }

  //Mock Service

  getProductsMock(page: number, rowsPerPage: number): Product[] {
    return productStub.products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  }

  getProductMock(product_id: number): Product {
    const product = productStub.products[product_id]
    if (product) return productStub.products[product_id]
    else throw new Error('El producto no se encuentra')
  }
}

export const productService = new ProductService()
