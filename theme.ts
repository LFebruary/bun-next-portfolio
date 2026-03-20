"use client";

import { createTheme } from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation";
import { Inter } from "next/font/google";
import { THEME_COLORS } from "./constants/THEMING";

const font = Inter({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const theme = createTheme({
  palette: {
    background: {
      default: THEME_COLORS.background,
    },
    mode: "dark",
    primary: {
      main: THEME_COLORS.primary,
    },
  },
  typography: {
    fontFamily: font.style.fontFamily,
  },
});

export default theme;
