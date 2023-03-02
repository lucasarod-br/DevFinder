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
        console.log(res.data)
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
      <Numbers repos={user.public_repos} followers={user.followers} following={user.following} />
      <Links location={user.location} blog={user.blog} twitter={user.twitter_username} company={user.company && user.company.split(' ')[0]}/>
    </Container>
  );
};

export default Perfil;
