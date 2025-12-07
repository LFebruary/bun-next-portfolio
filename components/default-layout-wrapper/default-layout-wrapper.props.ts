import { Fab } from "@mui/material";
import { ReactNode } from "react";

export default interface DefaultLayoutWrapperProps {
    children: ReactNode;
    fab?: typeof Fab;
    removeBackgroundBlur?: boolean;
}
