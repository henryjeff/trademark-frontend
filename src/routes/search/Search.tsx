import React from "react";
import { useDispatch } from "react-redux";
import { HeaderText, TitleText } from "../../components/general";
import { TextInput } from "../../components/input";
import TickerItem from "../../components/item/TickerItem";
import colors from "../../constants/Colors";
import { StyleSheet, BorderStyle } from "../../constants/Styles";
export interface SearchProps {}

const Search: React.FC<SearchProps> = ({}) => {
  const storeDispatch = useDispatch();

  const tickers = ["APPL", "MSFT", "ABC", "GOOG", "DEF", "LMAO"];

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
        {tickers.map((ticker) => (
          <div style={styles.resultItem}>
            <TickerItem ticker={ticker} />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles: StyleSheet = {
  search: {
    display: "flex",
    marginTop: "5vh",
    // width: "75%",
    width: 700,
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
  },
  resultItem: {
    paddingBottom: 8,
  },
  input: {
    width: "40%",
  },
};

export default Search;
