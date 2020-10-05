import React from "react";
import { StyleSheet } from "../../constants/Styles";
import colors from "../../constants/Colors";
import Text, { TextProps } from "./Text";
import Subtext from "./Subtext";

export interface MoneyTextProps extends TextProps {
  amount: number;
  label?: string;
  change?: number;
  containerStyle?: React.CSSProperties;
}

const MoneyText: React.FC<MoneyTextProps> = (props) => {
  const { amount, change, label, containerStyle } = props;

  const fontSize = props.fontSize || 24;
  const superScriptSize = fontSize / 2;

  return (
    <div style={containerStyle}>
      <Subtext>{label}</Subtext>
      <div style={styles.container}>
        <Text fontSize={fontSize} color={colors.white} weight="bold" {...props}>
          ${amount.toFixed(2)}
        </Text>
        {change && (
          <Text
            fontSize={superScriptSize}
            style={{ paddingLeft: 4, paddingTop: superScriptSize / 2 }}
            color={change > 0 ? colors.green : colors.red}
            weight="bold"
          >
            ({change > 0 ? "+" : ""}
            {change.toFixed(2)})
          </Text>
        )}
      </div>
    </div>
  );
};

const styles: StyleSheet = {
  container: {
    display: "flex",
  },
};

export default MoneyText;
