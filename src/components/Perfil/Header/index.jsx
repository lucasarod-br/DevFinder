import { format } from 'date-fns';
import React from 'react';
import { H1, H3, H4 } from '../../Texts';
import Descriprion from './Description';
import { StyledHeader } from './style';

const Header = ({ img, name, user, created, bio, isLoading }) => {
  const formattedDate = created && format(new Date(created), 'dd MMM yyyy')
    

  return (
    <>
      <StyledHeader>
        {isLoading ? (
          <div>Carregando...</div>
        ) : (
          <>
            <img src={img} alt={`${name} github perfil`} />
            <div>
              <H1>{name}</H1>
              <H3>@{user}</H3>
              <H4>Joined {formattedDate}</H4>
            </div>
          </>
        )}
      </StyledHeader>
      <Descriprion bio={bio} />
    </>
  );
};

export default Header;
  