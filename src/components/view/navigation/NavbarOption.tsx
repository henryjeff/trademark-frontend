import React, { useState } from "react";
import colors from "../../../constants/Colors";
import { StyleSheet, FontStyle } from "../../../constants/Styles";

export interface NavbarOptionProps {
  containerStyles?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const NavbarOption: React.FC<NavbarOptionProps> = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  const onMouseEnter = () => {
    setIsHovering(true);
  };

  const onMouseLeave = () => {
    setIsHovering(false);
  };

  const optionStyle = Object.assign(
    {},
    styles.navbarOption,
    props.containerStyles,
    isHovering && styles.hover
  );

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={props.onClick}
      style={optionStyle}
    >
      {props.children}
    </div>
  );
};

const styles: StyleSheet = {
  navbarOption: {
    cursor: "pointer",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
    paddingLeft: 12,
    paddingRight: 12,
    height: "100%",
    display: "flex",
    alignItems: "center",
    transition: "linear",
    transitionDuration: "35ms",
  },
  hover: {
    color: colors.black,
    backgroundColor: colors.white,
  },
};

export default NavbarOption;
