
import React, {  useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Perfil from '../../components/Perfil'
import { GlobalStyle } from '../../GlobalStyles'
import { darkTheme, lightTheme } from '../../GlobalStyles/themes'



const Styled = styled.div`
  background-color: ${props => props.theme.background};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Home = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)


 
   return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle/>
      <Styled>

    <Perfil />
    <button onClick={e => setIsDarkTheme(!isDarkTheme)}>mudar</button>

      </Styled>
    </ThemeProvider> 
    )
  }
export default Home