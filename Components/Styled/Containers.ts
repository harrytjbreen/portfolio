import styled, { css } from "styled-components";

interface Props {
  column?: boolean;
  vCenter?: boolean;
  hCenter?: boolean;
}

export const RootContainer = styled.div`
  & > * {
    height: 99vh;
    border-bottom: 1px solid black;
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
