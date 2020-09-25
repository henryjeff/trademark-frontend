import React from "react";
import { StyleSheet, FontStyle, BorderStyle } from "../../constants/Styles";
import colors from "../../constants/Colors";
import { IconName } from "../../assets/icons";
import { Icon } from "../general";

export interface TextInputProps {
  containerStyles?: React.CSSProperties;
  icon?: IconName;
  inputType?: string;
  inputStyle?: React.CSSProperties;
  placeholderText?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  containerStyles,
  icon,
  inputType,
  inputStyle,
  placeholderText,
  value,
  disabled,
  onChange,
}) => {
  const textInputStyle = Object.assign(
    {},
    styles.input,
    { textIndent: icon ? 28 : 12 },
    disabled && styles.disabled,
    inputStyle
  );

  return (
    <div style={Object.assign({}, styles.container, containerStyles)}>
      {icon ? (
        <div style={styles.iconContainer}>
          <Icon
            style={disabled ? styles.disabledIcon : styles.icon}
            icon={icon}
          />{" "}
        </div>
      ) : null}
      <input
        type={inputType}
        style={textInputStyle}
        value={value}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholderText}
      />
    </div>
  );
};

const styles: StyleSheet = {
  container: {
    position: "relative",
    marginBottom: 8,
    marginTop: 8,
    width: "100%",
  },
  input: {
    paddingTop: 16,
    paddingBottom: 16,
    height: 32,
    boxSizing: "border-box",
    lineHeight: 42,
    backgroundColor: "transparent",
    color: colors.white,
    width: "100%",
    outline: "none",
    ...FontStyle.regular,
    ...BorderStyle.mediumWhite,
  },
  icon: {
    opacity: 0.5,
    width: 12,
  },
  disabled: {
    cursor: "not-allowed",
    color: colors.gray1,
    ...BorderStyle.mediumGray,
  },
  disabledIcon: {
    opacity: 0.3,
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
