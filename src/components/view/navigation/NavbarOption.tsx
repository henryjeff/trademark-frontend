import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import colors from "../../../constants/Colors";
import { StyleSheet, FontStyle } from "../../../constants/Styles";

export interface NavbarOptionProps {
  containerStyles?: React.CSSProperties;
  redirectTo?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const NavbarOption: React.FC<NavbarOptionProps> = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const location = useLocation();

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
    isHovering && styles.hover,
    location.pathname === props.redirectTo && styles.here
  );

  return (
    <Link to={props.redirectTo || "/"} style={styles.routerLink}>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={props.onClick}
        style={optionStyle}
      >
        {props.children}
      </div>
    </Link>
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
    transitionDuration: "50ms",
    color: colors.gray1,
  },
  hover: {
    backgroundColor: `${colors.gray1}28`,
  },
  routerLink: {
    textDecoration: "none",
  },
  here: {
    color: colors.white,
  },
};

export default NavbarOption;
