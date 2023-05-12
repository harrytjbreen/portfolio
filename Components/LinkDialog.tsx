import React from "react";
import Links from "../data/Links";
import { LinkContainer } from "./Styled/Containers";
import Bounce from "./Styled/animations/Bounce";
import styled from "styled-components";

interface Props {
  i: number;
}

const Link = styled.a<Props>`
  margin: 1.3rem 1rem 1rem 1rem;
  transition: all 0.2s ease-in-out;
  animation: ${Bounce} 0.5s ${(props) => 2.5 + props.i / 6}s ease-in-out both;
  :hover {
    transform: scale(1.2) translateY(-5px);
  }
`;

const LinkDialog: React.FC = () => {
  return (
    <LinkContainer>
      {Links.map((link, i) => (
        <Link i={i} href={link.link} key={link.link}>
          <link.svg />
        </Link>
      ))}
    </LinkContainer>
  );
};

export default LinkDialog;
