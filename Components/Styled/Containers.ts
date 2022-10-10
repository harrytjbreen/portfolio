import styled, { css } from "styled-components";

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

export default Container;
