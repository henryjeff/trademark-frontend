import React, { useState } from "react";
import "./App.css";
import UserIcon from "./assets/icons/User.svg";
import MailIcon from "./assets/icons/Mail.svg";
import KeyIcon from "./assets/icons/Key.svg";

import { Button } from "./components/button/";
import { TextInput } from "./components/input/";
import {
  Navbar,
  NavbarSection,
  NavbarOption,
} from "./components/view/navigation";
import {
  TitleText,
  HeaderText,
  Subtext,
  Text,
  Icon,
  LoadingIndicator,
} from "../src/components/general";
import colors from "./constants/Colors";
import { FontStyle, StyleSheet } from "./constants/Styles";

function App() {
  return (
    <div className="app">
      <Navbar>
        <NavbarSection justify="left">
          <NavbarOption>
            <Text weight="medium">Dashboard</Text>
          </NavbarOption>
          <NavbarOption>
            <Text weight="medium" color={colors.gray1}>
              Getting Started
            </Text>
          </NavbarOption>
          <NavbarOption>
            <Text weight="medium" color={colors.gray1}>
              Help
            </Text>
          </NavbarOption>
        </NavbarSection>
        <NavbarSection justify="center">
          <NavbarOption>
            <TitleText fontSize={24}>TM</TitleText>
          </NavbarOption>
        </NavbarSection>
        <NavbarSection justify="right">
          <NavbarOption>
            <Text weight="medium" color={colors.gray1}>
              henryjeff
            </Text>
          </NavbarOption>
        </NavbarSection>
      </Navbar>
      <div style={styles.body}>
        <div style={styles.form}>
          <TitleText>SIGN UP</TitleText>
          <HeaderText small style={{ marginBottom: 20 }} color={colors.gray1}>
            Welcome to the club
          </HeaderText>
          <TextInput
            icon="User"
            placeholderText="Username"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <TextInput
            icon="Mail"
            placeholderText="Email"
            onChange={(e) => {
              console.log("e.target.value");
            }}
          />
          <TextInput
            icon="Key"
            inputType="password"
            placeholderText="Password"
            onChange={(e) => {
              console.log("e.target.value");
            }}
          />
          <TextInput
            icon="Key"
            inputType="password"
            placeholderText="Re-type Password"
            onChange={(e) => {
              console.log("e.target.value");
            }}
          />
          <Button buttonText="SIGN UP" />
        </div>
        {/* <div style={styles.dashboard}>
          <div style={styles.strategies}>
            <Text>Strats</Text>
          </div>
          <div style={styles.metrics}>
            <Text>Metrics</Text>
          </div>
        </div> */}
      </div>
    </div>
  );
}

const styles: StyleSheet = {
  dashboard: {
    display: "flex",
    width: "85%",
    flexGrow: 1,
    backgroundColor: colors.red,
  },
  strategies: {
    flex: 1,
    minWidth: 200,
    backgroundColor: colors.green,
  },
  metrics: {
    flex: 3,
    backgroundColor: "blue",
  },
  form: {
    marginTop: "-10vh",
    width: "25%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    // backgroundColor: "blue",
  },
};

export default App;
