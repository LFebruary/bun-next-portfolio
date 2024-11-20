import { Fade, Typography, useTheme } from '@mui/material';
import { CSSProperties, FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import CoolTextProps from './cool-text.props';

/**
 * CoolText component is a styled text component that has interactive hover effects,
 * dynamic font size changes, and optionally displays a caption on hover.
 *
 * @param {CoolTextProps} props - The props to configure the behavior and appearance of the component.
 *
 * @returns {JSX.Element} A div containing a Typography component with hover effects and optional caption.
 */
const CoolText: FC<CoolTextProps> = memo(
    (
        props: CoolTextProps = {
            text: '',
            inline: true,
            forcedHoverState: false,
        }
    ) => {
        const [isHovering, setIsHovering] = useState(false);
        const [smallScreen, setSmallScreen] = useState(false);
        const theme = useTheme();

        const fontSize = useMemo(
            () =>
                !theme.typography.h2.fontSize
                    ? 16
                    : typeof theme.typography.h2.fontSize === 'number'
                      ? theme.typography.h2.fontSize
                      : parseFloat(theme.typography.h2.fontSize.replace('rem', '')),
            [theme.typography.h2.fontSize]
        );

        /**
         * Determines if the screen width is small (below 769px).
         * This listener triggers on window resize.
         */
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
                setIsHovering(true);
            }
        }, [props.forcedHoverState]);

        const onMouseEnter = useCallback(() => {
            setIsHovering(true);
        }, []);

        const onMouseLeave = useCallback(() => {
            setIsHovering(props.forcedHoverState || false);
        }, [props.forcedHoverState]);

        const textStyles = useMemo(
            () => ({
                display: props.inline ? 'inline' : 'block',
                transition:
                    'transform .5s ease, text-shadow .5s ease, font-size .5s ease, font-weight .5s ease',
                textShadow: isHovering ? `0 0 10px ${theme.palette.common.white}` : 'none',
                fontWeight: isHovering ? 'bold' : 'normal',
                fontSize: isHovering ? `${fontSize * 1.2}rem` : `${fontSize}rem`,
            }),
            [isHovering, props.inline, theme.palette.common.white, fontSize]
        );

        const containerStyles: CSSProperties = useMemo(
            () => ({
                display: props.inline ? 'inline-flex' : 'flex',
                flexDirection: 'column',
                justifyContent: !props.inline ? 'center' : undefined,
                alignItems: !props.inline ? 'center' : undefined,
                width:
                    props.inline && isHovering
                        ? (smallScreen ? 25 : 40) * props.text.length
                        : undefined,
                transition: 'width .5s ease',
            }),
            [props.inline, isHovering, smallScreen, props.text.length]
        );

        return (
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={containerStyles}>
                <Typography variant="h2" sx={textStyles}>
                    {props.text}
                </Typography>
                {props.caption && isHovering && (
                    <Fade in={isHovering} timeout={1500}>
                        <Typography variant="body1">{props.caption}</Typography>
                    </Fade>
                )}
            </div>
        );
    }
);

CoolText.displayName = 'CoolText';

export default CoolText;
