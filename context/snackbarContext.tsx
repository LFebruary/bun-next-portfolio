import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { AlertColor } from '@mui/material/Alert';

interface SnackbarContextType {
    snackbar: SnackbarState | undefined;
    showSnackbar: (message: string, autoHideDuration?: number, severity?: AlertColor) => void;
    hideSnackbar: () => void;
}

interface SnackbarState {
    open: boolean;
    message: string;
    severity: AlertColor;
    autoHideDuration: number;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
    const [snackbar, setSnackbar] = useState<SnackbarState | undefined>(undefined);

    const showSnackbar = (message: string, autoHideDuration: number = 5000, severity: AlertColor = 'success') => {
        setSnackbar({ open: true, message, autoHideDuration, severity });
    };

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
        <SnackbarContext.Provider value={{ snackbar, showSnackbar, hideSnackbar }}>
            {children}
        </SnackbarContext.Provider>
    );
};

export const useSnackbar = (): SnackbarContextType => {
    const context = useContext(SnackbarContext);
    if (!context) {
        throw new Error('useSnackbar must be used within a SnackbarProvider');
    }
    return context;
};
