import theme from "@/constants/theme";
import { Fade, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface CoolTextProps {
    text: string;
    inline?: boolean;
    caption?: string;
}

export const CoolText: React.FC<CoolTextProps> = (props: CoolTextProps = { text: '', inline: true }) => {
    const [isHovering, setIsHovered] = useState(false);

    const onMouseEnter = () => {
        setIsHovered(true);
    };

    const onMouseLeave = () => {
        setIsHovered(false);
    };

    const rawFontSize = theme.typography.h2.fontSize;

    const fontSize = !rawFontSize ?
        16
        : typeof rawFontSize === 'number'
            ? rawFontSize
            : parseFloat(rawFontSize.replace('rem', ''));

    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
                display: props.inline ? 'inline-flex' : 'flex',
                flexDirection: 'column',
                justifyContent: !props.inline ? 'center' : undefined,
                alignItems: !props.inline ? 'center' : undefined,
                width: props.inline && isHovering ? 40 * (props.text.length) : undefined,
                transition: 'width .5s ease'
            }}>
            <Typography
                variant="h2"
                sx={{
                    display: props.inline ? 'inline' : 'block',
                    transition: 'transform .5s ease, text-shadow .5s ease, font-size .5s ease, font-weight .5s ease',
                    // transform: isHovering ? 'rotate(-5deg)' : 'rotate(0deg)',
                    textShadow: isHovering ? `0 0 10px ${theme.palette.common.white}` : 'none',
                    fontWeight: isHovering ? 'bold' : 'normal',
                    fontSize: isHovering ? `${fontSize * 1.25}rem` : `${fontSize}rem`
                }}>
                {props.text}
            </Typography>
            {props.caption && isHovering &&
                <Fade in={isHovering} timeout={1500}>
                    <Typography
                        variant="body1">
                        {props.caption}
                    </Typography>
                </Fade>

            }
        </div>

    );
};