import colors from "./Colors";

export interface StyleSheet {
  [key: string]: React.CSSProperties;
}

export type FontWeights = "regular" | "medium" | "bold" | "black";

export type BorderStyles =
  | "white"
  | "gray"
  | "mediumWhite"
  | "mediumGray"
  | "lightGray";

export const StandardBorderStyle: React.CSSProperties = {
  boxSizing: "border-box",
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: 10,
};

export const BorderStyle: { [key in BorderStyles]: StyleSheet } = {
  white: {
    ...StandardBorderStyle,
    //@ts-ignore
    borderColor: colors.white,
  },
  gray: {
    ...StandardBorderStyle,
    //@ts-ignore
    borderColor: colors.gray1,
  },
  mediumWhite: {
    ...StandardBorderStyle,
    //@ts-ignore
    borderWidth: 2,
    //@ts-ignore
    borderColor: colors.white,
  },
  mediumGray: {
    ...StandardBorderStyle,
    //@ts-ignore
    borderWidth: 2,
    //@ts-ignore
    borderColor: colors.gray1,
  },
  lightGray: {
    ...StandardBorderStyle,
    //@ts-ignore
    borderColor: `${colors.gray1}83`,
  },
};

/*
  Font info:

  400 - Regular
  500 - Medium
  700 - Bold
  800 - XBold
*/
export const FontStyle: { [key in FontWeights]: StyleSheet } = {
  regular: {
    //@ts-ignore
    fontFamily: "objektiv-mk3",
    //@ts-ignore
    fontWeight: 400,
    //@ts-ignore
    fontStyle: "normal",
  },
  medium: {
    //@ts-ignore
    fontFamily: "objektiv-mk3",
    //@ts-ignore
    fontWeight: 500,
    //@ts-ignore
    fontStyle: "normal",
  },
  bold: {
    //@ts-ignore
    fontFamily: "objektiv-mk3",
    //@ts-ignore
    fontWeight: 700,
    //@ts-ignore
    fontStyle: "normal",
  },
  black: {
    //@ts-ignore
    fontFamily: "objektiv-mk3",
    //@ts-ignore
    fontWeight: 800,
    //@ts-ignore
    fontStyle: "normal",
  },
};
