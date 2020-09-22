import React, { useState } from "react";
import { StyleSheet, FontStyle } from "../../constants/Styles";
import colors from "../../constants/Colors";
import LoadingIndicator from "../general/LoadingIndicator";

export interface ButtonProps {
  containerStyles?: React.CSSProperties;
  isLoading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonText: string;
}

const Button: React.FC<ButtonProps> = ({
  containerStyles,
  isLoading,
  onClick,
  buttonText,
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
    isHovering && styles.hover,
    isActive && styles.active
  );

  return (
    <div style={Object.assign(styles.container, containerStyles)}>
      {isLoading ? (
        <div style={styles.button}>
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
          <p style={{ paddingTop: 2 }}>{buttonText.toUpperCase()}</p>
        </button>
      )}
    </div>
  );
};

const styles = {
  container: {
    margin: 8,
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
    display: "flex",
    outline: "none",
    ...FontStyle.bold,
  },
  hover: {
    backgroundColor: `${colors.white}d8`,
  },
  active: {
    backgroundColor: `${colors.white}88`,
  },
  loading: {
    paddingTop: 4,
  },
};

export default Button;
