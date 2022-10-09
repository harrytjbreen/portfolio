import styled from "styled-components";
import fadeIn from "./animations/fadeIn";

export const Title = styled.h1`
  animation: ${fadeIn} 1s ease-in both;
`;

export const SubTitle = styled.h3`
  animation: ${fadeIn} 1s 1s ease-in both;
`;
