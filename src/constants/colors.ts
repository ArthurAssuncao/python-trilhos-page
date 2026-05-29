// src/constants/colors.ts

export const COLORS = {
  backgroundColor: "#efe7da",
  primaryColor: "#1c517b",
  secondaryColor: "#1e6a2c",
  secondaryColorLight: "#38AA41",
  accentColor: "#e6ae1b",
  accentColorLight: "#E6CA1A",
};

export const COLOR_CSS_VARIABLES = {
  "--bg-color": COLORS.backgroundColor,
  "--primary-color": COLORS.primaryColor,
  "--secondary-color": COLORS.secondaryColor,
  "--secondary-color-light": COLORS.secondaryColorLight,
  "--accent-color": COLORS.accentColor,
  "--accent-color-light": COLORS.accentColorLight,
} as React.CSSProperties;
