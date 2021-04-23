import axios from 'axios'
import { MELI_CATEGORIES_URL, MELI_CATEGORY_URL } from '../config/Rest'
import { CategotyType } from '../types/CategotyType'

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

    await axios.get(`${MELI_CATEGORY_URL}/${id}`, this.axiosConfig).then((response) => {
      categoriesJSON = response.data.children_categories
    })

    return categoriesJSON as CategotyType[]
  }

  async getGategories() {
    let categoriesJSON: [] = []

    await axios.get(MELI_CATEGORIES_URL, this.axiosConfig).then((response) => {
      categoriesJSON = response.data
    })

    return categoriesJSON as CategotyType[]
  }
}

export const meliService = new MeliService()
