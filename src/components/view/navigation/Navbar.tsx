import React, { useState } from "react";
import colors from "../../../constants/Colors";
import { StyleSheet, FontStyle } from "../../../constants/Styles";

export interface NavbarOptionProps {
  containerStyles?: React.CSSProperties;
  height?: number;
}

const NavbarOption: React.FC<NavbarOptionProps> = (props) => {
  const navbarStyle = Object.assign(
    {},
    styles.navbar,
    props.containerStyles,
    props.height && { height: props.height }
  );

  return <div style={navbarStyle}>{props.children}</div>;
};

const styles: StyleSheet = {
  navbar: {
    height: 48,
    alignItems: "center",
    display: "flex",
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: colors.gray1,
    borderStyle: "solid",
  },
};

export default NavbarOption;
