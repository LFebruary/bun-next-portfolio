"use client";
import { AlertColor } from "@mui/material";
import { ReactNode, useCallback, useContext, useEffect, useState } from "react";
import {
  SnackbarContext,
  SnackbarContextType,
  SnackbarState,
} from "./snackbarContext";

/**
 * The SnackbarProvider component wraps the application and provides
 * snackbar state and actions via context to its child components.
 *
 * @param children - React nodes that can access snackbar context.
 *
 * @returns {JSX.Element} - The wrapped children components with snackbar context.
 */
export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [snackbar, setSnackbar] = useState<SnackbarState | undefined>(
    undefined,
  );

  /**
   * Show the snackbar with the specified message, severity, and auto-hide duration.
   *
   * @param message - The message to display in the snackbar.
   * @param autoHideDuration - The time in milliseconds before the snackbar auto-hides.
   * @param severity - The severity of the snackbar (e.g., success, error, etc.).
   */
  const showSnackbar = (
    message: string,
    autoHideDuration: number = 5000,
    severity: AlertColor = "success",
  ) => {
    setSnackbar({ autoHideDuration, message, open: true, severity });
  };

  /**
   * Hide the snackbar.
   * This sets the snackbar to closed, and resets its state after a short delay.
   */
  const hideSnackbar = useCallback(() => {
    if (snackbar) {
      setSnackbar({ ...snackbar, open: false });
      setTimeout(() => setSnackbar(undefined), 500);
    }
  }, [snackbar]);

  useEffect(() => {
    if (snackbar && snackbar.open) {
      const timer = setTimeout(() => {
        hideSnackbar();
      }, snackbar.autoHideDuration);

      return () => clearTimeout(timer);
    }
  }, [snackbar, hideSnackbar]);

  return (
    <SnackbarContext.Provider value={{ hideSnackbar, showSnackbar, snackbar }}>
      {children}
    </SnackbarContext.Provider>
  );
};

/**
 * Custom hook to access the snackbar context.
 * This hook must be used within the SnackbarProvider context.
 *
 * @returns {SnackbarContextType} - The context value including snackbar state and actions.
 *
 * @throws {Error} - Throws an error if used outside of a SnackbarProvider.
 */
export const useSnackbar = (): SnackbarContextType => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};
