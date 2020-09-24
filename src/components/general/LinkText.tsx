import React, { useState } from "react";
import Text, { TextProps } from "./Text";
import { Link, useLocation } from "react-router-dom";

import { StyleSheet } from "../../constants/Styles";
import colors from "../../constants/Colors";

export interface LinkTextProps extends TextProps {
  redirectTo?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const LinkText: React.FC<LinkTextProps> = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const onMouseEnter = () => {
    setIsHovering(true);
  };

  const onMouseLeave = () => {
    setIsHovering(false);
    setIsActive(false);
  };

  const onMouseDown = () => {
    setIsActive(true);
  };

  const onMouseUp = () => {
    setIsActive(false);
  };

  const linkStyle = Object.assign(
    {},
    styles.link,
    isHovering && styles.hover,
    isActive && styles.active,
    location.pathname === props.redirectTo && styles.here
  );

  return (
    <Link to={props.redirectTo} style={styles.routerLink}>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onClick={props.onClick}
      >
        <Text style={linkStyle} {...props}>
          {props.children}
        </Text>
      </div>
    </Link>
  );
};

const styles: StyleSheet = {
  link: {
    cursor: "pointer",
    color: colors.gray1,
    textDecoration: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
  },
  hover: {
    opacity: 0.9,
  },
  active: {
    opacity: 0.7,
  },
  routerLink: {
    textDecoration: "none",
  },
  here: {
    color: colors.white,
  },
};

export default LinkText;
