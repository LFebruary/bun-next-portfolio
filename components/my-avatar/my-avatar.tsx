import { Avatar } from '@mui/material';
import { FC, memo, useCallback, useMemo } from 'react';
import thatsMe from '../../public/me.webp';
import styles from './my-avatar.module.scss';
import MyAvatarProps from './my-avatar.props';

const MyAvatar: FC<MyAvatarProps> = memo(
    ({ isHoveringCallback, sx, disableHoverResize, disableHoverAnimation }) => {
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
                alt="Lyle February"
                src={thatsMe.src}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                sx={sx}
            />
        );
    }
);

MyAvatar.displayName = 'MyAvatar';

export default MyAvatar;
