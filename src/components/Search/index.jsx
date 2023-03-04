import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchUser } from "../../services/states/actions/userAction";

const StyledSearch = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  padding: 2px 10px;
  width: 90%;
  max-width: 730px;
  color: ${(props) => props.theme.blue};
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 15px;
  column-gap: 4px;
  box-shadow: 0px 16px 30px -10px #4660BB33;

  input {
    background-color: ${(props) => props.theme.mainColor};
    border: none;
    outline: 0;
    padding: 22px 0;
    font-size: 13px;
    @media (min-width: 768px) {
        font-size: 18px;
      }
    ::placeholder {
      font-size: 13px;
      color: ${(props) => props.theme.titles};
      @media (min-width: 768px) {
        font-size: 18px;
      }
    }
  }
  button {
    background-color: ${(props) => props.theme.blue};
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 13px 24px;
    grid-column: 4;
    font-size: 14px;
    :hover {
      cursor: pointer;
    }
    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
  p {
    grid-column: 3;
    grid-row: 1;
    color: #f74646;
    white-space: nowrap;
    font-size: 12px;
    @media (min-width: 768px) {
        font-size: 15px;
      }
  }
  svg {
    width: 20px;
    height: 20px;
    margin: 0 4px;
    @media (min-width: 768px) {
      width: 24px;
    height: 24px;
    }
  }
`;

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleSearch = async () => {
    try {
      await dispatch(fetchUser(value));
      setValue('')
      setError(false);
    } catch (error) {
      setValue('')

      setError(true);
    }
  };
  console.log(error);
  return (
    <StyledSearch>
      <HiMagnifyingGlass />
      <input
        type="text"
        placeholder={error & window.innerWidth <= 425 ? "Not found" : "Search GitHub username…"} // define o placeholder de acordo com o estado de erro
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>
      {error && window.innerWidth > 425 && <p>Not found</p>}
    </StyledSearch>
  );
};

export default Search;
