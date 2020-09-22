export interface StyleSheet {
  [key: string]: React.CSSProperties;
}

export type FontWeights = "regular" | "medium" | "bold" | "black";

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
