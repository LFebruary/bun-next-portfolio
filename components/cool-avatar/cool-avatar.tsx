import { Avatar } from '@mui/material';
import { FC, memo, useCallback, useMemo } from 'react';
import styles from './cool-avatar.module.scss';
import CoolAvatarProps from './cool-avatar.props';
import dynamic from 'next/dynamic';

const CoolAvatar: FC<CoolAvatarProps> = memo(
    ({ isHoveringCallback, sx, disableHoverResize, disableHoverAnimation, alt, src }) => {
        const onMouseEnter = useCallback(() => {
            isHoveringCallback?.(true);
        }, [isHoveringCallback]);

        const onMouseLeave = useCallback(() => {
            isHoveringCallback?.(false);
        }, [isHoveringCallback]);

        const className = useMemo(() => {
            let avatarClass = styles.avatar;
            if (!disableHoverResize) {
                avatarClass += ` ${styles.hoverResize}`;
            }

            if (!disableHoverAnimation) {
                avatarClass += ` ${styles.animate}`;
            }

            return avatarClass;
        }, [disableHoverResize, disableHoverAnimation]);

        return (
            <Avatar
                className={className}
                alt={alt}
                src={src}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                sx={sx}
            />
        );
    }
);

CoolAvatar.displayName = 'CoolAvatar';

export default CoolAvatar;
