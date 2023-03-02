import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "../../components/Header";
import Perfil from "../../components/Perfil";
import { GlobalStyle } from "../../GlobalStyles";
import { darkTheme, lightTheme } from "../../GlobalStyles/themes";
import { useSelector } from 'react-redux'



const Styled = styled.div`
  background-color: ${(props) => props.theme.background};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Home = () => {
  const isDarkTheme = useSelector(state => state.theme.isDark)
  console.log(isDarkTheme)
  return (
    

    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Styled>
        <Header />
        <Perfil />
      </Styled>
    </ThemeProvider>
  );
};
export default Home;
