import React, { useState } from "react";
import colors from "../../../constants/Colors";
import { StyleSheet, FontStyle } from "../../../constants/Styles";

export interface NavbarOptionProps {
  containerStyles?: React.CSSProperties;
  justify?: "center" | "left" | "right";
}

const NavbarOption: React.FC<NavbarOptionProps> = (props) => {
  const sectionStyle = Object.assign(
    {},
    styles.navbarSection,
    props.containerStyles,
    props.justify == "center"
      ? styles.navbarCenter
      : props.justify === "left"
      ? styles.navbarLeft
      : props.justify === "right"
      ? styles.navbarRight
      : null
  );

  return <div style={sectionStyle}>{props.children}</div>;
};

const styles: StyleSheet = {
  navbarSection: {
    display: "flex",
    width: "33.33%",
    paddingLeft: 48,
    paddingRight: 48,
    height: "100%",
  },
  navbarLeft: {
    justifyContent: "flex-start",
  },
  navbarCenter: {
    justifyContent: "center",
  },
  navbarRight: {
    justifyContent: "flex-end",
  },
};

export default NavbarOption;
