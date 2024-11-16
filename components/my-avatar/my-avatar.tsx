import { Avatar } from '@mui/material';
import { FC } from 'react';
import thatsMe from '../../public/me.webp';
import styles from './my-avatar.module.scss';

interface MyAvatarProps {
    isHoveringCallback?: ((hovered: boolean) => void) | undefined;
}

const MyAvatar: FC<MyAvatarProps> = (props: MyAvatarProps) => {
    function onMouseEnter() {
        if (props.isHoveringCallback) {
            props.isHoveringCallback(true);
        }
    }

    function onMouseLeave() {
        if (props.isHoveringCallback) {
            props.isHoveringCallback(false);
        }
    }

    return (
        <Avatar
            className={styles.avatar}
            alt="Lyle february"
            src={thatsMe.src}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        ></Avatar>
    );
};

export default MyAvatar;
