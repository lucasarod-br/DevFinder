import styled from "styled-components";
export const TextBody = styled.p`
font-size: 15px;
line-height: 25px;
color: ${props => props.theme.text};

`

export const H1 = styled.h1`
    font-size: 26px;
    line-height: 38px;
    color: ${props => props.theme.title};
`

export const H2 = styled.h2`
    font-size: 22px;
    line-height: 33px;
    color: ${props => props.theme.title};

`

export const H3 = styled.h3`
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme.blue};
`;

export const H4 = styled.h4`
    font-size: 13px;
    line-height: 20px;
    color: ${props => props.theme.text};
`;