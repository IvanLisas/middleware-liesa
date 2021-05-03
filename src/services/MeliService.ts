import axios from 'axios'
import { SERVER_URL } from '../config/Rest'
import { CategoryMeli } from '../types/CategoryMeli'

class MeliService {
  axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'User-Agent': ''
    }
  }

  async getGategory(id: string) {
    let categoriesJSON: [] = []

    await axios.get(`${SERVER_URL}/categories/${id}`, this.axiosConfig).then((response) => {
      categoriesJSON = response.data.children_categories
    })

    return categoriesJSON as CategoryMeli[]
  }

  async getGategories() {
    let categoriesJSON: [] = []
    console.log()
    await axios.get(`${SERVER_URL}/sites/MLA/categories'`, this.axiosConfig).then((response) => {
      categoriesJSON = response.data
      console.log(categoriesJSON)
    })

    return categoriesJSON as CategoryMeli[]
  }
}

export const meliService = new MeliService()
