import React from "react";
import Links from "../model/Links";
import { LinkContainer } from "./Styled/Containers";

const LinkDialog: React.FC = () => {
  return (
    <LinkContainer>
      {Links.map((link) => (
        <a href={link.link}>
          <link.svg />
        </a>
      ))}
    </LinkContainer>
  );
};

export default LinkDialog;
