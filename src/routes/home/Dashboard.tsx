import React from "react";
import { useDispatch } from "react-redux";
import { BorderStyle, StyleSheet } from "../../constants/Styles";
import colors from "../../constants/Colors";
import { Text } from "../../components/general";
import { Button } from "../../components/button";
import BigTicker from "../../components/view/ticker/BigTicker";
import BasicStockGraph from "../../components/view/graphs/BasicStockGraph";
export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  const storeDispatch = useDispatch();

  return (
    <div style={styles.dashboard}>
      <div style={styles.strategies}>
        <BigTicker ticker="APPL" companyName="Apple Inc." />
        {/* <Button buttonText="Button" /> */}
        {/* <Button isLoading buttonText="Button" /> */}
      </div>
      <div style={styles.metrics}>
        {/* <Text>Metrics</Text> */}
        <BasicStockGraph />
      </div>
    </div>
  );
};

const styles: StyleSheet = {
  dashboard: {
    display: "flex",
    marginTop: "5vh",
    width: "85%",
    flexGrow: 1,
  },
  strategies: {
    flex: 1,
    // ...BorderStyle.gray,
  },
  metrics: {
    flex: 2,
    // ...BorderStyle.gray,
  },
};

export default Dashboard;
