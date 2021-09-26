import axios from 'axios'
import { SERVER_URL } from '../config/Rest'
import { User } from '../types/User'

class UserService {
  async login(username, password) {
    /*  const userJSON = await axios.put(`${SERVER_URL}/login`, { username, password }) */
    const userJSON = { id: 1, username: 'Iván', datoFalopa: 'a' }
    return userJSON as User
  }
}

export const userService = new UserService()
