import React from "react";
import { StyleSheet, FontStyle } from "../../constants/Styles";
import colors from "../../constants/Colors";

export interface SubtextProps {
  containerStyles?: React.CSSProperties;
}

const Subtext: React.FC<SubtextProps> = (props) => {
  return (
    <p style={Object.assign({}, styles.subtext, props.containerStyles)}>
      {props.children}
    </p>
  );
};

const styles: StyleSheet = {
  subtext: {
    fontSize: 12,
    color: colors.gray1,
    ...FontStyle.regular,
  },
};

export default Subtext;
