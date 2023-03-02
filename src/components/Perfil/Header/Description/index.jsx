import React from "react";
import styled from "styled-components";
import { TextBody } from "../../../Texts";

const StyledDescription = styled.main`
  margin-top: 33px;

  @media (min-width: 768px) {
    margin-top: 24px;
  }

  @media (min-width: 820px) {
    margin-left: 156px;
    margin-top: -25px;
  }
`;

const Descriprion = ({ bio }) => {
  return (
    <StyledDescription>
      <TextBody>{bio}</TextBody>
    </StyledDescription>
  );
};

export default Descriprion;
