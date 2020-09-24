import React, { useReducer, Reducer } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { StyleSheet, FontStyle } from "../../constants/Styles";
import colors from "../../constants/Colors";
import {
  TitleText,
  HeaderText,
  LinkText,
  Text,
} from "../../components/general";
import { TextInput } from "../../components/input";
import { Button } from "../../components/button";
import { useTokenData } from "../../store/selectors/AuthSelectors";

export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  const storeDispatch = useDispatch();

  return (
    <div style={styles.dashboard}>
      <div style={styles.strategies}>
        {/* <div style={styles.strategyContainer}>
          <div style={styles.column}>
            <Subtext weight="medium">TICKER</Subtext>
            <TitleText fontSize={18}>APPL</TitleText>
          </div>
          <div style={styles.column}>
            <Subtext weight="medium">PRICE</Subtext>
            <TitleText fontSize={18}>$124.09</TitleText>
          </div>
          <div style={styles.column}>
            <Subtext weight="medium">CHANGE</Subtext>
            <TitleText fontSize={18}>+0.5%</TitleText>
          </div>
          <div style={styles.rightColumn}>
            <div>
              <Subtext weight="medium" color={colors.white}>
                CHANGE
              </Subtext>
              <TitleText fontSize={18}>+$30.0</TitleText>
            </div>
            <Icon icon="Key" />
          </div>
        </div> */}
        <Button buttonText="Button" />
      </div>
      <div style={styles.metrics}>
        <Text>Metrics</Text>
      </div>
    </div>
  );
};

const styles: StyleSheet = {
  strategyContainer: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.gray1,
    borderRadius: 10,
    width: "90%",
    marginBottom: 16,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
  column: {
    padding: 12,
    display: "flex",
    flexDirection: "column",
  },
  rightColumn: {
    padding: 12,
    backgroundColor: colors.green,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: "row",
    display: "flex",
  },
  dashboard: {
    display: "flex",
    width: "85%",
    flexGrow: 1,
    // backgroundColor: colors.red,
  },
  strategies: {
    flex: 1,
    marginTop: "5vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // minWidth: 300,
    backgroundColor: colors.green,
  },
  metrics: {
    flex: 1,
    marginTop: "5vh",
    backgroundColor: "blue",
  },
};

export default Dashboard;
