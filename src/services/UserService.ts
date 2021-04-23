import axios from 'axios'
import { SERVER_URL } from '../config/Rest'
import { UserType } from '../types/UserType'

class UserService {
  async getUserToLogging(username: string, password: string) {
    const userJSON = await axios.put(`${SERVER_URL}/login`, { username, password })
    return userJSON.data as UserType
  }

  async getUser() {
    const userJSON = { id: 1, username: 'Iván', datoFalopa: 'a' }
    return userJSON as UserType
  }
}

export const userService = new UserService()
