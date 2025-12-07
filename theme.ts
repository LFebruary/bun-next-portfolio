"use client";

import { createTheme } from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation";
import { Inter } from "next/font/google";

const font = Inter({
    display: "swap",
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
});

const theme = createTheme({
    palette: {
        mode: "dark",
    },
    typography: {
        fontFamily: font.style.fontFamily,
    },
});

export default theme;
