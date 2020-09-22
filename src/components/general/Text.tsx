import React from "react";
import { StyleSheet, FontStyle } from "../../constants/Styles";

export interface TextProps {
  containerStyles?: React.CSSProperties;
}

const Text: React.FC<TextProps> = (props) => {
  return (
    <p style={Object.assign({}, styles.text, props.containerStyles)}>
      {props.children}
    </p>
  );
};

const styles: StyleSheet = {
  text: {
    fontSize: 14,
    ...FontStyle.regular,
  },
};

export default Text;
