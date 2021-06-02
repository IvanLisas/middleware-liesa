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

  const primaryColor = () => '#399ead' //Celeste

  const secondaryColor = () => '#b565a2' //Rosa

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: primaryColor()
      },
      secondary: {
        main: secondaryColor()
      }
    }
  })

  const themeLight = createMuiTheme({
    ...theme,
    palette: {
      ...theme.palette,
      type: 'light',
      background: {
        default: 'rgba(250, 250, 250, 0.87)',
        paper: '#ffff'
      },
      text: {
        primary: '#18696e', //rgba(0, 0, 0, 0.87)
        secondary: 'rgba(0, 0, 0, 0.54)',
        disabled: 'rgba(0, 0, 0, 0.38)'
      }
    }
  })

  const themeDark = createMuiTheme({
    ...theme,
    palette: {
      ...theme.palette,
      type: 'dark',

      background: {
        default: '#100c18',
        paper: '#27262a'
      },
      text: {
        primary: '#ffff',
        secondary: 'rgba(255, 255, 255, 0.7)',
        disabled: 'rgba(255, 255, 255, 0.5)'
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
