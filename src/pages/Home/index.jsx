import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "../../components/Header";
import Perfil from "../../components/Perfil";
import { GlobalStyle } from "../../GlobalStyles";
import { darkTheme, lightTheme } from "../../GlobalStyles/themes";
import { useSelector } from 'react-redux'
import Search from "../../components/Search";



const Styled = styled.div`
  background-color: ${(props) => props.theme.background};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 20px;
  padding-top: 12px;
`;

const Home = () => {
  const isDarkTheme = useSelector(state => state.theme.isDark)
  const userSearched = useSelector((state) => state.user.userSearched);

  return (
    

    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      

      <Styled>
        <Header />
        <Search/>
        { userSearched ? (
        <Perfil />)
        : <h2>Search a username above</h2>
        }
      </Styled>
    </ThemeProvider>
  );
};
export default Home;
