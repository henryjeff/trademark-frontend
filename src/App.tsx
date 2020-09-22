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
} from "../src/components/general";
import colors from "./constants/Colors";
import { LoadingIndicator } from "./components/general";
import { FontStyle, StyleSheet } from "./constants/Styles";

function App() {
  const [isLoading, setIsLoading] = useState(false);

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
          {/* <TitleText>TITLE TEXT</TitleText>
          <HeaderText>HEADING 1</HeaderText>
          <HeaderText small>HEADING 2</HeaderText>
          <Text>Regular Text</Text>
          <Subtext containerStyles={{ marginBottom: 20 }}>Subtext</Subtext> */}
          <TitleText>SIGN UP</TitleText>
          <HeaderText small style={{ marginBottom: 20 }} color={colors.gray1}>
            Welcome to the club
          </HeaderText>
          <TextInput
            placeholderText="Username"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <TextInput
            placeholderText="Email"
            onChange={(e) => {
              console.log("e.target.value");
            }}
          />
          <TextInput
            inputType="password"
            placeholderText="Password"
            onChange={(e) => {
              console.log("e.target.value");
            }}
          />
          <TextInput
            inputType="password"
            placeholderText="Re-type Password"
            onChange={(e) => {
              console.log("e.target.value");
            }}
          />
          <Button
            isLoading={isLoading}
            onClick={() => {
              setIsLoading(true);
            }}
            buttonText="SIGN UP"
          />
        </div>
      </div>
    </div>
  );
}

const styles: StyleSheet = {
  form: {
    marginTop: "10vh",
    width: "25%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: colors.red,
  },
  body: {
    justifyContent: "center",
    alignItems: "flex-start",
    display: "flex",
    flex: 1,
  },
};

export default App;
