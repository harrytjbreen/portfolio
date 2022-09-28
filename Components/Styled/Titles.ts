import styled from "styled-components";
import fadeIn from "./animations/fadeIn";

export const Title = styled.h1`
  font-size: clamp(40px, 8vw, 80px);
  text-align: center;
  font-weight: bolder;
`;

export const SubTitle = styled.h2`
  font-weight: bold;
  text-align: center;
`;

export const MainTitle = styled(Title)`
  animation: ${fadeIn} 1s ease-in both;
`;

export const MainSubTitle = styled(SubTitle)`
  animation: ${fadeIn} 1s 1s ease-in both;
`;
