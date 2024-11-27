import theme from '@/constants/theme';
import { SnackbarProvider } from '@/context/snackbarContext';
import '@/styles/globals.scss';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import type { AppProps } from 'next/app';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppCacheProvider {...pageProps}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <SnackbarProvider>
                    <Component {...pageProps} />
                </SnackbarProvider>
                <SpeedInsights />
            </ThemeProvider>
        </AppCacheProvider>
    );
}
