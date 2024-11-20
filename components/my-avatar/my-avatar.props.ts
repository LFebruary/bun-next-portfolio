import { SxProps, Theme } from '@mui/material';

export default interface MyAvatarProps {
    isHoveringCallback?: (hovered: boolean) => void;
    disableHoverResize?: boolean;
    disableHoverAnimation?: boolean;
    sx?: SxProps<Theme>;
}
