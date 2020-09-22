import React from "react";
import getIconByName, { IconName } from "../../assets/icons";
import colors from "../../constants/Colors";
import { StyleSheet } from "../../constants/Styles";

export interface IconProps {
  style?: React.CSSProperties;
  icon: IconName;
}

const Icon: React.FC<IconProps> = (props) => {
  const { icon } = props;

  const iconStyle = Object.assign({}, styles.icon, props.style);

  return <img style={iconStyle} src={getIconByName(icon)} />;
};

const styles: StyleSheet = {
  icon: {},
};

export default Icon;
