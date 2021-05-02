import React from 'react'
import { useTheme } from '../context/ThemeProvider'

const Component2 = () => {
  const theme = useTheme()
  return (
    <div style={{ padding: 100, margin: 40, backgroundColor: theme ? 'white' : 'black', color: theme ? 'black' : 'white' }}>
      Component2
    </div>
  )
}

export default Component2
