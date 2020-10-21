import React from "react";
import { useDispatch } from "react-redux";
import {
  HeaderText,
  LoadingIndicator,
  TitleText,
} from "../../components/general";
import { TextInput } from "../../components/input";
import TickerSearchItem from "../../components/item/TickerSearchItem";
import colors from "../../constants/Colors";
import { StyleSheet, BorderStyle } from "../../constants/Styles";
export interface SearchProps {}

const Search: React.FC<SearchProps> = ({}) => {
  const storeDispatch = useDispatch();

  const tickers = new Array(10).fill(0);

  const generateTicker = () => {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charactersLength = characters.length;
    for (let i = 0; i < 4; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  return (
    <div style={styles.search}>
      <div style={styles.header}>
        <TitleText>SEARCH</TitleText>
        <HeaderText small style={{ marginBottom: 12 }} color={colors.gray1}>
          Search for stocks by Ticker
        </HeaderText>
        <TextInput
          icon="Search"
          placeholderText="Search"
          containerStyles={styles.input}
        />
      </div>
      <div style={styles.results}>
        {tickers.map((ticker, index) => (
          <div style={styles.resultItem}>
            <TickerSearchItem index={index} ticker={generateTicker()} />
          </div>
        ))}
        {/* <div style={styles.loadingBox}>
          <LoadingIndicator
            circleStyle={{ width: 20, height: 20 }}
            color={colors.white}
          />
          <HeaderText verticalPadding>Searching</HeaderText>
        </div> */}
      </div>
    </div>
  );
};

const styles: StyleSheet = {
  search: {
    display: "flex",
    marginTop: "5vh",
    width: "80%",
    flexGrow: 1,
    flexDirection: "column",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  results: {
    padding: 16,
    flexGrow: 1,
    // justifyContent: "center",
    // display: "flex",
  },
  loadingBox: {
    flexDirection: "column",
    alignItems: "center",
    display: "flex",
    marginTop: "5vh",
    // justifyContent: "center",
  },
  resultItem: {
    paddingBottom: 8,
  },
  input: {
    width: "40%",
  },
};

export default Search;
