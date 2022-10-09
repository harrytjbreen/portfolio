import React from "react";
import useTypeContent from "../hooks/useTypeContent";
import Container from "./Styled/Containers";
import { SubTitle, Title } from "./Styled/Titles";

const subTitles = ["Web Developer", "Website Designer", "Mobile App Developer"];

const NameContent: React.FC = () => {
  const text = useTypeContent(subTitles, 100, 2000, 3000);

  return (
    <Container vCenter column id={"#"}>
      <Title>Harry Breen</Title>
      <SubTitle>{text}</SubTitle>
    </Container>
  );
};

export default NameContent;
