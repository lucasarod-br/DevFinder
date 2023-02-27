import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Perfil from '../../components/Perfil'
import { GlobalStyle } from '../../GlobalStyles'
import { darkTheme, lightTheme } from '../../GlobalStyles/themes'


const Home = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle/>
    <Perfil />
    <button onClick={e => setIsDarkTheme(!isDarkTheme)}>mudar</button>

    </ThemeProvider> 
    )
}

export default Home