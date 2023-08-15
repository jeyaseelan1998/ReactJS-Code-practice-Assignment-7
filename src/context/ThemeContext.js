import {createContext} from 'react'

const ThemeContext = createContext({
  $darkmode: false,
  toggleTheme: () => {},
})

export default ThemeContext
