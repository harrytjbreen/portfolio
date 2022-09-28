import styled from "styled-components";

interface Props {
  length: number;
}

const VerticalBar = styled.div<Props>`
  height: ${(props) => props.length}rem;
  width: 2px;
  color: white;
  background-color: white;
`;

export default VerticalBar;
