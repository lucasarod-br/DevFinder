import React from "react";
import { useSelector } from "react-redux";
import { Container } from "./Container";
import Header from "./Header";
import Links from "./Links";
import Numbers from "./Numbers";

const Perfil = () => {

  return (
    <Container onClick={() => console.log(isLoading)}>
      <Header />
      <Numbers />
      <Links />
    </Container>
  );
};

export default Perfil;
