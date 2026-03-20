"use client";

import { AlertColor } from "@mui/material/Alert";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

/**
 * Type definition for the snackbar context.
 * It includes the state of the snackbar and methods to show and hide it.
 */
export interface SnackbarContextType {
  snackbar: SnackbarState | undefined;
  showSnackbar: (
    message: string,
    autoHideDuration?: number,
    severity?: AlertColor,
  ) => void;
  hideSnackbar: () => void;
}

/**
 * Type definition for the snackbar state.
 * It includes the visibility status, message, severity, and auto-hide duration.
 */
export interface SnackbarState {
  open: boolean;
  message: string;
  severity: AlertColor;
  autoHideDuration: number;
}

/**
 * Context for managing snackbar state and actions within the application.
 * Provides methods to show and hide the snackbar.
 */
export const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined,
);
