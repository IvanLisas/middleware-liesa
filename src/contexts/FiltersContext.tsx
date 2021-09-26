import React, { createContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

interface ContextProps {
  readonly page: number
  readonly setPage: (page: number) => void
  readonly rowsPerPage: number
  readonly setRowsPerPage: (page: number) => void
  readonly rowsPerPageOptions: number[]
  readonly scrollPosition: number
  readonly setScrollPosition: (scrollPosition: number) => void
}

export const FiltersContext = createContext<ContextProps>({
  page: 0,
  setPage: () => null,
  rowsPerPage: 10,
  setRowsPerPage: () => null,
  rowsPerPageOptions: [],
  scrollPosition: 0,
  setScrollPosition: () => null
})

const FiltersContextProvider: React.FC = ({ children }) => {
  const rowsPerPageOptions = [10, 25, 50, 100]
  const [page, setPage] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useLocalStorage('rowsPerPage', rowsPerPageOptions[0])

  return (
    <FiltersContext.Provider
      value={{ page, setPage, rowsPerPage, setRowsPerPage, rowsPerPageOptions, scrollPosition, setScrollPosition }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

export default FiltersContextProvider
