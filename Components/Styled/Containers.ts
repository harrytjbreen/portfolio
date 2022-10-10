import styled, { css } from "styled-components";
import SlideDown from "./animations/SlideDown";

interface Props {
  column?: boolean;
  vCenter?: boolean;
  hCenter?: boolean;
}

interface AboutContainerProps {
  isMobile: boolean;
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
  right: 5rem;
  width: auto;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  animation: 0.5s 2s linear ${SlideDown} both;
`;

export const NodesContainer = styled(Container)`
  justify-content: space-between;
  position: relative;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.primary};
  overflow: hidden;
`;

export const AboutContainer = styled.div<AboutContainerProps>`
  display: grid;
  gap: 4rem;
  grid-template-columns: ${(props) =>
    props.isMobile ? "1fr" : "1fr 1.5fr 1fr"};
  align-items: center;
  text-align: center;
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 500px), 1fr));
  grid-column-gap: 4rem;
`;

export const SkillItemContainer = styled(Container)`
  justify-content: space-between;
`;

export default Container;
