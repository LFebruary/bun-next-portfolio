import { Avatar } from '@mui/material';
import { FC, memo, useCallback } from 'react';
import thatsMe from '../../public/me.webp';
import styles from './my-avatar.module.scss';
import MyAvatarProps from './my-avatar.props';

const MyAvatar: FC<MyAvatarProps> = memo(({ isHoveringCallback }) => {
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
