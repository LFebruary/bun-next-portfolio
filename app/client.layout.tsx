"use client";
import { SnackbarProvider } from "../context/snackbarProvider";

export default function ClientSideLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <SnackbarProvider>{children}</SnackbarProvider>;
}
