import axios from 'axios'
import { SERVER_URL } from '../config/Rest'
/* import { PageNumber } from '../config/Rest'
import { PageSize } from '../config/Rest' */
import { Product } from '../types/Product'
import productStub from '../stubs/ProductStub'
import { ProductsData } from '../types/ProductsData'

class ProductService {
  getProductsMock(page: number, rowsPerPage: number): Product[] {
    return productStub.products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  }

  async getProducts(PageNumber: number, PageSize: number): Promise<ProductsData> {
    const productsJSON = await axios.get(`${SERVER_URL}/product`, {
      params: {
        PageNumber: PageNumber,
        PageSize: PageSize
      }
    })
    console.log(productsJSON.data as ProductsData)
    return productsJSON.data as ProductsData
  }

  async getProduct(product_id: number): Promise<Product> {
    const productJSON = await axios.get(`${SERVER_URL}/products/${product_id}`)
    return productJSON.data.data as Product
  }

  getProductMock(product_id: number): Product {
    const product = productStub.products[product_id]
    if (product) return productStub.products[product_id]
    else throw new Error('El producto no se encuentra')
  }
}

export const productService = new ProductService()
