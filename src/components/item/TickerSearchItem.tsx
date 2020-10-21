import React, { useState, useEffect, useRef } from "react";
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
import SmallStockGraph from "../view/graphs/SmallStockGraph";
import { Button } from "../button";

export interface TickerItemProps {
  ticker: string;
  index?: number;
  verticalPadding?: number;
  containerStyle?: React.CSSProperties;
}

const TickerItem: React.FC<TickerItemProps> = ({
  ticker,
  index,
  verticalPadding,
  containerStyle,
}) => {
  const change = Math.random() > 0.5 ? -Math.random() * 10 : Math.random() * 10;
  const price = (Math.random() * 1000) / (Math.random() * 5);

  const containerRef = useRef<any>();

  // const [width, setWidth] = useState(0);

  const padding = {
    paddingTop: verticalPadding || 12,
    paddingBottom: verticalPadding || 12,
  };

  return (
    <div
      ref={containerRef}
      style={Object.assign({}, styles.container, padding, containerStyle)}
    >
      <div style={styles.dataContainer}>
        <div style={styles.dataItem}>
          <Subtext>TICKER</Subtext>
          <Text fontSize={24} weight="black">
            {ticker}
          </Text>
        </div>
        <MoneyText
          containerStyle={styles.dataItem}
          weight="black"
          amount={price}
          change={change * 1.5}
          label="PRICE"
        />
        <div style={styles.graph}>
          <SmallStockGraph renderDelay={(index || 0) * 175} />
        </div>
        <div style={styles.changeContainer}>
          <div>
            <Subtext>CHANGE (%)</Subtext>
            <div style={styles.change}>
              <Text fontSize={24} style={styles.changeNum} weight="black">
                {change.toFixed(2)} %
              </Text>
              <Icon
                style={styles.icon}
                icon={change > 0 ? "StockUp" : "StockDown"}
              />
            </div>
          </div>
        </div>
      </div>
      <Button
        buttonText={`VIEW ${ticker}`}
        outline
        containerStyles={styles.button}
      />
    </div>
  );
};

const styles: StyleSheet = {
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    ...BorderStyle.lightGray,
    borderRadius: 0,
    borderWidth: 0,
    // paddingTop: 10,
    // paddingBottom: 10,
    borderBottomWidth: 1,
  },
  dataContainer: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    minWidth: 0,
    flexWrap: "nowrap",
    overflow: "hidden",
    justifyContent: "flex-start",
  },
  dataItem: {
    flex: 1,
  },
  graph: {
    flex: 1.5,
  },
  changeContainer: {
    flex: 1,
    // flexShrink: 1,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    // minWidth: 152,
    // marginRight: 16,
    // borderTopRightRadius: 10,
    // borderTopLeftRadius: 10,
  },
  change: {
    display: "flex",
    flexDirection: "row",
  },
  verticalPadding: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  icon: {
    // fill: "red",
    paddingLeft: 8,
    width: 20,
    marginTop: 2,
    // color: "red",
  },
  button: {
    width: 156,
    // flex: 1,
  },
};

export default TickerItem;
