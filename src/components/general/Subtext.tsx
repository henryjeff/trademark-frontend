import React from "react";
import colors from "../../constants/Colors";
import Text, { TextProps } from "./Text";

export interface SubtextProps extends TextProps {}

const Subtext: React.FC<SubtextProps> = (props) => {
  return (
    <Text
      fontSize={12}
      color={colors.gray1}
      weight="bold"
      letterSpacing={1}
      {...props}
    >
      {props.children}
    </Text>
  );
};

export default Subtext;
