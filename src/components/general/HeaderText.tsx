import React from "react";
import { StyleSheet, FontStyle } from "../../constants/Styles";

export interface HeaderTextProps {
  small?: boolean;
  containerStyles?: React.CSSProperties;
  color?: string;
  light?: boolean;
  bold?: boolean;
}

const HeaderText: React.FC<HeaderTextProps> = (props) => {
  return (
    <p
      style={Object.assign(
        {},
        props.small ? styles.heading2 : styles.heading1,
        props.containerStyles,
        { color: props.color },
        props.light && { ...FontStyle.regular },
        props.bold && { ...FontStyle.bold }
      )}
    >
      {props.children}
    </p>
  );
};

const styles: StyleSheet = {
  heading1: {
    fontSize: 24,
    ...FontStyle.medium,
  },
  heading2: {
    fontSize: 16,
    ...FontStyle.medium,
  },
};

export default HeaderText;
