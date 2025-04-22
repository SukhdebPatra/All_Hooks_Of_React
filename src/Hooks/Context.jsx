import React, { createContext, useContext } from 'react'

export const ThemeContext = createContext('light');
const Context = () => {
    const theme=useContext(ThemeContext)

  return (
    <div><p>Current Theme : {theme}</p></div>
  )
}

export default Context