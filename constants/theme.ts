'use client';

import { Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const font = Inter({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: font.style.fontFamily,
    },
});

export default theme;