import React from "react";
import Text, { TextProps } from "./Text";

export interface TitleTextProps extends TextProps {}

const TitleText: React.FC<TitleTextProps> = (props) => {
  return (
    <Text fontSize={36} weight="black" {...props}>
      {props.children}
    </Text>
  );
};

export default TitleText;
