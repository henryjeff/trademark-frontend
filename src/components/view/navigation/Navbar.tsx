import React, { useEffect, useState } from "react";
import colors from "../../../constants/Colors";
import { StyleSheet } from "../../../constants/Styles";
import { Text } from "../../general";
import { Button } from "../../button";

export interface NavbarOptionProps {
  containerStyles?: React.CSSProperties;
  height?: number;
}

const NavbarOption: React.FC<NavbarOptionProps> = (props) => {
  const navbarStyle = Object.assign(
    {},
    styles.navbar,
    props.containerStyles,
    props.height && { height: props.height }
  );

  const [h, setH] = useState(Number);

  return (
    <div>
      <div style={navbarStyle}>{props.children}</div>
      <div
        style={Object.assign({}, styles.headerStyle, {
          transform: "translateY(" + h + "px)",
        })}
      >
        <div style={styles.headerInnerStyle}>
          <Text>You haven't set up your Alpaca API credentials.</Text>
          <Button
            buttonText={"Update in Settings"}
            outline
            containerStyles={{ paddingLeft: 8 }}
            buttonStyles={styles.button}
            buttonTextProps={{ fontSize: 12 }}
            enforceUppercase={false}
          />
        </div>
      </div>
      {/* <Button buttonText={"0"} onClick={() => setH(0)} />
      <Button buttonText={"open"} onClick={() => setH(0)} />
      <Button buttonText={"hide"} onClick={() => setH(-36)} /> */}
    </div>
  );
};

const styles: StyleSheet = {
  headerStyle: {
    top: 48,
    zIndex: 999,
    width: "100%",
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    position: "absolute",
    transition: "transform 0.3s ease-in-out",
    backgroundColor: colors.red,
  },
  headerInnerStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    // width: 96,
    height: 24,
    borderWidth: 1,
  },
  navbar: {
    height: 48,
    alignItems: "center",
    display: "flex",
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: `${colors.gray1}48`,
    borderStyle: "solid",
    backgroundColor: colors.black,
    position: "fixed",
    width: "100%",
    zIndex: 1000,
  },
};

export default NavbarOption;
