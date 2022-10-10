import styled, { css } from "styled-components";
import SlideDown from "./animations/SlideDown";

interface Props {
  column?: boolean;
  vCenter?: boolean;
  hCenter?: boolean;
}

export const RootContainer = styled.div`
  & > * {
    min-height: 100vh;
    border-bottom: ${(props) => `1px solid ${props.theme.colors.primary}`};
  }
`;

const Container = styled.div<Props>`
  display: flex;
  width: 100%;
  ${(props) => {
    if (props.column)
      return css`
        flex-direction: column;
        justify-content: ${props.vCenter ? "center" : "inherit"};
        align-items: ${props.hCenter ? "center" : "inherit"};
      `;
    return css`
      flex-direction: row;
      align-items: ${props.hCenter ? "center" : "inherit"};
      justify-content: ${props.vCenter ? "center" : "inherit"};
    `;
  }}
`;

export const LinkContainer = styled(Container)`
  position: absolute;
  border-radius: 0 0 10% 10%;
  top: 0;
  left: 80vw;
  width: auto;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  animation: 0.5s 2s linear ${SlideDown} both;
  & > * {
    margin: 1.3rem 1rem 1rem 1rem;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.2) translateY(-5px);
    }
  }
`;

export default Container;
