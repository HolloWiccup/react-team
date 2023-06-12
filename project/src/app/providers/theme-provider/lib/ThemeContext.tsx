import { createContext } from 'react'

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemContextProps = {
  theme: Theme
  setTheme: (_theme: Theme) => void
}

const ThemeContext = createContext<ThemContextProps>({
  theme: Theme.LIGHT,
  setTheme() {},
})

const LOCAL_STORAGE_THEME_KEY = 'theme'

export { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY }
