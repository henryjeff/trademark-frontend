import React, { useState } from "react";
import { StyleSheet, FontStyle, BorderStyle } from "../../constants/Styles";
import colors from "../../constants/Colors";
import LoadingIndicator from "../general/LoadingIndicator";
import { Text } from "../general";
export interface ButtonProps {
  containerStyles?: React.CSSProperties;
  isLoading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonText: string;
  disabled?: boolean;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  containerStyles,
  isLoading,
  onClick,
  buttonText,
  disabled,
  outline,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const onMouseEnter = () => {
    setIsHovering(true);
  };

  const onMouseLeave = () => {
    setIsHovering(false);
    setIsActive(false);
  };

  const onMouseDown = () => {
    setIsActive(true);
  };

  const onMouseUp = () => {
    setIsActive(false);
  };

  const buttonStyle = Object.assign(
    {},
    styles.button,
    outline && styles.outline,
    isHovering && (outline ? styles.hoverOutline : styles.hover),
    isActive && (outline ? styles.activeOutline : styles.active),
    isLoading && styles.buttonLoading,
    disabled && styles.disabled
  );

  return (
    <div style={Object.assign({}, styles.container, containerStyles)}>
      {isLoading ? (
        <div style={buttonStyle}>
          <LoadingIndicator
            containerStyles={styles.loading}
            color={colors.black}
          />
        </div>
      ) : (
        <button
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onClick={onClick}
          style={buttonStyle}
        >
          <Text weight="bold">{buttonText.toUpperCase()}</Text>
        </button>
      )}
    </div>
  );
};

const styles = {
  container: {
    marginBottom: 8,
    marginTop: 8,
    width: "100%",
  },
  button: {
    height: 36,
    backgroundColor: colors.white,
    borderWidth: 0,
    borderStyle: "solid",
    borderRadius: 10,
    color: colors.black,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    paddingLeft: 16,
    paddingRight: 16,
    display: "flex",
    outline: "none",
    cursor: "pointer",
    ...FontStyle.bold,
  },
  buttonLoading: {
    paddingLeft: 0,
    paddingRight: 0,
    cursor: "default",
  },
  hover: {
    backgroundColor: `${colors.white}d8`,
  },
  active: {
    backgroundColor: `${colors.white}88`,
  },
  loading: {
    paddingTop: 2,
  },
  disabled: {
    cursor: "default",
    backgroundColor: `${colors.white}68`,
  },
  outline: {
    color: colors.white,
    backgroundColor: "transparent",
    ...BorderStyle.mediumWhite,
  },
  hoverOutline: {
    borderColor: `${colors.white}b8`,
    color: `${colors.white}b8`,
  },
  activeOutline: {
    borderColor: `${colors.white}48`,
    color: `${colors.white}48`,
  },
};

export default Button;
