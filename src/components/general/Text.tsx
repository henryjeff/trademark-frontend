import React from "react";
import { StyleSheet, FontStyle, FontWeights } from "../../constants/Styles";

export interface TextProps {
  style?: React.CSSProperties;
  fontSize?: number;
  color?: string;
  weight?: FontWeights;
  verticalPadding?: boolean;
  horizontalPadding?: boolean;
  letterSpacing?: number;
}

const Text: React.FC<TextProps> = (props) => {
  const {
    fontSize,
    color,
    weight,
    verticalPadding,
    horizontalPadding,
    letterSpacing,
  } = props;

  const textStyle = Object.assign(
    {},
    styles.text,
    fontSize && { fontSize: fontSize },
    color && { color: color },
    weight && { ...FontStyle[weight] },
    verticalPadding && { ...styles.verticalPadding },
    horizontalPadding && { ...styles.horizontalPadding },
    letterSpacing && { letterSpacing: letterSpacing },
    props.style
  );

  return <p style={textStyle}>{props.children}</p>;
};

const styles: StyleSheet = {
  text: {
    fontSize: 14,
    ...FontStyle.regular,
  },
  verticalPadding: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  horizontalPadding: {
    paddingLeft: 8,
    paddingRight: 8,
  },
};

export default Text;
