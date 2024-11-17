import { Avatar } from '@mui/material';
import React, { FC, useCallback } from 'react';
import thatsMe from '../../public/me.webp';
import styles from './my-avatar.module.scss';

interface MyAvatarProps {
    isHoveringCallback?: (hovered: boolean) => void;
}

const MyAvatar: FC<MyAvatarProps> = React.memo(({ isHoveringCallback }) => {
    const onMouseEnter = useCallback(() => {
        isHoveringCallback?.(true);
    }, [isHoveringCallback]);

    const onMouseLeave = useCallback(() => {
        isHoveringCallback?.(false);
    }, [isHoveringCallback]);

    return (
        <Avatar
            className={styles.avatar}
            alt="Lyle February"
            src={thatsMe.src}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        />
    );
});

MyAvatar.displayName = 'MyAvatar';

export default MyAvatar;
