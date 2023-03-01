import styled from "styled-components";
export const TextBody = styled.p`
  font-size: 13px;
  color: ${(props) => props.theme.text};
  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

export const H1 = styled.h1`
  font-size: 16px;

  color: ${(props) => props.theme.title};
  @media (min-width: 768px) {
    font-size: 26px;
    
}
`;

export const H2 = styled.h2`
  
  font-size: 16px;
  color: ${(props) => props.theme.title};
  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 33px;

}
`;

export const H3 = styled.h3`
  font-size: 13px;
  color: ${(props) => props.theme.blue};
  font-weight: 400;
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const H4 = styled.h4`
  font-size: 11px;
  line-height: 20px;
  color: ${(props) => props.theme.text};
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 13px;
  }
`;
