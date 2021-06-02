import axios from 'axios'
import { MELI_URL } from '../config/Rest'
import { CategoryMeli } from '../types/CategoryMeli'

class MeliService {
  axiosConfig = {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }

  async getChildrenGategories(id: string) {
    const categoryJSON = await axios.get(`${MELI_URL}/categories/${id}`, this.axiosConfig)
    return categoryJSON.data.children_categories as CategoryMeli[]
  }

  async getGategories() {
    const categoriesJSON = await axios.get(`${MELI_URL}/sites/MLA/categories`, this.axiosConfig)
    return categoriesJSON.data as CategoryMeli[]
  }
}

const meliService = new MeliService()

export default meliService
