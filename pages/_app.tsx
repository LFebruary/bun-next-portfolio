import theme from '@/constants/theme';
import { AuthContextProvider } from '@/context/authContext';
import '@/styles/globals.scss'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider {...pageProps}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
