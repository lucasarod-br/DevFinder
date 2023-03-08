import styled from "styled-components";

export const StyledHeader = styled.div`

  justify-self: flex-start;
  column-gap: 20px;
  text-align: justify;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(4, auto);
  @media (min-width: 768px) {
    column-gap: 40px;
  }

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    @media (min-width: 768px) {
      width: 117px;
      height: 117px;
    }
  }

  div {
    @media (min-width: 920px) {
      display: grid;
      grid-template-rows: auto 1fr;
      grid-template-columns: 1fr 1fr;
      column-gap: 125px;
      h4 {
        text-align: right;
        grid-column: 2;
        grid-row: 1;
      }
    }
  }
`;
