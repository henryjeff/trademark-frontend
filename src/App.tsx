import React, { useState } from "react";
import "./App.css";
import UserIcon from "./assets/icons/User.svg";
import MailIcon from "./assets/icons/Mail.svg";
import KeyIcon from "./assets/icons/Key.svg";

import Button from "./components/button/Button";
import TextInput from "./components/input/TextInput";
import {
  TitleText,
  HeaderText,
  Subtext,
  Text,
} from "../src/components/general";
import colors from "./constants/Colors";
import { FontStyle, StyleSheet } from "./constants/Styles";
import LoadingIndicator from "./components/general/LoadingIndicator";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="app">
      <div style={styles.form}>
        <TitleText>TITLE TEXT</TitleText>
        <HeaderText>HEADING 1</HeaderText>
        <HeaderText small>HEADING 2</HeaderText>
        <Text>Regular Text</Text>
        <Subtext containerStyles={{ marginBottom: 20 }}>Subtext</Subtext>
        <TitleText>SIGN UP</TitleText>
        <HeaderText
          small
          light
          containerStyles={{ marginBottom: 20 }}
          color={colors.gray1}
        >
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
  );
}

const styles: StyleSheet = {
  form: {
    width: "25%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: colors.red,
  },
};

export default App;
