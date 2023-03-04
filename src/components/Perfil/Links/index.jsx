import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FiLink } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { TextBody } from "../../Texts";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledLinks = styled.div`
  align-self: flex-start;
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: 1fr;
  width: 100%;
  margin-top: 30px;
  gap: 10px;
  @media (min-width: 768px) {
    align-self: none;

    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 920px) {
    margin-left: 150px;
    width: 75%;
  }
`;

const Link = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  text-decoration: none;
  opacity: ${(props) => (props.inavaible ? "60%" : "100%")};

  a:first-child:hover {
    text-decoration: underline;
  }
  a:link,
  a:visited,
  a:active {
    color: inherit;
    text-decoration: none;
  }
`;

const Links = () => {
  const userSearched = useSelector((state) => state.user.userSearched);
  console.log(userSearched)
  const { location, blog, twitter_username, company } = userSearched ? userSearched : {}

  const errorMsg = "Not Available";
  return (
    <StyledLinks>
      <Link inavaible={!location}>
        <IoLocationSharp />
        <TextBody> {location ? location : errorMsg} </TextBody>
      </Link>
      <Link inavaible={!blog}>
        <FiLink />
        <TextBody>
          {" "}
          {blog ? (
            <a href={"https://www." + blog} target="_blank">
              {blog}
            </a>
          ) : (
            errorMsg
          )}{" "}
        </TextBody>
      </Link>
      <Link inavaible={!twitter_username}>
        <FaTwitter />
        <TextBody>
          {twitter_username ? (
            <a href={`https://www.twitter.com/${twitter_username}`} target="_blank">
              {" "}
              @{twitter_username}
            </a>
          ) : (
            errorMsg
          )}
        </TextBody>
      </Link>
      <Link inavaible={!company}>
        <HiBuildingOffice2 />
        <TextBody>{company ? company.split(" ")[0] : errorMsg}</TextBody>
      </Link>
    </StyledLinks>
  );
};

export default Links;
