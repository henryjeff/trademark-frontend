// import { ThemeColor } from '../types';

type ColorName = "black" | "gray1" | "green" | "red" | "white";

const colors: { [key in ColorName]: string } = {
  black: "#071013",
  gray1: "#7C7C7C",
  green: "#2FBF71",
  red: "#EF2D56",
  white: "#FFFFFF",
};

export default colors;
