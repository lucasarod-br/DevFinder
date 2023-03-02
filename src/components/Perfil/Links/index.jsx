import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FiLink } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { TextBody } from "../../Texts";
import styled from "styled-components";

const StyledLinks = styled.div`
  align-self: flex-start;
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: 1fr;
  width: 100%;
  margin-top: 30px;
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
  opacity: ${(props) => (props.inavaible ? "40%" : "100%")};

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

const Links = ({ location, blog, twitter, company }) => {
  const errorMsg = "Not Available";
  return (
    <StyledLinks>
      <Link inavaible={!location}>
        <IoLocationSharp />
        <TextBody> {location ? location.split(",")[1] : errorMsg} </TextBody>
      </Link>
      <Link inavaible={!location}>
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
      <Link inavaible={!location}>
        <FaTwitter />
        <TextBody>
          {" "}
          {twitter ? (
            <a href={`https://www.twitter.com/${twitter}`} target="_blank">
              {" "}
              @{twitter}
            </a>
          ) : (
            errorMsg
          )}{" "}
        </TextBody>
      </Link>
      <Link inavaible={!location}>
        <HiBuildingOffice2 />
        <TextBody>{company ? company : errorMsg}</TextBody>
      </Link>
    </StyledLinks>
  );
};

export default Links;
