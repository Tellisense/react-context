import React from 'react'
import { useTheme } from '../context/ThemeProvider'

const Container = ({ children }) => {

  const themeContext = useTheme()

  const handleClick = () => {
    themeContext.changeTheme()

  }

  const themeStyle = themeContext.theme ? { height: '100vh', backgroundColor: 'black', color: 'white' } : { backgroundColor: 'white', color: 'black' }


  return (
    <div style={themeStyle}>
      <div>
        <button onClick={handleClick}>Change Theme</button>
      </div>
      {children}
    </div>
  )
}

export default Container
