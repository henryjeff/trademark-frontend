import React from "react";
import { useDispatch } from "react-redux";
import { StyleSheet } from "../../constants/Styles";
import { Text, TitleText } from "../../components/general";
import BigTicker from "../../components/view/ticker/BigTicker";
import BasicStockGraph from "../../components/view/graphs/BasicStockGraph";
export interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = ({}) => {
  const storeDispatch = useDispatch();

  return (
    <div style={styles.dashboard}>
      <TitleText></TitleText>
    </div>
  );
};

const styles: StyleSheet = {
  dashboard: {
    textAlign: "center",
    display: "flex",
    marginTop: "5vh",
    width: "85%",
    flexGrow: 1,
    justifyContent: "center",
    // backgroundColor: "red",
  },
};

export default Welcome;
