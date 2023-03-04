import React from "react";
import { useSelector } from "react-redux";
import { Container } from "./Container";
import Header from "./Header";
import Links from "./Links";
import Numbers from "./Numbers";

const Perfil = () => {
  const userSearched = useSelector((state) => state.user.userSearched);
  return (
    <Container>
      { userSearched && (
<>
        <Header />
        <Numbers />
        <Links />
        </>) }

    </Container>
  );
};

export default Perfil;
