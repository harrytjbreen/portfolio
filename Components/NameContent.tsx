import React from "react";
import useTypeContent from "../hooks/useTypeContent";
import Container from "./Styled/Containers";
import { SubTitle, Title } from "./Styled/Titles";

const subTitles = ["I write code", "I design websites", "I make apps"];

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
