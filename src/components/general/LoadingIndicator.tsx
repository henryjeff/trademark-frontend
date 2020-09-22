import React from "react";
import { StyleSheet, FontStyle } from "../../constants/Styles";
import colors from "../../constants/Colors";

import "./general.css";

export interface LoadingIndicatorProps {
  containerStyles?: React.CSSProperties;
  color?: string;
  circleStyle?: React.CSSProperties;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  containerStyles,
  color,
  circleStyle,
}) => {
  const circleStyles = Object.assign({}, styles.circle, circleStyle, {
    backgroundColor: color,
  });

  return (
    <div className="spinner" style={containerStyles}>
      <div className="bounce1" style={circleStyles}></div>
      <div className="bounce2" style={circleStyles}></div>
      <div className="bounce3" style={circleStyles}></div>
    </div>
  );
};

const styles: StyleSheet = {
  circle: {
    width: 12,
    height: 12,
    marginLeft: 2,
    marginRight: 2,
    backgroundColor: "white",
  },
  //   container: {
  //     position: "relative",
  //     margin: 8,
  //     width: "100%",
  //   },
  //   input: {
  //     padding: 0,
  //     height: 32,
  //     backgroundColor: "transparent",
  //     borderWidth: 2,
  //     marginLeft: -2, // For border
  //     borderColor: colors.white,
  //     borderStyle: "solid",
  //     borderRadius: 10,
  //     color: colors.white,
  //     width: "100%",
  //     outline: "none",
  //     ...FontStyle.regular,
  //   },
  //   icon: {
  //     position: "absolute",
  //     top: 12,
  //     width: 12,
  //     left: 12,
  //   },
};

export default LoadingIndicator;
