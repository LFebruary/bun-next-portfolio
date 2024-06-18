import theme from '@/constants/theme';
import '@/styles/globals.scss'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google';




export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider {...pageProps}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>

  );
}
