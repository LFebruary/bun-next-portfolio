import theme from "@/constants/theme";
import { Avatar, Paper } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from 'react-transition-group';

const smallSize = 192;
const bigSize = 256;

export interface MyAvatarProps {
    isHoveringCallback?: ((hovered: boolean) => void) | undefined
}

export const MyAvatar: React.FC<MyAvatarProps> = (props: MyAvatarProps) => {
    const [isHovering, setIsHovered] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const onMouseEnter = () => {
        setIsHovered(true);
        setIsTransitioning(true);
        props.isHoveringCallback && props.isHoveringCallback(true);
    };

    const onMouseLeave = () => {
        setIsHovered(false);
        setIsTransitioning(true);
        props.isHoveringCallback && props.isHoveringCallback(false);
    };

    useEffect(() => {
        if (isHovering) {
            // Delay the reset of the rotation to 0 deg after the size transition is complete
            const timer = setTimeout(() => setIsTransitioning(false), 300);
            return () => clearTimeout(timer);
        } else {
            setIsTransitioning(false);
        }
    }, [isHovering]);



    return (
        <Avatar
            alt="Lyle february"
            src="/me.jpeg"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            sx={{
                width: isHovering ? bigSize : smallSize,
                height: isHovering ? bigSize : smallSize,
                transition: 'width 0.3s ease, height 0.3s ease, transform 1s ease, box-shadow 0.3s ease',
                transform: isHovering ? (isTransitioning ? 'rotate(-5deg)' : 'rotate(0deg)') : 'rotate(0deg)',
                boxShadow: isHovering ? `0 0 15px 5px ${theme.palette.common.white}` : 'none'
            }} />

    );
};