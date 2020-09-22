import React from "react";
import { StyleSheet, FontStyle, FontWeights } from "../../constants/Styles";

export interface TextProps {
  style?: React.CSSProperties;
  fontSize?: number;
  color?: string;
  weight?: FontWeights;
}

const Text: React.FC<TextProps> = (props) => {
  const { fontSize, color, weight } = props;

  const textStyle = Object.assign(
    {},
    styles.text,
    props.style,
    fontSize && { fontSize: fontSize },
    color && { color: color },
    weight && { ...FontStyle[weight] }
  );

  return <p style={textStyle}>{props.children}</p>;
};

const styles: StyleSheet = {
  text: {
    fontSize: 14,
    ...FontStyle.regular,
  },
};

export default Text;
