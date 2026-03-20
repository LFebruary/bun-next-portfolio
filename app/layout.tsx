import type { Metadata } from "next";
import "@/styles/globals.scss";
import CssBaseline from "@mui/material/CssBaseline";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { env } from "process";
import theme from "../theme";
import ClientSideLayout from "./client.layout";
import { SITE_NAME } from "../constants/SHARED";

export const metadata: Metadata = {
  keywords: [
    "Lyle February",
    "Full Stack Developer",
    "C#",
    "TypeScript",
    "Flutter",
  ],
  openGraph: {
    description: `Discover Lyle February's portfolio, a Full Stack Developer with expertise in C#, TypeScript, and Flutter. Explore his notable projects, including custom-logger, JSHelpers, AvaloniaSerialToSocket, AvaloniaToolbox, and XamarinSocketClient.`,
    title: SITE_NAME,
    type: "website",
  },
  title: SITE_NAME,
  twitter: {
    description: `Discover Lyle February's portfolio, a Full Stack Developer with expertise in C#, TypeScript, and Flutter. Explore his notable projects, including custom-logger, JSHelpers, AvaloniaSerialToSocket, AvaloniaToolbox, and XamarinSocketClient.`,
    title: SITE_NAME,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ClientSideLayout>{children}</ClientSideLayout>
          </ThemeProvider>
        </AppRouterCacheProvider>

        <SpeedInsights />
      </body>
    </html>
  );
}
