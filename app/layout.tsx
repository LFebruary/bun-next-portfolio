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

export const metadata: Metadata = {
    description:
        "Discover Lyle February's portfolio, a Full Stack Developer with expertise in C#, TypeScript, and Flutter. Explore his notable projects, including custom-logger, JSHelpers, AvaloniaSerialToSocket, AvaloniaToolbox, and XamarinSocketClient.",
    icons: "/favicon.ico",
    keywords: [
        "Lyle February",
        "Full Stack Developer",
        "C# Developer",
        "TypeScript Developer",
        "Flutter Developer",
        "custom-logger",
        "JSHelpers",
        "AvaloniaSerialToSocket",
    ],
    openGraph: {
        description: `Discover Lyle February's portfolio, a Full Stack Developer with expertise in C#, TypeScript, and Flutter. Explore his notable projects, including custom-logger, JSHelpers, AvaloniaSerialToSocket, AvaloniaToolbox, and XamarinSocketClient.`,
        title: `${env.NEXT_PUBLIC_NAME} | Full Stack Developer`,
        type: "website",
    },
    title: `${env.NEXT_PUBLIC_NAME} | Full Stack Developer`,
    twitter: {
        description: `Discover Lyle February's portfolio, a Full Stack Developer with expertise in C#, TypeScript, and Flutter. Explore his notable projects, including custom-logger, JSHelpers, AvaloniaSerialToSocket, AvaloniaToolbox, and XamarinSocketClient.`,
        title: `${env.NEXT_PUBLIC_NAME} | Full Stack Developer`,
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
