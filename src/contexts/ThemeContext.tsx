import React, { createContext, useState } from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

interface ThemeContextDispatchProps {
  readonly isDark: boolean
  readonly setIsDark: (isDark: boolean) => void
}

export const ThemeContextDispatch = createContext<ThemeContextDispatchProps>({
  isDark: true,
  setIsDark: () => null
})

const ThemeContextProvider: React.FC = ({ children }) => {
  const [isDark, setIsDark] = useState(false) //Initial palette style

  const paletteStyle = () => (isDark ? themeDark : themeLight)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const togglePaletteStyle = () => setIsDark(!isDark)

  const primaryColor = () => '#399ead' //Celeste

  const secondaryColor = () => '#b565a2' //Rosa

  const secondaryColor2 = () => '#e23f3f' //Naranja

  const theme = createMuiTheme({
    overrides: {
      MuiGrid: {}
    }
  })

  const themeLight = createMuiTheme({
    ...theme,
    palette: {
      type: 'light',
      primary: {
        main: primaryColor()
      },
      secondary: {
        main: secondaryColor()
      },
      background: {
        default: '#ede8ed',
        paper: '#ffff'
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.54)',
        disabled: 'gba(255, 255, 255, 0.5)'
      }
    }
  })

  const themeDark = createMuiTheme({
    ...theme,
    palette: {
      type: 'dark',
      primary: {
        main: primaryColor()
      },
      secondary: {
        main: secondaryColor()
      },
      background: {
        default: '#100c18',
        paper: '#27262a'
      },
      text: {
        primary: '#ffff',
        secondary: '#ffff',
        disabled: '#ffff'
      }
    }
  })

  return (
    <ThemeContextDispatch.Provider value={{ isDark, setIsDark }}>
      <ThemeProvider theme={paletteStyle()}>
        <CssBaseline> {children}</CssBaseline>
      </ThemeProvider>
    </ThemeContextDispatch.Provider>
  )
}

export default ThemeContextProvider
