import React from "react";
import { StyleSheet, FontStyle } from "../../constants/Styles";
import colors from "../../constants/Colors";
import { IconName } from "../../assets/icons";
import { Icon } from "../general";

export interface TextInputProps {
  containerStyles?: React.CSSProperties;
  icon?: IconName;
  inputType?: string;
  inputStyle?: React.CSSProperties;
  placeholderText?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  containerStyles,
  icon,
  inputType,
  inputStyle,
  placeholderText,
  onChange,
}) => {
  return (
    <div style={Object.assign({}, styles.container, containerStyles)}>
      {icon ? (
        <div style={styles.iconContainer}>
          <Icon style={styles.icon} icon={icon} />{" "}
        </div>
      ) : null}
      <input
        type={inputType}
        style={Object.assign(
          {},
          styles.input,
          { textIndent: icon ? 28 : 12 },
          inputStyle
        )}
        onChange={onChange}
        placeholder={placeholderText}
      />
    </div>
  );
};

const styles: StyleSheet = {
  container: {
    position: "relative",
    margin: 8,
    width: "100%",
  },
  input: {
    paddingTop: 16,
    paddingBottom: 16,
    height: 32,
    boxSizing: "border-box",
    lineHeight: 42,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: colors.white,
    borderStyle: "solid",
    borderRadius: 10,
    color: colors.white,
    width: "100%",
    outline: "none",
    ...FontStyle.regular,
  },
  icon: {
    opacity: 0.5,
    width: 12,
  },
  iconContainer: {
    position: "absolute",
    display: "flex",
    height: "100%",
    left: 12,
  },
};

export default TextInput;
