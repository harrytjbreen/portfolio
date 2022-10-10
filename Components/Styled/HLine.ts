import styled from "styled-components";

const HLine = styled.span`
  width: 100vw;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  bottom: 50%;
  z-index: -1;
`;

export default HLine;
