import styled from "styled-components";

interface Props {
  length: number;
}

const VerticalBar = styled.div<Props>`
  height: ${(props) => props.length}rem;
  width: 2px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export default VerticalBar;
