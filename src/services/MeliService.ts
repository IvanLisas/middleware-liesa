import axios from 'axios'
import { SERVER_URL } from '../config/Rest'
import { CategotyType } from '../types/CategotyType'

class MeliService {
  axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  }

  async getGategory(id: string) {
    let categoriesJSON: [] = []

    await axios.get(`${SERVER_URL}/categories/${id}`, this.axiosConfig).then((response) => {
      categoriesJSON = response.data.children_categories
    })

    return categoriesJSON as CategotyType[]
  }

  async getGategories() {
    let categoriesJSON: [] = []

    await axios.get(`${SERVER_URL}/sites/MLA/categories'`, this.axiosConfig).then((response) => {
      categoriesJSON = response.data
    })

    return categoriesJSON as CategotyType[]
  }
}

export const meliService = new MeliService()
