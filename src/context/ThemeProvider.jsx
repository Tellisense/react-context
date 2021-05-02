import React, { useContext, createContext, useState } from 'react'

const ThemeContext = createContext()
ThemeContext.displayName = 'ThemeContext'

export const useTheme = () => {
  return useContext(ThemeContext)
}


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false)


  const changeTheme = () => {
    setTheme(!theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      { children}
    </ThemeContext.Provider >
  )
}

export default ThemeProvider
