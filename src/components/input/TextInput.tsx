import React from "react";
import { StyleSheet, FontStyle } from "../../constants/Styles";
import colors from "../../constants/Colors";

export interface TextInputProps {
  containerStyles?: React.CSSProperties;
  icon?: string;
  inputType?: string;
  placeholderText?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  containerStyles,
  icon,
  inputType,
  placeholderText,
  onChange,
}) => {
  return (
    <div style={Object.assign({}, styles.container, containerStyles)}>
      {icon ? <img style={styles.icon} src={icon} /> : null}
      <input
        type={inputType}
        style={Object.assign({}, styles.input, { textIndent: icon ? 28 : 12 })}
        onChange={onChange}
        placeholder={placeholderText}
      />
    </div>
  );
};

const styles: StyleSheet = {
  container: {
    // position: "relative",
    margin: 8,
    width: "100%",
  },
  input: {
    paddingTop: 18,
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
    position: "absolute",
    top: 12,
    width: 12,
    left: 12,
  },
};

export default TextInput;
