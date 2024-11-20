import { Fab } from '@mui/material';
import { ReactNode } from 'react';

export default interface LayoutProps {
    children: ReactNode;
    fab?: typeof Fab;
    removeBackgroundBlur?: boolean;
}
