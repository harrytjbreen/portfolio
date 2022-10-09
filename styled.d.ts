import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontSizes: number[];
    fontWeights: number[];
    lineHeights: number[];
    space: number[];
    colors: {
      primary: string;
      background: string;
    };
  }
}
