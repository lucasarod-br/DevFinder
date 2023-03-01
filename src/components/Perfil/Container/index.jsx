import styled from 'styled-components';

export const Container = styled.main`
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.mainColor};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 32px 24px;

    width: 90%;
    max-width: 730px;
    box-shadow: 0px 16px 30px -10px #4660BB33;

    @media (min-width: 768px) {
        padding: 40px;
    }
    @media (min-width: 768px) {
        padding: 48px;
    }
`