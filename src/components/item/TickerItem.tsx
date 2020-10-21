import React, { useState, useEffect } from "react";
import { HeaderText, Icon, Subtext, Text, TitleText } from "../general";
import {
  StyleSheet,
  FontStyle,
  FontWeights,
  BorderStyle,
  StandardBorderStyle,
} from "../../constants/Styles";
import colors from "../../constants/Colors";
import MoneyText from "../general/MoneyText";
import { Button } from "../button";

export interface TickerItemProps {
  ticker: string;
  containerStyle?: React.CSSProperties;
}

const TickerItem: React.FC<TickerItemProps> = ({ ticker, containerStyle }) => {
  const change = -0.5;

  return (
    <div style={Object.assign({}, styles.container, containerStyle)}>
      <div style={styles.leftContainer}>
        <div style={styles.dataContainer}>
          <div style={styles.name}>
            <Subtext>TICKER</Subtext>
            <Text fontSize={24} weight="black">
              {ticker}
            </Text>
          </div>
          <MoneyText
            containerStyle={styles.price}
            weight="black"
            amount={140.2}
            change={20.4}
            label="PRICE"
          />
          <div style={styles.range}>
            <Subtext>DAILY RANGE</Subtext>
            <Text fontSize={24} weight="black">
              128.90 - 155.49
            </Text>
          </div>
          {/* <div style={styles.company}>
            <Subtext>COMPANY</Subtext>
            <Text fontSize={24} weight="bold">
              Apple Inc.
            </Text>
          </div> */}
        </div>
        <Button
          buttonText={`VIEW ${ticker}`}
          outline
          containerStyles={styles.button}
        />
      </div>
      <div
        style={Object.assign(
          {},
          styles.rightContainer,
          change > 0 ? { backgroundColor: colors.green } : null
        )}
      >
        <Subtext color={colors.white}>CHANGE (%)</Subtext>
        <div style={styles.change}>
          <Text fontSize={24} weight="black">
            {change.toFixed(2)}%
          </Text>
          <Icon
            style={styles.icon}
            icon={change > 0 ? "StockUp" : "StockDown"}
          />
        </div>
      </div>
    </div>
  );
};

const styles: StyleSheet = {
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  leftContainer: {
    flexShrink: 1,
    flexWrap: "nowrap",
    // flexBasis: 0,
    ...BorderStyle.gray,
    borderRightWidth: 0,
    width: "100%",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    display: "flex",
    flexDirection: "row",
    padding: 16,
    paddingLeft: 24,
    paddingRight: 24,
  },
  dataContainer: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    minWidth: 0,
    flexWrap: "nowrap",
    // width: "100%",
    overflow: "hidden",
    justifyContent: "space-between",
  },
  rightContainer: {
    padding: 16,
    paddingLeft: 24,
    paddingRight: 24,
    flexShrink: 1,
    ...StandardBorderStyle,
    borderWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: colors.red,
  },
  change: {
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    paddingLeft: 8,
    width: 20,
    marginTop: 2,
  },
  button: {
    width: 156,
    // flex: 1,
  },
  name: {
    flex: 1,
    // paddingRight: 16,
  },
  price: {
    flex: 2,
    // paddingRight: 16,
  },
  // range: {
  //   flex: 2,
  //   marginRight: 16,
  // },
  // company: {
  //   width: "40%",
  //   flexShrink: 3,
  //   paddingRight: 16,
  // },
};

export default TickerItem;
