import React, { useState, useEffect } from "react";
import { HeaderText, Subtext, Text, TitleText } from "../../general";
import { StyleSheet, FontStyle, FontWeights } from "../../../constants/Styles";
import colors from "../../../constants/Colors";
import MoneyText from "../../general/MoneyText";

export interface BigTickerProps {
  ticker: string;
  companyName: string;
  containerStyle?: React.CSSProperties;
}

const BigTicker: React.FC<BigTickerProps> = ({
  ticker,
  companyName,
  containerStyle,
}) => {
  const textStyle = Object.assign({}, styles.text, containerStyle);

  const [price, setPrice] = useState(108.13);

  const prevClosePrice = 107.12;
  const openPrice = 105.17;

  const dailyHigh = 110.25;
  const dailyLow = 105.0;

  const change = 0.5;

  const update = () => {
    setTimeout(() => {
      const change = Number((Math.random() * 0.05).toFixed(2));
      setPrice(Math.random() > 0.5 ? price + change : price - change);
      update();
    }, 2000);
  };

  useEffect(() => {
    update();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <TitleText fontSize={48}>{ticker}</TitleText>
        <HeaderText weight="bold" color={colors.green} fontSize={32}>
          {change > 0 ? "+" : "-"}
          {change.toFixed(2)}%
        </HeaderText>
      </div>
      <div style={styles.nameContainer}>
        <Subtext fontSize={16}>{companyName}</Subtext>
      </div>
      <div style={styles.tickerDataContainer}>
        <MoneyText
          label="CURRENT PRICE"
          weight="black"
          fontSize={40}
          amount={price}
          change={price - prevClosePrice}
        />
        <div style={styles.tickerDataRow}>
          <MoneyText
            label="DAILY HIGH"
            amount={dailyHigh}
            change={dailyHigh - price}
          />
          <MoneyText
            label="DAILY LOW"
            amount={dailyLow}
            change={dailyLow - price}
          />
        </div>
        <div style={styles.tickerDataRow}>
          <MoneyText
            label="PREV CLOSE"
            amount={prevClosePrice}
            change={prevClosePrice - price}
          />
          <MoneyText
            label="OPEN"
            amount={openPrice}
            change={openPrice - price}
          />
        </div>
      </div>
    </div>
  );
};

const styles: StyleSheet = {
  container: {
    // borderWidth: 1,
    // borderColor: "red",
    // borderStyle: "solid",
    display: "flex",
    padding: 16,
    paddingLeft: 24,
    paddingRight: 24,
    boxSizing: "border-box",
    flexDirection: "column",
    width: "100%",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tickerDataContainer: {
    marginTop: 32,
  },
  tickerDataRow: {
    marginTop: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

export default BigTicker;
