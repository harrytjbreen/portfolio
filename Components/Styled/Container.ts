import styled, {css} from "styled-components";

interface Props {
    column?: boolean;
}

const Container = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.column && css`flex-direction: column`}
`;

export default Container;