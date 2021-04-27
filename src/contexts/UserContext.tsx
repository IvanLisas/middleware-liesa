import React, { createContext, useState } from 'react'
import { UserType } from '../types/UserType'

interface ContextProps {
  readonly user: UserType | null
  readonly setUser: (user: UserType | null) => void
}

export const UserContext = createContext<ContextProps>({
  user: null,
  setUser: () => null
})

const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserType | null>({ id: 1, username: 'Iván' })

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

export default UserContextProvider
