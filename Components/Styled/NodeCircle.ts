import styled from "styled-components";
import Container from "./Containers";

interface Props {
  large?: boolean;
  isSelected?: boolean;
}

const NodeCircle = styled(Container)<Props>`
  border-radius: 50%;
  border: 4px solid ${(props) => props.theme.colors.primary};
  padding: 1rem;
  position: relative;
  background-color: ${(props) =>
    props.isSelected
      ? props.theme.colors.primary
      : props.theme.colors.background};
  color: ${(props) =>
    props.isSelected
      ? props.theme.colors.background
      : props.theme.colors.primary};
  width: ${(props) => (props.large ? "4rem" : "2rem")};
  height: ${(props) => (props.large ? "4rem" : "2rem")};
`;

export default NodeCircle;
