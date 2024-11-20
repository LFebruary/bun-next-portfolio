import { SxProps, Theme } from '@mui/material';

export default interface CoolAvatarProps {
    isHoveringCallback?: (hovered: boolean) => void;
    disableHoverResize?: boolean;
    disableHoverAnimation?: boolean;
    sx?: SxProps<Theme>;
    src?: string;
    alt?: string;
}
