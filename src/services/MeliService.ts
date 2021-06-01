import axios from 'axios'
import { MELI_URL } from '../config/Rest'
import { CategoryMeli } from '../types/CategoryMeli'

class MeliService {
  axiosConfig = {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }

  async getGategory(id: string) {
    let categoriesJSON: [] = []

    await axios.get(`${MELI_URL}/categories/${id}`, this.axiosConfig).then((response) => {
      categoriesJSON = response.data.children_categories
    })

    return categoriesJSON as CategoryMeli[]
  }

  async getGategories() {
    let categoriesJSON: [] = []
    await axios.get(`${MELI_URL}/sites/MLA/categories`, this.axiosConfig).then((response) => {
      categoriesJSON = response.data
      console.log(categoriesJSON)
    })

    return categoriesJSON as CategoryMeli[]
  }
}

const meliService = new MeliService()

export default meliService
