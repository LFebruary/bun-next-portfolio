import theme from '@/constants/theme';
import { Fade, Typography } from '@mui/material';
import { FC, useCallback, useEffect, useState } from 'react';
import CoolTextProps from './cool-text.props';

const CoolText: FC<CoolTextProps> = (
    props: CoolTextProps = { text: '', inline: true, forcedHoverState: false }
) => {
    const [isHovering, setIsHovered] = useState(false);
    const [smallScreen, setSmallScreen] = useState(false);

    const smallScreenListener = useCallback(() => {
        const smallWidth = window.screen.width < 769;
        if (smallScreen !== smallWidth) {
            setSmallScreen(smallWidth);
        }
    }, [smallScreen]);

    useEffect(() => {
        smallScreenListener();
        window.addEventListener('resize', smallScreenListener);

        return () => {
            window.removeEventListener('resize', smallScreenListener);
        };
    }, [smallScreenListener]);

    useEffect(() => {
        if (props.forcedHoverState === true) {
            setIsHovered(true);
        }
    }, [props.forcedHoverState]);

    const onMouseEnter = () => {
        setIsHovered(props.forcedHoverState || true);
    };

    const onMouseLeave = () => {
        setIsHovered(props.forcedHoverState || false);
    };

    const rawFontSize = theme.typography.h2.fontSize;

    const fontSize = !rawFontSize
        ? 16
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
                width:
                    props.inline && isHovering
                        ? (smallScreen ? 25 : 40) * props.text.length
                        : undefined,
                transition: 'width .5s ease',
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    display: props.inline ? 'inline' : 'block',
                    transition:
                        'transform .5s ease, text-shadow .5s ease, font-size .5s ease, font-weight .5s ease',
                    textShadow: isHovering ? `0 0 10px ${theme.palette.common.white}` : 'none',
                    fontWeight: isHovering ? 'bold' : 'normal',
                    fontSize: isHovering ? `${fontSize * 1.2}rem` : `${fontSize}rem`,
                }}
            >
                {props.text}
            </Typography>
            {props.caption && isHovering && (
                <Fade in={isHovering} timeout={1500}>
                    <Typography variant="body1">{props.caption}</Typography>
                </Fade>
            )}
        </div>
    );
};

export default CoolText;
