import { format } from "date-fns";
import React from "react";
import { useSelector } from "react-redux";
import { H1, H3, H4 } from "../../Texts";
import Descriprion from "./Description";
import { StyledHeader } from "./style";

const Header = () => {
  const userSearched = useSelector((state) => state.user.userSearched);
  const { avatar_url, name, twitter_username, created_at, bio } = userSearched ? userSearched : {}

  const formattedDate = created_at && format(new Date(created_at), "dd MMM yyyy");
  return (
    <>
      <StyledHeader>
        
        <>
          <img src={avatar_url} alt={`${name} github perfil`} />
          <div>
            <H1>{name}</H1>
            <H3>@{twitter_username}</H3>
            <H4>Joined {formattedDate}</H4>
          </div>
        </>
        
      </StyledHeader>
      <Descriprion bio={bio} />
    </>
  );
};

export default Header;
