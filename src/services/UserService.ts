import axios from 'axios'
import { SERVER_URL } from '../config/Rest'
import { User } from '../types/User'

class UserService {
  async getUserToLogging(username: string, password: string) {
    const userJSON = await axios.put(`${SERVER_URL}/login`, { username, password })
    return userJSON.data as User
  }

  async getUser() {
    const userJSON = { id: 1, username: 'Iván', datoFalopa: 'a' }
    return userJSON as User
  }
}

export const userService = new UserService()
