import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from './Container';
import Header from './Header';
import Links from './Links';
import Numbers from './Numbers';

const Perfil = () => {
  const url = 'https://api.github.com/users/omariosouto';

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setUser(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <Container>
      <Header
        img={user.avatar_url}
        name={user.name}
        user={user.twitter_username}
        created={user.created_at}
        bio={user.bio}
        isLoading={isLoading}
      />
      <Numbers />
      <Links />
    </Container>
  );
};

export default Perfil;
