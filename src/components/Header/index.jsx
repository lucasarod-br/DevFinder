import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toggle } from "../../services/states/slices/themeSlice";
import { H1, H4 } from "../Texts";
import {BsFillMoonFill, BsFillSunFill} from "react-icons/bs"
const StyledHeader = styled.header`
  justify-self: start;
  display: flex;
  width: 90%;
  max-width: 730px;
  justify-content: space-between;

  h1 {
    font-size: 26px;
  }
  h4 {
    font-weight: bold;
  }
  div:hover {
      
      opacity : 50% ;

      cursor: pointer;
    }
  div{
  display: flex ;
  align-items: center;
    justify-content: center;
    gap: 16px ;}
    color: ${props => props.theme.titles};
    
`;

const Header = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.theme.isDark);

  return (
    <StyledHeader>
      <H1>devfinder</H1>
      {!isDarkTheme ? (
        <div onClick={() => dispatch(toggle())}>
          <H4> DARK</H4><BsFillMoonFill />
        </div>
      ) : (
        <div onClick={() => dispatch(toggle())}><H4>LIGTH</H4><BsFillSunFill/></div>
      )}
    </StyledHeader>
  );
};

export default Header;
