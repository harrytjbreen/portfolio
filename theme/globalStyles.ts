import { createGlobalStyle } from "styled-components";
import { fontSizes } from "./theme";

const GlobalStyle = createGlobalStyle`
  html * {
    font-family: ".SF NS Mono", "Roboto Light", sans-serif !important;
    overscroll-behavior: contain;
  }

  body {
    margin: 0;
    padding-inline: 4rem;
     font-size: ${fontSizes[3]}px;
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.background};
  }
  
  h1 {
    text-align: center;
    font-size: ${fontSizes[9]}px;
  }
  
  h2 {
    text-align: center;
    font-size: ${fontSizes[7]}px;
  }
  
  h3 {
    text-align: center;
    font-size: ${fontSizes[5]}px;
  }
`;

export default GlobalStyle;
