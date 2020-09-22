import React from "react";
import Text, { TextProps } from "./Text";

export interface HeaderTextProps extends TextProps {
  small?: boolean;
}

const HeaderText: React.FC<HeaderTextProps> = (props) => {
  return (
    <Text fontSize={props.small ? 16 : 24} weight={"medium"} {...props}>
      {props.children}
    </Text>
  );
};

export default HeaderText;
