import React, { createContext, useState } from 'react'
import { User } from '../types/User'

interface ContextProps {
  readonly user: User | null
  readonly setUser: (user: User | null) => void
}

export const UserContext = createContext<ContextProps>({
  user: null,
  setUser: () => null
})

const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

export default UserContextProvider
