//Volar?
export default class User {
  username: string

  id: number

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(id: number, username: string, password?: string) {
    this.username = username
    this.id = id
  }

  isLooged(): boolean {
    return this.id !== 0
  }
}
