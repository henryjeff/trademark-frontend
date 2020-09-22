import React from "react";
import { StyleSheet, FontStyle } from "../../constants/Styles";

export interface TitleTextProps {
  containerStyles?: React.CSSProperties;
}

const TitleText: React.FC<TitleTextProps> = (props) => {
  return (
    <p style={Object.assign({}, styles.titleText, props.containerStyles)}>
      {props.children}
    </p>
  );
};

const styles: StyleSheet = {
  titleText: {
    fontSize: 36,
    ...FontStyle.black,
  },
};

export default TitleText;
