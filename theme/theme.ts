export const fontSizes = [12, 14, 16, 18, 20, 24, 36, 48, 80, 96];
export const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
export const lineHeights = [1, 1.25, 1.5];
export const space = [0, 4, 8, 16, 24, 32, 48, 64, 128, 256, 512];

const theme = {
  space,
  fontSizes,
  fontWeights,
  lineHeights,
};

export const light = {
  colors: {
    primary: "black",
    background: "white",
  },
};

export const dark = {
  ...light,
  colors: {
    primary: light.colors.background,
    background: light.colors.primary,
  },
};

export default theme;
