/** @type {import('tailwindcss').Config} */
import { COLORS } from "./src/constants/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Agora o Tailwind passa a reconhecer essas propriedades
        brandBg: COLORS.backgroundColor,
        primary: COLORS.primary,
        secondary: COLORS.secondary,
        accent: COLORS.accent,
      },
    },
  },
  plugins: [],
};
